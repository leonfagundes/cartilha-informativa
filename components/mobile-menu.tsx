"use client"

import { useState } from "react"
import { Menu, Home, FileText, Info, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BR, US, ES, FR } from "country-flag-icons/react/3x2"

type MobileMenuProps = {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

const languages = [
  { code: "pt", label: "Português", Flag: BR },
  { code: "en", label: "English", Flag: US },
  { code: "es", label: "Español", Flag: ES },
  { code: "fr", label: "Français", Flag: FR },
]

export function MobileMenu({ currentLanguage, onLanguageChange }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const translations: Record<string, { home: string; importantInfo: string; about: string; theme: string; language: string; light: string; dark: string }> = {
    pt: {
      home: "Início",
      importantInfo: "Informações Importantes",
      about: "Sobre o projeto",
      theme: "Tema",
      language: "Idioma",
      light: "Claro",
      dark: "Escuro"
    },
    en: {
      home: "Home",
      importantInfo: "Important Information",
      about: "About the project",
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark"
    },
    es: {
      home: "Inicio",
      importantInfo: "Información Importante",
      about: "Sobre el proyecto",
      theme: "Tema",
      language: "Idioma",
      light: "Claro",
      dark: "Oscuro"
    },
    fr: {
      home: "Accueil",
      importantInfo: "Informations Importantes",
      about: "À propos du projet",
      theme: "Thème",
      language: "Langue",
      light: "Clair",
      dark: "Sombre"
    }
  }

  const t = translations[currentLanguage] || translations.pt

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button 
          className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        {/* Custom header aligned with X button - X is at top-4 with p-3, so total 28px (1rem + 0.75rem) from top */}
        <div className="pt-[1.75rem] pb-4 px-6 border-b">
          <h2 className="text-lg font-semibold leading-6">Menu</h2>
        </div>
        
        <div className="flex flex-col gap-2">
          {/* Home */}
          <Link 
            href="/"
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            <Home className="w-5 h-5" />
            {t.home}
          </Link>

          {/* Informações Importantes */}
          <a 
            href="/#informacoes-importantes"
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            <FileText className="w-5 h-5" />
            {t.importantInfo}
          </a>

          {/* Sobre o projeto */}
          <Link 
            href="/sobre"
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            <Info className="w-5 h-5" />
            {t.about}
          </Link>

          {/* Tema */}
          <div className="space-y-2 mt-4">
            <h3 className="text-sm font-semibold text-muted-foreground px-4 flex items-center gap-2">
              {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              {t.theme}
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => {
                  setTheme("light")
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  theme === "light" ? "bg-accent font-medium" : "hover:bg-accent/50"
                }`}
              >
                <Sun className="w-5 h-5" />
                {t.light}
              </button>
              <button
                onClick={() => {
                  setTheme("dark")
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  theme === "dark" ? "bg-accent font-medium" : "hover:bg-accent/50"
                }`}
              >
                <Moon className="w-5 h-5" />
                {t.dark}
              </button>
            </div>
          </div>

          {/* Idioma */}
          <div className="space-y-2 mt-2">
            <h3 className="text-sm font-semibold text-muted-foreground px-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {t.language}
            </h3>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    currentLanguage === lang.code ? "bg-accent font-medium" : "hover:bg-accent/50"
                  }`}
                >
                  <lang.Flag className="w-6 h-4 rounded-sm" />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
