import { getTranslations } from "next-intl/server";
import {
    ArrowUpRight,
    Pickaxe,
    Zap,
    Building2,
    Gem,
    Truck,
    Mountain,
} from "lucide-react";
import Container from "@/src/components/layout/Container";

const projects = [
    {
        key: "gold",
        number: "01",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85",
        icon: Gem,
    },
    {
        key: "minerals",
        number: "02",
        image: "https://images.unsplash.com/photo-1513828583688-c52646e5d309?auto=format&fit=crop&w=1000&q=85",
        icon: Pickaxe,
    },
    {
        key: "energy",
        number: "03",
        image: "https://images.unsplash.com/photo-1473341304170-971340b6e8f8?auto=format&fit=crop&w=1000&q=85",
        icon: Zap,
    },
    {
        key: "infrastructure",
        number: "04",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
        icon: Building2,
    },
    {
        key: "industrial",
        number: "05",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
        icon: Mountain,
    },
    {
        key: "trading",
        number: "06",
        image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
        icon: Truck,
    },
] as const;

const capabilities = [
    "licensing",
    "exploration",
    "operations",
    "planning",
    "processing",
    "logistics",
    "engineering",
] as const;

export default async function ProjectsPage() {
    const t = await getTranslations("ProjectsSection");

    return (
        <main className="overflow-hidden bg-[#f4f2ee] text-[#202323]">
            {/* Hero */}
            <section className="relative isolate flex min-h-[490px] items-center overflow-hidden bg-[#181a1b] py-24 text-white sm:min-h-[540px] sm:py-32 lg:min-h-[590px]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, #181a1b 0%, rgba(24,26,27,0.92) 40%, rgba(24,26,27,0.2) 100%), url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=85')",
                    }}
                />

                <Container>
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d99a68]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2a574]">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            {t("titleLine1")}
                            <span className="mt-2 block text-[#d99a68]">
                                {t("titleHighlight")}
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                            {t("description")}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium uppercase tracking-[0.14em] text-white/65 sm:text-sm">
                            <span>Mineral Exploration</span>
                            <span>Energy &amp; Power</span>
                            <span>Infrastructure</span>
                        </div>
                    </div>
                </Container>

                <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-8 hidden h-32 w-px bg-gradient-to-t from-[#d99a68] to-transparent lg:block"
                />
            </section>

            {/* Portfolio */}
            <section className="py-20 sm:py-28 lg:py-32">
                <Container>
                    <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#a8663b]">
                                {t("portfolio.eyebrow")}
                            </p>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                                {t("portfolio.title")}
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#686b67]">
                            {t("portfolio.description")}
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {projects.map(({ key, number, image, icon: Icon }) => (
                            <article
                                key={key}
                                className="group flex h-full flex-col overflow-hidden border border-[#d8d5ce] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#c4a187] hover:shadow-xl hover:shadow-black/[0.06]"
                            >
                                <div className="relative h-60 overflow-hidden bg-[#252827] sm:h-64">
                                    <div
                                        role="img"
                                        aria-label={t(
                                            `portfolio.${key}.imageAlt`,
                                        )}
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url("${image}")`,
                                        }}
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-t from-[#181a1b]/90 via-[#181a1b]/15 to-[#181a1b]/10"
                                    />

                                    <span className="absolute left-5 top-5 border border-white/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
                                        {number}
                                    </span>

                                    <ArrowUpRight
                                        aria-hidden="true"
                                        size={21}
                                        strokeWidth={1.6}
                                        className="absolute right-5 top-5 text-white/90 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                    <div className="absolute bottom-5 left-5 flex items-center gap-2.5 text-white">
                                        <span className="flex size-9 items-center justify-center border border-white/30 bg-black/20 backdrop-blur-sm">
                                            <Icon size={17} strokeWidth={1.6} />
                                        </span>
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-xs">
                                            {t(`portfolio.${key}.category`)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#a8663b]">
                                        {t(`portfolio.${key}.title`)}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#686b67]">
                                        {t(`portfolio.${key}.description`)}
                                    </p>

                                    <div className="mt-6 border-t border-[#e8e5df] pt-4">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a8663b]">
                                            Vertex Mining
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-6 text-xs leading-6 text-[#777972]">
                        Illustrative imagery is used for these portfolio
                        categories. Please confirm project status and replace
                        representative images with approved project photographs
                        before publication.
                    </p>
                </Container>
            </section>

            {/* Mining capabilities */}
            <section className="relative bg-white py-20 sm:py-24 lg:py-28">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#a8663b]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a8663b]">
                                    {t("mining.eyebrow")}
                                </span>
                            </div>

                            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                {t("mining.title")}
                            </h2>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-[#686b67] sm:text-base">
                                {t("mining.description")}
                            </p>

                            <div className="mt-8 hidden h-px w-24 bg-[#d99a68] lg:block" />
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                            {capabilities.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex gap-4 border-t border-[#d8d5ce] py-5 sm:odd:pr-5 sm:even:pl-5"
                                >
                                    <span className="pt-1 text-xs tabular-nums tracking-widest text-[#a8663b]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-sm font-medium leading-6">
                                        {t(`mining.items.${item}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
