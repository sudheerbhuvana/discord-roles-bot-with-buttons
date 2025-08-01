const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const config = require("../config.js");
module.exports = {
  name: "create",
  run: async (client, msg, args) => {
    const categoryName = args[0];
    const roles = config.categories[categoryName];
    if (!roles) return msg.channel.send(`❌ No category named **${categoryName}**.`);

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

    console.log(`✅ Sent ${categoryName} selector.`);
  }
};
