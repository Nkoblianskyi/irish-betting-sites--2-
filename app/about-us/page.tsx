import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | Best Irish Betting Sites",
  description: "Learn about our mission to provide the most reliable information on Irish betting sites.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="pt-28 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">About 10BestBettingIrishSite.com</h1>

          <div className="prose max-w-4xl">
            <h2>Our Vision</h2>
            <p>
              At 10BestBettingIrishSite.com, we've established ourselves as Ireland's premier destination for betting
              platform evaluation. In today's overwhelming marketplace, our specialized team cuts through the noise to
              identify truly exceptional betting experiences tailored specifically for Irish punters.
            </p>

            <h2>Our Assessment Framework</h2>
            <p>
              Behind every recommendation lies a comprehensive evaluation protocol developed by industry veterans. We
              scrutinize each platform across multiple dimensions: security infrastructure, promotional generosity,
              market variety, interface design, mobile optimization, payment processing efficiency, and customer service
              responsiveness.
            </p>
            <p>
              Our commitment to integrity means we exclusively feature operators holding valid Irish gambling licenses,
              ensuring they meet stringent regulatory standards for player protection, fair gaming practices, and
              responsible gambling measures.
            </p>

            <h2>Our Foundational Values</h2>
            <ul>
              <li>
                <strong>Authenticity:</strong> We provide transparent insights into our evaluation methodology, ensuring
                you understand exactly how we arrive at our recommendations.
              </li>
              <li>
                <strong>Editorial Independence:</strong> Our assessments remain untainted by commercial considerations,
                guaranteeing genuine, user-focused guidance.
              </li>
              <li>
                <strong>Timeliness:</strong> The betting landscape evolves rapidly, and so do our reviews—we
                continuously reassess platforms to ensure our guidance remains current.
              </li>
              <li>
                <strong>Player Welfare:</strong> We advocate for responsible gambling practices and provide resources
                for those seeking assistance with gambling-related concerns.
              </li>
            </ul>

            <h2>Our Expert Team</h2>
            <p>
              Our collective brings together diverse expertise spanning sports analytics, digital security, user
              experience design, and gambling regulation. United by a passion for the Irish betting landscape, we
              combine technical knowledge with practical betting experience to deliver insights that genuinely enhance
              your wagering decisions.
            </p>

            <h2>Our Revenue Model</h2>
            <p>
              We maintain a commitment to providing free, high-quality information to our visitors. Our operations are
              sustained through affiliate partnerships with betting operators, who provide compensation when users
              register through our referral links. This model allows us to deliver premium content without subscription
              fees or paywalls.
            </p>
            <p>
              Crucially, these commercial arrangements never influence our platform evaluations. Our ranking methodology
              remains strictly merit-based, with each recommendation reflecting genuine platform quality rather than
              commercial considerations.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
