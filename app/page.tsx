"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundCarousel } from "@/components/background-carousel"
import { InfoCardsSection } from "@/components/info-cards-section"
import { CartilhaButton } from "@/components/cartilha-button"
import { useTranslations } from "@/hooks/use-translations"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { language, setLanguage } = useLanguage()
  const { translations, loading } = useTranslations(language)

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden text-foreground transition-colors flex flex-col relative">
      <BackgroundCarousel />
      
      <Navbar currentLanguage={language} onLanguageChange={setLanguage} />
      
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-4 py-8 sm:py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center space-y-6 sm:space-y-8">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-12 w-64 bg-muted rounded"></div>
              <div className="h-6 w-48 bg-muted rounded mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4 backdrop-blur-sm bg-background/60 dark:bg-background/70 p-4 sm:p-6 md:p-10 rounded-2xl shadow-2xl border border-border/50 flex flex-col items-center w-full max-w-4xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground drop-shadow-lg text-center break-words">
                  {translations.title}
                </h1>
                
                <p className="text-lg md:text-xl font-medium text-foreground/90 max-w-2xl drop-shadow-md text-center mx-auto break-words">
                  {translations.welcome}
                </p>
                
                <p className="text-sm md:text-base text-foreground/80 max-w-3xl drop-shadow text-center mx-auto break-words">
                  {translations.description}
                </p>

                <div className="pt-4">
                  <CartilhaButton language={language} />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      
      <InfoCardsSection language={language} />
      
      <Footer currentLanguage={language} />
    </div>
  )
}
