import benefits from "./why-client-benifits";
export default function WhyClients() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-[80px]">
        <div className="grid lg:grid-cols-2 gap-1 items-start">
          {/* Left Column */}
          <div className={"lg:max-w-[442px]"}>
            <h2 className="text-[40px] font-bold text-gray-900 mb-8 leading-[48px]">
              Why Clients <br />
              <span className="text-blue-600">Love Us</span>
            </h2>
            <p className="text-gray-600 md:mb-[33px] lg:mb-40 text-base leading-[28px]">
              Discover why businesses trust WebGeeksMedia for innovative,
              reliable, and tailored SEO solutions. From exceptional quality to
              timely delivery and lasting partnerships, we deliver measurable
              results that drive success.
            </p>

            <div className="lg:w-[442px] lg:h-[140px]">
              <div className="relative mb-6 max-w-[600px]">
                <p
                  style={{
                    borderRadius: "15px",
                    background:
                      "linear-gradient(135deg, #FAF5FF 0%, #EFF6FF 100%)",
                  }}
                  className="text-gray-700 text-base leading-normal p-6 shadow relative z-10"
                >
                  The SEO audit from WebGeeksMedia gave us deep, actionable
                  insights we had completely overlooked. Highly recommended if
                  you're serious about improving your site.
                </p>

                <div
                  style={{
                    position: "absolute",
                    left: "1.5rem",
                    bottom: "-13px",
                    width: "26px",
                    height: "26px",
                    transform: "rotate(-45deg)",
                    background:
                      "linear - gradient(135deg, #FAF5FF 0 %, #EFF6FF 100 %)",
                    zIndex: "90",
                    boxShadow: "#eaeaea -2px 2px 3px 0",
                  }}
                />
              </div>

              <div className="flex items-center relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[91.488px] border border-[#E67474] shadow-[0_9.149px_9.149px_rgba(0,0,0,0.08)] mr-4 flex items-center justify-center text-white font-bold text-lg bg-[url('/images/santhoshi.png')] bg-cover bg-center bg-no-repeat"></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    Sanjay Bhatgaonkar
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Founder of Ecrease
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${
                  index == benefits.length - 1 ? "last-item" : "mb-[47px]"
                }`}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
