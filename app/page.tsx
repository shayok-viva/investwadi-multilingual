import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import HowItWorks from "@/components/sections/HowItWorks"
import TrackOverview from "@/components/sections/TrackOverview"
import Testimonials from "@/components/sections/Testimonials"
import Blog from "@/components/sections/Blog"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/layout/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { unstable_ViewTransition as ViewTransition } from "react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen">
      <ViewTransition >
        <LanguageProvider>
          <div className="relative">
            <Header />
            <div className="hidden lg:block absolute top-0 left-0 z-50"
            >
              <img

                src="/images/hero-line-left.svg"
                alt="line"
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="hidden lg:block absolute top-44 right-1 z-30"
            >
              <img

                src="/images/hero-line-right.svg"
                alt="line"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
          <main className="relative overflow-hidden">
            <div className="bg-gradient-to-tr from-[#FFF9F3] to-[#FFF9F3]">
              <Hero />
              <div className="shape-blob-yellow-container mix-blend-multiply filter rounded-full blur-[100px]">
                <div role="presentation" className={cn("shape-blob-yellow")} />
              </div>
              <div className="hidden lg:block shape-blob-green-container mix-blend-multiply filter rounded-full blur-[120px] divide-opacity-50">
                <div role="presentation" className={cn("shape-blob-green")} />
              </div>
              <About />
            </div>
            <HowItWorks />
            <TrackOverview />
            <Testimonials />
            <Blog />
            <FAQ />
          </main>
          <Footer />
        </LanguageProvider>
      </ViewTransition>
    </div>
  )
}
