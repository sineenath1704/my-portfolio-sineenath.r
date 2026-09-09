import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';
import { useLanguage } from '../../../context/LanguageContext';

const DATA = {
  EN: {
    projectName: "ONEPUT TECHNOLOGY COMPANY LIMITED",
    categoryName: "Internship Experience",
    categoryKey: "internship",
    parentCategory: "Project",
    role: "Web Designer",
    subjectName: "Internship Experience — Web Designer (ONEPUT Technology Co., Ltd.)",
    duration: "October 15, 2025 – Present",
    overview: 
      "Designed and developed Web User Interfaces for ONEPUT Technology Company Limited, focusing on creating a high-quality User Experience (UX) and establishing an effective Visual Hierarchy.\n\n" +
      "Key Scope & Responsibilities:\n" +
      "• Analyzed business requirements and translated them into intuitive web page layouts that fulfill user needs.\n" +
      "• Designed User Flows, Wireframes, and Mockups for new features and web pages.\n" +
      "• Applied Human-Centered Design principles to enhance navigation flow and overall usability.\n" +
      "• Coordinated and executed design handoffs to the web development team to ensure seamless and accurate implementation.",
    myRoleTitle: "Web Designer",
    myRoleDescription:
      "• User Interface Design: Designed web interfaces using Figma, adhering to high standards of aesthetic quality, modernity, and ease of use.\n" +
      "• Design System & Component Library: Created and maintained design system standards (Typography, Color Palette, Button States, and Grid Layouts).\n" +
      "• Collaboration & Implementation: Collaborated closely with developers to inspect and review live web pages for design fidelity.",
    keyLearnings:
      "1. Real-world Corporate Environment: Learned to align design decisions with organizational objectives, understand business requirements, and navigate technical constraints in web development.\n" +
      "2. Scalable Design Systems: Gained deep insight into creating reusable component libraries that enhance development speed and ensure visual consistency across scalable systems.\n" +
      "3. Cross-functional Handoff: Mastered delivering clear, precise design specifications to developers, minimizing discrepancies between design mockups and production code.",
    tools: [
      "Figma",
      "Canva"
    ],
    figmaEmbedUrl: "",
    designImages: []
  },
  TH: {
    projectName: "ONEPUT TECHNOLOGY COMPANY LIMITED",
    categoryName: "ประสบการณ์ฝึกงาน",
    categoryKey: "internship",
    parentCategory: "โปรเจกต์",
    role: "Web Designer",
    subjectName: "Internship Experience — Web Designer (บริษัท วันพุท เทคโนโลยี จำกัด)",
    duration: "15 ตุลาคม 2568 – ปัจจุบัน",
    overview: 
      "ออกแบบและพัฒนาส่วนติดต่อประสานงานผู้ใช้ (Web User Interface) ให้กับบริษัท วันพุท เทคโนโลยี จำกัด (ONEPUT Technology Company Limited) มุ่งเน้นการสร้างประสบการณ์ผู้ใช้ที่มีคุณภาพ (User Experience), การจัดวางลำดับองค์ประกอบทางสายตา (Visual Hierarchy)\n\n" +
      "ขอบเขตและหน้าที่สำคัญ:\n" +
      "• วิเคราะห์ความต้องการของธุรกิจ (Business Requirements) และแปลงออกมาเป็นโครงสร้างหน้าเว็บที่ตอบโจทย์ผู้ใช้งาน\n" +
      "• ออกแบบ User Flows, Wireframes และ Mockups สำหรับฟีเจอร์และหน้าเว็บใหม่ ๆ\n" +
      "• นำหลักการ Human-Centered Design มาปรับปรุงความสะดวกในการนำทาง (Navigation Flow) และความสามารถในการใช้งาน (Usability)\n" +
      "• ประสานงานและส่งต่องานออกแบบ (Design Handoff) ให้กับทีมนักพัฒนาเพื่อให้งานพัฒนาออกมาตรงตามที่ออกแบบไว้มากที่สุด",
    myRoleTitle: "Web Designer",
    myRoleDescription:
      "• User Interface Design: ออกแบบหน้าเว็บด้วย Figma โดยยึดมาตรฐานความสวยงาม ทันสมัย และความง่ายในการใช้งาน\n" +
      "• Design System & Component Library: จัดทำและควบคุมมาตรฐานระบบดีไซน์ (Typography, Color Palette, Button States, Grid Layouts)\n" +
      "• Collaboration & Implementation: ทำงานร่วมกับนักพัฒนาในการตรวจสอบความถูกต้องของหน้าเว็บจริง",
    keyLearnings:
      "1. การทำงานในสภาพแวดล้อมธุรกิจจริง (Real-world Corporate Environment): ได้เรียนรู้การทำงานตามเป้าหมายขององค์กร เข้าใจความต้องการของธุรกิจ และจัดการข้อจำกัดทางเทคนิคในการพัฒนาเว็บ\n" +
      "2. การวางระบบ Design System เพื่อการพัฒนาที่ยั่งยืน (Scalable Design System): เข้าใจความสำคัญของการสร้าง Components ที่สามารถนำกลับมาใช้ใหม่ได้ (Reusable Components) ซึ่งช่วยประหยัดเวลาของทั้งทีมดีไซน์และทีมพัฒนา\n" +
      "3. การสื่อสารและส่งต่องาน (Cross-functional Handoff): พัฒนาทักษะการส่งมอบงานสเปกดีไซน์ให้นักพัฒนาอย่างละเอียด ชัดเจน และตรงไปตรงมา ลดข้อผิดพลาดในการนำโค้ดไปประกอบจริง",
    tools: [
      "Design & Prototyping: Figma, Canva"
    ],
    figmaEmbedUrl: "",
    designImages: []
  }
};

export default function ProjectDetailONEPUT() {
  const { lang } = useLanguage();
  const currentData = DATA[lang] || DATA.EN;
  return <ProjectDetailTemplate {...currentData} />;
}
