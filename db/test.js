const { dbURI } = require("../config.json");

const mongoose = require("mongoose");
const { StudyGroupSchema } = require("./schemas/studyGroup");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbURI).then(() => console.log("Connected to MongoDB"));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const action = await prompt("Would you like to create a new group?");
  if (action === "yes" || action === null) {
    const name = prompt("Enter the study group name: ");
    const description = prompt("Enter the study group description: ");
    const visible =
      prompt(
        "Do you want the study group to appear on the public list? (y/n): "
      ) === "y";
    const approvalRequired =
      prompt(
        "Do you want to approve new users to join the study group? (y/n): "
      ) === "y";
    const channelID = prompt("Enter the channel ID: ");
    const userID = prompt("Enter your user ID: ");
    const userName = prompt("Enter your name: ");

    const StudyGroup = mongoose.model("StudyGroup", StudyGroupSchema);

    const studyGroup = new StudyGroup({
      name: name,
      description: description,
      visible: visible === "y",
      approvalRequired: approvalRequired === "y",
      channelId: channelID,
      users: {
        admin: {
          _id: userID,
          name: userName,
        },
        members: [],
      },
    });
    await studyGroup.save().then(() => console.log("Study group created"));
  } else {
    process.exit(0);
  }
  main()
}
