import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple Plans, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          No hidden fees. No surprises. Just honest SEO audits tailored to your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
        {/* Essential Plan */}
        <Card className="relative bg-white border border-gray-200 rounded-3xl p-8 h-full">
          <CardContent className="p-0">
            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-500 ml-2">/One time</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Essential</h3>
              <p className="text-gray-600">Quick, actionable SEO insights to build your foundation.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">1-hour SEO audit by our expert team</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Technical SEO check (indexing, on-page issues, etc.)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Quick UI/UX feedback for improved user flow</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">List of top-priority fixes</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Delivered within 7 business days</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full py-3 text-blue-600 border-blue-600 hover:bg-blue-50 rounded-full font-semibold bg-transparent"
            >
              Choose Plan
            </Button>
          </CardContent>
        </Card>

        {/* Pro Plan - Most Popular */}
        <Card className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 h-full transform scale-105 shadow-2xl">
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold">MOST POPULAR</div>
          </div>

          <CardContent className="p-0 text-white">
            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-blue-100 ml-2">/One time</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Pro</h3>
              <p className="text-blue-100">For growing sites that want deeper SEO analysis.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">2-hour audit reviewed by two senior SEO specialists</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Deeper technical SEO checks</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">UI/UX suggestions based on user intent</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Actionable recommendations with light prioritization</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Delivered within 10 business days</span>
              </div>
            </div>

            <Button className="w-full py-3 bg-white text-blue-600 hover:bg-gray-50 rounded-full font-semibold">
              Choose Plan
            </Button>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="relative bg-white border border-gray-200 rounded-3xl p-8 h-full">
          <CardContent className="p-0">
            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">$4999</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium</h3>
              <p className="text-gray-600">A full, in-depth audit for serious businesses ready to scale.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">50+ hours of SEO and UX analysis over 3—4 weeks</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Full technical SEO audit (crawling, indexing, Core Web Vitals, schema, etc.)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Competitor analysis & strategic gap mapping</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Custom SEO growth blueprint with action plan</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Priority support</span>
              </div>
            </div>

            <Button
              disabled
              className="w-full py-3 bg-gray-300 text-gray-500 rounded-full font-semibold cursor-not-allowed"
            >
              Sold Out
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
