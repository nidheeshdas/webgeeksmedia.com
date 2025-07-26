export default function Component() {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[40px]  md:text-3xl font-medium text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-xl  mx-auto">
            Comprehensive solutions tailored to boost your online presence and
            drive sustainable growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Years of Experience */}
          <div className="leading-relaxed bg-[#ffffff] lg:w-[585px] px-[50px] py-[40px] rounded-[20px] border-r-[4px] border-b-[4px] border-r-[#D7C8FF] border-b-[#D7C8FF] border-t-0 border-l-0 bg-white">
            <div className="flex items-start gap-[30px]">
              <div className="text-5xl font-bold text-[#2461E9]">15+</div>
              <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  Years of Industry Experience
                </h3>
                <p className="text-[#333333] font-normal text-xl leading-[24px]">
                  Backed by 15+ years of experience, we bring strategy,
                  stability, and results to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Satisfaction Rate */}
          <div className="leading-relaxed bg-[#ffffff] lg:w-[585px] px-[50px] py-[40px] rounded-[20px] border-r-[4px] border-b-[4px] border-r-[#D7C8FF] border-b-[#D7C8FF] border-t-0 border-l-0 bg-white">
            <div className="flex items-start gap-6">
              <div className="text-5xl font-bold text-[#2461E9]">99%</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#000000] mb-3">
                  Satisfaction Rate
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  Trusted by clients, our 99% satisfaction rate speaks to the
                  quality and care we deliver.
                </p>
              </div>
            </div>
          </div>

          {/* Client Retention */}
          <div className="leading-relaxed bg-[#ffffff] lg:w-[585px] px-[50px] py-[40px] rounded-[20px] border-r-[4px] border-b-[4px] border-r-[#D7C8FF] border-b-[#D7C8FF] border-t-0 border-l-0 bg-white">
            <div className="flex items-start gap-6">
              <div className="text-5xl font-bold text-[#2461E9]">75%</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#000000] mb-3">
                  Client Retention
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  Most clients return for additional services, showing deep
                  trust and satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Audits */}
          <div className="bg-[#ffffff] lg:w-[585px] px-[50px] py-[40px] rounded-[20px] border-r-[4px] border-b-[4px] border-r-[#D7C8FF] border-b-[#D7C8FF] border-t-0 border-l-0 bg-white leading-relaxed">
            <div className="flex items-start gap-6">
              <div className="text-5xl font-bold text-[#2461E9]">150+</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#000000] mb-3">
                  SEO Audits Completed
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  Focused audits that drive measurable improvements, from small
                  blogs to enterprise sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
