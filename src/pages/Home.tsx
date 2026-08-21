import { Link } from "react-router-dom";
import { Download, Mail } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted font-medium mb-6">
            Fullstack Software Engineer
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0">
            I build modern, scalable, and robust web applications. Passionate about beautiful UI and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <Link
              to="/contact"
              className="flex items-center px-6 py-3 bg-surface text-text border border-border-color rounded-lg hover:border-primary hover:text-primary transition-colors font-medium w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl z-10 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
