const About = () => {
  return (
    <section id="about" className="relative bg-transparent py-24 mb-10">
      <div className="page-container grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
        {/* Profile Image */}
        <div className="relative w-full max-w-md justify-self-start">
          {/* Decorative Dots */}
          <div
            className="absolute -left-5 -top-5 -z-10 h-20 w-20
            bg-[radial-gradient(#030b20_1.5px,transparent_1.5px)]
            bg-size-[8px_8px]"
          />

          <div className="relative aspect-4/5 overflow-hidden bg-slate-200">
            <img
              src="/images/profile-photo4.jpg"
              alt="Oluwaseun Raji - Full Stack Developer"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* About Content */}
        <div
          className="max-w-xl rounded-2xl bg-white/95
    px-8! py-10! md:px-10! md:py-12!
    shadow-lg ring-1 ring-slate-200/70
    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-2xl
    hover:ring-red-300/70
    active:translate-y-0 active:scale-[0.99]"
        >
          <h2 className="mb-8 text-center text-4xl font-bold text-[#030b20] md:text-5xl">
            About <span className="text-red-400">Me</span>
          </h2>

          <div className="space-y-5 text-justify text-[15px] leading-8 mt-5!">
            <p className="text-slate-700">
              I'm Oluwaseun Raji, a Full Stack Developer passionate about
              building modern, functional and user-friendly web applications.
            </p>

            <p className="text-slate-700">
              I enjoy working across the development stack, creating engaging
              frontend experiences and building reliable backend systems. My
              interests include frontend engineering, API development, database
              management and solving real-world problems through technology.
            </p>

            <p className="text-slate-700">
              I'm always exploring new technologies, refining my skills and
              writing clean, maintainable code.
            </p>
          </div>

          {/* Download CV */}
          <a
            href="/documents/Oluwaseun-Raji-CV.pdf"
            download="Oluwaseun-Raji-CV.pdf"
            className="mt-8 inline-flex items-center bg-[#030b20]
  px-6 py-3 text-sm font-semibold text-white
  transition-colors hover:bg-red-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
