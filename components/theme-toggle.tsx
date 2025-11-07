"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-lg w-10 h-10 relative overflow-hidden hover:scale-110 transition-transform duration-200"
      title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
        isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
        isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
      }`} />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
