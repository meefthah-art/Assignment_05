export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div>
          <h1 className="text-[32px] leading-[1.1] sm:text-5xl lg:text-[60px] font-extrabold tracking-tight text-slate-900">
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-xl">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="btn-gradient rounded-lg px-6 font-semibold text-sm"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:border-slate-200 text-slate-700 rounded-lg px-6 font-medium text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: "#f472b6" }}
            aria-hidden="true"
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-25 blur-3xl translate-x-16 -translate-y-10"
            style={{ backgroundColor: "#c084fc" }}
            aria-hidden="true"
          />
          <img
            src="/hero-stack.webp"
            alt="Stylized isometric illustration of a layered development stack"
            className="relative w-full max-w-sm rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
