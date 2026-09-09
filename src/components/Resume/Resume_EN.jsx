import React, { useEffect, useRef, useState } from 'react';

const styles = `
  .resume-root {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.55;
    background-color: #f1f5f9;
    padding: 36px 20px;
    font-size: 12.5px;
    -webkit-font-smoothing: antialiased;
  }

  .resume-root * {
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

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 26px;
  }

  .header h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: #0f172a;
    margin-bottom: 8px;
  }

  .header .contact-info {
    font-size: 11.5px;
    color: #475569;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  /* Section */
  .section {
    margin-bottom: 24px;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #0f172a;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #334155;
    margin-bottom: 14px;
  }

  /* Profile */
  .profile-text {
    text-align: justify;
    font-size: 11.5px;
    line-height: 1.62;
    color: #334155;
  }

  /* Education & Project Rows */
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }

  .item-title {
    font-size: 12.5px;
    font-weight: 700;
    color: #0f172a;
  }

  .item-date {
    font-size: 11.5px;
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
    font-size: 11.5px;
    font-style: italic;
    color: #475569;
  }

  .item-subdate {
    font-size: 11.5px;
    font-style: italic;
    color: #475569;
    white-space: nowrap;
  }

  /* Project block */
  .project-block {
    margin-bottom: 16px;
  }

  .project-block:last-child {
    margin-bottom: 0;
  }

  /* Bullets */
  ul.bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ul.bullet-list li {
    font-size: 11.5px;
    line-height: 1.52;
    color: #334155;
    margin-bottom: 4px;
    text-align: justify;
  }

  ul.bullet-list li:last-child {
    margin-bottom: 0;
  }

  ul.bullet-list li strong {
    font-weight: 600;
    color: #0f172a;
  }

  /* Additional Info */
  .additional-info ul.bullet-list li {
    margin-bottom: 6px;
  }

  .additional-info ul.bullet-list li:last-child {
    margin-bottom: 0;
  }

  .print-btn-bar {
    max-width: 210mm;
    margin: 0 auto 16px auto;
    display: flex;
    justify-content: flex-end;
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
    .resume-root {
      background: transparent;
      padding: 0;
    }

    .page-container {
      box-shadow: none;
      padding: 0;
      margin: 0;
      max-width: 100%;
      min-height: auto;
      border-radius: 0;
    }

    .no-print,
    .print-btn-bar {
      display: none !important;
    }
  }
`;

export default function Resume() {
  const containerRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Lazily load html2pdf.js from CDN so the "Download PDF" button works,
  // mirroring the behavior of the original HTML file.
  useEffect(() => {
    if (window.html2pdf) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const downloadPDF = () => {
    if (!window.html2pdf || !containerRef.current) return;

    setIsGenerating(true);

    const element = containerRef.current;
    const originalShadow = element.style.boxShadow;
    const originalRadius = element.style.borderRadius;
    element.style.boxShadow = 'none';
    element.style.borderRadius = '0';

    const opt = {
      margin: [10, 12, 10, 12],
      filename: 'Resume_Sineenath_Rueangsri_EN.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    window
      .html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        element.style.boxShadow = originalShadow;
        element.style.borderRadius = originalRadius;
        setIsGenerating(false);
      })
      .catch((err) => {
        console.error(err);
        element.style.boxShadow = originalShadow;
        element.style.borderRadius = originalRadius;
        setIsGenerating(false);
      });
  };

  return (
    <div className="resume-root">
      <style>{styles}</style>

      <div className="print-btn-bar no-print">
        <button id="download-btn" className="btn" onClick={downloadPDF} disabled={isGenerating}>
          {isGenerating ? '⏳ Generating PDF...' : '📥 Download PDF'}
        </button>
        <button className="btn btn-secondary" onClick={() => window.print()}>
          🖨️ Print
        </button>
      </div>

      <div className="page-container" ref={containerRef}>
        {/* Header */}
        <header className="header">
          <h1>SINEENATH RUEANGSRI</h1>
          <div className="contact-info">
            Bangkok, Thailand | (+66) 61-408-3711 | sineenath.work@gmail.com
          </div>
        </header>

        {/* Profile */}
        <section className="section">
          <h2 className="section-title">PROFILE</h2>
          <p className="profile-text">
            A third-year student in Digital Service Innovation (DSI) at King Mongkut's University of Technology
            Thonburi (KMUTT), with a strong interest in UX/UI and web design. Experienced in designing user flows,
            wireframes, and interactive prototypes through academic projects and hackathons. Possesses foundational
            frontend development skills in HTML, CSS, JavaScript, and React, enabling effective collaboration with
            developers and a better understanding of technical constraints. Currently seeking a UX/UI Design
            internship to further develop user analysis and user-centered design skills, while contributing to
            meaningful products and creating value for both users and the organization.
          </p>
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
              <strong>Relevant Coursework:</strong> Web Technology and Database, Digital Application Production, User
              Experience and Interface, Psychology for Digital Service, Digital Marketing, Market Research, Digital
              Project Management
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
              <li>
                Designed User Flows and Site Maps for a web application aimed at solving classroom environmental
                issues, creating a structured and seamless user experience.
              </li>
              <li>
                Developed a Design System, including Typography and Color Psychology, to establish a consistent
                visual identity throughout the project.
              </li>
              <li>Created Low- to Medium-Fidelity Wireframes and developed them into complete Mockups.</li>
            </ul>
          </div>

          <div className="project-block">
            <div className="item-header">
              <div className="item-title">UX/UI Designer | CP Axtra Mile Hackathon (Top 10 Finalist)</div>
              <div className="item-date">Jun – Aug 2025</div>
            </div>
            <div className="item-subtitle">Hackathon - Smart Adviser (Makro Pro)</div>
            <ul className="bullet-list">
              <li>
                Designed UI mockups for new features on the Makro Pro application, including expiration date
                notifications, AI-powered recommendations for recipes and food preservation, and personalized
                promotions, with the goal of reducing food waste and driving sales.
              </li>
              <li>
                Designed UI elements that aligned seamlessly with the application's existing design language to
                maintain a consistent user experience.
              </li>
            </ul>
          </div>

          <div className="project-block">
            <div className="item-header">
              <div className="item-title">UX/UI Designer &amp; Developer | SIT Hackathon (Honorable Mention)</div>
              <div className="item-date">May – Jun 2025</div>
            </div>
            <div className="item-subtitle">Hackathon - HerEvidence platform</div>
            <ul className="bullet-list">
              <li>Designed the complete user experience from User Flows and Wireframes to a High-Fidelity MVP using Figma.</li>
              <li>
                Developed both the Frontend and Backend using React and Node.js, leveraging AI-assisted coding and
                debugging to deliver a functional system within a limited timeframe.
              </li>
            </ul>
          </div>

          <div className="project-block">
            <div className="item-header">
              <div className="item-title">UX/UI Designer | SIT Hello World Hippo</div>
              <div className="item-date">Jan – Feb 2025</div>
            </div>
            <div className="item-subtitle">Hackathon - SIT Room Booking Redesign</div>
            <ul className="bullet-list">
              <li>
                Redesigned the complete user experience and interface from Wireframes to a High-Fidelity MVP
                Prototype, based on the team's database structure (ERD).
              </li>
              <li>
                Collaborated closely with the development team to ensure that design solutions were technically
                feasible and could be implemented within project constraints.
              </li>
            </ul>
          </div>
        </section>

        {/* Additional Information */}
        <section className="section additional-info">
          <h2 className="section-title">ADDITIONAL INFORMATION</h2>
          <ul className="bullet-list">
            <li>
              <strong>UX/UI Design Skills:</strong> User Research &amp; Persona Creation, Wireframing &amp; User Flow,
              Interactive Prototyping, Information Architecture, Responsive Web &amp; Mobile Design
            </li>
            <li>
              <strong>Design Tools:</strong> Figma, Canva
            </li>
            <li>
              <strong>Soft Skills:</strong> Cross-functional Collaboration, Effective Communication, Problem Solving
              &amp; Critical Thinking, Adaptability &amp; Creativity
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
  );
}
