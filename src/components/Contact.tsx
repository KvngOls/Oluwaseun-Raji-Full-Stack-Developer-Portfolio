import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <section id="contact" className="relative bg-white py-20 md:py-36">
        <div className="page-container">
          {/* Section Heading */}
          <div className="mb-16">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Let's connect
            </span>

            <h2 className="text-4xl font-bold text-[#030b20] md:text-5xl">
              Get in <span className="text-red-400">Touch</span>
            </h2>
          </div>

          <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mb-6 text-3xl font-bold leading-tight text-[#030b20] md:text-4xl">
                  Drop me a line.
                  <br />
                  <span className="text-red-400">
                    Let's build something great.
                  </span>
                </h3>

                <p className="max-w-md text-base leading-8 text-slate-600">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of something meaningful. I'd love to
                  hear from you.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Find me online
                </p>

                <div className="flex gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/KvngOls"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/oluwaseun-raji-7201ab189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:oluwaseunraji123@gmail.com"
                    aria-label="Send me an email"
                  >
                    <FiMail />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              action="https://formsubmit.co/oluwaseunraji123@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio"
              />

              <div className="mb-7">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-semibold text-[#030b20]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-red-400 focus:bg-white"
                />
              </div>

              <div className="mb-7">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-semibold text-[#030b20]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-red-400 focus:bg-white"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-semibold text-[#030b20]"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  required
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-sm outline-none transition focus:border-red-400 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#030b20] px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-400"
              >
                Send Message
                <FiArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030b20] py-8">
        <div className="page-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm font-semibold text-white">
            Oluwaseun Raji.<span className="text-red-400">.</span>
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-slate-400 transition hover:text-red-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
