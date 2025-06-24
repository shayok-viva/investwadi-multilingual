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
              <div className="shape-blob-yellow-container rounded-full blur-[200px] z-10">
                <div role="presentation" className={cn("shape-blob-yellow")} />
              </div>
              <div className="hidden lg:block shape-blob-green-container blur-[180px] z-10 rounded-full">
                <div role="presentation" className={cn("shape-blob-green")} />
              </div>
            </div>
            <About />
            <div className="relative overflow-x-hidden !z-20">
              <HowItWorks />
              <div className="hidden lg:block absolute top-[34rem] left-0 z-20"
            >
              <img
                src="/images/left-line-hiw.svg"
                alt="line"
                className="object-cover w-full h-auto"
              />
            </div>
                <div className="hidden lg:block absolute top-20 right-0 z-20"
            >
              <img
                src="/images/right-line-hiw.svg"
                alt="line"
                className="object-cover w-full h-auto"
              />
            </div>
            {/* <div className="hidden lg:block absolute top-44 right-1 z-30"
            >
              <img

                src="/images/left-line-hiw.svg"
                alt="line"
                className="object-contain w-full h-auto"
              />
            </div> */}
              <div className="hidden lg:block shape-blob-green-container-hiw  z-10 rounded-full">
                <div role="presentation" className={cn("shape-blob-green-hiw")} />
              </div>
                <div className="shape-blob-yellow-container-hiw rounded-full z-10 ">
                <div role="presentation" className={cn("shape-blob-yellow-hiw")} />
              </div>
              <TrackOverview />

            </div>
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
