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
    const emailHtml = `
      <body style="margin:0; padding:40px 0; background-color:#f5f5f5;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border:1px solid #e5e5e5; border-radius:6px; padding:40px; font-family:Arial, sans-serif;">
                
                <!-- Header -->
                <tr>
                  <td style="padding-bottom:20px;">
                    <h2 style="margin:0; font-size:22px; color:#111;">
                      New message from ${name}
                    </h2>
                  </td>
                </tr>

                <!-- Sender Info -->
                <tr>
                  <td style="padding-bottom:20px; color:#555; font-size:14px;">
                    <p style="margin:0 0 8px;">
                      <strong>Name:</strong> ${name}
                    </p>
                    <p style="margin:0;">
                      <strong>Email:</strong> ${email}
                    </p>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:20px 0; border-top:1px solid #eee; border-bottom:1px solid #eee; color:#333; font-size:14px;">
                    <p style="margin:0 0 8px;"><strong>Message:</strong></p>
                    <p style="margin:0; font-weight:500; font-size:20px; line-height:1.6;">
                      ${message}
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding-top:20px; text-align:center; font-size:13px; color:#999;">
                   <a style="text-decoration:none;" href="https://rizwanweb.site" target="_blank"> Rizwan's Portfolio</a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    `;

    const { error } = await resend.emails.send({
      from: "Rizwan's Portfolio <contact@rizwanweb.site>",
      to: "contact@rizwanweb.site",
      subject: `New message from: ${name}`,
      html: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
