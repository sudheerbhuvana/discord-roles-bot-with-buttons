const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../config.js");
module.exports = {
  name: "create",
  run: async (client, msg, args) => {
    const categoryName = args[0];
    const roles = config.categories[categoryName];
    if (!roles) return msg.channel.send(`❌ No category named **${categoryName}**.`);

const buttons = roles.map(r => {
  const button = new ButtonBuilder()
    .setLabel(r.name)
    .setCustomId(`${categoryName}_${r.name.toLowerCase()}`)
    .setStyle(ButtonStyle.Secondary);
  if (r.emoji) { button.setEmoji(r.emoji);}
  return button;
});
    const rows = [];
    for (let i = 0; i < buttons.length; i += 5) {
      const row = new ActionRowBuilder().addComponents(buttons.slice(i, i + 5));
      rows.push(row);
    }
const roleMentions = roles.map(r => `<@&${r.roleId}> — ${r.name}`).join('\n');

await msg.channel.send({
  embeds: [{
    title: `Select your **${categoryName}** role`,
    description: roleMentions,
    color: 0x2f3136
  }],
  components: rows
});

    console.log(`✅ Sent ${categoryName} selector.`);
  }
};
