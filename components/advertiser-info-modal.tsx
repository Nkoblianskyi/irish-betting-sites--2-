"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in p-4">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-3 md:p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="bg-indigo-600 p-1 rounded-full mr-2">
              <Info className="h-3 w-3 md:h-5 md:w-5 text-white" />
            </div>
            <h2 className="text-base md:text-xl font-bold">Advertiser Info</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:rotate-90 transform"
            aria-label="Close"
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
        <div className="text-xs md:text-base text-gray-700 space-y-2">
          <p>
            10BestBettingIrishSites.com is a free service to help you find betting platforms. We receive fees from
            featured brands, affecting their placement.
          </p>
          <p>
            All featured sites are licensed by reputable authorities. We strive for accuracy but cannot be held
            responsible for inaccuracies.
          </p>
          <p>
            Bonuses and offers are subject to change. Always read the full terms on the operator's website before
            claiming.
          </p>
        </div>
        <div className="mt-3 md:mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:shadow-md text-xs md:text-base py-1.5 px-3 md:py-2 md:px-4"
          >
            Got It
          </Button>
        </div>
      </div>
    </div>
  )
}
