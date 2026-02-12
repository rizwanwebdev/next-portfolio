import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, company } = body;

    // Honeypot check
    if (company) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Rizwan Portfolio <contact@rizwanweb.site>",
      to: "contact@rizwanweb.site",
      subject: `New message from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
