import { CustomerEnquiry } from "@/app/models/ICustomerEnquiries";
import { NextRequest } from "next/server";

export async function createEnquiry(req: NextRequest) {
  // Get the request body
  const request = (await req.json()) as CustomerEnquiry;

  // If the request body is empty, or any of the required fields are missing, return an error
  if (
    !request ||
    !request.name ||
    !request.email ||
    !request.subject ||
    !request.message
  ) {
    return {
      error: "Missing required parameters",
      errorCode: "MissingRequiredParameters",
      statusCode: 400,
    };
  }

  // Return the customer enquiry
  return { message: "Customer enquiry created successfully" };
}