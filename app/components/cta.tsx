import { Button } from "~/components/ui/button";
import { Zap, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function CTA(props) {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px]">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-[56px] py-[52px] px-[80px] md:p-12 lg:p-16 relative overflow-hidden bg-grid-squares">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="flex flex-col gap-8 items-start">
              <p className="text-[#CCC] text-[28px] md:text-[36px] font-medium leading-[40px]">
                {props.content}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">
                {props.priceText}
                <span className="text-yellow-400">${props.price}</span>
              </h2>
              <button
                onClick={() =>
                  navigate(
                    props.buttonNavigateTo || "/mailer/pay.php?plan=essential"
                  )
                }
                className="h-[50px] w-[165px] bg-blue-600 hover:bg-blue-700 text-white px-[20px] py-[10px] rounded-full cursor-pointer ext-base font-medium not-italic leading-normal"
              >
                {props.buttonText}{" "}
                {props.showIcon ? <ArrowRight className="w-5 h-5" /> : null}
              </button>
            </div>

            {/* Decorative Circle */}
            <div className="relative">
              <div
                className="w-[352px] h-[352px] rounded-[352px] mx-auto hidden lg:flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(106deg, #E1E4FE 0%, #E3FED0 100%), #E0FF22",
                }}
              >
                {" "}
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="65"
                    height="95"
                    viewBox="0 0 65 95"
                    fill="none"
                  >
                    <path
                      d="M51.7108 0.404422C52.2891 0.739688 52.7366 1.26117 52.9802 1.88366C53.2239 2.50616 53.2492 3.19288 53.0521 3.83164L42.41 38.411H62.0456C62.6226 38.4108 63.1871 38.5796 63.6693 38.8965C64.1516 39.2134 64.5304 39.6646 64.7592 40.1943C64.9879 40.7241 65.0566 41.3093 64.9566 41.8776C64.8565 42.4459 64.5923 42.9725 64.1965 43.3923L16.9245 93.6187C16.4671 94.1051 15.8585 94.4222 15.1978 94.5184C14.5371 94.6146 13.8633 94.4841 13.2862 94.1483C12.7091 93.8125 12.2628 93.2911 12.02 92.6691C11.7772 92.0472 11.7522 91.3613 11.9492 90.7233L22.5913 56.138H2.95567C2.37863 56.1382 1.81415 55.9695 1.33192 55.6526C0.849685 55.3357 0.470808 54.8845 0.242059 54.3547C0.0133105 53.825 -0.055296 53.2398 0.0447084 52.6715C0.144713 52.1032 0.408949 51.5766 0.804801 51.1567L48.0767 0.930322C48.5336 0.444598 49.1413 0.127695 49.8011 0.0311421C50.4608 -0.0654111 51.1339 0.064063 51.7108 0.398513V0.404422Z"
                      fill="url(#paint0_linear_148_824)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_148_824"
                        x1="5.77789"
                        y1="6.30328"
                        x2="80.3909"
                        y2="59.6505"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2461E9" />
                        <stop offset="1" stop-color="#1D50DA" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="136"
                    height="82"
                    viewBox="0 0 136 82"
                    fill="none"
                  >
                    <path
                      d="M134.501 4.185C133.816 2.53564 132.505 1.22496 130.856 0.539999C130.045 0.194123 129.173 0.0106649 128.291 0H94.5411C92.7509 0 91.034 0.71116 89.7681 1.97703C88.5023 3.2429 87.7911 4.95979 87.7911 6.75C87.7911 8.54021 88.5023 10.2571 89.7681 11.523C91.034 12.7888 92.7509 13.5 94.5411 13.5H112.024L74.2911 51.2325L52.0836 28.9575C51.4561 28.3248 50.7095 27.8227 49.887 27.48C49.0644 27.1373 48.1822 26.9609 47.2911 26.9609C46.4 26.9609 45.5177 27.1373 44.6952 27.48C43.8727 27.8227 43.1261 28.3248 42.4986 28.9575L1.99859 69.4575C1.36592 70.085 0.863763 70.8316 0.521075 71.6541C0.178386 72.4767 0.00195312 73.3589 0.00195312 74.25C0.00195313 75.1411 0.178386 76.0233 0.521075 76.8459C0.863763 77.6684 1.36592 78.415 1.99859 79.0425C2.62609 79.6752 3.37265 80.1773 4.1952 80.52C5.01775 80.8627 5.90001 81.0391 6.79109 81.0391C7.68217 81.0391 8.56443 80.8627 9.38698 80.52C10.2095 80.1773 10.9561 79.6752 11.5836 79.0425L47.2911 43.2675L69.4986 65.5425C70.1261 66.1752 70.8727 66.6773 71.6952 67.02C72.5177 67.3627 73.4 67.5391 74.2911 67.5391C75.1822 67.5391 76.0644 67.3627 76.887 67.02C77.7095 66.6773 78.4561 66.1752 79.0836 65.5425L121.541 23.0175V40.5C121.541 42.2902 122.252 44.0071 123.518 45.273C124.784 46.5388 126.501 47.25 128.291 47.25C130.081 47.25 131.798 46.5388 133.064 45.273C134.33 44.0071 135.041 42.2902 135.041 40.5V6.75C135.03 5.86793 134.847 4.9965 134.501 4.185Z"
                      fill="url(#paint0_linear_148_823)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_148_823"
                        x1="12.0054"
                        y1="5.40261"
                        x2="70.5194"
                        y2="106.807"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2461E9" />
                        <stop offset="1" stop-color="#1D50DA" />
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
