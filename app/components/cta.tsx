import { Button } from "~/components/ui/button"
import { Zap, TrendingUp } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <p className="text-gray-300 mb-4">Let us earn your trust</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Starting With Just <span className="text-yellow-400">$49</span>
              </h2>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">Start Now</Button>
            </div>

            {/* Decorative Circle */}
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full mx-auto flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <Zap className="w-12 h-12 text-blue-600" />
                  <TrendingUp className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
