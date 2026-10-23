import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import Container from "../../../components/layout/Container";

const projects = [
    { key: "project1", number: "01" },
    { key: "project2", number: "02" },
    { key: "project3", number: "03" },
] as const;

export default async function ProjectsPage() {
    const t = await getTranslations("ProjectsSection");

    return (
        <main className="bg-[#f4f2ee] text-[#202323]">
            <section className="bg-[#181a1b] py-24 text-white sm:py-32">
                <Container>
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
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map(({ key, number }) => (
                            <article
                                key={key}
                                className="border border-[#d8d5ce] bg-white/60 p-7 transition-colors hover:bg-white sm:p-8"
                            >
                                <div className="mb-8 flex items-center justify-between">
                                    <span className="text-xs tracking-widest text-[#a8663b]">
                                        {number}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-[#a8663b]"
                                    />
                                </div>

                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#a8663b]">
                                    {t(`${key}.category`)}
                                </p>

                                <h2 className="text-xl font-semibold">
                                    {t(`${key}.title`)}
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#686b67]">
                                    {t(`${key}.description`)}
                                </p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
