import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Container from "@/src/components/layout/Container";
import { routing } from "@/src/i18n/routing";

type FooterProps = {
    locale: string;
};

export default async function Footer({ locale }: FooterProps) {
    const t = await getTranslations({
        locale,
        namespace: "Footer",
    });

    const links = [
        { label: t("home"), href: `/${locale}` },
        { label: t("about"), href: `/${locale}/about` },
        { label: t("services"), href: `/${locale}/services` },
        { label: t("projects"), href: `/${locale}/projects` },
        { label: t("capabilities"), href: `/${locale}/capabilities` },
        { label: t("contact"), href: `/${locale}/contact` },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-[#171918] text-white">
            <Container>
                <div className="grid gap-12 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
                    <div className="max-w-md">
                        <Link
                            href={`/${locale}`}
                            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                            aria-label={t("home")}
                        >
                            <span
                                aria-hidden="true"
                                className="flex h-11 w-11 items-center justify-center border border-amber-500/50 text-lg font-bold text-amber-500"
                            >
                                V
                            </span>
                            <span className="text-lg font-semibold tracking-[0.16em]">
                                VERTEX
                                <span className="block text-xs font-medium tracking-[0.3em] text-white/50">
                                    MINING
                                </span>
                            </span>
                        </Link>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                            {t("description")}
                        </p>
                    </div>

                    <nav
                        aria-label={t("quickLinks")}
                        className="lg:justify-self-center"
                    >
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                            {t("quickLinks")}
                        </h2>
                        <ul className="mt-5 space-y-3">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                            {t("getInTouch")}
                        </h2>
                        <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
                            {t("contactDescription")}
                        </p>
                        <Link
                            href={`/${locale}/contact`}
                            className="mt-5 inline-flex items-center gap-2 border-b border-amber-500 pb-1 text-sm font-medium text-white transition-colors hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                            {t("contactCta")}
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} Vertex Mining. {t("rights")}
                    </p>

                    <div className="flex items-center gap-4">
                        {routing.locales.map((availableLocale) => (
                            <Link
                                key={availableLocale}
                                href={`/${availableLocale}`}
                                hrefLang={availableLocale}
                                lang={availableLocale}
                                aria-label={t("switchLanguage", {
                                    language: availableLocale.toUpperCase(),
                                })}
                                className={`rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                                    availableLocale === locale
                                        ? "text-amber-500"
                                        : "text-white/50"
                                }`}
                            >
                                {availableLocale.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
