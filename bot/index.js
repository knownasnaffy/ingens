const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { default: chalk } = require("chalk");
const { default: registerCommands } = require("./utility/registerCommands");
const { default: registerEvents } = require("./utility/registerEvents");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Register Commands
registerCommands(client);

// Setup Database
const dbURI = process.env.DATABASE_URI;

const mongoose = require("mongoose");
const { StudyGroupSchema } = require("../db/schemas/studyGroup");

await mongoose
  .connect(dbURI)
  .then(() =>
    console.log(chalk.green("✓ Database Ready!"), "Connected to MongoDB")
  );

const StudyGroup = mongoose.model("StudyGroup", StudyGroupSchema);
const database = { StudyGroup };

// Register Events
registerEvents(client, database)

// Log in to Discord with your client's token
const token = process.env.BOT_TOKEN;
client.login(token);
