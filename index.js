import createViteServer from "./server/createViteServer";
import express from "express";
import chalk from "chalk";

const port = process.env.PORT || 5173;

// Create http server
const app = express();

// Create frontend using vite
createViteServer(app);

// Start http server
app.listen(port, () => {
  console.log(
    chalk.green("✓ Server started!"),
    "Available at",
    chalk.underline(`http://localhost:${port}`)
  );
});

import "./bot";
