import mongoose from "mongoose";

const FieldEntrySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    values: { type: [String], default: [] },
  },
  { _id: false }
);

const MetaLeadSchema = new mongoose.Schema(
  {
    // Facebook's lead id — used to dedupe on every sync.
    metaLeadId: { type: String, required: true, unique: true, index: true },
    formId: { type: String, trim: true, default: "" },
    pageId: { type: String, trim: true, default: "" },
    adId: { type: String, trim: true, default: "" },
    adName: { type: String, trim: true, default: "" },
    createdTime: { type: Date },

    // Raw field_data exactly as Facebook sends it, for full fidelity.
    fieldData: { type: [FieldEntrySchema], default: [] },

    // Best-effort flattened lookup { question_key: "first value" } for fast table rendering/search.
    fields: { type: Map, of: String, default: {} },

    status: {
      type: String,
      enum: ["New", "Contacted", "Site Visit", "Closed"],
      default: "New",
    },
    remarks: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.MetaLead || mongoose.model("MetaLead", MetaLeadSchema);
