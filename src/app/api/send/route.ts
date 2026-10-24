import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/src/components/email/email-template";

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
};

function cleanText(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
    let body: ContactPayload;

    try {
        body = (await request.json()) as ContactPayload;
    } catch {
        return NextResponse.json(
            { error: "Invalid request body." },
            { status: 400 },
        );
    }

    const name = cleanText(body.name);
    const email = cleanText(body.email);
    const subject = cleanText(body.subject);
    const message = cleanText(body.message);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        !name ||
        name.length > 100 ||
        !email ||
        email.length > 254 ||
        !emailPattern.test(email) ||
        !subject ||
        subject.length > 150 ||
        !message ||
        message.length > 5000
    ) {
        return NextResponse.json(
            { error: "Please check the submitted fields." },
            { status: 400 },
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
        console.error("Contact email configuration is missing.");

        return NextResponse.json(
            { error: "Contact service is not configured." },
            { status: 503 },
        );
    }

    try {
        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from,
            to: [to],
            replyTo: email,
            subject: `Website enquiry: ${subject}`,
            react: EmailTemplate({
                name,
                email,
                subject,
                message,
            }),
        });

        if (error) {
            console.error("Resend email error:", {
                name: error.name,
                message: error.message,
            });

            return NextResponse.json(
                { error: "Unable to send your message." },
                { status: 502 },
            );
        }

        console.log("Contact email accepted by Resend:", {
            id: data?.id,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact email request failed:", error);

        return NextResponse.json(
            { error: "Unable to send your message." },
            { status: 502 },
        );
    }
}
