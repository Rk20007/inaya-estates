import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MetaLead from "@/models/MetaLead";

const STATUS_VALUES = ["New", "Contacted", "Site Visit", "Closed"];

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json().catch(() => ({}));

  const update = {};
  if (body.status !== undefined) {
    if (!STATUS_VALUES.includes(body.status)) {
      return NextResponse.json(
        { success: false, message: `Status must be one of: ${STATUS_VALUES.join(", ")}.` },
        { status: 400 }
      );
    }
    update.status = body.status;
  }
  if (body.remarks !== undefined) {
    update.remarks = String(body.remarks).trim();
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ success: false, message: "Nothing to update." }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const lead = await MetaLead.findByIdAndUpdate(id, update, { new: true }).lean();

    if (!lead) {
      return NextResponse.json({ success: false, message: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Failed to update Meta lead:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update Meta lead." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    await connectToDatabase();
    const lead = await MetaLead.findByIdAndDelete(id).lean();

    if (!lead) {
      return NextResponse.json({ success: false, message: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete Meta lead:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete Meta lead." },
      { status: 500 }
    );
  }
}
