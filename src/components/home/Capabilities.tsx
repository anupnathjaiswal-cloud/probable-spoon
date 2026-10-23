import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import {
    ArrowRight,
    Pickaxe,
    Settings2,
    Boxes,
    ShieldCheck,
} from "lucide-react";
import Container from "../layout/Container";

const capabilities = [
    { key: "operations", number: "01", icon: Pickaxe },
    { key: "engineering", number: "02", icon: Settings2 },
    { key: "resources", number: "03", icon: Boxes },
    { key: "safety", number: "04", icon: ShieldCheck },
] as const;

export default async function Capabilities() {
    const t = await getTranslations("CapabilitiesSection");

    return (
        <section className="bg-[#f4f2ee] py-24 text-[#202323] sm:py-28">
            <Container>
                <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#b97545]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a8663b]">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            {t("titleLine1")}
                            <span className="block text-[#a8663b]">
                                {t("titleHighlight")}
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-xl text-base leading-7 text-[#626563] md:justify-self-end">
                        {t("description")}
                    </p>
                </div>

                <div className="grid gap-px border border-[#d8d5ce] bg-[#d8d5ce] sm:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map(({ key, number, icon: Icon }) => (
                        <article
                            key={key}
                            className="group flex min-h-64 flex-col bg-[#f4f2ee] p-7 transition-colors hover:bg-white sm:p-8"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <Icon
                                    size={28}
                                    strokeWidth={1.5}
                                    className="text-[#a8663b] transition-transform group-hover:-translate-y-1"
                                />
                                <span className="text-xs tracking-widest text-[#92938d]">
                                    {number}
                                </span>
                            </div>

                            <h3 className="mb-3 text-lg font-semibold">
                                {t(`${key}.title`)}
                            </h3>

                            <p className="flex-1 text-sm leading-6 text-[#686b67]">
                                {t(`${key}.description`)}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/capabilities"
                        className="inline-flex min-h-12 items-center gap-3 border-b border-[#a8663b] pb-2 text-sm font-semibold transition-colors hover:text-[#a8663b]"
                    >
                        {t("learnMore")}
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
