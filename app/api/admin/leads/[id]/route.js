import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";

const STATUS_VALUES = ["New", "Contacted", "Site Visit", "Closed"];

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json().catch(() => ({}));

  if (!body.status || !STATUS_VALUES.includes(body.status)) {
    return NextResponse.json(
      { success: false, message: `Status must be one of: ${STATUS_VALUES.join(", ")}.` },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const lead = await Lead.findByIdAndUpdate(id, { status: body.status }, { new: true }).lean();

    if (!lead) {
      return NextResponse.json({ success: false, message: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Failed to update lead:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update lead." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  try {
    await connectToDatabase();
    const lead = await Lead.findByIdAndDelete(id).lean();

    if (!lead) {
      return NextResponse.json({ success: false, message: "Lead not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete lead:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to delete lead." },
      { status: 500 }
    );
  }
}
