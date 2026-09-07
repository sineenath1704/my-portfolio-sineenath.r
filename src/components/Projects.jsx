import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'ONEPUT TECHNOLOGY COMPANY LIMITED',
    role: 'Web Designer',
    period: 'October 15, 2025 – Present',
    category: 'internship',
    tag: 'Web Designer',
    subtitle: 'Internship Experience',
    description:
      'Designed and developed web interfaces for ONEPUT Technology Company Limited, focusing on user experience, visual design, and responsive web development.',
    pdfFile: '/pdf/oneput.pdf',
  },

  {
    id: 2,
    title: 'Focus Room Project',
    role: 'UX/UI Designer',
    period: 'March – May 2026',
    category: 'university',
    tag: 'University Project',
    subtitle: 'DSI109 – User Interface and User Experience',
    description:
      'Designed User Flows and Site Maps for a web application aimed at solving classroom environmental issues. Developed a Design System including Typography and Color Psychology. Created Low- to Medium-Fidelity Wireframes progressing to complete Mockups.',
    pdfFile: '/pdf/focus-room.pdf',
  },

  {
    id: 3,
    title: 'CP Axtra Mile Hackathon',
    role: 'UX/UI Designer',
    period: 'Jun – Aug 2025',
    category: 'academic',
    tag: 'Top 10 Finalist',
    subtitle: 'Smart Adviser feature on Makro Pro',
    description:
      'Designed UI mockups for new features on Makro Pro including expiration date notifications, AI-powered recipe and food preservation recommendations, and personalized promotions.',
    pdfFile: '/pdf/axtra-mile.pdf',
  },

  {
    id: 4,
    title: 'HerEvidence Platform',
    role: 'UX/UI Designer & Developer',
    period: 'May – Jun 2025',
    category: 'academic',
    tag: 'Honorable Mention',
    subtitle: 'SIT Hackathon – Violence Survivor Evidence Platform',
    description:
      'Designed the complete user experience from User Flows and Wireframes to a High-Fidelity MVP using Figma. Developed Frontend and Backend using React and Node.js.',
    pdfFile: '/pdf/herevidence.pdf',
  },

  {
    id: 5,
    title: 'SIT Hello World Hippo',
    role: 'UX/UI Designer',
    period: 'Jan – Feb 2025',
    category: 'academic',
    tag: 'Hackathon',
    subtitle: 'SIT Room Booking System Redesign',
    description:
      'Redesigned the complete user experience and interface from Wireframes to a High-Fidelity MVP Prototype based on the team database structure (ERD).',
    pdfFile: '/pdf/sit-hippo.pdf',
  },

  {
    id: 6,
    title: 'Thailand Post Case Study',
    role: 'Digital Transformation Analysis',
    period: 'August 2026',
    category: 'case-study',
    tag: 'Case Study',
    subtitle: 'Digital Transformation & Strategic Recommendation',
    description:
      'Analyzed disruption, digital transformation maturity, and strategic opportunities for Thailand Post. Proposed digital initiatives to improve competitiveness and customer experience.',
    pdfFile: '/pdf/thailand-post.pdf',
  },
];

const tabs = [
  {
    key: 'internship',
    label: 'Internship Experience',
  },
  {
    key: 'university',
    label: 'University Project',
  },
  {
    key: 'academic',
    label: 'Academic competition',
  },
  {
    key: 'case-study',
    label: 'Case Study',
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState('internship');

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-24 font-sans"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================= */}
        <div className="mb-16 flex flex-col items-center text-center">

          {/* Project Badge */}
          <div
            className="
              mb-12
              flex items-center gap-2
              rounded-full
              border border-black
              bg-[#fff8d9]
              px-5 py-2
              text-sm font-semibold text-[#171313]
              shadow-[0_3px_4px_rgba(0,0,0,0.25)]
            "
          >
            <span className="h-2 w-2 rounded-full bg-black" />
            Project
          </div>

          {/* Main Heading */}
          <h2
            className="
              font-sekuya
              text-5xl
              font-black
              uppercase
              tracking-wide
              text-[#171313]
              md:text-6xl
              lg:text-7xl
            "
          >
            PORTFOLIO SHOWCASE
          </h2>

          {/* Subtitle */}
          <span
            className="
              mt-4
              font-rochester
              text-3xl
              text-[#171313]
            "
          >
            Journey
          </span>
        </div>


        {/* =========================
            MAIN PROJECT CONTAINER
        ========================= */}
        <div
          className="
            relative
            min-h-[600px]
            overflow-hidden
            rounded-[32px]
            px-6
            py-9
            shadow-[0_0_30px_rgba(100,0,0,0.35)]
            md:px-12
            md:py-10
          "
          style={{
            background:
              'linear-gradient(180deg, #8f3030 0%, #a94242 18%, #dba9a9 48%, #f3dddd 72%, #ffffff 100%)',
          }}
        >

          {/* Glow Overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              shadow-[inset_0_0_35px_rgba(255,255,255,0.25)]
            "
          />

          <div className="relative z-10">

            {/* =========================
                FILTER TABS
            ========================= */}
            <div
              className="
                mb-16
                flex
                flex-wrap
                justify-center
                gap-3
                md:gap-4
              "
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`
                      rounded-full
                      border
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            border-white/20
                            bg-white/20
                            text-white
                            shadow-[inset_0_0_12px_rgba(255,255,255,0.15)]
                          `
                          : `
                            border-white/70
                            bg-transparent
                            text-white
                            hover:bg-white/10
                          `
                      }

                      md:px-7
                      md:py-3.5
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>


            {/* =========================
                PROJECT CARDS
            ========================= */}
            <div
              className="
                grid
                grid-cols-1
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="
                    group
                    flex
                    min-h-[255px]
                    flex-col
                    justify-between
                    rounded-[20px]
                    border
                    border-[#e98282]/50
                    bg-[#a83232]
                    p-6
                    text-white
                    shadow-[0_4px_15px_rgba(90,0,0,0.45)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_25px_rgba(90,0,0,0.55)]
                  "
                >

                  {/* Card Content */}
                  <div>

                    {/* Title */}
                    <h3
                      className="
                        max-w-[330px]
                        text-lg
                        font-bold
                        uppercase
                        leading-snug
                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Role */}
                    <p
                      className="
                        mt-5
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      <span className="font-bold">Job position:</span>{' '}
                      {project.role}
                    </p>

                    {/* Period */}
                    <p
                      className="
                        mt-4
                        text-xs
                        font-semibold
                        leading-relaxed
                        text-white
                      "
                    >
                      <span className="font-bold">
                        Work start date:
                      </span>{' '}
                      {project.period}
                    </p>

                  </div>


                  {/* Bottom */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >

                    {/* Category */}
                    <span
                      className="
                        rounded-md
                        border
                        border-white/80
                        px-4
                        py-2
                        text-[11px]
                        font-medium
                        text-white
                      "
                    >
                      {project.tag}
                    </span>


                    {/* Detail Button */}
                    <a
                      href={project.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-white/20
                        px-7
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-[0_3px_8px_rgba(0,0,0,0.25)]
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-[#8f3030]
                      "
                    >
                      Detail
                    </a>

                  </div>

                </div>
              ))}
            </div>


            {/* =========================
                EMPTY STATE
            ========================= */}
            {filteredProjects.length === 0 && (
              <div
                className="
                  flex
                  min-h-[250px]
                  items-center
                  justify-center
                  text-center
                  text-sm
                  font-medium
                  text-white/70
                "
              >
                No projects available in this category.
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;