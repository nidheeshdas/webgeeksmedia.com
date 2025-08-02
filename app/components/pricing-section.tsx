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
        <section className="mx-auto md:w-m-[1200px] md:h-max-[765px] bg-white mt-32 rounded-[34px] py-[75px] px-[49px]">
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
                  <div
                    key={i}
                    className="flex items-start mb-[20px] gap-[13px]"
                  >
                    <div className="h-[27px] w-[27px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          d="M13.2745 0C5.94324 0 0.00012207 5.94312 0.00012207 13.2743C0.00012207 20.6055 5.94324 26.5487 13.2745 26.5487C20.6057 26.5487 26.5488 20.6055 26.5488 13.2743C26.5403 5.94666 20.6021 0.00853403 13.2745 0Z"
                          fill="#5243C2"
                          fill-opacity="0.103693"
                        />
                        <path
                          d="M20.9367 9.07093L13.3648 19.3464C13.1842 19.586 12.915 19.7429 12.6175 19.7821C12.32 19.8212 12.0193 19.7391 11.783 19.5543L6.37588 15.2313C5.89874 14.8495 5.82148 14.1532 6.20331 13.676C6.58515 13.1989 7.28148 13.1216 7.75862 13.5035L12.2675 17.1108L19.1557 7.7623C19.3816 7.42335 19.7755 7.23596 20.181 7.27451C20.5865 7.31307 20.938 7.57134 21.0959 7.94679C21.2539 8.32223 21.1927 8.7541 20.9367 9.07093Z"
                          fill="#5243C2"
                        />
                      </svg>
                    </div>
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
                                    <div className="stripe stripe-11"></div>
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
              <div className="absolute top-6 right-[40px]">
                <div className="bg-[#003CC3] text-[#FFC728] px-[20px] py-[6px] rounded-[20px] text-sm font-black most-popular">
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
                  <div
                    key={i}
                    className="flex items-start mb-[20px] gap-[13px]"
                  >
                    <div className="h-[27px] w-[27px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          opacity="0.1"
                          d="M13.2743 0C5.94312 0 0 5.94312 0 13.2743C0 20.6055 5.94312 26.5487 13.2743 26.5487C20.6055 26.5487 26.5487 20.6055 26.5487 13.2743C26.5401 5.94666 20.602 0.00853403 13.2743 0Z"
                          fill="white"
                        />
                        <path
                          d="M20.9367 9.07069L13.3648 19.3461C13.1842 19.5857 12.915 19.7427 12.6175 19.7818C12.32 19.8209 12.0193 19.7389 11.783 19.5541L6.37588 15.2311C5.89874 14.8493 5.82148 14.1529 6.20331 13.6758C6.58515 13.1986 7.28148 13.1214 7.75862 13.5032L12.2675 17.1105L19.1557 7.76206C19.3816 7.42311 19.7755 7.23571 20.181 7.27427C20.5865 7.31282 20.938 7.5711 21.0959 7.94654C21.2539 8.32199 21.1927 8.75386 20.9367 9.07069Z"
                          fill="white"
                        />
                      </svg>
                    </div>
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
                  <div
                    key={i}
                    className="flex items-start mb-[20px] gap-[13px]"
                  >
                    <div className="h-[27px] w-[27px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                      >
                        <path
                          d="M13.2745 0C5.94324 0 0.00012207 5.94312 0.00012207 13.2743C0.00012207 20.6055 5.94324 26.5487 13.2745 26.5487C20.6057 26.5487 26.5488 20.6055 26.5488 13.2743C26.5403 5.94666 20.6021 0.00853403 13.2745 0Z"
                          fill="#5243C2"
                          fill-opacity="0.103693"
                        />
                        <path
                          d="M20.9367 9.07093L13.3648 19.3464C13.1842 19.586 12.915 19.7429 12.6175 19.7821C12.32 19.8212 12.0193 19.7391 11.783 19.5543L6.37588 15.2313C5.89874 14.8495 5.82148 14.1532 6.20331 13.676C6.58515 13.1989 7.28148 13.1216 7.75862 13.5035L12.2675 17.1108L19.1557 7.7623C19.3816 7.42335 19.7755 7.23596 20.181 7.27451C20.5865 7.31307 20.938 7.57134 21.0959 7.94679C21.2539 8.32223 21.1927 8.7541 20.9367 9.07093Z"
                          fill="#5243C2"
                        />
                      </svg>
                    </div>
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
