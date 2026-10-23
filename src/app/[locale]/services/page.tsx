import { getTranslations } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import {
    ArrowRight,
    Pickaxe,
    Factory,
    Truck,
    Leaf,
    HardHat,
    ChartNoAxesCombined,
} from "lucide-react";
import Container from "../../../components/layout/Container";

const services = [
    { key: "mining", number: "01", icon: Pickaxe },
    { key: "processing", number: "02", icon: Factory },
    { key: "equipment", number: "03", icon: Truck },
    { key: "consulting", number: "04", icon: ChartNoAxesCombined },
    { key: "environment", number: "05", icon: Leaf },
    { key: "management", number: "06", icon: HardHat },
] as const;

export default async function ServicesPage() {
    const t = await getTranslations("ServicesSection");

    return (
        <main className="bg-[#f4f2ee] text-[#202323]">
            <section className="relative overflow-hidden bg-[#181a1b] py-24 text-white sm:py-32">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=85')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111516] via-[#111516]/90 to-[#111516]/50" />

                <Container className="relative">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#d99a68]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2a574]">
                            {t("eyebrow")}
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        {t("titleLine1")}
                        <span className="block text-[#d99a68]">
                            {t("titleHighlight")}
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                        {t("description")}
                    </p>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {services.map(({ key, number, icon: Icon }) => (
                            <article
                                key={key}
                                className="group flex min-h-72 flex-col border border-[#d8d5ce] bg-white/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                            >
                                <div className="mb-9 flex items-center justify-between">
                                    <div className="flex size-12 items-center justify-center bg-[#eee6de] text-[#a8663b]">
                                        <Icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-xs tracking-widest text-[#92938d]">
                                        {number}
                                    </span>
                                </div>

                                <h2 className="mb-3 text-xl font-semibold">
                                    {t(`${key}.title`)}
                                </h2>

                                <p className="flex-1 text-sm leading-7 text-[#686b67]">
                                    {t(`${key}.description`)}
                                </p>

                                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#a8663b]">
                                    {t("learnMore")}
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-16 flex flex-col justify-between gap-6 bg-[#202323] p-8 text-white sm:flex-row sm:items-center sm:p-12">
                        <div>
                            <h2 className="text-2xl font-semibold sm:text-3xl">
                                {t("contactTitle")}
                            </h2>
                            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                                {t("contactDescription")}
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#c47d48] px-7 py-4 font-semibold text-[#181a1b] transition-colors hover:bg-[#d99a68]"
                        >
                            {t("contactButton")}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </Container>
            </section>
        </main>
    );
}
