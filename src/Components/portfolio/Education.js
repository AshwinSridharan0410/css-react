
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { GraduationCap, Award } from 'lucide-react';

const educations = [
  {
    degree: 'Diploma in Data Science and Programming',
    institution: 'Indian Institute of Technology Madras',
    date: 'Feb 2021 – Oct 2024',
    details: 'GPA: 9.0/10'
  },
  {
    degree: 'Bachelor of Technology, Information Technology',
    institution: 'Meenakshi Sundararajan Engineering College',
    date: 'Jan 2019 – May 2023',
    details: 'GPA: 9.28/10 | Department Topper, University 9th Rank'
  }
];

export default function Education() {
  return (
    <AnimatedSection id="education">
        <SectionHeading number={3}>Education</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-teal-300/10 transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <GraduationCap className="w-10 h-10 text-teal-300"/>
                        <p className="font-mono text-sm text-slate-500 text-right">{edu.date}</p>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-md text-slate-400 mb-4">{edu.institution}</p>
                    <div className="flex items-center gap-2 font-mono text-xs text-teal-300 bg-teal-400/10 px-3 py-1 rounded-full">
                        <Award className="w-4 h-4"/>
                        <span>{edu.details}</span>
                    </div>
                </div>
            ))}
        </div>
    </AnimatedSection>
  )
}
