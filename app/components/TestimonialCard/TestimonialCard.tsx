import StarRating from "../StarRating/StarRating";

const imgUnion =
  "http://localhost:3845/assets/dc7489c4d47ddb34925898bbc9daf6fc38d1f807.svg";

export function TestimonialCard() {
  return (
    <div className="relative w-[442px]">
      <div className="relative h-[170px]">
        <img
          src={imgUnion}
          alt="testimonial background"
          className="absolute inset-0 w-full h-full"
        />
        <p className="absolute top-[22px] left-1/2 -translate-x-1/2 w-[396px] font-satoshi text-[17px] text-[#868686] leading-normal">
          The SEO audit from WebGeeksMedia gave us deep, actionable insights we
          had completely overlooked. Highly recommended if you’re serious about
          improving your site.
        </p>
      </div>
      <div className="flex items-center gap-[26px] mt-[15px]">
        <img
          src={"/images/santhoshi"}
          alt="Sanjay Bhatgaonkar"
          className="w-[91px] h-[91px]"
        />
        <div className="flex flex-col gap-2.5">
          <div>
            <h3 className="font-satoshi-bold text-[26px] text-[#6a6a6a] leading-normal">
              Sanjay Bhatgaonkar
            </h3>
            <p className="font-satoshi-medium text-[14px] text-[#6a6a6a] leading-normal">
              Founder of Ecstasee
            </p>
          </div>
          <StarRating rating={5} />
        </div>
      </div>
    </div>
  );
}
