"use client";

import { useState } from "react";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { Link, usePathname } from "../../i18n/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const t = useTranslations("Navigation");

    const navigation = [
        { label: t("about"), href: "/about" },
        { label: t("services"), href: "/services" },
        { label: t("projects"), href: "/projects" },
        { label: t("capabilities"), href: "/capabilities" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#181a1b]/95 text-white backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
                <Link href="/" className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-[#c47d48] text-lg font-bold text-[#c47d48]">
                        V
                    </span>

                    <span className="leading-tight">
                        <span className="block text-lg font-bold tracking-[0.16em]">
                            VERTEX
                        </span>
                        <span className="block text-[10px] tracking-[0.3em] text-[#c47d48]">
                            MINING
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm transition-colors hover:text-[#c47d48] ${
                                pathname === item.href
                                    ? "text-[#c47d48]"
                                    : "text-white/75"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-5 lg:flex">
                    <div className="flex items-center gap-2 text-sm">
                        <Globe size={16} className="text-[#c47d48]" />
                        <Link
                            href={pathname}
                            locale="en"
                            className="hover:text-[#c47d48]"
                        >
                            EN
                        </Link>
                        <span className="text-white/30">/</span>
                        <Link
                            href={pathname}
                            locale="fr"
                            className="hover:text-[#c47d48]"
                        >
                            FR
                        </Link>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#c47d48] px-5 py-3 text-sm font-semibold text-[#181a1b] transition-colors hover:bg-[#d99a68]"
                    >
                        Contact us <ArrowUpRight size={16} />
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-2 text-white lg:hidden"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <nav className="border-t border-white/10 px-5 py-5 lg:hidden">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="block border-b border-white/10 py-4 text-sm hover:text-[#c47d48]"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 py-4 text-sm">
                        <Globe size={16} className="text-[#c47d48]" />
                        <Link
                            href={pathname}
                            locale="en"
                            onClick={() => setMenuOpen(false)}
                        >
                            English
                        </Link>
                        <Link
                            href={pathname}
                            locale="fr"
                            onClick={() => setMenuOpen(false)}
                        >
                            Français
                        </Link>
                    </div>

                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 bg-[#c47d48] px-5 py-3 font-semibold text-[#181a1b]"
                    >
                        Contact us <ArrowUpRight size={16} />
                    </Link>
                </nav>
            )}
        </header>
    );
}
