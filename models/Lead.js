import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: "" },
    requirement: {
      type: String,
      enum: ["buy", "sell", "investment"],
      required: true,
    },
    location: { type: String, trim: true, default: "" },
    budget: { type: String, trim: true, default: "" },
    landType: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    source: { type: String, trim: true, default: "website" },
    status: {
      type: String,
      enum: ["New", "Contacted", "Site Visit", "Closed"],
      default: "New",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
