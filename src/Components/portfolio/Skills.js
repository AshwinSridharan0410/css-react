
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const skillsList = [
    "Container Orchestration (Kubernetes)", "Linux Internals", "GCP", "Performance Debugging",
    "Terraform", "Monitoring & Observability", "CI/CD", "Azure", "AWS", "Containerization (Docker)",
    "Ansible", "Python", "Java", "Network Security", "Go", "Spring Boot", "SQL", "React.js"
];

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};


export default function Skills() {
  return (
    <AnimatedSection id="skills">
        <SectionHeading number={5}>My Skillset</SectionHeading>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            From cloud infrastructure and automation to backend development and system debugging, here are some of the key technologies and concepts I'm proficient in.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            {skillsList.map((skill, index) => (
                <motion.div
                    key={skill}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={skillVariants}
                    className="bg-slate-800 text-teal-300 font-mono text-sm px-4 py-2 rounded-md shadow-md"
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </AnimatedSection>
  );
}
