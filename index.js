	const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
	const config = require("./config.js");

	const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
	});

	client.once("ready", () => {
	console.log(`✅ Logged in as ${client.user.tag}`);
	});

	// Deploy role selector: ~create <category>
	client.on("messageCreate", async (msg) => {
	if (msg.author.bot) return;
	if (!config.owners.includes(msg.author.id)) return;

	const args = msg.content.split(" ");
	if (args[0] !== `${config.prefix}create`) return;

	const categoryName = args[1];
	const roles = config.categories[categoryName];
	if (!roles) return msg.channel.send(`<:RedTick:968876802653167616>	 No category named **${categoryName}**.`);

	const buttons = roles.map(r =>
		new ButtonBuilder()
		.setLabel(r.name)
		.setEmoji(r.emoji)
		.setCustomId(`${categoryName}_${r.name.toLowerCase()}`)
		.setStyle(ButtonStyle.Secondary)
	);
	const rows = [];
for (let i = 0; i < buttons.length; i += 5) {
  const row = new ActionRowBuilder().addComponents(buttons.slice(i, i + 5));
  rows.push(row);
}



	await msg.channel.send({
		embeds: [{
		title: `Select your **${categoryName}** role`,
		color: 0x2f3136
		}],
		components: rows
	});

	console.log(`<:GreenTick:968876717550755860> Sent ${categoryName} selector.`);
	});

	// Toggle role when button pressed
	client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  const [category, name] = interaction.customId.split("_");
  const roleData = config.categories[category]?.find(r => r.name.toLowerCase() === name);
  if (!roleData) return;

  const member = interaction.member;
  const hasRole = member.roles.cache.has(roleData.roleId);

  try {
    if (hasRole) {
      await member.roles.remove(roleData.roleId);

      const embed = {
        color: 0xff0000,
        description: `<:RedTick:968876802653167616> **Removed** <@&${roleData.roleId}> **from** <@${member.id}>`
      };

      await interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    } else {
      // If only one role per category:
      // Remove other roles in same category first
      for (const other of config.categories[category]) {
        if (other.roleId !== roleData.roleId && member.roles.cache.has(other.roleId)) {
          await member.roles.remove(other.roleId);
        }
      }

      await member.roles.add(roleData.roleId);

      const embed = {
        color: 0x00ff00,
        description: `<:GreenTick:968876717550755860>  **Added** <@&${roleData.roleId}> **to** <@${member.id}>`
      };

      await interaction.reply({
        embeds: [embed],
        ephemeral: true
      });
    }
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: `<:RedTick:968876802653167616> Could not toggle role.`,
      ephemeral: true
    });
  }
});

client.login(config.token);
