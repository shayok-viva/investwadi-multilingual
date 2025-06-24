"use client"

import { UserPlus, FileText, Shield, Handshake, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { IconLogin } from "@/public/icons"

export default function HowItWorks() {
  const { isRTL, t } = useLanguage()

  const steps = [
    {
      icon: IconLogin,
      title: t("registerProfile"),
      description: t("registerProfileDesc"),
    },
    {
      icon: FileText,
      title: t("submitBrowse"),
      description: t("submitBrowseDesc"),
    },
    {
      icon: Shield,
      title: t("secureEngagement"),
      description: t("secureEngagementDesc"),
    },
    {
      icon: Handshake,
      title: t("closeDeal"),
      description: t("closeDealDesc"),
    },
  ]

  return (
    <section id="how-it-works" className="py-16 z-40 lg:py-24 bg-gradient-to-r from-[#E6F0EA]/20 to-[#e6f0ea]/0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("howItWorksDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 z-40 relative" dir="ltr">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={cn("text-left w-[286px] h-[356px] rounded-[20px] bg-white py-[30px] px-[25px] border-[#e6f0ea] border", isRTL && "text-right")}>
                <div className="relative mb-6 w-full flex justify-start ">
                  <div className="size-[50px] aspect-square bg-[#E6F0EA] rounded-full flex items-center justify-center mb-4">
                    <Icon className="size-6 text-[#066B31]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#066B31]  hover:bg-green-700">
            {t("exploreNow")}
          </Button>
        </div>
      </div>
    </section>
  )
}
