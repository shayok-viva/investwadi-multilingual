"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isRTL, t } = useLanguage()

  const testimonials = [
    {
      quote: t("gameChanger"),
      content: t("testimonial1"),
      author: "Ahmed K.",
      role: t("founderCEO"),
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: t("exceptionalExperience"),
      content: t("testimonial2"),
      author: "Sarah M.",
      role: t("angelInvestor"),
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: t("seamlessProcess"),
      content: t("testimonial3"),
      author: "David L.",
      role: t("investmentManager"),
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("testimonialsTitle")}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className={cn("text-center", isRTL && "text-right")}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{testimonials[currentIndex].quote}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{testimonials[currentIndex].content}</p>
                <div className={cn("flex items-center justify-center space-x-4", isRTL && "space-x-reverse")}>
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className={cn("text-left", isRTL && "text-right")}>
                    <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={cn("flex justify-center space-x-4 mt-8", isRTL && "space-x-reverse")}>
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0"
              aria-label="Previous testimonial"
            >
              {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0"
              aria-label="Next testimonial"
            >
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>

          <div className={cn("flex justify-center space-x-2 mt-4", isRTL && "space-x-reverse")}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-green-600" : "bg-gray-300",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
