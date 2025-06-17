"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
export default function Hero() {
  const { isRTL, t } = useLanguage()
  // bg-gradient-to-tr from-[#DAC000]/5 to-[#DAC000]/5
  return (
    <section className="relative bg-gradient-to-br from-[#FFF9F3] to-[#FFF9F3] pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className={cn("flex flex-1 flex-col lg:flex-row justify-between items-center", isRTL && "lg:flex-row-reverse")}>
          {/* Content */}
          <div className={cn("space-y-8", isRTL ? "lg:col-start-1 text-right" : "text-left")}>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {isRTL ? (
                  <>
                    {t("heroTitle")}
                    <br />
                    <span className="text-green-600">{t("heroTitleHighlight1")}</span>
                    <br />
                    {t("heroTitleWith")} <span className="text-green-600">{t("heroTitleHighlight2")}</span>
                    <br />
                    {t("heroTitleLocal")}
                  </>
                ) : (
                  <>
                    {t("heroTitle")}
                    <br />
                    <span className="text-green-600">{t("heroTitleHighlight1")}</span> {t("heroTitleWith")}
                    <br />
                    {t("heroTitleLocal")} <span className="text-green-600">{t("heroTitleHighlight2")}</span>
                  </>
                )}
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">{t("heroDescription")}</p>
            </div>

            <div className={cn("flex flex-col sm:flex-row gap-4", isRTL && "sm:flex-row-reverse")}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                {t("getStartedNow")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={cn("flex items-center space-x-2", isRTL && "space-x-reverse")}
              >
                <Play className="w-4 h-4" />
                <span>{t("watchDemo")}</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className={cn("relative", isRTL && "lg:order-first")}>
            <div className="relative z-10 mt-8">
              <Image
                src="/images/hero-image.png"
                alt="hero"
                width={550}
                height={610}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating Stats Card */}
            {/* <div className={cn("absolute top-4 h-fit w-fit bg-white rounded-lg z-20", isRTL ? "left-4" : "right-4")}> */}
            {/* <TrendingUp className="w-5 h-5 text-green-600" />
                <div className={cn(isRTL ? "text-right" : "text-left")}>
                  <div className="text-sm font-semibold">$2.4M</div>
                  <div className="text-xs text-gray-500" suppressHydrationWarning>
                    {isRTL ? "إجمالي الاستثمار" : "Total Invested"}
                  </div>
                </div> */}
            <div role="presentation" className="shape-blob border-2 border-blue-950 absolute " />
            <img src="/icons/half-loading.svg" alt="visual" className="absolute top-0 -left-6 z-20 mb-2" />
            <Image
              src="/images/hero-revenue.png"
              alt="revenue"
              width={222}
              height={256}
              className={cn("absolute bottom-4 rounded-2xl right-[28rem] z-20 drop-shadow-lg")}
              loading="eager"
              priority
            />
            <Image
              src="/images/hero-trend.png"
              alt="revenue"
              className={cn("absolute -bottom-3 -right-3 rounded-2xl z-20 drop-shadow-lg")}
              loading="eager"
              width={260}
              height={182}
            />
            {/* </div> */}

            {/* Background Decorations */}
            {/* <div
              className={cn(
                "absolute -top-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",
                isRTL ? "-right-4" : "-left-4",
              )}
            ></div>
            <div
              className={cn(
                "absolute -bottom-8 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000",
                isRTL ? "-left-4" : "-right-4",
              )}
            ></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
