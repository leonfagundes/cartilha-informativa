"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// IMPORTANTE: Adicione aqui os nomes EXATOS dos arquivos de imagem que estão em public/images/
// Exemplo: se você tem "foto1.png", "background.jpg", "img-pessoa.webp", etc.
// Adicione cada um abaixo:
const baseImages = [
  "/images/10.jpg",
  "/images/2.jpg",
  "/images/9.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
]

// Filtra apenas as imagens que carregarem com sucesso
const validImages: string[] = []

// Função para embaralhar array
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function BackgroundCarousel() {
  const [images, setImages] = useState<string[]>([])
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [currentIndex, setCurrentIndex] = useState(0)

  // Embaralhar e validar imagens no mount
  useEffect(() => {
    const shuffled = shuffleArray(baseImages)
    setImages(shuffled)
    
    // Pré-carregar e validar imagens
    shuffled.forEach((src) => {
      const img = new window.Image()
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, src]))
      }
      img.onerror = () => {
        console.warn(`Imagem não encontrada: ${src}`)
      }
      img.src = src
    })
  }, [])

  // Filtrar apenas imagens que carregaram com sucesso
  const validImagesList = images.filter((img) => loadedImages.has(img))

  useEffect(() => {
    if (validImagesList.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validImagesList.length)
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [validImagesList.length])

  // Se não há imagens válidas, mostrar gradiente
  if (validImagesList.length === 0) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      {validImagesList.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover object-center"
              style={{ objectPosition: 'center center' }}
              priority={index === 0}
              quality={85}
            />
          </div>
          {/* Overlay para reduzir opacidade e melhorar legibilidade */}
          {/* Modo claro: sem overlay (imagens aparecem 100%) */}
          {/* Modo escuro: 80% de opacidade (20% da imagem visível) */}
          <div className="absolute inset-0 dark:bg-background/80" />
        </div>
      ))}
    </div>
  )
}
