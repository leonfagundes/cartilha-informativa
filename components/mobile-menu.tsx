"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { useTheme } from "next-themes"
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

  const translations: Record<string, { about: string; theme: string; language: string; light: string; dark: string }> = {
    pt: {
      about: "Sobre o projeto",
      theme: "Tema",
      language: "Idioma",
      light: "Claro",
      dark: "Escuro"
    },
    en: {
      about: "About the project",
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark"
    },
    es: {
      about: "Sobre el proyecto",
      theme: "Tema",
      language: "Idioma",
      light: "Claro",
      dark: "Oscuro"
    },
    fr: {
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
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-6 mt-8">
          {/* Sobre o projeto */}
          <div className="space-y-2">
            <button 
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
              onClick={() => setOpen(false)}
            >
              {t.about}
            </button>
          </div>

          {/* Tema */}
          <div className="space-y-3">
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
          <div className="space-y-3">
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
