import { Button } from "~/components/ui/button";
import { Zap, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function CTA(props) {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-[80px]">
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="flex flex-col gap-8 items-start">
              <p className="text-[#CCC] text-[28px] md:text-[36px] font-medium leading-[40px]">
                {props.content}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">
                {props.priceText}
                <span className="text-yellow-400">${props.price}</span>
              </h2>
              <Button onClick={() => navigate(props.buttonNavigateTo || '/mailer/pay.php?plan=essential')} className="h-[50px] m-w-[165px] bg-blue-600 hover:bg-blue-700 text-white px-[20px] py-[10px] rounded-full">
                {props.buttonText}{" "}
                {props.showIcon ? <ArrowRight className="w-5 h-5" /> : null}
              </Button>
            </div>

            {/* Decorative Circle */}
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full mx-auto flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <Zap className="w-20 h-20 text-blue-600" />
                  <TrendingUp className="w-20 h-20 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
