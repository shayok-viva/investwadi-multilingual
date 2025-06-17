"use client"

import { UserPlus, FileText, Shield, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export default function HowItWorks() {
  const { isRTL, t } = useLanguage()

  const steps = [
    {
      icon: UserPlus,
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
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("howItWorksDescription")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className={cn("text-center", isRTL && "text-right")}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "hidden lg:block absolute top-8 w-full h-0.5 bg-gray-300 -translate-y-1/2",
                      isRTL ? "right-full" : "left-full",
                    )}
                  ></div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            {t("exploreNow")}
          </Button>
        </div>
      </div>
    </section>
  )
}
