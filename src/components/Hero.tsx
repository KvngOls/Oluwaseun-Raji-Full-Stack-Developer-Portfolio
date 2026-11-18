import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-162.5 items-center overflow-hidden bg-transparent  text-white"
    >
      {/* Hero Content */}
      <div className="page-container relative z-10 py-20 md:py-0">
        {/* Introduction */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-red-400 md:text-sm">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="mb-6 whitespace-nowrap text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Oluwaseun <span className="text-red-400">Raji.</span>
        </h1>

        {/* Professional Title */}
        <h2 className="mb-6 text-xl font-medium text-slate-800 md:text-2xl lg:text-gray-200">
          Full Stack Developer
        </h2>

        {/* Introduction Text */}
        <p className="mb-10 max-w-lg text-sm leading-8 text-slate-700 md:text-base lg:text-gray-300">
          I build modern, responsive and user-friendly web applications,
          transforming ideas into functional digital experiences.
        </p>

        {/* Social Links */}
        <div className="mb-10 flex items-center gap-6 mt-20">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-700 transition-colors hover:text-red-400 lg:text-gray-200"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-700 transition-colors hover:text-red-400 lg:text-gray-200"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="mailto:your-email@example.com"
            aria-label="Email"
            className="text-slate-700 transition-colors hover:text-red-400 lg:text-gray-200"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute -bottom-25 left-0 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-300 transition-colors hover:text-red-400"
        >
          <span className="h-7 w-px bg-red-400" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
};

export default Hero;
