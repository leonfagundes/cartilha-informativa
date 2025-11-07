// Exemplos de uso dos componentes e hooks

// 1. Usar o hook useTranslations em qualquer componente
import { useTranslations } from "@/hooks/use-translations"

export function ExemploComponente({ language }: { language: string }) {
  const { translations, loading } = useTranslations(language)

  if (loading) return <div>Carregando...</div>

  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
    </div>
  )
}

// 2. Componente responsivo completo
export function ExemploResponsivo() {
  return (
    <div className="
      container mx-auto 
      px-4 sm:px-6 lg:px-8
      py-8 sm:py-12 lg:py-16
      w-full
      min-h-screen
    ">
      <div className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-4 md:gap-6 lg:gap-8
      ">
        {/* Conteúdo aqui */}
      </div>
    </div>
  )
}

// 3. Classes úteis para responsividade
/*
Mobile First (Tailwind):
- Base (mobile): sem prefixo
- sm: 640px+
- md: 768px+
- lg: 1024px+
- xl: 1280px+
- 2xl: 1536px+

Exemplos:
- text-sm md:text-base lg:text-lg
- p-4 md:p-6 lg:p-8
- flex-col md:flex-row
- hidden md:block
- w-full md:w-1/2 lg:w-1/3
*/

// 4. Tema escuro/claro
/*
Use as classes dark: para estilizar no modo escuro:
- bg-white dark:bg-gray-900
- text-gray-900 dark:text-white
- border-gray-200 dark:border-gray-700
*/
