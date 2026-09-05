import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Focus Room Project',
    role: 'UX/UI Designer',
    period: 'March \u2013 May 2026',
    category: 'university',
    tag: 'University Project',
    subtitle: 'DSI109 \u2013 User Interface and User Experience',
    description:
      'Designed User Flows and Site Maps for a web application aimed at solving classroom environmental issues. Developed a Design System (Typography, Color Psychology) for consistent visual identity. Created Low- to Medium-Fidelity Wireframes progressing to complete Mockups.',
    pdfFile: '/pdf/focus-room.pdf',
    color: 'from-rose-900/80 to-neutral-900',
    accentColor: 'bg-rose-800',
  },
  {
    id: 2,
    title: 'CP Axtra Mile Hackathon',
    role: 'UX/UI Designer',
    period: 'Jun \u2013 Aug 2025',
    category: 'hackathon',
    tag: 'Top 10 Finalist',
    subtitle: 'Smart Adviser feature on Makro Pro',
    description:
      'Designed UI mockups for new features on Makro Pro including expiration date notifications, AI-powered recipe & food preservation recommendations, and personalized promotions. Aligned UI seamlessly with the existing design language to maintain a consistent user experience.',
    pdfFile: '/pdf/axtra-mile.pdf',
    color: 'from-red-900/80 to-neutral-900',
    accentColor: 'bg-red-800',
  },
  {
    id: 3,
    title: 'HerEvidence Platform',
    role: 'UX/UI Designer & Developer',
    period: 'May \u2013 Jun 2025',
    category: 'hackathon',
    tag: 'Honorable Mention',
    subtitle: 'SIT Hackathon \u2014 Violence Survivor Evidence Platform',
    description:
      'Designed the complete user experience from User Flows and Wireframes to a High-Fidelity MVP using Figma. Developed Frontend and Backend using React and Node.js, leveraging AI-assisted coding and debugging to deliver a functional system within a limited timeframe.',
    pdfFile: '/pdf/herevidence.pdf',
    color: 'from-neutral-900/90 to-red-950',
    accentColor: 'bg-neutral-700',
  },
  {
    id: 4,
    title: 'SIT Hello World Hippo',
    role: 'UX/UI Designer',
    period: 'Jan \u2013 Feb 2025',
    category: 'hackathon',
    tag: 'Hackathon',
    subtitle: 'SIT Room Booking System Redesign',
    description:
      'Redesigned the complete user experience and interface from Wireframes to a High-Fidelity MVP Prototype, based on the team database structure (ERD). Collaborated closely with the development team to ensure design feasibility within project constraints.',
    pdfFile: '/pdf/sit-hippo.pdf',
    color: 'from-red-950 to-neutral-900',
    accentColor: 'bg-red-900',
  },
];

const tabs = [
  { key: 'all', label: 'Show All' },
  { key: 'hackathon', label: 'Hackathon Projects' },
  { key: 'university', label: 'University Project' },
];

function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] py-24 px-6 md:px-16 text-white font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="border border-white/30 bg-white/5 px-4 py-1 rounded-full text-sm font-medium mb-8 flex items-center gap-2 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Projects
          </div>
          <h2 className="font-sekuya text-sekuya3 tracking-widest uppercase mb-1 text-white">
            PORTFOLIO SHOWCASE
          </h2>
          <span className="font-rochester text-rochester text-white/50">
            Sharing
          </span>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                activeTab === tab.key
                  ? 'bg-primary border-primary text-white shadow-[0_0_16px_rgba(130,0,0,0.5)]'
                  : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between min-h-[260px] hover:border-white/25 hover:scale-[1.01] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
            >
              {/* Tag & period */}
              <div className="flex items-start justify-between mb-4">
                <span className={`${project.accentColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                  {project.tag}
                </span>
                <span className="text-white/40 text-xs font-medium">{project.period}</span>
              </div>

              {/* Title & Role */}
              <div className="mb-3">
                <h3 className="font-bold text-base md:text-lg text-white leading-snug mb-0.5">{project.title}</h3>
                <p className="text-xs text-white/60 font-medium mb-1">{project.role}</p>
                <p className="text-[11px] text-white/40 italic">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-xs text-white/70 leading-relaxed line-clamp-4 mb-5">
                {project.description}
              </p>

              {/* View PDF Button */}
              <a
                href={project.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-2 rounded-full text-xs font-semibold border border-white/30 bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
              >
                View PDF &rarr;
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;