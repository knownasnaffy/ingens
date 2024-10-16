const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { default: chalk } = require("chalk");
const { default: registerCommands } = require("./bot/utility/registerCommands");
const { default: registerEvents } = require("./bot/utility/registerEvents");
const { initDB } = require("./db/utility/initDB");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Register Commands
registerCommands(client);

// Setup Database
initDB()

// Register Events
registerEvents(client);

// Log in to Discord with your client's token
const token = process.env.BOT_TOKEN;
client.login(token);
