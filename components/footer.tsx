"use client"

type FooterProps = {
  currentLanguage: string
}

export function Footer({ currentLanguage }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  const translations: Record<string, string> = {
    pt: "Todos os direitos reservados",
    en: "All rights reserved",
    es: "Todos los derechos reservados",
    fr: "Tous droits réservés"
  }

  return (
    <footer className="w-full max-w-[100vw] overflow-x-hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-6 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-display font-medium break-words px-2">
            © {currentYear} Cartilha Informativa - Imigrantes e Refugiados
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground break-words">
            {translations[currentLanguage] || translations.pt}
          </p>
        </div>
      </div>
    </footer>
  )
}
