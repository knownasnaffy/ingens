import chalk from "chalk";

const { REST, Routes, Collection } = require("discord.js");
const {
  CLIENT_ID: clientId,
  GUILD_ID: guildId,
  BOT_TOKEN: token,
} = process.env;
const fs = require("fs");
const path = require("path");

export default function registerCommands(client) {
  // Commands array to be sent to discord
  const commands = [];

  // Commands collection
  client.commands = new Collection();

  // Cooldowns collection
  client.cooldowns = new Collection();

  const foldersPath = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if ("data" in command && "execute" in command) {
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        client.commands.set(command.data.name, command);
        // Pushing the command details into the commands array
        commands.push(command.data.toJSON());
      } else {
        console.log(
          `${chalk.yellow("⨉ Warning!")} The command at ${
            chalk.dim("(") + chalk.cyan(filePath) + chalk.dim(")")
          } is missing a required ${chalk.magenta("data")} or ${chalk.magenta(
            "execute"
          )} property.`
        );
      }
    }
  }

  // Construct and prepare an instance of the REST module
  const rest = new REST().setToken(token);

  // and deploy your commands!
  (async () => {
    try {
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands }
      );

      console.log(
        `${chalk.green("✓ Commands registered!")} Successfully reloaded ${
          data.length
        } slash commands.`
      );
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
}
