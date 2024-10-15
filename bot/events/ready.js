const { default: chalk } = require("chalk");
const { Events } = require("discord.js");
// import chalk from "chalk";

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(chalk.green("✓ Bot ready!"), `Logged in as ${chalk.bold(client.user.tag)}`);
  },
};
