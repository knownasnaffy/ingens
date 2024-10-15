import { spawn } from 'bun';
import chalk from 'chalk';
import { stdin as input, stdout as output } from 'node:process';
import readline from 'node:readline';

// Initialize readline to capture input
const rl = readline.createInterface({ input, output });

let childProcess;

// Function to start the script
function startScript() {
  if (childProcess) {
    childProcess.kill(); // Kill the previous child process if it's running
  }

  // Spawn the script using Bun
  childProcess = spawn({
    cmd: ['bun', '--bun', 'index.js'], // Adjust the script filename as needed
    stdout: 'inherit',
    stderr: 'inherit'
  });

  childProcess.exited.then(code => {
    console.log(chalk.yellow(`● Script exited with code ${code}`));
  });
}

// Initial start of the script
startScript();

// Listen for user input
rl.on('line', (input) => {
  if (input === 'r') {
    console.log(chalk.yellow('● Restarting the script...'));
    startScript(); // Restart the script
  } else if (input === 'q') {
    console.log(chalk.yellow('● Exiting...'));
    rl.close();
    if (childProcess) {
      childProcess.kill(); // Kill the running child process
    }
    process.exit(0);
  } else {
    console.log(chalk.red(`Unknown command: ${chalk.white.bold(input)}`));
  }
});
