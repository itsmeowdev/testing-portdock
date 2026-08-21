import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden border border-border-color hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-text hover:text-primary transition-colors"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-text hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
