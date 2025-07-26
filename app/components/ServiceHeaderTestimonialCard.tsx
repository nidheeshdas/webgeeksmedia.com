import { Quote } from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="relative bg-transparent text-center lg:w-[575px] max-w-3xl mx-auto">
      {/* Quote icon positioned top-left */}
      <div className="relative">
        <svg
          className="absolute -top-2 -left-2"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g opacity="0.2">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7807 35.4498C12.7538 35.0594 11.1512 34.2019 9.99159 33.4224C8.60416 32.4898 6.69791 30.711 5.7486 29.4632C4.04346 27.2219 3.15145 24.9423 2.63888 21.5158C2.29416 19.2116 2.26964 18.6266 2.23784 11.9387C2.20402 4.82589 2.17318 5.27235 2.7368 4.70881C3.28062 4.16492 2.95888 4.18937 9.58291 4.18937C15.9806 4.18937 15.7567 4.17631 16.2852 4.57951C16.4202 4.68243 16.615 4.9102 16.7182 5.08562L16.9057 5.40464L16.9245 11.4647L16.9434 17.5248L16.7933 17.8736C16.6171 18.2831 16.1336 18.7395 15.7684 18.841C15.6187 18.8825 14.371 18.911 12.6869 18.9112L9.85707 18.9116L9.85707 19.3483C9.85707 20.3425 10.1405 22.0298 10.4954 23.1477C10.9671 24.6339 11.6869 25.8323 12.7296 26.8672C13.5802 27.7116 14.5652 28.3821 15.9499 29.0596C16.9624 29.555 17.1142 29.6779 17.3924 30.2273C17.4661 30.3728 17.5152 30.6321 17.5176 30.8884C17.5211 31.2594 17.4749 31.4101 17.1328 32.1421C15.8313 34.9276 15.7249 35.1044 15.1812 35.3817C14.7825 35.5851 14.21 35.6129 13.7807 35.4498ZM34.3162 35.5007C33.9314 35.4296 32.1217 34.5441 31.1418 33.9473C28.1689 32.1367 25.8483 29.7109 24.4903 26.9944C23.4973 25.0081 23.0054 23.0016 22.659 19.5234C22.5669 18.5991 22.5405 17.2171 22.5157 12.0087C22.4813 4.81784 22.4502 5.27319 23.0146 4.70881C23.5584 4.16499 23.2371 4.18937 29.8571 4.18937C36.3096 4.18937 36.0835 4.17534 36.6082 4.60784C36.7458 4.72131 36.9394 4.97659 37.0383 5.17513L37.2182 5.5361L37.2167 11.5467C37.2151 17.4435 37.2124 17.5633 37.0737 17.8699C36.9111 18.2292 36.6631 18.5089 36.3154 18.7255C36.078 18.8734 36.0034 18.8777 33.0872 18.9116L30.1021 18.9463L30.1233 19.5019C30.178 20.9368 30.5244 22.6445 31.0055 23.8509C31.5002 25.0913 32.0926 25.9961 32.9917 26.8842C33.8099 27.6923 34.6452 28.2682 35.9565 28.928C37.2135 29.5604 37.5648 29.8519 37.7071 30.3802C37.8755 31.0055 37.7868 31.3206 36.958 33.0435C36.4954 34.0051 36.0849 34.7621 35.9266 34.9457C35.5244 35.4122 34.9358 35.6151 34.3162 35.5007Z"
              fill="#848199"
            />
          </g>
        </svg>

        <p className="text-base md:text-small text-[#4A4A4A] font-medium leading-relaxed">
          Their audit uncovered issues we didn’t even know existed. The level of
          detail and thought put into it was impressive — totally worth it.
        </p>
      </div>

      <div className="flex items-center justify-center mt-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 mr-4 to-blue-600 rounded-[91.488px] border border-[#E67474] shadow-[0_9.149px_9.149px_rgba(0,0,0,0.08)] flex items-center justify-center text-white font-bold text-lg bg-[url('../../public/images/rohith.png')] bg-cover bg-center bg-no-repeat"></div>
        <span className="text-[14px] text-gray-800 font-bold">
          Rohit Langde,
        </span>
        <span className="text-[14px] text-gray-500">
          &nbsp; MalwareFox Inc.
        </span>
      </div>
    </div>
  );
}
