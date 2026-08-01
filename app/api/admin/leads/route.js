import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function GET() {
  try {
    await connectToDatabase();
    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Failed to fetch leads:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch leads." },
      { status: 500 }
    );
  }
}
