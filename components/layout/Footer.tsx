"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { footerSections, socialLinks } from "@/data/footer-data"

export default function Footer() {
  const { isRTL, t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link href="/" className={cn("flex items-center space-x-2 mb-4", isRTL && "space-x-reverse")}>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IW</span>
              </div>
              <span className="text-xl font-bold">InvestWadi</span>
            </Link>
            <p className={cn("text-gray-400 mb-6 max-w-sm", isRTL && "text-right")}>{t("footerDescription")}</p>
            <div className={cn("flex space-x-4", isRTL && "space-x-reverse")}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className={cn("font-semibold mb-4", isRTL && "text-right")}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-gray-400 hover:text-white transition-colors text-sm",
                        isRTL && "text-right block",
                      )}
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className={cn("flex flex-col md:flex-row justify-between items-center", isRTL && "md:flex-row-reverse")}>
            <p className={cn("text-gray-400 text-sm", isRTL && "text-right")} suppressHydrationWarning>
              © 2024 InvestWadi. {t("allRightsReserved")}
            </p>
            <div className={cn("flex space-x-6 mt-4 md:mt-0", isRTL && "space-x-reverse")}>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("privacyPolicy")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("termsOfService")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("cookieSettings")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
