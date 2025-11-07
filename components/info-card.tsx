"use client"

import { LucideIcon } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type InfoCardProps = {
  title: string
  icon: LucideIcon
  content: string
  lawLink?: string
  websiteLink?: string
  images?: string[]
}

// Função para formatar o texto com referências de leis em negrito
function formatContent(text: string) {
  // Regex para encontrar padrões como Lei Nº 13.445/2017, Lei Nº 9.474/97, etc.
  // Inclui números, pontos, barras e hífens
  const lawPattern = /(Lei Nº [0-9./\-]+)/g
  const parts = text.split(lawPattern)
  
  return parts.map((part, index) => {
    if (lawPattern.test(part)) {
      return <span key={index} className="font-bold">{part}</span>
    }
    return part
  })
}

export function InfoCard({ title, icon: Icon, content, lawLink, websiteLink, images }: InfoCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative overflow-hidden rounded-xl bg-transparent backdrop-blur-sm border-2 border-gray-700 dark:border-gray-300 hover:border-gray-600 dark:hover:border-gray-200 hover:bg-gray-700/5 dark:hover:bg-gray-300/5 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 text-left w-full">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-gray-700/10 dark:bg-gray-300/10 border border-gray-700/60 dark:border-gray-300/60 p-4 group-hover:bg-gray-700/20 dark:group-hover:bg-gray-300/20 transition-colors">
              <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
            </div>
            <h3 className="font-display font-semibold text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">
              {title}
            </h3>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-4rem)] sm:w-[calc(100vw-6rem)] md:w-[calc(100vw-8rem)] lg:max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl pr-8">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="line-clamp-2">{title}</span>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm sm:text-base text-foreground/80 whitespace-pre-line leading-relaxed pt-3 sm:pt-4">
          {formatContent(content)}
        </DialogDescription>
        
        {images && images.length > 0 && (
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-base sm:text-lg">Galeria de Fotos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                  <Image
                    src={image}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {(lawLink || websiteLink) && (
          <div className="pt-4 sm:pt-6 border-t mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            {lawLink && (
              <a
                href={lawLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-800 dark:bg-white hover:bg-blue-900 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="truncate">Acessar Legislação Completa</span>
              </a>
            )}
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-800 dark:bg-white hover:bg-blue-900 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="truncate">Visitar Site</span>
              </a>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
