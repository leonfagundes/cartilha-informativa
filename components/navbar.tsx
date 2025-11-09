"use client"

import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { MobileMenu } from "./mobile-menu"
import { useTranslations } from "@/hooks/use-translations"
import { Home, FileText, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type NavbarProps = {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const { translations } = useTranslations(currentLanguage)

  return (
    <nav className="sticky top-0 z-50 w-full max-w-[100vw] overflow-x-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="w-full px-3 sm:px-6 md:px-8 lg:px-6 h-16 sm:h-20 md:h-24 flex items-center justify-between gap-1 sm:gap-2 md:gap-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-1 lg:flex-initial">
          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 relative">
            {/* Ícone colorido para ambos os modos */}
            <Image
              src="/logo-icon/icone-colorido.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-display font-semibold tracking-tight leading-tight truncate">
              {translations.logoTitle || "Cartilha Informativa"}
            </h1>
            <p className="text-[8px] sm:text-[9px] md:text-sm font-display font-medium text-muted-foreground tracking-wide truncate">
              {translations.logoSubtitle || "Imigrantes e Refugiados"}
            </p>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm md:text-base font-display font-medium text-foreground hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            {translations.home || "Início"}
          </Link>
          <a 
            href="/#informacoes-importantes"
            className="flex items-center gap-2 text-sm md:text-base font-display font-medium text-foreground hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            {translations.importantInfo || "Informações Importantes"}
          </a>
          <Link 
            href="/sobre"
            className="flex items-center gap-2 text-sm md:text-base font-display font-medium text-foreground hover:text-primary transition-colors"
          >
            <Info className="w-4 h-4" />
            {translations.aboutProject || "Sobre o projeto"}
          </Link>
        </div>

        {/* Right Controls Section */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 flex-shrink-0">
          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </nav>
  )
}
