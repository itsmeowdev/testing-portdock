import { SkillCard } from "../components/SkillCard";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-text mb-4 text-center">My Skills</h1>
      <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
        A comprehensive list of technologies and tools I work with on a daily basis to build robust and scalable applications.
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold text-text mb-8 border-b border-border-color pb-2">Frontend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.frontend.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} iconName={skill.icon} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-8 border-b border-border-color pb-2">Backend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.backend.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} iconName={skill.icon} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-8 border-b border-border-color pb-2">DevOps & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.devops.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} iconName={skill.icon} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
