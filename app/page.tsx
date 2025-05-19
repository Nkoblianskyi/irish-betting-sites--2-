"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Star } from "lucide-react"
import { AnimatedSportsIcons } from "@/components/animated-sports-icons"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Add padding to the top to account for the fixed header */}
      <div className="pt-10">
        {/* Hero Section - Redesigned */}
        <section className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/0d9ee0445c6a4937de8392d5d7e54326.jpg"
              alt="Betting background"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-indigo-800/50"></div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white opacity-10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          <div className="container mx-auto px-2 py-4 md:py-8 relative z-10">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center">
              {/* Main heading with animation */}
              <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h1 className="text-xl md:text-xl font-bold mb-3 leading-tight">
                  IRELAND'S <span className="text-indigo-300">TOP-RATED</span> BETTING SITES
                </h1>
                <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
                  Exclusive bonuses and expert reviews to enhance your betting experience
                </p>
              </div>

              {/* Features with animation */}
              <div
                className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-4 mb-4 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex flex-col items-center group">
                  <div className="bg-indigo-600/30 p-3 rounded-full mb-2 border border-indigo-400/30 group-hover:bg-indigo-600/50 transition-all duration-300 transform group-hover:scale-110">
                    <Shield className="h-6 w-6 text-indigo-200" />
                  </div>
                  <span className="text-sm font-medium">Licensed & Secure</span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="bg-indigo-600/30 p-3 rounded-full mb-2 border border-indigo-400/30 group-hover:bg-indigo-600/50 transition-all duration-300 transform group-hover:scale-110">
                    <Award className="h-6 w-6 text-indigo-200" />
                  </div>
                  <span className="text-sm font-medium">Exclusive Bonuses</span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="bg-indigo-600/30 p-3 rounded-full mb-2 border border-indigo-400/30 group-hover:bg-indigo-600/50 transition-all duration-300 transform group-hover:scale-110">
                    <Star className="h-6 w-6 text-indigo-200" />
                  </div>
                  <span className="text-sm font-medium">Expert Reviews</span>
                </div>
              </div>

              {/* Stats with animation */}
              <div className="flex justify-center gap-8 mb-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-300">24/7</div>
                  <div className="text-xs text-gray-300">Expert Support</div>
                </div>
              </div>

              {/* Responsible gambling notice */}
              <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                <p className="text-xs text-gray-400">
                  Play responsibly. Terms and wagering conditions apply.{" "}
                  <button
                    onClick={() => setIsAdvertiserModalOpen(true)}
                    className="text-indigo-300 hover:text-indigo-200 hover:underline font-medium transition-colors duration-300"
                  >
                    Advertiser Info
                  </button>{" "}
                  |{" "}
                  <button
                    onClick={() => setIsAgeModalOpen(true)}
                    className="text-indigo-300 hover:text-indigo-200 hover:underline font-medium transition-colors duration-300"
                  >
                    18+ Only
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Betting Sites List with Animated Background */}
        <div id="betting-sites" className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatedSportsIcons />
          </div>
          <BettingSitesList />
        </div>

        {/* FAQ Section */}
        <div id="faq-section">
          <FaqSection />
        </div>

        {/* Content Sections */}
        {/* Expert Betting Guide Section - Redesigned */}
        <section className="py-12 md:py-20 relative overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 opacity-95 z-0"></div>
          <div className="absolute inset-0 bg-grid-white opacity-10 z-0"></div>

          {/* Animated accent elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent z-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent z-0"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
          <div
            className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                The Ultimate Irish Betting Guide
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto animate-fade-in-up">
                Expert insights to help you find the perfect betting platform and maximize your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                <div className="bg-indigo-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safe & Secure Betting</h3>
                <p className="text-indigo-100">
                  We only recommend fully licensed platforms with robust security measures, ensuring your personal and
                  financial information remains protected at all times.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "150ms" }}
              >
                <div className="bg-indigo-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Exclusive Bonuses</h3>
                <p className="text-indigo-100">
                  Take advantage of generous welcome offers, free bets, and ongoing promotions that provide real value
                  and enhance your betting experience from day one.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <div className="bg-indigo-600/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Insights</h3>
                <p className="text-indigo-100">
                  Our team of betting specialists continuously evaluates each platform, providing you with accurate,
                  up-to-date information to make informed decisions.
                </p>
              </div>
            </div>

            {/* Bottom section with key features */}
            <div
              className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-fade-in-up"
              style={{ animationDelay: "450ms" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Trust Our Recommendations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-indigo-100">Comprehensive testing of all platform features</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-indigo-100">Regular updates to reflect current offers and features</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-indigo-100">
                        Focus on platforms that cater specifically to Irish bettors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-indigo-100">Transparent evaluation criteria and methodology</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Getting Started</h3>
                  <p className="text-indigo-100 mb-4">
                    Finding your ideal betting platform is simple with our expert guidance:
                  </p>
                  <ol className="space-y-3 text-indigo-100">
                    <li className="flex">
                      <span className="bg-indigo-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        1
                      </span>
                      <span>Compare our top-rated platforms based on your preferences</span>
                    </li>
                    <li className="flex">
                      <span className="bg-indigo-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        2
                      </span>
                      <span>Claim your exclusive welcome bonus through our links</span>
                    </li>
                    <li className="flex">
                      <span className="bg-indigo-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        3
                      </span>
                      <span>Set up your account with responsible gambling limits</span>
                    </li>
                    <li className="flex">
                      <span className="bg-indigo-600/30 h-6 w-6 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        4
                      </span>
                      <span>Enjoy a premium betting experience with confidence</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
