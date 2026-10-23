import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import {
    ArrowRight,
    Pickaxe,
    Factory,
    Truck,
    Leaf,
    HardHat,
    ChartNoAxesCombined,
} from "lucide-react";
import Container from "../layout/Container";

const services = [
    {
        key: "mining",
        icon: Pickaxe,
        number: "01",
    },
    {
        key: "processing",
        icon: Factory,
        number: "02",
    },
    {
        key: "equipment",
        icon: Truck,
        number: "03",
    },
    {
        key: "consulting",
        icon: ChartNoAxesCombined,
        number: "04",
    },
    {
        key: "environment",
        icon: Leaf,
        number: "05",
    },
    {
        key: "management",
        icon: HardHat,
        number: "06",
    },
] as const;

export default async function Services() {
    const t = await getTranslations("ServicesSection");

    return (
        <section className="bg-[#f4f2ee] py-24 text-[#202323] sm:py-28">
            <Container>
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
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

                    <p className="max-w-md text-base leading-7 text-[#626563]">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 border-l border-t border-[#d8d5ce] sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ key, icon: Icon, number }) => (
                        <Link
                            key={key}
                            href="/services"
                            className="group flex min-h-64 flex-col border-b border-r border-[#d8d5ce] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <Icon
                                    size={27}
                                    strokeWidth={1.5}
                                    className="text-[#a8663b] transition-transform duration-300 group-hover:-translate-y-1"
                                />
                                <span className="text-xs tracking-widest text-[#92938d]">
                                    {number}
                                </span>
                            </div>

                            <h3 className="mb-3 text-xl font-semibold">
                                {t(`${key}.title`)}
                            </h3>

                            <p className="flex-1 text-sm leading-6 text-[#686b67]">
                                {t(`${key}.description`)}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#a8663b]">
                                {t("learnMore")}
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
