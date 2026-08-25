import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGridSection from "@/components/sections/portfolio/PortfolioGridSection";
import CaseStudyDetailSection from "@/components/sections/portfolio/CaseStudyDetailSection";
import PortfolioStatsSection from "@/components/sections/portfolio/PortfolioStatsSection";
import PortfolioFAQSection from "@/components/sections/portfolio/PortfolioFAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Soniez Infotech IT Solutions",
  description:
    "Explore Soniez Infotech's portfolio of custom software engineering, intelligent CRM platforms, AI workflow automations, and digital lead generation campaigns for clients in Australia and globally.",
  keywords: [
    "Soniez Infotech Portfolio",
    "Software Engineering Case Studies",
    "Custom CRM Case Study Australia",
    "AI Automation Success Stories",
    "Web Application Portfolio",
    "Digital Marketing Case Studies",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Soniez Infotech",
    description:
      "Verified case studies demonstrating custom software platforms, high-conversion CRMs, AI automation, and ROI growth delivered for clients.",
    url: "https://soniezinfotech.com/portfolio",
    siteName: "Soniez Infotech",
    type: "website",
    images: [
      {
        url: "/images/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Soniez Infotech Case Studies & Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Soniez Infotech",
    description:
      "Verified case studies demonstrating custom software, intelligent CRMs, and AI automation.",
    images: ["/images/og-portfolio.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Portfolio Hero Banner */}
        <PortfolioHero />

        {/* Filterable Case Studies Grid */}
        <PortfolioGridSection />

        {/* Deep-Dive Case Study Spotlight */}
        <CaseStudyDetailSection />

        {/* Quantified Business ROI Stats */}
        <PortfolioStatsSection />

        {/* Frequently Asked Questions */}
        <PortfolioFAQSection />

        {/* Action Trigger Banner */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
