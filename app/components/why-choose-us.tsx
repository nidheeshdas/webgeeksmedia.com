export default function Component() {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#000000] mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to boost your online presence and
            drive sustainable growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Years of Experience */}
          <div className="bg-[#ffffff] rounded-2xl px-[40px] py-[50px] border-2 border-[#d7c8ff] shadow-sm">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-bold text-[#4600ff]">15+</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#000000] mb-3">
                  Years of Industry Experience
                </h3>
                <p className="text-[#333333] text-lg leading-relaxed">
                  Backed by 15+ years of experience, we bring strategy,
                  stability, and results to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Satisfaction Rate */}
          <div className="bg-[#ffffff] rounded-2xl px-[40px] py-[50px] border-2 border-[#d7c8ff] shadow-sm">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-bold text-[#4600ff]">99%</div>
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
          <div className="bg-[#ffffff] rounded-2xl px-[40px] py-[50px] border-2 border-[#d7c8ff] shadow-sm">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-bold text-[#4600ff]">75%</div>
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
          <div className="bg-[#ffffff] rounded-2xl px-[40px] py-[50px] border-2 border-[#d7c8ff] shadow-sm">
            <div className="flex items-start gap-6">
              <div className="text-6xl font-bold text-[#4600ff]">150+</div>
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
