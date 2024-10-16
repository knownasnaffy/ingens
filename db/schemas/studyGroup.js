import mongoose from "mongoose";
const { Schema } = mongoose;

export const UserSchema = new Schema({
  _id: Number,
  name: String,
  updatedAt: { type: Date },
});

export const StudyGroupSchema = new Schema({
  channelId: Number,
  name: String,
  description: String,
  visible: Boolean,
  approvalRequired: Boolean,
  createdAt: { type: Date, default: Date.now },
  users: {
    admin: UserSchema,
    members: [UserSchema],
  },
});

export const StudyGroup = mongoose.model("StudyGroup", StudyGroupSchema);
