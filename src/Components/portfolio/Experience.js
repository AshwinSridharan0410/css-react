
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Johnson Controls',
    role: 'Site Reliability Engineer- Devops',
    date: 'May 2023 – Present',
    points: [
      'Built and operated production-grade Kubernetes clusters across GCP, Azure, AWS and hybrid environments.',
      'Onboarded 15+ mission-critical workloads to production using performance benchmarking and chaos testing.',
      'Built a Kubernetes-native CI/CD platform using Tekton, Buildpacks, and ArgoCD.',
      'Implemented a complete observability stack with Prometheus, Grafana, Loki, and Alertmanager.',
      'Managed infrastructure across multiple clouds using Terraform and Ansible.',
      'Reduced cloud costs by 25–30% through optimization and governance policies.'
    ]
  },
  {
    company: 'Virtusa',
    role: 'Software Engineering Intern',
    date: 'Jan 2023 – May 2023',
    points: [
      'Developed backend systems with Spring Boot and Java, enhancing application performance.',
      'Integrated AJAX and XML for seamless data exchange, improving user interaction.',
      'Utilized JDBC for efficient database connectivity, supporting robust data operations.'
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedSection id="experience">
      <SectionHeading number={2}>Where I've Worked</SectionHeading>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`font-mono text-sm px-4 py-3 text-left border-l-2 whitespace-nowrap transition-all duration-300 ${
                activeTab === index 
                  ? 'border-teal-300 text-teal-300 bg-slate-800'
                  : 'border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:text-teal-300'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium text-slate-100">
                {experiences[activeTab].role} <span className="text-teal-300">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-500 mt-1 mb-6">{experiences[activeTab].date}</p>
              <ul className="space-y-3">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <ChevronRight className="text-teal-300 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-slate-400">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
