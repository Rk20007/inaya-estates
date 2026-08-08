import { NextResponse } from "next/server";
import { syncMetaLeads } from "@/lib/metaLeads";

export async function POST() {
  try {
    const result = await syncMetaLeads();
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    console.error("Failed to sync Meta leads:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to sync Meta leads." },
      { status: 500 }
    );
  }
}
