const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "eval",
  run: async (client, msg, args) => {
    const code = args.join(" ");
    if (!code) return msg.reply("No code provided.");

    try {
      let result = eval(code);
      if (typeof result !== "string") {
        result = require("util").inspect(result);
      }

      if (result.length > 2000) {
        return msg.reply("Output too long.");
      }

      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Danger)
          .setLabel("Delete")
          .setCustomId("eval-delete")
      );

      const sent = await msg.reply({
        content: `\`\`\`js\n${result}\n\`\`\``,
        components: [row]
      });

      const filter = (i) => i.customId === "eval-delete" && i.user.id === msg.author.id;
      const collector = sent.createMessageComponentCollector({ filter, time: 60000 });
      collector.on("collect", async (i) => {
        await i.deferUpdate();
        await sent.delete();
      });
    } catch (err) {
      msg.reply(`\`\`\`js\n${err}\n\`\`\``);
    }
  }
};
