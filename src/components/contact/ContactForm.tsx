"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const t = useTranslations("ContactPage");
    const [status, setStatus] = useState<FormStatus>("idle");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            subject: String(formData.get("subject") ?? "").trim(),
            message: String(formData.get("message") ?? "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setStatus("error");
                return;
            }

            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    const fieldClass =
        "mt-2 w-full border border-[#d8d5ce] bg-white px-4 py-3 text-sm text-[#202323] outline-none transition focus:border-[#a8663b] focus:ring-1 focus:ring-[#a8663b]";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="text-sm font-medium"
                    >
                        {t("name")}
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        maxLength={100}
                        required
                        className={fieldClass}
                        placeholder={t("namePlaceholder")}
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-email"
                        className="text-sm font-medium"
                    >
                        {t("email")}
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={254}
                        required
                        className={fieldClass}
                        placeholder={t("emailPlaceholder")}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium"
                >
                    {t("subject")}
                </label>
                <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={150}
                    required
                    className={fieldClass}
                    placeholder={t("subjectPlaceholder")}
                />
            </div>

            <div>
                <label
                    htmlFor="contact-message"
                    className="text-sm font-medium"
                >
                    {t("message")}
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    maxLength={5000}
                    required
                    className={`${fieldClass} resize-y`}
                    placeholder={t("messagePlaceholder")}
                />
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex min-h-12 items-center justify-center bg-[#a8663b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#87502f] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "submitting" ? t("sending") : t("submit")}
            </button>

            <div aria-live="polite" role="status">
                {status === "success" && (
                    <p className="text-sm text-green-800">{t("success")}</p>
                )}
                {status === "error" && (
                    <p className="text-sm text-red-700">{t("error")}</p>
                )}
            </div>
        </form>
    );
}
