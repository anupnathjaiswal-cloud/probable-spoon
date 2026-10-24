interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function EmailTemplate({
    name,
    email,
    subject,
    message,
}: EmailTemplateProps) {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                color: "#222",
                lineHeight: 1.6,
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            <h1 style={{ color: "#1d4ed8" }}>New Website Enquiry</h1>

            <p>
                You have received a new message through the Vertex Mining
                website.
            </p>

            <hr />

            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Email:</strong> {email}
            </p>
            <p>
                <strong>Subject:</strong> {subject}
            </p>

            <h3>Message</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>

            <hr />

            <p style={{ color: "#666", fontSize: "12px" }}>
                Sent from the Vertex Mining website contact form.
            </p>
        </div>
    );
}
