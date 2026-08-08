import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import MetaLead from "@/models/MetaLead";

export async function GET() {
  try {
    await connectToDatabase();
    const leads = await MetaLead.find({}).sort({ createdTime: -1 }).lean();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Failed to fetch Meta leads:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch Meta leads." },
      { status: 500 }
    );
  }
}
