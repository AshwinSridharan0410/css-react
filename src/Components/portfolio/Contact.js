import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="text-center max-w-2xl mx-auto !min-h-[50vh]">
        <h2 className="font-mono text-lg text-teal-300 mb-2">06. What’s Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
        <p className="text-slate-400 mb-8">
            I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I’ll do my best to get back to you!
        </p>
        <a 
            href="mailto:ashwinsri04@gmail.com"
            className="inline-block border border-teal-300 text-teal-300 px-8 py-4 rounded-md text-lg font-mono hover:bg-teal-300/10 transition-colors duration-300"
        >
            Say Hello
        </a>
    </AnimatedSection>
  );
}
