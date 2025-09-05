import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

// This is the direct link to the resume you uploaded.
const RESUME_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b996d429093fdb54e67725/824a2e378_Ashwin-Sridharan-Resume.pdf";

const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

function NavLink({ id, title, onClick }) {
  const scrollToSection = () => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={scrollToSection}
      className="cursor-pointer text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm"
    >
      {title}
    </button>
  );
}

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <style>{`
        body {
          background-color: #0f172a;
        }
        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }
        .font-mono {
            font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
        }
        .writing-mode-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-300 tracking-wider">
            <button onClick={scrollToHero} className="cursor-pointer">
              AS
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <span key={link.id} className="text-teal-300 font-mono text-xs">
                0{index + 1}. <NavLink {...link} />
              </span>
            ))}
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-4 border border-teal-300 text-teal-300 px-4 py-2 rounded-md text-sm hover:bg-teal-300/10 transition-colors duration-300"
            >
              Resume
            </a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-teal-300">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 absolute top-full left-0 right-0 h-screen">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
              {navLinks.map((link) => (
                <NavLink key={link.id} {...link} onClick={() => setIsMenuOpen(false)} />
              ))}
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-8 border border-teal-300 text-teal-300 px-6 py-3 rounded-md hover:bg-teal-300/10 transition-colors duration-300"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Social Links Sidebar */}
      <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10">
        <a href="https://www.linkedin.com/in/ashwin-sridharan-b8474520a" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-300 hover:translate-y-[-3px] transition-all">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-300 hover:translate-y-[-3px] transition-all">
          <Github size={20} />
        </a>
        <div className="w-px h-24 bg-slate-600 mt-4"></div>
      </div>
      
      {/* Email Sidebar */}
      <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-10">
        <a href="mailto:ashwinsri04@gmail.com" className="writing-mode-vertical-rl text-slate-400 font-mono text-xs tracking-widest hover:text-teal-300 hover:translate-y-[-3px] transition-all p-2">
          ashwinsri04@gmail.com
        </a>
        <div className="w-px h-24 bg-slate-600 mt-4"></div>
      </div>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-slate-500 font-mono text-xs">
        <div className="md:hidden flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/ashwin-sridharan-b8474520a" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-300">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-300">
            <Github size={24} />
          </a>
        </div>
        <p>Designed & Built by Ashwin Sridharan</p>
        <p>&copy; {new Date().getFullYear()} Ashwin Sridharan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}