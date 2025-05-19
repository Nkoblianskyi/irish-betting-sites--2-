export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "quinnbet",
    name: "QuinnBet",
    logo: "/quinn.png",
    score: 9.8,
    bonus: "BET €5 GET €20",
    features: ["Betting Exchange", "Best Odds", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://ie.mrplay.com/sport/",
    reviews: 2767, // Added mock review count
  },
  {
    id: "betiton",
    name: "betiton",
    logo: "/betiton.png",
    score: 9.7,
    bonus: "BET €10 GET €50",
    features: ["Live Streaming", "Cash Out Feature", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/sport/",
    reviews: 2583, // Added mock review count
  },
  {
    id: "mplay",
    name: "Mrplay",
    logo: "/Screenshot_1222.png",
    score: 9.6,
    bonus: "BET €10 GET €10",
    features: ["Fast Payouts", "Live Betting", "Loyalty Program"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.quinnbet.com/ie/sports",
    reviews: 2493, // Added mock review count
  }
]
