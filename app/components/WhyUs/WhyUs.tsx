import StarRating from "../StarRating/StarRating";
import { Feature } from "../Feature/Feature";

export function WhyUs() {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold">Why Clients Love Us</h2>
          <p className="text-lg text-gray-500 mt-4">
            Discover why businesses trust WebGeeksMedia for our expertise,
            transparent pricing, and real human interaction. From exceptional
            quality to timely delivery and ongoing communication, we deliver
            measurable results that drive success.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
            <p className="italic">
              "The SEO audit from WebGeeksMedia gave us deep, actionable
              insights we had completely overlooked. [...] A no-brainer for
              anyone serious about improving their site."
            </p>
            <div className="flex items-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Sanjay Bhatgaonkar"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <p className="font-bold">Sanjay Bhatgaonkar</p>
                <p className="text-gray-500">Founder of XXXXXX</p>
              </div>
            </div>
            <div className="mt-4">
              <StarRating rating={5} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Feature
            icon="graph"
            title="Results-Focused, Not Buzzword-Filled"
            description="We believe in action, not jargon. Every audit we do..."
          />
          <Feature
            icon="price-tag"
            title="Affordable & Transparent Pricing"
            description="No hidden fees. No locked-in contracts..."
          />
          <Feature
            icon="chat-bubbles"
            title="Real Communication, Real People"
            description="Got a question? You'll talk to a person, not a chatbot..."
          />
          <Feature
            icon="puzzle-pieces"
            title="Modular, Scalable Services"
            description="Don't want a full-service, multi-month SEO campaign?..."
          />
        </div>
      </div>
    </section>
  );
}