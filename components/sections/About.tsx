"use client"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { features } from "@/data/about-data"

export default function About() {
  const { isRTL, t } = useLanguage()

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("grid lg:grid-cols-2 gap-12 items-center", isRTL && "lg:grid-flow-col-dense")}>
          {/* Images */}
          <div className={cn("relative", isRTL && "lg:col-start-2")}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Entrepreneur working"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Business meeting"
                  width={250}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="pt-8">
                <Image
                  src="/placeholder.svg?height=400&width=250"
                  alt="Investment discussion"
                  width={250}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={cn("space-y-8", isRTL ? "lg:col-start-1 text-right" : "text-left")}>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t("aboutUs")}</h2>
              <p className="text-lg text-gray-600">{t("aboutDescription1")}</p>
              <p className="text-gray-600">{t("aboutDescription2")}</p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn("flex items-start space-x-4", isRTL && "space-x-reverse flex-row-reverse")}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className={cn(isRTL ? "text-right" : "text-left")}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t(feature.title)}</h3>
                    <p className="text-gray-600">{t(feature.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
