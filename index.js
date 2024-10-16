const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { default: chalk } = require("chalk");
const { default: registerCommands } = require("./bot/utility/registerCommands");
const { default: registerEvents } = require("./bot/utility/registerEvents");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Register Commands
registerCommands(client);

// Setup Database
const dbURI = process.env.DATABASE_URI;

const mongoose = require("mongoose");
const { StudyGroupSchema } = require("./db/schemas/studyGroup");

try {
  await mongoose
    .connect(dbURI)
    .then(() =>
      console.log(chalk.green("✓ Database Ready!"), "Connected to MongoDB")
    );
} catch {
  console.log(
    chalk.red("⨉ Error!"),
    "Failed to establish a connection with MongoDB"
  );
}

const StudyGroup = mongoose.model("StudyGroup", StudyGroupSchema);
const database = { StudyGroup };

// Register Events
registerEvents(client, database);

// Log in to Discord with your client's token
const token = process.env.BOT_TOKEN;
client.login(token);
