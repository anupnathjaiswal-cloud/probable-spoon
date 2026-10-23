import { NextResponse } from "next/server";

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
};

// export const runtime = "nodejs";

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

    if (
        !name ||
        name.length > 100 ||
        !email ||
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
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
        console.error("Contact form email configuration is missing.");

        return NextResponse.json(
            { error: "Contact service is not configured." },
            { status: 503 },
        );
    }

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: email,
                subject: `Website enquiry: ${subject}`,
                text: [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    `Subject: ${subject}`,
                    "",
                    "Message:",
                    message,
                ].join("\n"),
            }),
            signal: AbortSignal.timeout(10000),
            cache: "no-store",
        });

        if (!response.ok) {
            console.error("Contact email provider rejected the request.");

            return NextResponse.json(
                { error: "Unable to send your message." },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch {
        console.error("Contact email provider request failed.");

        return NextResponse.json(
            { error: "Unable to send your message." },
            { status: 502 },
        );
    }
}
