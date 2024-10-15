const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  category: "utility",
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const pingingEmbed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle("Pinging... 🏓");
    const sent = await interaction.reply({
      embeds: [pingingEmbed],
      ephemeral: true,
    });
    const pingEmbed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle("Pong! 🏓")
      .setDescription(
        { hi: "ओह! क्या आप तकनीकी पिंग के बारे में जानना चाहते थे?" }[
          interaction.locale
        ] ?? "Oh! Did you wanna know the info about the technical ping?"
      )
      .addFields(
        {
          name:
            { hi: "वेबसॉकेट हार्टबीट" }[interaction.locale] ??
            "Websocket heartbeat",
          value: `${Math.round(interaction.client.ws.ping)}ms`,
          inline: true,
        },
        {
          name:
            { hi: "राउंडट्रिप लैटेंसी" }[interaction.locale] ??
            "Roundtrip Latency",
          value: `${sent.createdTimestamp - interaction.createdTimestamp}ms`,
          inline: true,
        }
      )
      .setTimestamp();
    interaction.editReply({ embeds: [pingEmbed], ephemeral: true });
  },
  cooldown: 5,
};
