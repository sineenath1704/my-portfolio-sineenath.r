import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PROJECT_DATA = [
  {
    id: 1,
    title: 'ONEPUT TECHNOLOGY COMPANY LIMITED',
    role:    { EN: 'Web Designer',          TH: 'Web Designer' },
    period:  { EN: 'October 15, 2025 – Present', TH: '15 ต.ค. 2568 – ปัจจุบัน' },
    subtitle:{ EN: 'Internship Experience',  TH: 'ประสบการณ์ฝึกงาน' },
    description: {
      EN: 'Designed and developed web interfaces for ONEPUT Technology Company Limited, focusing on user experience, visual design, and responsive web development.',
      TH: 'ออกแบบและพัฒนา Web Interface สำหรับบริษัท ONEPUT Technology โดยเน้นประสบการณ์ผู้ใช้ การออกแบบ Visual และ Responsive Web',
    },
    category: 'internship',
    tag: { EN: 'Web Designer', TH: 'Web Designer' },
    pdfFile: '/pdf/oneput.pdf',
    detailPath: '/project-detail/oneput',
  },
  {
    id: 2,
    title: 'Focus Room Project',
    role:    { EN: 'UX/UI Designer',     TH: 'UX/UI Designer' },
    period:  { EN: 'March – May 2026',   TH: 'มี.ค. – พ.ค. 2569' },
    subtitle:{ EN: 'DSI109 – User Interface and User Experience', TH: 'DSI109 – User Interface and User Experience' },
    description: {
      EN: 'Designed User Flows and Site Maps for a web application aimed at solving classroom environmental issues. Developed a Design System including Typography and Color Psychology. Created Low- to Medium-Fidelity Wireframes progressing to complete Mockups.',
      TH: 'ออกแบบ User Flows และ Site Maps สำหรับเว็บแอปฯ แก้ปัญหาสภาพแวดล้อมห้องเรียน พัฒนา Design System รวม Typography และ Color Psychology ทำ Wireframes ระดับ Low ถึง Medium จนถึง Mockup สมบูรณ์',
    },
    category: 'university',
    tag: { EN: 'University Project', TH: 'โปรเจกต์มหาวิทยาลัย' },
    pdfFile: '/pdf/focus-room.pdf',
    detailPath: '/project-detail/focus-room',
  },
  {
    id: 3,
    title: 'CP Axtra Mile Hackathon',
    role:    { EN: 'UX/UI Designer',  TH: 'UX/UI Designer' },
    period:  { EN: 'Jun – Aug 2025',  TH: 'มิ.ย. – ส.ค. 2568' },
    subtitle:{ EN: 'Smart Adviser feature on Makro Pro', TH: 'ฟีเจอร์ Smart Adviser บน Makro Pro' },
    description: {
      EN: 'Designed UI mockups for new features on Makro Pro including expiration date notifications, AI-powered recipe and food preservation recommendations, and personalized promotions.',
      TH: 'ออกแบบ UI Mockups สำหรับฟีเจอร์ใหม่บน Makro Pro ได้แก่ การแจ้งเตือนวันหมดอายุ, คำแนะนำสูตรอาหารและวิธีเก็บรักษาด้วย AI และโปรโมชันส่วนบุคคล',
    },
    category: 'academic',
    tag: { EN: 'Top 10 Finalist', TH: 'Top 10 Finalist' },
    pdfFile: '/pdf/axtra-mile.pdf',
    detailPath: '/project-detail/cp-axtra-mile',
  },
  {
    id: 4,
    title: 'HerEvidence Platform',
    role:    { EN: 'UX/UI Designer & Developer', TH: 'UX/UI Designer & Developer' },
    period:  { EN: 'May – Jun 2025',             TH: 'พ.ค. – มิ.ย. 2568' },
    subtitle:{ EN: 'SIT Hackathon – Violence Survivor Evidence Platform', TH: 'SIT Hackathon – แพลตฟอร์มรวบรวมหลักฐานผู้รอดชีวิต' },
    description: {
      EN: 'Designed the complete user experience from User Flows and Wireframes to a High-Fidelity MVP using Figma. Developed Frontend and Backend using React and Node.js.',
      TH: 'ออกแบบประสบการณ์ผู้ใช้ครบวงจรตั้งแต่ User Flows, Wireframes ไปจนถึง High-Fidelity MVP ด้วย Figma พัฒนา Frontend และ Backend ด้วย React และ Node.js',
    },
    category: 'academic',
    tag: { EN: 'Honorable Mention', TH: 'รางวัล Honorable Mention' },
    pdfFile: '/pdf/herevidence.pdf',
    detailPath: '/project-detail/herevidence',
  },
  {
    id: 5,
    title: 'SIT Hello World Hippo',
    role:    { EN: 'UX/UI Designer', TH: 'UX/UI Designer' },
    period:  { EN: 'Jan – Feb 2025', TH: 'ม.ค. – ก.พ. 2568' },
    subtitle:{ EN: 'SIT Room Booking System Redesign', TH: 'ออกแบบใหม่ระบบจองห้อง SIT' },
    description: {
      EN: 'Redesigned the complete user experience and interface from Wireframes to a High-Fidelity MVP Prototype based on the team database structure (ERD).',
      TH: 'ออกแบบ UX/UI ใหม่ทั้งหมดตั้งแต่ Wireframes จนถึง High-Fidelity MVP Prototype โดยอิงจากโครงสร้างฐานข้อมูล (ERD) ของทีม',
    },
    category: 'academic',
    tag: { EN: 'Hackathon', TH: 'Hackathon' },
    pdfFile: '/pdf/sit-hippo.pdf',
    detailPath: '/project-detail/sit-hello-world-hippo',
  },
];

const TABS_CONFIG = [
  { key: 'all',        labelEN: 'Show All',             labelTH: 'ทั้งหมด' },
  { key: 'internship', labelEN: 'Internship Experience', labelTH: 'ประสบการณ์ฝึกงาน' },
  { key: 'university', labelEN: 'University Project',    labelTH: 'โปรเจกต์มหาวิทยาลัย' },
  { key: 'academic',   labelEN: 'Academic competition',  labelTH: 'การแข่งขันวิชาการ' },
];

const SECTION_TEXT = {
  EN: {
    badge: 'Project',
    heading: 'PORTFOLIO SHOWCASE',
    subtitle: 'Journey',
    jobPosition: 'Job position:',
    workStartDate: 'Work start date:',
    detailBtn: 'Detail Project',
    slideBtn: 'Project Slide',
    emptyState: 'No projects available in this category.',
  },
  TH: {
    badge: 'Project',
    heading: 'PORTFOLIO SHOWCASE',
    subtitle: 'Journey',
    jobPosition: 'ตำแหน่ง:',
    workStartDate: 'ช่วงเวลา:',
    detailBtn: 'รายละเอียด',
    slideBtn: 'สไลด์โปรเจกต์',
    emptyState: 'ยังไม่มีโปรเจกต์ในหมวดนี้',
  },
};

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
    detailPath: '/project-detail/oneput',
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
    detailPath: '/project-detail/focus-room',
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
    detailPath: '/project-detail/cp-axtra-mile',
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
    detailPath: '/project-detail/herevidence',
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
    detailPath: '/project-detail/sit-hello-world-hippo',
  },
];

// Keep a flat array for category-matching (same keys used in URL params)
const tabs = TABS_CONFIG;

function Projects() {
  const location = useLocation();
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang] || SECTION_TEXT.EN;

  // Derive localized project list
  const projects = PROJECT_DATA.map((p) => ({
    ...p,
    role: p.role[lang] || p.role.EN,
    period: p.period[lang] || p.period.EN,
    subtitle: p.subtitle[lang] || p.subtitle.EN,
    description: p.description[lang] || p.description.EN,
    tag: p.tag[lang] || p.tag.EN,
  }));

  const getInitialTab = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat) {
        const lower = cat.toLowerCase();
        if (lower === 'all' || lower.includes('show')) return 'all';
        const matched = TABS_CONFIG.find(
          (tb) => tb.key.toLowerCase() === lower || tb.labelEN.toLowerCase() === lower
        );
        if (matched) return matched.key;
        if (lower.includes('hack') || lower.includes('acad')) return 'academic';
        if (lower.includes('univ')) return 'university';
        if (lower.includes('intern')) return 'internship';
      }
    }
    return 'all';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category') || location.state?.category;
    if (categoryParam) {
      const paramLower = categoryParam.toLowerCase();
      if (paramLower === 'all' || paramLower.includes('show')) {
        setActiveTab('all');
        return;
      }
      const matchedTab = TABS_CONFIG.find(
        (tb) => tb.key.toLowerCase() === paramLower || tb.labelEN.toLowerCase() === paramLower
      );
      if (matchedTab) {
        setActiveTab(matchedTab.key);
      } else if (paramLower.includes('hack') || paramLower.includes('acad')) {
        setActiveTab('academic');
      } else if (paramLower.includes('univ')) {
        setActiveTab('university');
      } else if (paramLower.includes('intern')) {
        setActiveTab('internship');
      }
    }
  }, [location.search, location.state]);

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((project) => project.category === activeTab);

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
            {t.badge}
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
            {t.subtitle}
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
              {TABS_CONFIG.map((tab) => {
                const isActive = activeTab === tab.key;
                const tabLabel = lang === 'TH' ? tab.labelTH : tab.labelEN;

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
                    {tabLabel}
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
                      <span className="font-bold">{t.jobPosition}</span>{' '}
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
                        {t.workStartDate}
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

                    {/* Buttons: Detail Project & Project Slide */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to={project.detailPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          rounded-full
                          border
                          border-white/30
                          bg-white
                          px-5
                          py-2.5
                          text-xs
                          font-semibold
                          text-[#8f3030]
                          shadow-[0_3px_8px_rgba(0,0,0,0.25)]
                          transition-all
                          duration-300
                          hover:bg-[#fff5cf]
                          hover:scale-105
                        "
                      >
                        {t.detailBtn}
                      </Link>

                      {project.pdfFile && (
                        <a
                          href={project.pdfFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-full
                            border
                            border-white/20
                            bg-white/20
                            px-5
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
                          {t.slideBtn}
                        </a>
                      )}
                    </div>

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
                {t.emptyState}
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;