import { socialLinks } from "../data/social";
import { Code2, Briefcase, Mail, Camera } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color bg-surface py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-muted">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <p className="text-sm mt-1">Version 1.0.0</p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-muted hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Code2 className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Briefcase className="h-5 w-5" />
          </a>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Camera className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
