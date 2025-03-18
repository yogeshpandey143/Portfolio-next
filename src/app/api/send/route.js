import "dotenv/config";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

console.log("Resend API Key:", apiKey ? "LOADED ✅" : "MISSING ❌");
console.log("From Email:", fromEmail ? "LOADED ✅" : "MISSING ❌");

if (!apiKey) {
  throw new Error("❌ RESEND_API_KEY is missing!");
}

const resend = new Resend(apiKey);

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: error.message });
  }
}
