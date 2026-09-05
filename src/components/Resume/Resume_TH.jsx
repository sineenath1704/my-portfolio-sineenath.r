import React, { useEffect, useRef, useState } from 'react';

const styles = `
  .resume-root {
    font-family: 'Sarabun', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.6;
    background-color: #f1f5f9;
    padding: 36px 20px;
    font-size: 13px;
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
    font-family: 'Inter', 'Sarabun', sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: #0f172a;
    margin-bottom: 8px;
  }

  .header .contact-info {
    font-size: 12px;
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
    font-family: 'Inter', 'Sarabun', sans-serif;
    font-size: 13.5px;
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
    font-size: 12.5px;
    line-height: 1.68;
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
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
  }

  .item-date {
    font-size: 12px;
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
    font-size: 12px;
    font-style: italic;
    color: #475569;
  }

  .item-subdate {
    font-size: 12px;
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
    font-size: 12px;
    line-height: 1.58;
    color: #334155;
    margin-bottom: 4.5px;
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
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.18);
    transition: all 0.2s ease;
    font-family: 'Sarabun', sans-serif;
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

// Load the Google Fonts stylesheet once (Sarabun is required for correct
// Thai vowel/tone-mark positioning — without it the browser falls back to a
// font that doesn't handle stacked Thai diacritics, causing them to overlap).
function ensureFontStylesheet() {
  const id = 'sarabun-inter-font-link';
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&family=Inter:wght@400;600;700&display=swap';
  document.head.appendChild(link);
}

export default function Resume() {
  const containerRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    ensureFontStylesheet();

    if (window.html2pdf) return;
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const downloadPDF = async () => {
    if (!window.html2pdf || !containerRef.current) return;

    setIsGenerating(true);

    // Wait for the Sarabun/Inter web fonts to finish loading before html2canvas
    // rasterizes the page. If capture starts too early, Thai tone marks and
    // vowels (which stack above/below the base character) can render with the
    // fallback font's metrics and end up overlapping each other or the text
    // below. document.fonts.ready resolves only once all @font-face fonts used
    // on the page have actually loaded.
    try {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      // Small extra delay as a safety margin for slower connections / font swap.
      await new Promise((resolve) => setTimeout(resolve, 150));
    } catch (e) {
      // If font loading detection isn't supported, proceed anyway.
    }

    const element = containerRef.current;
    const originalShadow = element.style.boxShadow;
    const originalRadius = element.style.borderRadius;
    element.style.boxShadow = 'none';
    element.style.borderRadius = '0';

    const opt = {
      margin: [10, 12, 10, 12],
      filename: 'Resume_Sineenath_Rueangsri_TH.pdf',
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
          {isGenerating ? '⏳ กำลังสร้าง PDF...' : '📥 Download PDF'}
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
            Bangkok, Thailand | (+66) 61-408-3711 | sineenathrueangsri@gmail.com
          </div>
        </header>

        {/* Profile */}
        <section className="section">
          <h2 className="section-title">PROFILE</h2>
          <p className="profile-text">
            นักศึกษาชั้นปีที่ 3 สาขานวัตกรรมบริการดิจิทัล (DSI) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)
            มีความสนใจในการออกแบบ UX/UI และ Web Design พร้อมประสบการณ์ในการออกแบบ User Flows, Wireframes และ
            Interactive Prototypes จากโครงงานการศึกษาและการเข้าร่วม Hackathons มีพื้นฐานด้าน Frontend ได้แก่ HTML, CSS,
            JavaScript และ React ซึ่งช่วยให้สามารถทำงานร่วมกับทีมนักพัฒนาและเข้าใจข้อจำกัดในการพัฒนาผลิตภัณฑ์ได้ดีขึ้น
            ปัจจุบันกำลังมองหาโอกาสในการฝึกงานด้าน UX/UI Design เพื่อพัฒนาทักษะด้านการวิเคราะห์ผู้ใช้งาน
            การออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง และนำความรู้ไปสร้างสรรค์ประสบการณ์ที่ดีให้กับผู้ใช้งานและองค์กร
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
                ออกแบบ User Flows และ Site Map สำหรับเว็บแอปพลิเคชันแก้ไขปัญหาสภาพแวดล้อมในห้องเรียน
                สร้างโครงสร้างการโต้ตอบที่ลื่นไหลและเป็นระบบ
              </li>
              <li>จัดทำ Design System (Typography, Color Psychology) เพื่อสร้างเอกลักษณ์ของงานดีไซน์ตลอดทั้งโปรเจกต์</li>
              <li>สร้าง Low- to Medium-Fidelity Wireframes เพื่อพัฒนาสู่ Mockup ฉบับสมบูรณ์</li>
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
                ออกแบบ UI Mockups สำหรับฟีเจอร์ใหม่บน Makro Pro (การแจ้งเตือนวันหมดอายุ, AI
                แนะนำเมนูและวิธียืดอายุอาหาร, โปรโมชันเฉพาะบุคคล) มุ่งเน้นการลด Food Waste และกระตุ้นยอดขาย
              </li>
              <li>ออกแบบ UI ให้สอดคล้องกลมกลืนกับ Design Language เดิมของแอปพลิเคชัน</li>
            </ul>
          </div>

          <div className="project-block">
            <div className="item-header">
              <div className="item-title">UX/UI Designer &amp; Developer | SIT Hackathon (Honorable Mention)</div>
              <div className="item-date">May – Jun 2025</div>
            </div>
            <div className="item-subtitle">Hackathon - HerEvidence platform</div>
            <ul className="bullet-list">
              <li>ออกแบบ User Flow, Wireframe จนถึง High-Fidelity MVP บน Figma</li>
              <li>
                พัฒนา Frontend และ Backend โดยใช้ React และ Node.js ร่วมกับการใช้ AI
                ช่วยเขียนโค้ดและแก้ไขข้อผิดพลาดในการพัฒนาจนได้ระบบที่ใช้งานได้จริงในเวลาที่จำกัด
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
                ออกแบบประสบการณ์และส่วนต่อประสานผู้ใช้ใหม่ทั้งหมดตั้งแต่ Wireframe จนถึง High-Fidelity MVP Prototype
                โดยอ้างอิงตามโครงสร้างฐานข้อมูล (ERD) ของทีม
              </li>
              <li>
                ทำงานร่วมกับทีมนักพัฒนาอย่างใกล้ชิดเพื่อให้แน่ใจว่างานดีไซน์สามารถนำไปพัฒนาได้จริงตามข้อจำกัดทางเทคนิค
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
