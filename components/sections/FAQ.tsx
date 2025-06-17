"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { faqs } from "@/data/faq-data"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { isRTL, t } = useLanguage()


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("faqTitle")}</h2>
          <p className="text-lg text-gray-600">{t("faqDescription")}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors",
                  isRTL ? "text-right flex-row-reverse" : "text-left",
                )}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900">{t(faq.question)}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-4">
                  <p className={cn("text-gray-600", isRTL && "text-right")}>{t(faq.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
