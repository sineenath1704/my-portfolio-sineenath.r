import React, { useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Toolbar (always visible, independent of language)                   */
/* ------------------------------------------------------------------ */

const toolbarStyles = `
  .resume-switcher-root {
    background-color: #f1f5f9;
    padding: 36px 20px;
    min-height: 100vh;
  }

  .switcher-bar {
    max-width: 210mm;
    margin: 0 auto 16px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .lang-switch {
    position: relative;
    display: inline-flex;
    background: #e2e8f0;
    border-radius: 999px;
    padding: 4px;
    width: 148px;
    height: 40px;
    cursor: pointer;
    user-select: none;
  }

  .lang-switch-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 70px;
    height: 32px;
    background: #0f172a;
    border-radius: 999px;
    transition: transform 0.25s ease;
  }

  .lang-switch.is-th .lang-switch-thumb {
    transform: translateX(70px);
  }

  .lang-switch-option {
    position: relative;
    z-index: 1;
    width: 70px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    transition: color 0.25s ease;
  }

  .lang-switch-option.active {
    color: #ffffff;
  }

  .lang-switch-option:not(.active) {
    color: #475569;
  }

  .toolbar-buttons {
    display: flex;
    gap: 10px;
  }

  .btn {
    background: #0f172a;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 600;
    font-family: 'Poppins', 'Inter', sans-serif;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.18);
    transition: all 0.2s ease;
  }

  .btn:hover {
    background: #334155;
    transform: translateY(-1px);
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .btn-secondary {
    background: #ffffff;
    color: #0f172a;
    border: 1px solid #cbd5e1;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  }

  .btn-secondary:hover {
    background: #f8fafc;
    border-color: #94a3b8;
  }

  @media print {
    .resume-switcher-root {
      background: transparent;
      padding: 0;
    }
    .no-print {
      display: none !important;
    }
  }
`;

/* ------------------------------------------------------------------ */
/* Resume content styles (shared layout, per-language type sizing)     */
/* ------------------------------------------------------------------ */

const resumeStyles = {
  en: `
    .resume-body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.55;
      font-size: 12.5px;
      -webkit-font-smoothing: antialiased;
    }
    .resume-body .header h1 { font-size: 24px; }
    .resume-body .contact-info { font-size: 11.5px; }
    .resume-body .section-title { font-size: 13px; }
    .resume-body .profile-text { font-size: 11.5px; line-height: 1.62; }
    .resume-body .item-title { font-size: 12.5px; }
    .resume-body .item-date,
    .resume-body .item-subtitle,
    .resume-body .item-subdate { font-size: 11.5px; }
    .resume-body ul.bullet-list li { font-size: 11.5px; line-height: 1.52; margin-bottom: 4px; }
  `,
  th: `
    .resume-body {
      font-family: 'Sarabun', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      line-height: 1.6;
      font-size: 13px;
      -webkit-font-smoothing: antialiased;
    }
    .resume-body .header h1 { font-family: 'Inter', 'Sarabun', sans-serif; font-size: 24px; }
    .resume-body .contact-info { font-size: 12px; }
    .resume-body .section-title { font-family: 'Inter', 'Sarabun', sans-serif; font-size: 13.5px; }
    .resume-body .profile-text { font-size: 12.5px; line-height: 1.68; }
    .resume-body .item-title { font-size: 13px; }
    .resume-body .item-date,
    .resume-body .item-subtitle,
    .resume-body .item-subdate { font-size: 12px; }
    .resume-body ul.bullet-list li { font-size: 12px; line-height: 1.58; margin-bottom: 4.5px; }
  `,
};

const sharedResumeStyles = `
  .resume-body * {
    box-sizing: border-box;
  }

  .page-container {
    max-width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    background: #ffffff;
    padding: 42px 48px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
  }

  .header {
    text-align: center;
    margin-bottom: 26px;
  }

  .header h1 {
    font-weight: 700;
    letter-spacing: 0.8px;
    color: #0f172a;
    margin-bottom: 8px;
  }

  .header .contact-info {
    color: #475569;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  .section {
    margin-bottom: 24px;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #0f172a;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #334155;
    margin-bottom: 14px;
  }

  .profile-text {
    text-align: justify;
    color: #334155;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }

  .item-title {
    font-weight: 700;
    color: #0f172a;
  }

  .item-date {
    font-weight: 700;
    color: #0f172a;
    white-space: nowrap;
  }

  .item-subtitle-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;
  }

  .item-subtitle {
    font-style: italic;
    color: #475569;
  }

  .item-subdate {
    font-style: italic;
    color: #475569;
    white-space: nowrap;
  }

  .project-block {
    margin-bottom: 16px;
  }

  .project-block:last-child {
    margin-bottom: 0;
  }

  ul.bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ul.bullet-list li {
    color: #334155;
    text-align: justify;
  }

  ul.bullet-list li:last-child {
    margin-bottom: 0;
  }

  ul.bullet-list li strong {
    font-weight: 600;
    color: #0f172a;
  }

  .additional-info ul.bullet-list li {
    margin-bottom: 6px;
  }

  .additional-info ul.bullet-list li:last-child {
    margin-bottom: 0;
  }

  @media print {
    .page-container {
      box-shadow: none;
      padding: 0;
      margin: 0;
      max-width: 100%;
      min-height: auto;
      border-radius: 0;
    }
  }
`;

/* ------------------------------------------------------------------ */
/* Translated / language-specific text                                 */
/* ------------------------------------------------------------------ */

const TEXT = {
  en: {
    print: '🖨️ Print & Download',
    profile: `A third-year student in Digital Service Innovation (DSI) at King Mongkut's University of Technology
      Thonburi (KMUTT), with a strong interest in UX/UI and web design. Experienced in designing user flows,
      wireframes, and interactive prototypes through academic projects and hackathons. Possesses foundational
      frontend development skills in HTML, CSS, JavaScript, and React, enabling effective collaboration with
      developers and a better understanding of technical constraints. Currently seeking a UX/UI Design internship
      to further develop user analysis and user-centered design skills, while contributing to meaningful products
      and creating value for both users and the organization.`,
    focusRoom: [
      'Designed User Flows and Site Maps for a web application aimed at solving classroom environmental issues, creating a structured and seamless user experience.',
      'Developed a Design System, including Typography and Color Psychology, to establish a consistent visual identity throughout the project.',
      'Created Low- to Medium-Fidelity Wireframes and developed them into complete Mockups.',
    ],
    axtraMile: [
      "Designed UI mockups for new features on the Makro Pro application, including expiration date notifications, AI-powered recommendations for recipes and food preservation, and personalized promotions, with the goal of reducing food waste and driving sales.",
      "Designed UI elements that aligned seamlessly with the application's existing design language to maintain a consistent user experience.",
    ],
    herEvidence: [
      'Designed the complete user experience from User Flows and Wireframes to a High-Fidelity MVP using Figma.',
      'Developed both the Frontend and Backend using React and Node.js, leveraging AI-assisted coding and debugging to deliver a functional system within a limited timeframe.',
    ],
    helloWorld: [
      "Redesigned the complete user experience and interface from Wireframes to a High-Fidelity MVP Prototype, based on the team's database structure (ERD).",
      'Collaborated closely with the development team to ensure that design solutions were technically feasible and could be implemented within project constraints.',
    ],
  },
  th: {
    print: '🖨️ Print & Download',
    profile: `นักศึกษาชั้นปีที่ 3 สาขานวัตกรรมบริการดิจิทัล (DSI) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
      มีความสนใจในการออกแบบ UX/UI และ Web Design พร้อมประสบการณ์ในการออกแบบ User Flows, Wireframes และ Interactive
      Prototypes จากโครงงานการศึกษาและการเข้าร่วม Hackathons มีพื้นฐานด้าน Frontend ได้แก่ HTML, CSS, JavaScript และ
      React ซึ่งช่วยให้สามารถทำงานร่วมกับทีมนักพัฒนาและเข้าใจข้อจำกัดในการพัฒนาผลิตภัณฑ์ได้ดีขึ้น
      ปัจจุบันกำลังมองหาโอกาสในการฝึกงานด้าน UX/UI Design เพื่อพัฒนาทักษะด้านการวิเคราะห์ผู้ใช้งาน
      การออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง และนำความรู้ไปสร้างสรรค์ประสบการณ์ที่ดีให้กับผู้ใช้งานและองค์กร`,
    focusRoom: [
      'ออกแบบ User Flows และ Site Map สำหรับเว็บแอปพลิเคชันแก้ไขปัญหาสภาพแวดล้อมในห้องเรียน สร้างโครงสร้างการโต้ตอบที่ลื่นไหลและเป็นระบบ',
      'จัดทำ Design System (Typography, Color Psychology) เพื่อสร้างเอกลักษณ์ของงานดีไซน์ตลอดทั้งโปรเจกต์',
      'สร้าง Low- to Medium-Fidelity Wireframes เพื่อพัฒนาสู่ Mockup ฉบับสมบูรณ์',
    ],
    axtraMile: [
      'ออกแบบ UI Mockups สำหรับฟีเจอร์ใหม่บน Makro Pro (การแจ้งเตือนวันหมดอายุ, AI แนะนำเมนูและวิธียืดอายุอาหาร, โปรโมชันเฉพาะบุคคล) มุ่งเน้นการลด Food Waste และกระตุ้นยอดขาย',
      'ออกแบบ UI ให้สอดคล้องกลมกลืนกับ Design Language เดิมของแอปพลิเคชัน',
    ],
    herEvidence: [
      'ออกแบบ User Flow, Wireframe จนถึง High-Fidelity MVP บน Figma',
      'พัฒนา Frontend และ Backend โดยใช้ React และ Node.js ร่วมกับการใช้ AI ช่วยเขียนโค้ดและแก้ไขข้อผิดพลาดในการพัฒนาจนได้ระบบที่ใช้งานได้จริงในเวลาที่จำกัด',
    ],
    helloWorld: [
      'ออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้ใหม่ทั้งหมดตั้งแต่ Wireframe จนถึง High-Fidelity MVP Prototype โดยอ้างอิงตามโครงสร้างฐานข้อมูล (ERD) ของทีม',
      'ทำงานร่วมกับทีมนักพัฒนาอย่างใกล้ชิดเพื่อให้แน่ใจว่างานดีไซน์สามารถนำไปพัฒนาได้จริงตามข้อจำกัดทางเทคนิค',
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Fonts                                                                */
/* ------------------------------------------------------------------ */

function ensureFontStylesheet() {
  const id = 'resume-switcher-font-link';
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600&display=swap';
  document.head.appendChild(link);
}

/* ------------------------------------------------------------------ */
/* Main component                                                       */
/* ------------------------------------------------------------------ */

export default function ResumeSwitcher() {
  const [lang, setLang] = useState('en');
  const containerRef = useRef(null);

  useEffect(() => {
    ensureFontStylesheet();
  }, []);

  const t = TEXT[lang];

  return (
    <div className="resume-switcher-root">
      <style>{toolbarStyles}</style>
      <style>{sharedResumeStyles}</style>
      <style>{resumeStyles[lang]}</style>

      {/* ---------------- Toolbar ---------------- */}
      <div className="switcher-bar no-print">
        <div
          className={`lang-switch ${lang === 'th' ? 'is-th' : ''}`}
          onClick={() => setLang((l) => (l === 'en' ? 'th' : 'en'))}
          role="button"
          aria-label="Toggle resume language"
        >
          <div className="lang-switch-thumb" />
          <div className={`lang-switch-option ${lang === 'en' ? 'active' : ''}`}>EN</div>
          <div className={`lang-switch-option ${lang === 'th' ? 'active' : ''}`}>TH</div>
        </div>

        <div className="toolbar-buttons">
          <button className="btn" onClick={() => window.print()}>
            {t.print}
          </button>
        </div>
      </div>

      {/* ---------------- Resume content ---------------- */}
      <div className="resume-body" ref={containerRef}>
        <div className="page-container">
          {/* Header */}
          <header className="header">
            <h1>SINEENATH RUEANGSRI</h1>
            <div className="contact-info">
              Bangkok, Thailand | (+66) 61-408-3711 | sineenathrueangsri@gmail.com
            </div>
          </header>

          {/* Profile */}
          <section className="section">
            <h2 className="section-title">PROFILE</h2>
            <p className="profile-text">{t.profile}</p>
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-title">EDUCATION</h2>
            <div className="item-header">
              <div className="item-title">King Mongkut's University of Technology Thonburi,</div>
              <div className="item-date">2024 – Present</div>
            </div>
            <div className="item-subtitle-row">
              <div className="item-subtitle" style={{ fontWeight: 600, fontStyle: 'normal' }}>
                School of Information Technology (SIT)
              </div>
              <div className="item-subdate">(Expected Graduation: 2028)</div>
            </div>
            <div className="item-subtitle" style={{ fontWeight: 600, fontStyle: 'normal', marginBottom: 5 }}>
              Bachelor of Arts in Digital Service Innovation
            </div>
            <ul className="bullet-list">
              <li>
                <strong>GPA:</strong> 3.57 / 4.0
              </li>
              <li>
                <strong>Relevant Coursework:</strong> Web Technology and Database, Digital Application Production,
                User Experience and Interface, Psychology for Digital Service, Digital Marketing, Market Research,
                Digital Project Management
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">PROJECTS</h2>

            <div className="project-block">
              <div className="item-header">
                <div className="item-title">UX/UI Designer | Focus Room Project</div>
                <div className="item-date">March – May 2026</div>
              </div>
              <div className="item-subtitle">University Project - DSI109 (User Interface and User Experience)</div>
              <ul className="bullet-list">
                {t.focusRoom.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <div className="item-header">
                <div className="item-title">UX/UI Designer | CP Axtra Mile Hackathon (Top 10 Finalist)</div>
                <div className="item-date">Jun – Aug 2025</div>
              </div>
              <div className="item-subtitle">Hackathon - Smart Adviser (Makro Pro)</div>
              <ul className="bullet-list">
                {t.axtraMile.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <div className="item-header">
                <div className="item-title">UX/UI Designer &amp; Developer | SIT Hackathon (Honorable Mention)</div>
                <div className="item-date">May – Jun 2025</div>
              </div>
              <div className="item-subtitle">Hackathon - HerEvidence platform</div>
              <ul className="bullet-list">
                {t.herEvidence.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="project-block">
              <div className="item-header">
                <div className="item-title">UX/UI Designer | SIT Hello World Hippo</div>
                <div className="item-date">Jan – Feb 2025</div>
              </div>
              <div className="item-subtitle">Hackathon - SIT Room Booking Redesign</div>
              <ul className="bullet-list">
                {t.helloWorld.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Additional Information */}
          <section className="section additional-info">
            <h2 className="section-title">ADDITIONAL INFORMATION</h2>
            <ul className="bullet-list">
              <li>
                <strong>UX/UI Design Skills:</strong> User Research &amp; Persona Creation, Wireframing &amp; User
                Flow, Interactive Prototyping, Information Architecture, Responsive Web &amp; Mobile Design
              </li>
              <li>
                <strong>Design Tools:</strong> Figma, Canva
              </li>
              <li>
                <strong>Soft Skills:</strong> Cross-functional Collaboration, Effective Communication, Problem
                Solving &amp; Critical Thinking, Adaptability &amp; Creativity
              </li>
              <li>
                <strong>Frontend Skills (Foundational):</strong> HTML, CSS, Tailwind CSS, JavaScript, React, MySQL
              </li>
              <li>
                <strong>Languages:</strong> Thai (Native) | English (Basic Working Proficiency)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
