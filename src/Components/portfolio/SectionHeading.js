import React from 'react';

export default function SectionHeading({ number, children }) {
  return (
    <div className="flex items-center mb-10 gap-6">
      <h2 className="flex items-baseline text-2xl md:text-3xl font-bold text-slate-100 tracking-tight whitespace-nowrap">
        <span className="text-teal-300 font-mono text-xl md:text-2xl font-bold mr-2">0{number}.</span>
        <span>{children}</span>
      </h2>
      <div className="flex-grow h-px bg-slate-700"></div>
    </div>
  );
}
