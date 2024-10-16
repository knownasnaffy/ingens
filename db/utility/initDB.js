const dbURI = process.env.DATABASE_URI;

const mongoose = require("mongoose");

export async function initDB() {
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
}
