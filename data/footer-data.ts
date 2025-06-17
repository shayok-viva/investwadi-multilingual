import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export const footerSections = [
    {
        title: "aboutUs",
        links: [
            { name: "ourMission", href: "#" },
            { name: "ourTeam", href: "#" },
            { name: "careers", href: "#" },
            { name: "press", href: "#" },
        ],
    },
    {
        title: "الاستثمارات",
        links: [
            { name: "browseOpportunities", href: "#" },
            { name: "investmentTracks", href: "#" },
            { name: "dueDiligence", href: "#" },
            { name: "portfolioManagement", href: "#" },
        ],
    },
    {
        title: "قانوني",
        links: [
            { name: "privacyPolicy", href: "#" },
            { name: "termsOfService", href: "#" },
            { name: "cookiePolicy", href: "#" },
            { name: "compliance", href: "#" },
        ],
    },
    {
        title: "أخبار",
        links: [
            { name: "blog", href: "#" },
            { name: "pressReleases", href: "#" },
            { name: "newsletter", href: "#" },
            { name: "events", href: "#" },
        ],
    },
]

export const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
]