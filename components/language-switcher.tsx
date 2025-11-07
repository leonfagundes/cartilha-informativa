"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import BR from 'country-flag-icons/react/3x2/BR'
import US from 'country-flag-icons/react/3x2/US'
import ES from 'country-flag-icons/react/3x2/ES'
import FR from 'country-flag-icons/react/3x2/FR'

type Language = {
  code: string
  name: string
  country: string
  FlagComponent: any
}

const languages: Language[] = [
  { code: "pt", name: "Português", country: "Brasil", FlagComponent: BR },
  { code: "en", name: "English", country: "United States", FlagComponent: US },
  { code: "es", name: "Español", country: "España", FlagComponent: ES },
  { code: "fr", name: "Français", country: "France", FlagComponent: FR },
]

type LanguageSwitcherProps = {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]
  const CurrentFlag = currentLang.FlagComponent

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 p-0 overflow-hidden hover:scale-110 transition-transform duration-200 border-2"
          title={`${currentLang.name} - ${currentLang.country}`}
        >
          <CurrentFlag className="w-full h-full object-cover" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => {
          const FlagComponent = language.FlagComponent
          return (
            <DropdownMenuItem
              key={language.code}
              onClick={() => onLanguageChange(language.code)}
              className="flex items-center justify-between gap-3 cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <FlagComponent className="w-6 h-4 rounded-sm" />
                <span className="font-medium">{language.name}</span>
              </span>
              {currentLanguage === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
