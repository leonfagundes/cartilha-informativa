"use client"

import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { MobileMenu } from "./mobile-menu"
import Image from "next/image"
import Link from "next/link"

type NavbarProps = {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const translations: Record<string, string> = {
    pt: "Sobre o projeto",
    en: "About the project",
    es: "Sobre el proyecto",
    fr: "À propos du projet"
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="w-full px-8 md:px-10 lg:px-6 h-20 md:h-24 flex items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative">
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
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-semibold tracking-tight leading-tight truncate">
              Cartilha Informativa
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm font-display font-medium text-muted-foreground tracking-wide truncate">
              Imigrantes e Refugiados
            </p>
          </div>
        </div>

        {/* Navigation and Controls Section */}
        <div className="flex items-center gap-3 md:gap-6 flex-shrink-0">
          {/* Desktop Navigation */}
          <Link 
            href="/sobre"
            className="hidden lg:block text-sm md:text-base font-display font-medium text-foreground hover:text-primary transition-colors"
          >
            {translations[currentLanguage] || translations.pt}
          </Link>
          
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
