"use client"

import { ChevronDown, FileText, Download, Eye } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type CartilhaButtonProps = {
  language: string
}

export function CartilhaButton({ language }: CartilhaButtonProps) {
  const translations: Record<string, { button: string; viewPdf: string; downloadPdf: string }> = {
    pt: {
      button: "Ver Cartilha",
      viewPdf: "Visualizar PDF",
      downloadPdf: "Baixar PDF"
    },
    en: {
      button: "View Guide",
      viewPdf: "View PDF",
      downloadPdf: "Download PDF"
    },
    es: {
      button: "Ver Guía",
      viewPdf: "Visualizar PDF",
      downloadPdf: "Descargar PDF"
    },
    fr: {
      button: "Voir le Guide",
      viewPdf: "Visualiser PDF",
      downloadPdf: "Télécharger PDF"
    }
  }

  const t = translations[language] || translations.pt

  // Map language codes to PDF filenames
  const pdfMap: Record<string, string> = {
    pt: "/pdfs/pt-br.pdf",
    en: "/pdfs/en.pdf",
    es: "/pdfs/es.pdf",
    fr: "/pdfs/en.pdf" // Use English PDF for French if no French PDF exists
  }

  const pdfPath = pdfMap[language] || pdfMap.pt

  const handleViewPdf = () => {
    window.open(pdfPath, '_blank')
  }

  const handleDownloadPdf = () => {
    const link = document.createElement('a')
    link.href = pdfPath
    const fileName = `cartilha-${language}.pdf`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
          <FileText className="w-5 h-5" />
          {t.button}
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-56">
        <DropdownMenuItem onClick={handleViewPdf} className="cursor-pointer">
          <Eye className="w-4 h-4 mr-2" />
          {t.viewPdf}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownloadPdf} className="cursor-pointer">
          <Download className="w-4 h-4 mr-2" />
          {t.downloadPdf}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
