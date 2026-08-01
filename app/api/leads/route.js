import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIREMENT_VALUES = ["buy", "sell", "investment"];

function validate(body) {
  const errors = {};

  if (!body.name || typeof body.name !== "string" || !body.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!body.phone || !PHONE_REGEX.test(String(body.phone).trim())) {
    errors.phone = "A valid 10-digit mobile number is required.";
  }
  if (body.email && !EMAIL_REGEX.test(String(body.email).trim())) {
    errors.email = "Email address is invalid.";
  }
  if (!body.requirement || !REQUIREMENT_VALUES.includes(body.requirement)) {
    errors.requirement = "Requirement must be one of: buy, sell, investment.";
  }

  return errors;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, message: "Validation failed.", errors }, { status: 400 });
  }

  try {
    await connectToDatabase();

    const lead = await Lead.create({
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: (body.email || "").trim(),
      requirement: body.requirement,
      location: (body.location || "").trim(),
      budget: (body.budget || "").trim(),
      landType: (body.landType || "").trim(),
      message: (body.message || "").trim(),
      source: (body.source || "website").trim(),
    });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully.", id: lead._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save lead:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while saving your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
