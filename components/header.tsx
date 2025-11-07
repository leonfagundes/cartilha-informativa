"use client"

import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

type HeaderProps = {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function Header({ currentLanguage, onLanguageChange }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 flex items-center gap-3">
      <ThemeToggle />
      <LanguageSwitcher
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </header>
  )
}
