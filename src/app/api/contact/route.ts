import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      businessLocation,
      serviceRequired,
      numberOfRiders,
      message,
    } = body;

    // Validate required fields
    if (!fullName || !companyName || !email || !phone || !serviceRequired || !numberOfRiders) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "server409.web-hosting.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "alaya@fastflydelivery.com",
        pass: process.env.SMTP_PASS || "6gq8aKG5WBbqJvL",
      },
    });

    const mailOptions = {
      from: `"Fast Fly Website" <${process.env.SMTP_USER || "alaya@fastflydelivery.com"}>`,
      to: process.env.CONTACT_EMAIL_TO || "alaya@fastflydelivery.com",
      replyTo: email,
      subject: `New Lead: ${serviceRequired} from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0D2C5A;">New Contact Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${businessLocation}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #4EA7D9;">Service Requirements</h3>
          <p><strong>Service Requested:</strong> ${serviceRequired}</p>
          <p><strong>Number of Riders:</strong> ${numberOfRiders}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #4EA7D9;">Additional Message</h3>
          <p style="white-space: pre-wrap;">${message || "No additional message provided."}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
