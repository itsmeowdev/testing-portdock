import { Mail, Code2, Briefcase } from "lucide-react";
import { socialLinks } from "../data/social";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-text mb-4 text-center">Get in Touch</h1>
      <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
        I'll try my best to get back to you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a 
          href={`mailto:${socialLinks.email}`}
          className="flex flex-col items-center p-8 bg-surface rounded-xl border border-border-color hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="p-4 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">Email</h3>
          <p className="text-muted text-center text-sm">{socialLinks.email}</p>
        </a>

        <a 
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-8 bg-surface rounded-xl border border-border-color hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="p-4 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">LinkedIn</h3>
          <p className="text-muted text-center text-sm">Let's connect</p>
        </a>

        <a 
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-8 bg-surface rounded-xl border border-border-color hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="p-4 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-text mb-2">GitHub</h3>
          <p className="text-muted text-center text-sm">Check out my repos</p>
        </a>
      </div>
    </div>
  );
}
