import SkillCircle from "./SkillCircle";

const skills = [
  { name: "HTML5", percentage: 90 },
  { name: "CSS3", percentage: 85 },
  { name: "JavaScript", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "React", percentage: 85 },
  { name: "Node.js", percentage: 75 },
  { name: "MongoDB", percentage: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-white pt-5 pb-12 ">
      {/* Third Decorative Asset - Group 47 */}
      <img
        src="/images/Group-47.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[32vw] md:block"
      />
      <div className="page-container relative mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="mb-10 text-3xl font-bold text-red-400 md:text-4xl">
          Skills
        </h2>

        {/* Introduction */}
        <p className="mb-15 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          I enjoy creating things that live on the internet, whether they are
          websites, applications, or anything in between.
        </p>

        {/* Skill Indicators */}
        <div className="grid w-full max-w-5xl grid-cols-2 justify-items-center gap-x-16 gap-y-16 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <SkillCircle
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
