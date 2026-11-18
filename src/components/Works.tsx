import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "QuickCart",
    category: "Full-Stack E-commerce",
    description:
      "A full-stack e-commerce platform designed to make online shopping simple and convenient. QuickCart features product discovery, category browsing, user authentication, shopping cart functionality, product management, and order processing.",
    image: "/images/quickcart-homepage.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "http://localhost:5178/",
  },
  {
    number: "02",
    name: "TaskDuty",
    category: "Task Management",
    description:
      "A personal task management application designed to help users organize and manage their daily activities through a simple and intuitive interface.",
    image: "/images/taskduty-homepage.jpg",
    technologies: ["HTML5", "Tailwind CSS", "React", "TypeScript", "MongoDB"],
    link: "https://personal-task-manager-five-beta.vercel.app/",
  },
  {
    number: "03",
    name: "Echo",
    category: "SaaS / Product Analytics",
    description:
      "A modern SaaS landing page showcasing a product analytics platform, with a focus on customer engagement, team collaboration, automation, reporting, and integrations.",
    image: "/images/echo-homepage.jpg",
    technologies: ["HTML5", "CSS3", "React", "TypeScript"],
    link: "https://echo-page-phi.vercel.app/",
  },
  {
    number: "04",
    name: "Where in the World",
    category: "Country Explorer",
    description:
      "An interactive country exploration application that allows users to discover countries, search by name, filter by region, and explore information such as population and capital. It also includes a dark mode option.",
    image: "/images/where-in-the-world.jpg",
    technologies: ["HTML5", "Tailwind CSS", "React", "TypeScript", "MongoDB"],
    link: "https://your-view-delta.vercel.app/",
  },
];

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="works" className="relative bg-white py-28 md:py-36">
      <div className="page-container">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#030b20] md:text-5xl">
            My <span className="text-red-400">Works</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Project Image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <img
              key={activeProject.image}
              src={activeProject.image}
              alt={`${activeProject.name} project preview`}
              className="aspect-4/3 w-full object-cover object-top transition-opacity duration-300"
            />
          </div>

          {/* Project Details */}
          <div>
            <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              {activeProject.category}
            </span>

            <h3 className="mb-6 text-3xl font-bold text-[#030b20] md:text-4xl">
              {activeProject.name}
            </h3>

            <p className="mb-8 text-[15px] leading-8 text-slate-600 md:text-base">
              {activeProject.description}
            </p>

            {/* Technology Tags */}
            <div className="mb-9 flex flex-wrap gap-3">
              {activeProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-[#030b20]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#030b20] px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
            >
              View Project <FiExternalLink />
            </a>

            {/* Project Number */}
            <div className="mt-10 text-6xl font-bold text-slate-200 md:text-7xl">
              {activeProject.number}
              <span className="text-2xl text-slate-300">
                {" "}
                / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-16 flex items-center justify-between border-t border-slate-200 pt-8">
          {/* Pagination */}
          <div className="flex items-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.number}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show project ${project.number}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 bg-red-400"
                    : "w-2 bg-slate-300 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Previous / Next */}
          <div className="flex gap-3">
            <button
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-[#030b20] transition hover:border-red-400 hover:bg-red-400 hover:text-white"
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#030b20] text-white transition hover:bg-red-400"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
