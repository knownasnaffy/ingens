const {
  SlashCommandBuilder,
  ChannelType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  category: "studyGroup",
  data: new SlashCommandBuilder()
    .setName("init")
    .setDescription("Initialize the server for study groups.")
    .addChannelOption((option) =>
      option
        .setName("main-channel")
        .setDescription(
          "This channel will be used for managing the study groups"
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    const mainChannel = await interaction.options
      .getChannel("main-channel")
      .fetch(true);
    if (mainChannel.type !== 0) {
      await interaction.reply("Oye! Enter a valid text channel, will ya?");
      return;
    }
    await interaction.reply(`Initializing...`);
    const categoryID = mainChannel.parentId;
    const channelID = mainChannel.id;
    await mainChannel
      .edit({
        positionOverwrites: [
          {
            id: 1266691584196345877,
            allow: [PermissionFlagsBits.ViewChannel],
            deny: [
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.AddReactions,
            ],
          },
        ],
      })
      .then(async () => {
        await interaction.editReply(
          `Set <#${channelID}> under <#${categoryID}> as the main channel for managing the study groups.`
        );
      });
  },
};
