import nodemailer from "nodemailer";
import * as handlebars from "handlebars";
import { customerTemplate } from "./templates/customerTemplate";
import { teamTemplate } from "./templates/teamTemplate";

type Mail = {
  to: string;
  name: string;
  subject: string;
  body: string;
  bcc?: string;
  attachments?: { filename: string; content: Buffer | string }[];
};

export async function sendMail({
  to,
  name,
  subject,
  body,
  bcc,
  attachments,
}: Mail) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // Verify connection configuration
    const testResult = await transport.verify();
    // Log test result
    console.log("Transporter test result: ", testResult);
  } catch (error) {
    console.error(error);
  }

  try {
    if (attachments) {
      const sendMail = await transport.sendMail({
        from: SMTP_EMAIL,
        to,
        bcc,
        subject,
        html: body,
        attachments: [
          {
            filename: attachments[0].filename,
            content: attachments[0].content,
          },
        ],
      });

      return sendMail;
    }

    const sendMail = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      bcc,
      subject,
      html: body,
    });
    return sendMail;
  } catch (error) {
    console.error(error);
  }
}

export function compileCustomerTemplate(customerName: string) {
  const template = handlebars.compile(customerTemplate);
  const htmlBody = template({ customerName });

  return htmlBody;
}

interface CompileTeamTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function compileTeamTemplate(data: CompileTeamTemplateProps) {
  const template = handlebars.compile(teamTemplate);
  const htmlBody = template({ 
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    message: data.message
});

  return htmlBody;
}
