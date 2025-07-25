export default function Component() {
  return (
    <section className="bg-white from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Our SEO Audit Workflow
          </h2>
          <p className="text-lg text-[#333333] mx-auto">
            A simple process designed to uncover growth opportunities and turn
            insights into real results.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          {[
            {
              id: 1,
              gradientString:
                "linear-gradient(133deg, rgba(70, 0, 255, 0.22) 0%, rgba(70, 0, 255, 0.00) 53%)",
              t1: "1",
              t2: "Choose Your Audit Tier",
              t3: "Start small or go deep — your call",
            },
            {
              id: 2,
              gradientString:
                "linear-gradient(133deg, rgba(130, 255, 31, 0.39) 0%, rgba(130, 255, 31, 0.00) 53%)",
              t1: "2",

              t2: "We Perform Manual Review",
              t3: "No bots. No shortcuts. Just expert eyes on your site.",
            },
            {
              id: 3,
              gradientString:
                "linear-gradient(133deg, rgba(70, 0, 255, 0.22) 0%, rgba(70, 0, 255, 0.00) 53%)",
              t1: "3",
              t2: " Get Your PDF Report",
              t3: "Actionable insights with plain-English explanations",
            },
            {
              id: 4,
              gradientString:
                "linear-gradient(133deg, rgba(130, 255, 31, 0.39) 0%, rgba(130, 255, 31, 0.00) 53%)",
              t1: "4",

              t2: "Win More Rankings & ROI",
              t3: "Upgrade to full audit or implementation support",
            },
          ].map((item) => {
            return (
              <div key={item.id} className="relative p-[2px] rounded-[20px]">
                <div
                  className="rounded-[20px] p-8 text-left w-full h-full"
                  style={{
                    background: item.gradientString,
                  }}
                >
                  <div className="text-5xl font-bold text-[#000000] mb-4">
                    {item.t1}.
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-4">
                    {item.t2}
                  </h3>
                  <p className="text-[#333333] text-sm leading-relaxed">
                    {item.t3}
                  </p>
                </div>

                <style jsx>{`
                  div.relative::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    padding: 2px;
                    border-radius: 20px;
                    background: linear-gradient(130deg, #e67474, #ffffff 40%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                      linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                  }
                `}</style>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
