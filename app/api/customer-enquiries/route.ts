import { NextRequest, NextResponse } from "next/server";
import { createEnquiry } from "../services/customer-enquiry/customerEnquiry";

export async function POST(req: NextRequest) {
  // validate request method
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    // Call the function to create customer enquiry
    const operation = await createEnquiry(req);

    // If operation fails, return the error
    if (operation.error) {
      return NextResponse.json(operation, { status: operation.statusCode });
    }

    // Return the response
    return NextResponse.json(operation, { status: 200 });
  } catch {
    // Return an error if the operation fails
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
