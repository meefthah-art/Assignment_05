export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build your perfect{" "}
            <span className="gradient-text">development stack</span>
          </h1>
          <p className="mt-5 text-base-content/70 text-lg max-w-xl">
            Browse modern frontend, backend, database and DevOps tools,
            compare them at a glance, and collect the ones you want into a
            single personalized stack — ready to reference on your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#technologies" className="btn-gradient rounded-full px-6">
              Explore Technologies
            </a>
            <a href="#about" className="btn btn-outline rounded-full px-6">
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl gradient-bg"
            aria-hidden="true"
          />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80"
            alt="Developer working across a modern technology stack"
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
