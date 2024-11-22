import mongoose from "mongoose";
import { UserSchema } from "./user";
const { Schema } = mongoose;

export const ServerConfigSchema = new Schema({
  guildID: String,
  studyGroupCategoryID: String,
  managementChannelID: String,
  allowPrivateGroups: Boolean,
  botManagers: [UserSchema],
});

export const ServerConfig = mongoose.model("ServerConfig", ServerConfigSchema);
