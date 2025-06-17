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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ViewTransition >
        <LanguageProvider>
          <Header />
          <main>
            <Hero />
            <About />
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
