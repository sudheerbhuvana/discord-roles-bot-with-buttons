const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const config = require("./config.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
});

// Command collection
client.commands = new Map();

// Load all commands
const commandFiles = fs.readdirSync(path.join(__dirname, "commands"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  client.user.setStatus('idle');

  const activities = [
    { name: `${config.activity[0]}`, type: ActivityType.Playing },
    { name: `${config.activity[1]}`, type: ActivityType.Watching },
    { name: `${config.activity[2]}`, type: ActivityType.Listening },
  ];

  let index = 0;
  setInterval(() => {
    if (index >= activities.length) index = 0;
    const activity = activities[index];
    client.user.setActivity(activity);
    index++;
  }, 10_000);
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName); 
  if (!command) return;

  if (commandName === "eval" && !config.owners.includes(msg.author.id)) {
    return msg.reply("Only my owner can use this.");
  }

  try {
    await command.run(client, msg, args);
  } catch (err) {
    console.error(err);
    msg.reply("There was an error executing that command.");
  }
});


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
      await interaction.reply({
        embeds: [{
          color: 0xff0000,
          description: `❌ Removed <@&${roleData.roleId}> from <@${member.id}>`
        }],
        ephemeral: true
      });
    } else {
      await member.roles.add(roleData.roleId);
      await interaction.reply({
        embeds: [{
          color: 0x00ff00,
          description: `✅ Added <@&${roleData.roleId}> to <@${member.id}>`
        }],
        ephemeral: true
      });
    }
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: `❌ Could not toggle role.`,
      ephemeral: true
    });
  }
});

client.login(config.token);
