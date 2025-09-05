import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { ChevronRight } from 'lucide-react';

const skills = [
  "Kubernetes", "GCP", "Azure", "AWS",
  "Terraform", "Ansible", "Python", "Go",
  "CI/CD (Tekton, ArgoCD)", "Prometheus & Grafana"
];

export default function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading number={1}>About Me</SectionHeading>
      <div className="grid md:grid-cols-5 gap-12">
        {/* Text Section */}
        <div className="md:col-span-3 text-slate-400 space-y-6 text-lg leading-relaxed">
          <p>
            Hello! I'm Ashwin, an impact-driven professional with a knack for building efficient systems, streamlining processes, and solving complex challenges through innovation. I embrace change, challenge assumptions, and deliver practical solutions that move organizations forward.
          </p>
          <p>
            My journey into tech started with a Bachelor's in Information Technology, which led me to a deep fascination with how large-scale systems operate. Today, I have the privilege of working as a Site Reliability Engineer at <span className="text-teal-300 font-semibold">Johnson Controls</span>, where I build and operate production-grade Kubernetes clusters across multi-cloud and hybrid environments.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-10 font-mono text-base mt-2">
            {skills.map(skill => (
              <li key={skill} className="flex items-center text-slate-300">
                <ChevronRight className="text-teal-300 w-5 h-5 mr-2" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* Image Section */}
        <div className="md:col-span-2 relative group">
          {/* Teal shadow box */}
          <div className="w-full h-full rounded-lg bg-teal-300/90 absolute top-7 left-7 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-300"></div>
          {/* Main image */}
          <div
            className="w-full h-80 rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat relative z-10 shadow-lg"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop)',
              filter: 'grayscale(100%) contrast(1.2)'
            }}
          >
            <div className="w-full h-full bg-slate-900/60 hover:bg-transparent transition-all duration-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
