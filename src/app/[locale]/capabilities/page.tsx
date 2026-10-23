import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import Container from "../../../components/layout/Container";
import {
    ArrowRight,
    Pickaxe,
    Settings2,
    Boxes,
    ShieldCheck,
} from "lucide-react";

const capabilities = [
    { key: "operations", number: "01", icon: Pickaxe },
    { key: "engineering", number: "02", icon: Settings2 },
    { key: "resources", number: "03", icon: Boxes },
    { key: "safety", number: "04", icon: ShieldCheck },
] as const;

export default async function CapabilitiesPage() {
    const t = await getTranslations("CapabilitiesSection");

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
                    <div className="grid gap-px border border-[#d8d5ce] bg-[#d8d5ce] sm:grid-cols-2">
                        {capabilities.map(({ key, number, icon: Icon }) => (
                            <article
                                key={key}
                                className="group bg-[#f4f2ee] p-8 transition-colors hover:bg-white sm:p-10 lg:p-12"
                            >
                                <div className="mb-8 flex items-center justify-between">
                                    <Icon
                                        size={32}
                                        strokeWidth={1.5}
                                        className="text-[#a8663b]"
                                    />
                                    <span className="text-xs tracking-widest text-[#92938d]">
                                        {number}
                                    </span>
                                </div>

                                <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
                                    {t(`${key}.title`)}
                                </h2>

                                <p className="max-w-lg text-sm leading-7 text-[#686b67] sm:text-base">
                                    {t(`${key}.description`)}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 border-t border-[#d8d5ce] pt-10 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold sm:text-3xl">
                                {t("contactTitle")}
                            </h2>
                            <p className="mt-3 max-w-xl leading-7 text-[#626563]">
                                {t("contactDescription")}
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex min-h-12 items-center gap-3 bg-[#a8663b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#87502f] sm:mt-0"
                        >
                            {t("contactButton")}
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </Container>
            </section>
        </main>
    );
}
