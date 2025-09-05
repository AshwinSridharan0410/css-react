
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Folder, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Telehealth App with Image Encryption',
    description: 'A secure telehealth platform enabling privacy-focused medical consultations, hosted on AWS. Built with Django and React.',
    tags: ['Django', 'React', 'AWS', 'Encryption'],
  },
  {
    title: 'Household Management App',
    description: 'Developed a web app to manage household chores and budgets, using Flask for backend and SQLite for local data storage.',
    tags: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
  },
  {
    title: 'API-Driven Vue.js Quiz App',
    description: 'Built a dynamic frontend using Vue.js connected to a custom REST API built in Python, enabling CRUD operations.',
    tags: ['Vue.js', 'Python', 'Flask', 'REST API'],
  },
  {
    title: 'Retail Sales Optimization Analysis',
    description: 'Conducted a full sales performance audit using Python (Pandas, Matplotlib) to identify high-margin products and bottlenecks.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Restaurant Visit Prediction',
    description: 'Participated in a Kaggle ML competition to predict restaurant visit patterns using classification/regression models.',
    tags: ['Kaggle', 'Machine Learning', 'Scikit-learn'],
  },
  {
    title: 'Production-grade RAG Chatbot',
    description: 'Created a chatbot using Azure OpenAI and vector embeddings to accelerate document access for internal tooling.',
    tags: ['Azure OpenAI', 'RAG', 'Vector DB'],
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading number={4}>Some Things I’ve Built</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-800 p-7 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <Folder className="w-10 h-10 text-teal-300" />
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors"><Github size={20}/></a>
                <a href="#" className="text-slate-400 hover:text-teal-300 transition-colors"><ExternalLink size={20}/></a>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm flex-grow mb-6">{p.description}</p>
            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-500">
              {p.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
