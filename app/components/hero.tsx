import Header from "./header";

export default function Hero(props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(106deg,_#E1E4FE_0%,_#E3FED0_100%)]"></div>

      <div className="absolute inset-0 z-10 bg-[url('/images/noise-tiny.png')] bg-repeat opacity-5 pointer-events-none"></div>

      <div className="relative z-20">
        <Header />
        <div className="flex flex-col items-center gap-[50px] mt-16 pb-16 px-9 text-center">
          {props.children || "Hi"}
        </div>
      </div>
    </section>
  );
}
