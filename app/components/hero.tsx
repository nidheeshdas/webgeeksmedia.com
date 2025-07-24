import { Button } from "~/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Unlock Your
          <br />
          Website's True Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          We're not just another SEO agency — we're your digital growth partner.
        </p>
        <Button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full border border-gray-200 shadow-sm">
          <Sparkles className="w-4 h-4 mr-2 text-pink-500" />
          Explore Services
        </Button>
      </div>
    </section>
  )
}
