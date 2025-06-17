"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SproutIcon as Seedling, TrendingUp, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export default function TrackOverview() {
  const { isRTL, t } = useLanguage()

  const tracks = [
    {
      icon: Seedling,
      title: t("wadiSeed"),
      subtitle: t("wadiSeedSubtitle"),
      description: t("wadiSeedDesc"),
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: t("wadiScale"),
      subtitle: t("wadiScaleSubtitle"),
      description: t("wadiScaleDesc"),
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: t("wadiVault"),
      subtitle: t("wadiVaultSubtitle"),
      description: t("wadiVaultDesc"),
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("trackOverviewTitle")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("trackOverviewDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card key={index} className={cn(track.color, "border-2 hover:shadow-lg transition-shadow")}>
              <CardHeader className={cn("text-center pb-4", isRTL && "text-right")}>
                <div
                  className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", track.color)}
                >
                  <track.icon className={cn("w-8 h-8", track.iconColor)} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{track.title}</CardTitle>
                <p className="text-sm font-medium text-gray-600">{track.subtitle}</p>
              </CardHeader>
              <CardContent className={cn("text-center", isRTL && "text-right")}>
                <p className="text-gray-600 mb-6">{track.description}</p>
                <Button variant="outline" className="w-full">
                  {t("learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
