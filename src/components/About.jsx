import React from 'react';
import { Html5, Css, Javascript, React as ReactIcon, TailwindCss, Mysql, Figma, Canva } from '@thesvg/react';

function About() {
  const iconMap = {
    html: <Html5 className="h-8 w-8" />,
    css: <Css className="h-8 w-8" />,
    js: <Javascript className="h-8 w-8" />,
    react: <ReactIcon className="h-8 w-8" />,
    tailwind: <TailwindCss className="h-8 w-8" />,
    mysql: <Mysql className="h-8 w-8" />,
    figma: <Figma className="h-8 w-8" />,
    canva: <Canva className="h-8 w-8" />,
  };

  const technicalSkills = [
    { label: 'HTML', iconKey: 'html' },
    { label: 'CSS', iconKey: 'css' },
    { label: 'JS', iconKey: 'js' },
    { label: 'React', iconKey: 'react' },
    { label: 'Tailwind', iconKey: 'tailwind' },
    { label: 'MySQL', iconKey: 'mysql' },
  ];

  const designTools = [
    { label: 'Figma', iconKey: 'figma' },
    { label: 'Canva', iconKey: 'canva' },
  ];

  return (
    <section id="about" className="min-h-screen bg-white py-24 px-6 md:px-16 text-neutral-800 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="border border-black bg-[#FFFBEA] px-4 py-1 rounded-full font-poppins text-sm font-medium mb-8 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            About Me
          </div>
          <h2 className="font-sekuya text-4xl md:text-5xl font-bold tracking-wide uppercase mb-2">
            ABOUT ME
          </h2>
          <span className="font-rochester text-rochester text-neutral-500">
            Get to know me
          </span>
        </div>

        {/* ─── Row 1: Profile + Education (left) | Photo (right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">

            {/* Profile */}
            <div>
              <div className="border-l-4 border-neutral-800 pl-4 mb-4">
                <h3 className="font-bold text-lg text-black">Profile</h3>
              </div>

              <p className="font-bold text-sm mb-3 text-black">
                Name: Sineenath Rueangsri
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed">
                A third-year student in Digital Service Innovation (DSI) at King Mongkut's University of
                Technology Thonburi (KMUTT), with a passion for UX/UI and web design. Experienced in
                designing user flows, wireframes, and interactive prototypes through academic projects and
                hackathons. Possesses foundational frontend knowledge (HTML, CSS, JavaScript, React) to bridge
                the gap between design and development, ensuring seamless handoffs. Seeking a UX/UI Design
                internship to enhance my analytical and user-centered design skills, while contributing to the
                continuous growth of your organization.
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="border-l-4 border-neutral-800 pl-4 mb-4">
                <h3 className="font-bold text-lg text-black">Education</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-black">
                    King Mongkut's University of Technology Thonburi,
                  </p>
                  <p className="text-sm font-bold text-black">
                    School of Information Technology (SIT)
                  </p>
                  <p className="text-sm text-neutral-600">
                    Bachelor of Arts in Digital Service Innovation
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-black">
                    2024 – Present
                  </p>
                  <p className="text-sm text-neutral-600">
                    (Expected Graduation: 2028)
                  </p>
                </div>
              </div>

              <ul className="mt-4 text-sm text-neutral-600 leading-relaxed space-y-1">
                <li>
                  <strong className="text-black">GPA:</strong> 3.57 / 4.0
                </li>
                <li>
                  <strong className="text-black">Relevant Coursework:</strong> Web Technology and Database,
                  Digital Application Production, User Experience and Interface, Psychology for Digital Service,
                  Digital Marketing, Market Research, Digital Project Management
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Profile Photo */}
          <div className="lg:col-span-6 flex justify-center items-start order-1 lg:order-2">
            <img
              src="/Picture/Profile.png"
              alt="Sineenath Rueangsri — UX/UI Designer"
              className="w-[70%] sm:w-[60%] md:w-[65%] lg:w-full h-auto object-contain object-center"
            />
          </div>

        </div>

        {/* ─── Row 2: Tools Section ─── */}
        <div>
          <div className="border-l-4 border-neutral-800 pl-4 mb-10">
            <h3 className="font-bold text-lg text-black">Tools</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">

            {/* Design Tools */}
            <div>
              <h4 className="font-bold text-sm text-black mb-6">Design Tools</h4>
              <div className="flex flex-wrap gap-6">
                {designTools.map((tool) => (
                  <div key={tool.label} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-neutral-300">
                      <div className="text-4xl">
                        {iconMap[tool.iconKey]}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-6">
                Frontend Skills (Foundational)
              </h4>

              <div className="flex flex-wrap gap-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.label} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-neutral-300">
                      <div className="text-4xl">
                        {iconMap[skill.iconKey]}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── Row 3: Additional Information ─── */}
        <div className="mt-16">
          <div className="border-l-4 border-neutral-800 pl-4 mb-8">
            <h3 className="font-bold text-lg text-black">Additional Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* UX/UI Design Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">UX/UI Design Skills</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                <li>• User Research & Persona Creation</li>
                <li>• Wireframing & User Flow</li>
                <li>• Interactive Prototyping</li>
                <li>• Information Architecture</li>
                <li>• Responsive Web & Mobile Design</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">Soft Skills</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                <li>• Cross-functional Collaboration</li>
                <li>• Effective Communication</li>
                <li>• Problem Solving & Critical Thinking</li>
                <li>• Adaptability & Creativity</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">Languages</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                <li>• Thai (Native)</li>
                <li>• English (Basic Working Proficiency)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;