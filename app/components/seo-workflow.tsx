export default function Component() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">Our SEO Audit Workflow</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            A simple process designed to uncover growth opportunities and turn insights into real results.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-[#e6d7ff] rounded-2xl p-8 text-left">
            <div className="text-5xl font-bold text-[#000000] mb-4">1.</div>
            <h3 className="text-xl font-bold text-[#000000] mb-4">
              Choose Your
              <br />
              Audit Tier
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">Start small or go deep — your call</p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#d4f4dd] rounded-2xl p-8 text-left">
            <div className="text-5xl font-bold text-[#000000] mb-4">2.</div>
            <h3 className="text-xl font-bold text-[#000000] mb-4">
              We Perform
              <br />
              Manual Review
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">
              No bots. No shortcuts. Just expert eyes on your site.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#e6d7ff] rounded-2xl p-8 text-left">
            <div className="text-5xl font-bold text-[#000000] mb-4">3.</div>
            <h3 className="text-xl font-bold text-[#000000] mb-4">
              Get Your PDF
              <br />
              Report
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">
              Actionable insights with plain-English explanations
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#d4f4dd] rounded-2xl p-8 text-left">
            <div className="text-5xl font-bold text-[#000000] mb-4">4.</div>
            <h3 className="text-xl font-bold text-[#000000] mb-4">
              Win More
              <br />
              Rankings & ROI
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">Upgrade to full audit or implementation support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
