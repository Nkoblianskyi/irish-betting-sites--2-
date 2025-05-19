"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Star, Gift, Award, Clock } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  return (
    <section className="pt-4 md:pt-8 pb-8 md:pb-16 relative z-10">
      {/* Animated background with more visible effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        {/* Animated floating icons - these will be visible */}
        <div className="absolute top-10 left-5 w-8 h-8 bg-indigo-500 opacity-10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/4 right-10 w-12 h-12 bg-purple-500 opacity-15 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-indigo-600 opacity-10 rounded-full animate-bounce"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-6 h-6 bg-purple-600 opacity-15 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-8 h-8 bg-indigo-400 opacity-10 rounded-full animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <div className="absolute top-0 left-0 w-full h-full border-t border-l border-indigo-200 opacity-20 transform -rotate-12"></div>
          <div className="absolute top-0 left-0 w-full h-full border-b border-r border-purple-200 opacity-20 transform rotate-12"></div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-2">
        <div className="text-center mb-2 md:mb-2">
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 mb-1">
            EXPERT REVIEWED
          </Badge>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 animate-fade-in">
            Top-Rated Irish Betting Platforms
          </h2>
        </div>

        <div className="w-full space-y-4 md:space-y-6">
          {sites.map((site, index) => (
            <div
              key={site.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
                {/* Logo and Rating Section */}
                <div className="md:col-span-3 bg-gradient-to-r from-indigo-50 to-purple-50 p-3 md:p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="relative">
                    {index === 0 && (
                      <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6">
                        <div className="bg-indigo-600 text-white text-[10px] md:text-xs font-bold rounded-full p-1 md:p-2 shadow-md flex items-center">
                          <Award className="h-3 w-3 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                          #1 RATED
                        </div>
                      </div>
                    )}
                    <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm mb-2 md:mb-3">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={150}
                        height={60}
                        className="object-contain h-12 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 md:h-5 md:w-5 text-yellow-400 transition-transform duration-300 hover:scale-125"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <span className="text-lg md:text-2xl font-bold text-gray-800">{site.score.toFixed(1)}</span>
                      <span className="text-[10px] md:text-xs text-gray-500">
                        ({Math.floor(Math.random() * 1000) + 2000} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="md:col-span-5 p-3 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <h3 className="font-bold text-base md:text-lg text-gray-800">{site.name}</h3>
                    <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 ml-auto text-[10px] md:text-xs">
                      <Clock className="h-2 w-2 md:h-3 md:w-3 mr-0.5 md:mr-1" /> Fast Payouts
                    </Badge>
                  </div>

                  <div className="mb-2 md:mb-4">
                    <p className="text-[10px] md:text-xs text-indigo-600 uppercase font-semibold">WELCOME OFFER</p>
                    <p className="font-bold text-base md:text-xl text-gray-800">{site.bonus}</p>
                    {site.bonusCode && (
                      <div className="mt-1">
                        <span className="text-[10px] md:text-xs text-gray-500">Bonus Code:</span>{" "}
                        <span className="font-mono bg-gray-100 px-1 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs">
                          {site.bonusCode}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    {site.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-[10px] md:text-sm group">
                        <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-indigo-600 mr-1 md:mr-2 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                        <span className="group-hover:text-indigo-600 transition-colors duration-300 text-gray-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="md:col-span-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-3 md:p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-100">
                  <div className="w-full max-w-xs">
                    <div className="relative mb-3 md:mb-6">
                      <Button
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-sm md:text-base py-4 md:py-6"
                        onClick={() => window.open(site.link, "_blank")}
                      >
                        <Gift className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" /> CLAIM BONUS
                      </Button>
                      <div className="absolute -top-1 -right-1">
                        <Image
                          src="/images/18-plus.png"
                          alt="18+"
                          width={24}
                          height={24}
                          className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] md:text-xs text-center text-gray-500">
                      18+. T&Cs Apply. Play Responsibly.
                    </p>

                    <div className="mt-2 md:mt-4 text-center">
                      <a
                        href={site.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 text-xs md:text-sm font-medium hover:underline"
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
