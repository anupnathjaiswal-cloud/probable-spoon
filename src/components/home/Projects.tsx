import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Container from "../layout/Container";

const projects = [
    {
        key: "project1",
        number: "01",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85",
    },
    {
        key: "project2",
        number: "02",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
    },
    {
        key: "project3",
        number: "03",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    },
] as const;

export default async function Projects() {
    const t = await getTranslations("ProjectsSection");

    return (
        <section className="bg-[#202323] py-24 text-white sm:py-28">
            <Container>
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d99a68]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e2a574]">
                                {t("eyebrow")}
                            </span>
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            {t("titleLine1")}
                            <span className="block text-[#d99a68]">
                                {t("titleHighlight")}
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-7 text-white/65">
                        {t("description")}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(({ key, number, image }) => (
                        <article key={key} className="group">
                            <Link
                                href="/projects"
                                className="relative block aspect-[4/3] overflow-hidden bg-[#343838]"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url("${image}")`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <span className="absolute left-5 top-5 text-xs tracking-widest text-white/75">
                                    {number}
                                </span>

                                <span className="absolute bottom-5 right-5 flex size-11 items-center justify-center border border-white/40 transition-colors group-hover:border-[#d99a68] group-hover:bg-[#c47d48] group-hover:text-[#181a1b]">
                                    <ArrowUpRight size={20} />
                                </span>
                            </Link>

                            <div className="border-b border-white/15 py-6">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d99a68]">
                                    {t(`${key}.category`)}
                                </p>
                                <h3 className="text-xl font-semibold">
                                    {t(`${key}.title`)}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-white/60">
                                    {t(`${key}.description`)}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex justify-end">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold transition-colors hover:border-[#d99a68] hover:text-[#d99a68]"
                    >
                        {t("viewAll")}
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
