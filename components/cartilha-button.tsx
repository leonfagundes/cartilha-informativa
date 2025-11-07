"use client"

import { useState } from "react"
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
  const translations: Record<string, { button: string; viewPdf: string; viewDownload: string; downloadPdf: string }> = {
    pt: {
      button: "Ver Cartilha",
      viewPdf: "Ver cartilha em PDF",
      viewDownload: "Ver e baixar cartilha",
      downloadPdf: "Baixar PDF da cartilha"
    },
    en: {
      button: "View Guide",
      viewPdf: "View guide as PDF",
      viewDownload: "View and download guide",
      downloadPdf: "Download PDF guide"
    },
    es: {
      button: "Ver Guía",
      viewPdf: "Ver guía en PDF",
      viewDownload: "Ver y descargar guía",
      downloadPdf: "Descargar PDF de la guía"
    },
    fr: {
      button: "Voir le Guide",
      viewPdf: "Voir le guide en PDF",
      viewDownload: "Voir et télécharger le guide",
      downloadPdf: "Télécharger le PDF du guide"
    }
  }

  const t = translations[language] || translations.pt

  const handleViewPdf = () => {
    // Aqui você pode adicionar a lógica para abrir o PDF em uma nova aba
    console.log("Ver PDF")
  }

  const handleViewAndDownload = () => {
    // Aqui você pode adicionar a lógica para ver e baixar
    console.log("Ver e baixar")
  }

  const handleDownloadPdf = () => {
    // Aqui você pode adicionar a lógica para baixar o PDF
    console.log("Baixar PDF")
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
        <DropdownMenuItem onClick={handleViewAndDownload} className="cursor-pointer">
          <FileText className="w-4 h-4 mr-2" />
          {t.viewDownload}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownloadPdf} className="cursor-pointer">
          <Download className="w-4 h-4 mr-2" />
          {t.downloadPdf}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
