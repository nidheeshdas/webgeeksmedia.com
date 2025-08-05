import benefits from "./why-client-benifits";
import {
  useRef,
  useLayoutEffect,
  useState,
  useCallback,
  useEffect,
} from "react";

export default function WhyClients() {
  const svgParent = useRef<HTMLDivElement>(null);
  const [svgWidth, setSvgWidth] = useState(0);

  const updateSvg = useCallback(() => {
    if (svgParent.current) {
      const rect = svgParent.current.getBoundingClientRect();
      setSvgWidth(rect.width);
    }
  }, []);

  useLayoutEffect(() => {
    updateSvg();
  }, [updateSvg]);

  useEffect(() => {
    updateSvg();
    window.addEventListener("resize", updateSvg);
    return () => window.removeEventListener("resize", updateSvg);
  }, [updateSvg]);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-[80px]">
        <div className="grid lg:grid-cols-2 gap-1 items-start">
          {/* Left Column */}
          <div className={"lg:max-w-[442px]"}>
            <h2 className="text-black text-[48px] font-black leading-[48px] mb-[30px]">
              Why Clients <br />
              <span className="text-blue-600">Love Us</span>
            </h2>
            <p className="text-[hashtag#4B5563] mb:[30px] md:mb-[196px] text-[18px] font-medium leading-[28px]">
              Discover why businesses trust WebGeeksMedia for innovative,
              reliable, and tailored SEO solutions. From exceptional quality to
              timely delivery and lasting partnerships, we deliver measurable
              results that drive success.
            </p>

            <div
              ref={svgParent}
              className="lg:w-[442px] lg:h-[140px] mb-[30px] md:mb-0"
            >
              <svg
                width={svgWidth || 442}
                height="191"
                viewBox="0 0 462 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_82_259)">
                  <path
                    d="M94.626 144H25C16.7157 144 10 137.284 10 129V19C10 10.7157 16.7157 4 25 4H437C445.284 4.00001 452 10.7157 452 19V129C452 137.284 445.284 144 437 144H122.072L88.9082 173.733L94.626 144Z"
                    fill="white"
                  />
                  <path
                    d="M94.626 144H25C16.7157 144 10 137.284 10 129V19C10 10.7157 16.7157 4 25 4H437C445.284 4.00001 452 10.7157 452 19V129C452 137.284 445.284 144 437 144H122.072L88.9082 173.733L94.626 144Z"
                    fill="url(#paint0_linear_82_259)"
                  />
                  <path
                    d="M94.626 144L95.117 144.094L95.2313 143.5H94.626V144ZM25 144V144.5V144ZM10 129H9.5H10ZM10 19H9.5H10ZM25 4V3.5V4ZM437 4V3.5V4ZM452 19H452.5H452ZM452 129H452.5H452ZM437 144V144.5V144ZM122.072 144V143.5H121.881L121.738 143.628L122.072 144ZM88.9082 173.733L88.4172 173.639L88.1369 175.096L89.242 174.106L88.9082 173.733ZM94.626 144V143.5H25V144V144.5H94.626V144ZM25 144V143.5C16.9919 143.5 10.5 137.008 10.5 129H10H9.5C9.5 137.56 16.4396 144.5 25 144.5V144ZM10 129H10.5V19H10H9.5V129H10ZM10 19H10.5C10.5 10.9919 16.9919 4.5 25 4.5V4V3.5C16.4396 3.5 9.5 10.4396 9.5 19H10ZM25 4V4.5H437V4V3.5H25V4ZM437 4V4.5C445.008 4.50001 451.5 10.9919 451.5 19H452H452.5C452.5 10.4396 445.56 3.50001 437 3.5V4ZM452 19H451.5V129H452H452.5V19H452ZM452 129H451.5C451.5 137.008 445.008 143.5 437 143.5V144V144.5C445.56 144.5 452.5 137.56 452.5 129H452ZM437 144V143.5H122.072V144V144.5H437V144ZM122.072 144L121.738 143.628L88.5744 173.361L88.9082 173.733L89.242 174.106L122.406 144.372L122.072 144ZM88.9082 173.733L89.3992 173.828L95.117 144.094L94.626 144L94.135 143.906L88.4172 173.639L88.9082 173.733Z"
                    fill="#AA3FFE"
                  />
                  <path
                    d="M94.626 144L95.117 144.094L95.2313 143.5H94.626V144ZM25 144V144.5V144ZM10 129H9.5H10ZM10 19H9.5H10ZM25 4V3.5V4ZM437 4V3.5V4ZM452 19H452.5H452ZM452 129H452.5H452ZM437 144V144.5V144ZM122.072 144V143.5H121.881L121.738 143.628L122.072 144ZM88.9082 173.733L88.4172 173.639L88.1369 175.096L89.242 174.106L88.9082 173.733ZM94.626 144V143.5H25V144V144.5H94.626V144ZM25 144V143.5C16.9919 143.5 10.5 137.008 10.5 129H10H9.5C9.5 137.56 16.4396 144.5 25 144.5V144ZM10 129H10.5V19H10H9.5V129H10ZM10 19H10.5C10.5 10.9919 16.9919 4.5 25 4.5V4V3.5C16.4396 3.5 9.5 10.4396 9.5 19H10ZM25 4V4.5H437V4V3.5H25V4ZM437 4V4.5C445.008 4.50001 451.5 10.9919 451.5 19H452H452.5C452.5 10.4396 445.56 3.50001 437 3.5V4ZM452 19H451.5V129H452H452.5V19H452ZM452 129H451.5C451.5 137.008 445.008 143.5 437 143.5V144V144.5C445.56 144.5 452.5 137.56 452.5 129H452ZM437 144V143.5H122.072V144V144.5H437V144ZM122.072 144L121.738 143.628L88.5744 173.361L88.9082 173.733L89.242 174.106L122.406 144.372L122.072 144ZM88.9082 173.733L89.3992 173.828L95.117 144.094L94.626 144L94.135 143.906L88.4172 173.639L88.9082 173.733Z"
                    fill="url(#paint1_linear_82_259)"
                  />
                </g>
                <text
                  fill="#433b69"
                  xml:space="preserve"
                  style={{ whiteSpace: "pre" }}
                  font-size="17"
                  font-weight="500"
                  letter-spacing="0em"
                >
                  <tspan x="33" y="44.045">
                    The SEO audit from WebGeeksMedia gave us deep,{" "}
                  </tspan>
                  <tspan x="33" y="67.045">
                    actionable insights we had completely overlooked.{" "}
                  </tspan>
                  <tspan x="33" y="90.045">
                    Highly recommended if you&#x2019;re serious about{" "}
                  </tspan>
                  <tspan x="33" y="113.045">
                    improving your site.
                  </tspan>
                </text>
                <defs>
                  <filter
                    id="filter0_d_82_259"
                    x="0.5"
                    y="0.5"
                    width="461"
                    height="189.596"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_82_259"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_82_259"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_82_259"
                    x1="100.038"
                    y1="134.022"
                    x2="129.595"
                    y2="166.989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FAF5FF" />
                    <stop offset="1" stop-color="#EFF6FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_82_259"
                    x1="10"
                    y1="88.8667"
                    x2="452"
                    y2="88.8667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E67474" />
                    <stop offset="1" stop-color="#AA3FFE" />
                  </linearGradient>
                </defs>
              </svg>

              {/* <div className="relative mb-6 max-w-[600px]">
                <p
                  style={{
                    borderRadius: "15px",
                    background:
                      "linear-gradient(135deg, #FAF5FF 0%, #EFF6FF 100%)",
                  }}
                  className="text-gray-700 text-[17px] font-medium leading-normal  p-6 shadow relative z-10 "
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
              </div> */}

              <div className="flex items-center relative z-10">
                <div className="w-[92px] h-[92px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-[91.488px] border border-[#E67474] shadow-[0_9.149px_9.149px_rgba(0,0,0,0.08)] mr-4 flex items-center justify-center text-white font-bold text-lg bg-[url('/images/santhoshi.png')] bg-cover bg-center bg-no-repeat"></div>
                <div className="">
                  <div className="font-bold text-gray-900 text-[26px] leading-normal mb-[4px]">
                    Sanjay Bhatgaonkar
                  </div>
                  <div className="text-[14px] font-medium text-[#6A6A6A] mb-2">
                    Founder of Ecrease
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M11.9752 2.81664C12.2318 2.02695 13.349 2.02695 13.6056 2.81664L15.2922 8.00726C15.4069 8.36043 15.736 8.59954 16.1074 8.59954H21.5651C22.3954 8.59954 22.7407 9.66206 22.0689 10.1501L17.6535 13.3581C17.3531 13.5764 17.2274 13.9633 17.3421 14.3164L19.0287 19.507C19.2853 20.2967 18.3814 20.9534 17.7097 20.4654L13.2943 17.2574C12.9938 17.0391 12.587 17.0391 12.2866 17.2574L7.87121 20.4654C7.19946 20.9534 6.29562 20.2967 6.5522 19.507L8.23874 14.3164C8.35349 13.9633 8.22778 13.5764 7.92736 13.3581L3.51196 10.1501C2.8402 9.66206 3.18544 8.59954 4.01577 8.59954H9.47352C9.84485 8.59954 10.174 8.36043 10.2887 8.00726L11.9752 2.81664Z"
                          fill="#FFC728"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mt-3 sm:mt-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 ${
                  index == benefits.length - 1 ? "last-item" : "mb-[47px]"
                }`}
              >
                <div className="w-[56px] h-[56px] bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-black text-[24px] leading-[32px] font-bold mb-[9px]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#4B5563] text-[17px] font-normal leading-normal ">
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
