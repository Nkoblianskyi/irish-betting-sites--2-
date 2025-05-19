"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Award, Star, ChevronRight, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSites, setTopSites] = useState(bettingSites)

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-3">
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-2xl overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-2 md:py-4 px-3 md:px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-1 md:gap-2">
            <Award className="h-4 w-4 md:h-6 md:w-6 text-yellow-300" />
            <h2 className="text-sm md:text-xl font-bold">PREMIUM BETTING OFFERS</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-transform duration-300 hover:rotate-90 transform bg-white/20 rounded-full p-1"
            aria-label="Close"
          >
            <X className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>

        <>
          {/* Desktop view - show all sites in grid */}
          <div className="hidden md:block p-6">
            <p className="text-center text-gray-600 mb-6 text-base">
              Exclusive offers from Ireland's top-rated betting platforms - available for a limited time only!
            </p>
            <div className="grid grid-cols-3 gap-6">
              {topSites.map((site, index) => (
                <Card
                  key={site.id}
                  className={`overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                    index === 0 ? "border-2 border-indigo-500 relative" : "border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {index === 0 && (
                    <div className="absolute -right-8 top-6 bg-indigo-600 text-white px-10 py-1 text-xs font-bold transform rotate-45 shadow-md">
                      TOP PICK
                    </div>
                  )}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 flex items-center justify-between border-b">
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1 rounded-full">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={80}
                          height={40}
                          className="object-contain h-8 w-auto"
                        />
                      </div>
                      <span className="font-bold text-base text-gray-800">{site.name}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-sm">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="font-bold text-sm">{site.score.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="bg-indigo-50 text-indigo-700 mb-2 text-xs">
                        WELCOME OFFER
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-800">{site.bonus}</h3>
                    </div>

                    <div className="space-y-2 mb-6">
                      {site.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-indigo-500 mr-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="relative">
                      <Button
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink text-base py-6"
                        onClick={() => window.open(site.link, "_blank")}
                      >
                        <Gift className="mr-2 h-5 w-5" /> CLAIM BONUS
                      </Button>
                      <div className="absolute -top-1 -right-1">
                        <Image
                          src="/images/18-plus.png"
                          alt="18+"
                          width={24}
                          height={24}
                          className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-3">18+. T&Cs Apply. Play Responsibly.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile view - show all sites in a compact list with more content */}
          <div className="block md:hidden p-2">
            <p className="text-center text-gray-600 mb-2 text-[10px]">
              Exclusive offers from top-rated betting platforms!
            </p>

            <div className="space-y-2">
              {topSites.map((site, index) => (
                <div
                  key={site.id}
                  className={`bg-white rounded-lg border ${
                    index === 0 ? "border-indigo-500" : "border-gray-200"
                  } overflow-hidden`}
                >
                  <div className="p-2 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
                    <div className="flex items-center">
                      {/* Logo and name */}
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="bg-white p-1 rounded-full mr-2 flex-shrink-0">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={70}
                            height={35}
                            className="object-contain h-8 w-auto"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center">
                            <span className="font-bold text-sm text-gray-800 truncate">{site.name}</span>
                            {index === 0 && (
                              <span className="ml-1 bg-indigo-600 text-white text-[9px] px-1 py-0.5 rounded">
                                TOP PICK
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">{site.score.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bonus */}
                      <div className="text-right ml-2">
                        <p className="text-[9px] text-indigo-600 font-semibold uppercase">WELCOME OFFER</p>
                        <p className="text-sm font-bold text-gray-800">{site.bonus}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      {site.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-[10px] text-gray-600">
                          <ChevronRight className="h-3 w-3 text-indigo-500 mr-0.5 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="relative">
                      <Button
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs h-8 animate-glow animate-blink"
                        onClick={() => window.open(site.link, "_blank")}
                      >
                        <Gift className="mr-1 h-3 w-3" /> CLAIM BONUS
                      </Button>
                      <div className="absolute -top-1 -right-1">
                        <Image src="/images/18-plus.png" alt="18+" width={18} height={18} className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="text-[9px] text-center text-gray-500 mt-1">18+. T&Cs Apply.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
