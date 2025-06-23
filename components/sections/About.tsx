"use client"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { features } from "@/data/about-data"

export default function About() {
  const { isRTL, t } = useLanguage()
  return (
    <section id="about" className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={cn("grid lg:grid-cols-2 gap-12 xl:gap-[70px] items-start", isRTL && "lg:grid-flow-col-dense")}>
          {/* Images */}
          <div className={cn("relative", isRTL && "lg:col-start-2")}>
            <div className="relative h-[446px] w-full aspect-video">
              <Image
                src="/images/about-section.png"
                alt="Entrepreneur working"
                priority
                objectFit="cover"
                fill
                className="rounded-[20px] top-0 absolute"
              />
              <Image
                src="/images/about-section-sub-image.png"
                alt="Investment discussion"
                width={362}
                height={241}
                objectFit="contain"
                className="absolute top-[286.32px] left-[239.5px] border-t-8 border-l-8 rounded-[46px] border-white object-cover"
              />
            </div>
          </div>
          {/* Content */}
          <div className={cn("space-y-8 z-30 mt-4 xl:mt-9", isRTL ? "lg:col-start-1 text-right" : "text-left")}>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{t("aboutUs")}</h2>
              <p className="text-lg text-gray-600">{t("aboutDescription1")}</p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={cn("flex items-start space-x-4 py-[25px] px-[30px] rounded-[10px] ", isRTL && "space-x-reverse flex-row-reverse")}
                  style={{ backgroundColor: `${feature.backgroundColor }`}}
                >
                  <div className={cn(isRTL ? "text-right" : "text-left")}>
                    <h3 className={cn("text-lg font-semibold mb-1")}
                      style={{
                        color: `${feature.titleColor}`,
                      }}
                    >{t(feature.title)}</h3>
                    <p>{t(feature.description)}</p>
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
