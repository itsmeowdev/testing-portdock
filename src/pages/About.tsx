import { GraduationCap, Briefcase, Target } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-text mb-8">About Me</h1>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-text">Biography & Career Objective</h2>
          </div>
          <p className="text-muted leading-relaxed">
            I am a passionate software engineer with over 5 years of experience in building scalable web applications. 
            My journey started with a curiosity for how things work on the internet, which quickly evolved into a 
            deep-seated passion for coding. I specialize in frontend development with React and TypeScript, but I am 
            equally comfortable working on the backend with Node.js and modern databases.
            <br /><br />
            My career objective is to continuously grow as a developer by tackling complex problems and delivering 
            user-centric solutions. I thrive in collaborative environments and am always eager to learn new technologies 
            that push the boundaries of web development.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-text">Experience</h2>
          </div>
          <div className="space-y-8 border-l-2 border-border-color ml-3 pl-6">
            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-medium text-text">Senior Software Engineer</h3>
              <p className="text-sm text-primary mb-2">Tech Solutions Inc. | 2021 - Present</p>
              <p className="text-muted">
                Led a team of frontend developers in migrating a legacy application to React. 
                Improved overall application performance by 40% and established best practices 
                for code review and testing.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute w-3 h-3 bg-border-color rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-medium text-text">Software Developer</h3>
              <p className="text-sm text-primary mb-2">Creative Agency | 2018 - 2021</p>
              <p className="text-muted">
                Developed interactive web experiences for various clients. Worked closely with designers 
                to ensure pixel-perfect implementations and smooth animations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-text">Education</h2>
          </div>
          <div className="space-y-8 border-l-2 border-border-color ml-3 pl-6">
            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-2" />
              <h3 className="text-xl font-medium text-text">Bachelor of Computer Science</h3>
              <p className="text-sm text-primary mb-2">University of Technology | 2014 - 2018</p>
              <p className="text-muted">
                Graduated with honors. Specialized in Software Engineering and Human-Computer Interaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
