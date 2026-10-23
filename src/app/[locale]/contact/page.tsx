import { getTranslations } from "next-intl/server";
import Container from "../../../components/layout/Container";
import ContactForm from "../../../components/contact/ContactForm";

export default async function ContactPage() {
    const t = await getTranslations("ContactPage");

    return (
        <main className="bg-[#f4f2ee] text-[#202323]">
            <section className="border-b border-[#d8d5ce] py-20 sm:py-28">
                <Container>
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#b97545]" />
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a8663b]">
                            {t("eyebrow")}
                        </p>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                        {t("titleLine1")}{" "}
                        <span className="text-[#a8663b]">
                            {t("titleHighlight")}
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-[#626563] sm:text-lg">
                        {t("description")}
                    </p>
                </Container>
            </section>

            <section className="py-16 sm:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <h2 className="text-2xl font-semibold sm:text-3xl">
                                {t("formTitle")}
                            </h2>
                            <p className="mt-4 max-w-md text-sm leading-7 text-[#686b67] sm:text-base">
                                {t("formDescription")}
                            </p>
                        </div>

                        <div className="border border-[#d8d5ce] p-6 sm:p-10">
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
