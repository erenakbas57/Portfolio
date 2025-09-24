"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10"
    >
      <Sun className={`h-[1.5rem] w-[1.5rem] transition-all ${theme === 'dark' ? 'scale-0' : 'scale-100'}`} />
      <Moon className={`absolute h-[1.5rem] w-[1.5rem] transition-all ${theme === 'dark' ? 'scale-100' : 'scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}