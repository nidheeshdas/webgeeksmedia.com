import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px] ">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[40px] font-medium text-gray-900 mb-4">
            Simple Plans, Transparent Pricing
          </h1>
          <p className="text-gray-600 text-xl  mx-auto">
            No hidden fees. No surprises. Just honest SEO audits tailored to
            your needs.
          </p>
        </div>
        {/* Pricing Cards */}
        <section className="mx-auto md:w-m-[1200px] md:h-max-[765px] bg-white mt-32 rounded-[34px] py-[55px] px-[49px]">
          <div className="flex flex-col md:flex-row gap-15">
            {/* Essential Plan - Plain */}
            <div className="grid gap-[27px] basis-full md:basis-[30%]">
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-[#231D4F]">$49</span>
                  <span className="text-[#848199] ml-2 text-[22px]">
                    /One time
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-[40px] font-bold text-[#231D4F] mb-3">
                  Essential
                </h3>
                <p className="text-[#848199] text-xl font-medium">
                  Quick, actionable SEO insights to build your foundation.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "1-hour SEO audit by our expert team",
                  "Technical SEO check (indexing, on-page issues, etc.)",
                  "Quick UI/UX feedback for improved user flow",
                  "List of top-priority fixes",
                  "Delivered within 7 business days",
                ].map((text, i) => (
                  <div key={i} className="flex items-start mb-[20px]">
                    <Check
                      enableBackground={"red"}
                      className="w-5 h-5 text-blue-600  mt-0.5 mr-[13px] flex-shrink-0"
                    />

                    <div className="text-[#848199] text-xl font-medium leading-lg">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-[2px] mt-[7px] h-[54px] rounded-[30px] bg-gradient-to-r from-[#E67474] to-[#AA3FFE] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                <button
                  onClick={() =>
                    (window.location.href = "/mailer/pay.php?plan=essential")
                  }
                  className="w-full py-1 px-8 cursor-pointer text-[#0037B1] text-center font-bold text-[20px] leading-none  hover:bg-blue-50 rounded-[31.858px] bg-white w-m-[297px] h-[50px]"
                >
                  Choose Plan
                </button>{" "}
              </div>
            </div>

            <div className="relative md:mb-[102px] my-8 lg:my-0 pt-[88px] px-[40px] pb-[42px] grid gap-[27px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl transform scale-105 shadow-2xl basis-full md:basis-[40%] md:-mt-[102px]  lg:-mt-[110px] lg:mb-[50px]">
              <div className="stripeSet">
                <div className="stripe stripe-1">
                  <div className="stripe stripe-2">
                    <div className="stripe stripe-3">
                      <div className="stripe stripe-4">
                        <div className="stripe stripe-5">
                          <div className="stripe stripe-6">
                            <div className="stripe stripe-7">
                              <div className="stripe stripe-8">
                                <div className="stripe stripe-9">
                                  <div className="stripe stripe-10">
                                    <div className="stripe stripe-11">

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="bg-[#003CC3] text-[#FFC728] px-[20px] py-[6px] rounded-[20px] text-sm font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$79</span>
                  <span className="text-white ml-2 text-[22px]">/One time</span>
                </div>
              </div>
              <div>
                <h3 className="text-[40px] font-bold text-white mb-3">Pro</h3>
                <p className="text-white text-xl font-medium">
                  For growing sites that want deeper SEO analysis.{" "}
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "2-hour audit reviewed by two senior SEO specialists",
                  "Deeper technical SEO checks",
                  "UI/UX suggestions based on user intent",
                  "Actionable recommendations with light prioritization",
                  "Delivered within 10 business days",
                ].map((text, i) => (
                  <div key={i} className="flex items-start mb-[20px]">
                    <Check
                      enableBackground={"red"}
                      className="w-5 h-5 text-white  mt-0.5 mr-[13px] flex-shrink-0"
                    />

                    <div className="text-[white] text-xl font-medium leading-lg">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-[2px] mt-[7px] h-[54px] rounded-[30px]  shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                <button
                  onClick={() =>
                    (window.location.href = "/mailer/pay.php?plan=pro")
                  }
                  className="w-full py-1 px-20 cursor-pointer text-[#0037B1] text-center font-bold text-[20px] leading-none  hover:bg-blue-50 rounded-[31.858px]  bg-white w-m-[297px] h-[50px]"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Premium Plan - Plain */}
            <div className="grid gap-[27px] basis-full md:basis-[30%] lg:pl-4">
              <div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold line-through text-[#231D4F]">
                    $4999
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-[40px] font-bold text-[#231D4F] mb-3">
                  Premium{" "}
                </h3>
                <p className="text-[#848199] text-xl font-medium">
                  A full, in-depth audit for serious businesses ready to scale.{" "}
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "50+ hours of SEO and UX analysis over 3—4 weeks",
                  "Full technical SEO audit (crawling, indexing, Core Web Vitals, schema, etc.)",
                  "Competitor analysis & strategic gap mapping",
                  "Custom SEO growth blueprint with action plan",
                  "Priority support",
                ].map((text, i) => (
                  <div key={i} className="flex items-start mb-[20px]">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-[13px] flex-shrink-0" />
                    <div className="text-[#848199] text-xl font-medium leading-lg">
                      {text}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                disabled={true}
                className="w-full py-1 px-20 cursor-pointer text-[#646464] text-center font-bold text-[20px] leading-none bg-[#E4E4E4] hover:bg-blue-50 rounded-[31.858px] border-2 border-[#E4E4E4] mt-[7px] w-m-[297px] h-[50px]"
              >
                <span className="text-[20px] font-bold">Sold Out</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
