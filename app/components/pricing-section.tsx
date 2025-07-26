import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px] ">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="lg:text-[40px]  md:text-3xl font-medium text-gray-900 mb-4">
            Simple Plans, Transparent Pricing
          </h1>
          <p className="text-gray-600 text-xl  mx-auto">
            No hidden fees. No surprises. Just honest SEO audits tailored to
            your needs.
          </p>
        </div>
        {/* Pricing Cards */}
        <section className="bg-white mt-32 rounded-[34px] ">
          <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {/* Essential Plan - Plain */}
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-500 ml-2">/One time</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Essential
                </h3>
                <p className="text-gray-600">
                  Quick, actionable SEO insights to build your foundation.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "1-hour SEO audit by our expert team",
                  "Technical SEO check (indexing, on-page issues, etc.)",
                  "Quick UI/UX feedback for improved user flow",
                  "List of top-priority fixes",
                  "Delivered within 7 business days",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full py-3 text-blue-600 border-blue-600 hover:bg-blue-50 rounded-full font-semibold bg-transparent"
              >
                Choose Plan
              </Button>
            </div>

            {/* Pro Plan - Card Style */}
            <div className="relative z-10 lg:-mt-[66px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl h-full transform scale-105 shadow-2xl text-white">
              {/* Badge */}
              <div className="pt-[88px] px-[40px]">
                <div className="absolute top-8 right-0 transform -translate-x-1/2">
                  <div className="bg-[#003CC3] text-[#FFC728] px-[20px] py-[6px] rounded-[20px] text-sm font-semibold">
                    MOST POPULAR
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">$79</span>
                    <span className="text-blue-100 ml-2">/One time</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Pro</h3>
                  <p className="text-blue-100">
                    For growing sites that want deeper SEO analysis.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    "2-hour audit reviewed by two senior SEO specialists",
                    "Deeper technical SEO checks",
                    "UI/UX suggestions based on user intent",
                    "Actionable recommendations with light prioritization",
                    "Delivered within 10 business days",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white">{text}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full py-3 bg-white text-blue-600 hover:bg-gray-50 rounded-full font-semibold">
                  Choose Plan
                </Button>
              </div>
            </div>

            {/* Premium Plan - Plain */}
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    $4999
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Premium
                </h3>
                <p className="text-gray-600">
                  A full, in-depth audit for serious businesses ready to scale.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "50+ hours of SEO and UX analysis over 3—4 weeks",
                  "Full technical SEO audit (crawling, indexing, Core Web Vitals, schema, etc.)",
                  "Competitor analysis & strategic gap mapping",
                  "Custom SEO growth blueprint with action plan",
                  "Priority support",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              <Button
                disabled
                className="w-full py-3 bg-gray-300 text-gray-500 rounded-full font-semibold cursor-not-allowed"
              >
                Sold Out
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
