import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import { ArrowUpRight, ShieldCheck, Target, Gauge } from "lucide-react";
import Container from "../layout/Container";

export default async function About() {
    const t = await getTranslations("AboutSection");

    const highlights = [
        {
            icon: ShieldCheck,
            title: t("responsibilityTitle"),
            description: t("responsibilityDescription"),
        },
        {
            icon: Target,
            title: t("precisionTitle"),
            description: t("precisionDescription"),
        },
        {
            icon: Gauge,
            title: t("performanceTitle"),
            description: t("performanceDescription"),
        },
    ];

    return (
        <section
            id="about"
            className="bg-[#f3f0eb] py-20 text-[#181a1b] sm:py-28 lg:py-32"
        >
            <Container>
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Left: Company introduction */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-12 bg-[#c47d48]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a76537] sm:text-sm">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            {t("titleLine1")}{" "}
                            <span className="text-[#b87342]">
                                {t("titleHighlight")}
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-8 text-[#555653] sm:text-lg">
                            {t("description")}
                        </p>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex items-center gap-3 border-b border-[#b87342] pb-2 font-semibold transition-colors hover:text-[#a76537]"
                        >
                            {t("learnMore")}
                            <ArrowUpRight size={18} />
                        </Link>

                        {/* Core values */}
                        <div className="mt-12 grid gap-7 border-t border-black/10 pt-8 sm:grid-cols-3">
                            {highlights.map(
                                ({ icon: Icon, title, description }) => (
                                    <div key={title}>
                                        <Icon
                                            size={24}
                                            strokeWidth={1.5}
                                            className="mb-4 text-[#b87342]"
                                        />
                                        <h3 className="text-sm font-semibold">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[#666762]">
                                            {description}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Right: Industrial visual */}
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="aspect-[4/5] overflow-hidden bg-[#252827]">
                            <div
                                role="img"
                                aria-label={t("imageAlt")}
                                className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85')",
                                }}
                            />
                        </div>

                        <div className="absolute -bottom-5 -left-3 bg-[#c47d48] px-6 py-5 text-white sm:-left-6 sm:px-8 sm:py-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                                {t("imageCaption")}
                            </p>
                            <p className="mt-2 text-xl font-semibold sm:text-2xl">
                                {t("imageSubcaption")}
                            </p>
                        </div>

                        <div className="absolute -right-2 -top-2 h-20 w-20 border-r-2 border-t-2 border-[#c47d48] sm:-right-4 sm:-top-4 sm:h-28 sm:w-28" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
