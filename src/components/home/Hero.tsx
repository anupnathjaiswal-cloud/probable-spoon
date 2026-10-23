import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import { ArrowDown, ArrowRight } from "lucide-react";
import Container from "../layout/Container";

export default async function Hero() {
    const t = await getTranslations("HomePage");

    return (
        <section className="relative isolate min-h-[780px] overflow-hidden bg-[#181a1b] text-white lg:h-[780px] lg:min-h-[780px]">
            {/* Fixed background image */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2400&q=85')",
                }}
            />

            {/* Background overlays */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111516] via-[#111516]/85 to-[#111516]/25" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#181a1b] via-transparent to-black/20" />

            <Container className="relative flex min-h-[780px] flex-col lg:h-full">
                {/* Hero content */}
                <div className="px-6 pt-24 pb-8 md:px-10 lg:absolute lg:inset-x-0 lg:top-0 lg:px-10 lg:pb-24">
                    <div className="max-w-5xl">
                        {/* Eyebrow */}
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-12 shrink-0 bg-[#c47d48]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e2a574] sm:text-sm sm:tracking-[0.28em]">
                                {t("eyebrow")}
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="w-full max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            {t("titleLine1")}
                            <span className="block text-[#d99a68]">
                                {t("titleHighlight")}
                            </span>
                            {t("titleLine2")}
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                            {t("description")}
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/services"
                                className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#c47d48] px-7 py-4 font-semibold text-[#181a1b] transition-colors hover:bg-[#d99a68]"
                            >
                                {t("exploreServices")}
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 px-7 py-4 font-semibold transition-colors hover:border-[#c47d48] hover:text-[#d99a68]"
                            >
                                {t("contactTeam")}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer: anchored on desktop, in normal flow on mobile */}
                <div className="mt-auto px-6 md:px-10 lg:absolute lg:inset-x-10 lg:bottom-0 lg:mt-0 lg:px-0">
                    <div className="flex min-h-16 items-center justify-between gap-4 border-t border-white/20 text-[10px] uppercase tracking-[0.12em] text-white/55 sm:text-xs sm:tracking-[0.2em]">
                        <span>PRECISION · PERFORMANCE · RESPONSIBILITY</span>

                        <a
                            href="#about"
                            className="inline-flex shrink-0 items-center gap-2 text-white transition-colors hover:text-[#d99a68]"
                        >
                            <span className="hidden sm:inline">
                                DISCOVER MORE
                            </span>
                            <ArrowDown size={16} />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
