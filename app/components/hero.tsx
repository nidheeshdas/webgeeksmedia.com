import Header from "./header";

export default function Hero(props) {
  return (
    <section
      // className="min-h-screen"
      style={{
        backgroundImage: `
      url("/images/noise-tiny.png"),
      linear-gradient(106deg, #E1E4FE 0%, #E3FED0 100%)
    `,
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        // backgroundSize: "100% 100%",
        backgroundBlendMode: "soft-light",
      }}
    >
      <Header />
      <div className="flex flex-col items-center gap-[50px] mt-16 pb-16 px-9 text-center">
        {props.children || "Hi"}
      </div>
    </section>
  );
}
