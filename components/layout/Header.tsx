"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navbar-data"
import { useTransition } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [_pending, startTransition] = useTransition()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    startTransition(() => {
      setLanguage(language === "ar" ? "en" : "ar")
    })
  }

  return (
    <header className="bg-gradient-to-tr from-[#FFF9F3] to-[#FFF9F3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("flex justify-between items-center h-16", isRTL && "flex-row-reverse")}>
          <div className="flex items-center">
            <Link href="/" className={cn("flex items-center space-x-2", isRTL && "space-x-reverse")}>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IW</span>
              </div>
              <span className="text-xl font-bold text-gray-900">InvestWadi</span>
            </Link>
          </div>
          <nav className={cn("hidden md:flex space-x-8", isRTL && "space-x-reverse")}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>

          <div className={cn("hidden md:flex items-center space-x-4", isRTL && "space-x-reverse")}>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={cn("flex items-center space-x-1", isRTL && "space-x-reverse")}
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            <Button variant="ghost" size="sm">
              {t("login")}
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              {t("getStarted")}
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                  {language === "ar" ? "English" : "العربية"}
                </Button>
                <Button variant="ghost" size="sm">
                  {t("login")}
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  {t("getStarted")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
