import { CustomerEnquiry } from "@/app/models/ICustomerEnquiries";
import { compileCustomerTemplate, compileTeamTemplate, sendMail } from "@/lib/mail";
import { NextRequest } from "next/server";

export async function createEnquiry(req: NextRequest) {
  // Get the request body
  const request = (await req.json()) as CustomerEnquiry;

  // If the request body is empty, or any of the required fields are missing, return an error
  if (
    !request ||
    !request.firstName ||
    !request.lastName ||
    !request.email ||
    !request.message
  ) {
    return {
      error: "Missing required parameters",
      errorCode: "MissingRequiredParameters",
      statusCode: 400,
    };
  }

  // Send email to the new customer
  await sendMail({
    to: request.email,
    name: "Message Received!",
    subject: "Thank you for contacting Yesil Services",
    body: compileCustomerTemplate(`${request.firstName} ${request.lastName}`),
  });

  // Send email to the team
  await sendMail({
    to: process.env.SMTP_EMAIL!,
    name: "New Message!",
    subject: "Someone filled the contact form",
    body: compileTeamTemplate({
        firstName: request.firstName,
        lastName: request.lastName,
        email: request.email,
        message: request.message,
    }),
  });

  // Return the customer enquiry
  return { message: "Customer enquiry created successfully" };
}