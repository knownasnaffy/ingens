const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  category: "studyGroup",
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("Create a new study group.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("Name of the study group")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Description of the study group")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("visible")
        .setDescription("Should the study group appear on the public list?")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("approval")
        .setDescription("Should new users require approval to join the study group?")
        .setRequired(true)
    ),
  async execute(interaction, database) {
    const { StudyGroup } = database;

    const studyGroup = new StudyGroup({
      name: interaction.options.getString('name'),
      description: interaction.options.getString('description'),
      visible: interaction.options.getBoolean('visible'),
      approvalRequired: interaction.options.getBoolean('approval'),
      channelId: interaction.channelId,
      users: {
        admin: {
          _id: interaction.user.id,
          name: interaction.user.displayName,
        },
        members: [],
      },
    });
    await studyGroup.save().then(() => console.log("Study group created"));

    await interaction.reply(`Study group created!`);
  },
};
