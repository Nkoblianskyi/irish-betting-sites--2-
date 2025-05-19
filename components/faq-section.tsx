"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqs = [
    {
      id: "faq-1",
      question: "How do we select the best Irish betting sites?",
      answer:
        "Our expert team evaluates each betting platform based on multiple criteria including licensing, security, bonus offers, odds quality, market variety, mobile compatibility, payment methods, customer support, and user experience. We only recommend sites that are fully licensed and regulated in Ireland.",
    },
    {
      id: "faq-2",
      question: "Are these betting sites legal in Ireland?",
      answer:
        "Yes, all betting sites featured on BestBettingIrishSite.com are fully licensed and regulated by the appropriate gambling authorities, making them legal for Irish residents to use. We never promote unlicensed or unregulated betting platforms.",
    },
    {
      id: "faq-3",
      question: "What types of welcome bonuses can I expect?",
      answer:
        "Irish betting sites typically offer several types of welcome bonuses including free bets, deposit match bonuses, enhanced odds, and no-deposit bonuses. The specific offers vary by platform, but we highlight the most valuable and attainable promotions with fair terms and conditions.",
    },
    {
      id: "faq-4",
      question: "How do I claim a betting bonus?",
      answer:
        "To claim a betting bonus, typically you need to register an account with the betting site, make a qualifying deposit (if required), and sometimes enter a bonus code during registration or when depositing. Some offers may require you to place a qualifying bet. Always read the specific terms and conditions for each offer.",
    },
    {
      id: "faq-5",
      question: "What payment methods are available at Irish betting sites?",
      answer:
        "Most Irish betting sites accept a variety of payment methods including debit cards, e-wallets (PayPal, Skrill, Neteller), bank transfers, prepaid cards, and sometimes cryptocurrency. The exact options vary by platform, but we highlight sites with diverse, secure payment methods and fast processing times.",
    },
    {
      id: "faq-6",
      question: "Is mobile betting available?",
      answer:
        "Yes, all our recommended betting sites offer mobile-optimized websites, and many provide dedicated mobile apps for iOS and Android devices. Mobile betting allows you to place bets, manage your account, and access all features on the go with the same functionality as desktop platforms.",
    },
    {
      id: "faq-7",
      question: "How can I bet responsibly?",
      answer:
        "Responsible betting involves setting time and money limits, never chasing losses, not betting under the influence, taking regular breaks, and using responsible gambling tools provided by betting sites (deposit limits, time-outs, self-exclusion). If you're concerned about your gambling habits, seek support from organizations like GamCare or Gambling Therapy.",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-indigo-600 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
