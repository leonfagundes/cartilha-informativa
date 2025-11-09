"use client"

import { InfoCard } from "./info-card"
import { 
  Globe, 
  Compass, 
  ScrollText, 
  Globe2, 
  Building2, 
  Handshake, 
  AlertTriangle, 
  Heart 
} from "lucide-react"
import { useCardTranslations } from "@/hooks/use-card-translations"

interface InfoCardsSectionProps {
  language: string
}

// Icon mapping based on card ID
const iconMap = {
  1: Globe,
  2: Compass,
  3: ScrollText,
  4: Globe2,
  5: Building2,
  6: Handshake,
  7: AlertTriangle,
  8: Heart
}

// Static data that doesn't change between languages
const staticCardData: Record<number, {
  lawLink?: string
  websiteLink?: string
  images?: string[]
}> = {
  1: {
    lawLink: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13445.htm"
  },
  2: {
    lawLink: "https://www.planalto.gov.br/ccivil_03/leis/l9474.htm"
  },
  3: {
    lawLink: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  4: {
    lawLink: "https://www.acnur.org/fileadmin/Documentos/portugues/BDL/Convencao_relativa_ao_Estatuto_dos_Refugiados.pdf"
  },
  6: {
    websiteLink: "https://institutokayton.com.br",
    images: [
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.25 (1).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.25 (2).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26 (1).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26 (2).jpeg",
      "/kayton/WhatsApp Image 2025-11-06 at 12.12.26.jpeg"
    ]
  }
}

export function InfoCardsSection({ language }: InfoCardsSectionProps) {
  const { cards, loading } = useCardTranslations(language)

  if (loading) {
    return (
      <section className="w-full max-w-[100vw] overflow-x-hidden bg-background py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="informacoes-importantes" className="w-full max-w-[100vw] overflow-x-hidden bg-background py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4 break-words px-2">
            Informações Importantes
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 break-words">
            Clique em cada card para saber mais sobre migração, refúgio e direitos humanos
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card) => {
            const staticData = staticCardData[card.id] || { lawLink: undefined, websiteLink: undefined, images: undefined }
            return (
              <InfoCard
                key={card.id}
                title={card.title}
                icon={iconMap[card.id as keyof typeof iconMap]}
                content={card.content}
                lawLink={staticData.lawLink}
                lawLinkText={card.lawLinkText}
                websiteLink={staticData.websiteLink}
                websiteLinkText={card.websiteLinkText}
                images={staticData.images}
                galleryTitle={card.galleryTitle}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
