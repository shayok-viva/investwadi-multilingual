"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/lib/utils"
import { blogPosts } from "@/data/blog-data"

export default function Blog() {
  const { isRTL, t } = useLanguage()

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center mb-16", isRTL && "text-right")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t("readOurBlog")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("blogDescription")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div
                  className={cn(
                    "flex items-center space-x-2 text-sm text-gray-500 mb-3",
                    isRTL && "space-x-reverse flex-row-reverse",
                  )}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-green-600">{t(post.category)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{t(post.title)}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{t(post.excerpt)}</p>
                <Link
                  href="#"
                  className={cn(
                    "inline-flex items-center text-green-600 hover:text-green-700 font-medium",
                    isRTL && "flex-row-reverse",
                  )}
                >
                  <span>{t("readMore")}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4 mr-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
