import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';
import { useLanguage } from '../../../context/LanguageContext';

const DATA = {
  EN: {
    projectName: "SIT Hello World Hippo",
    categoryName: "Academic competition",
    categoryKey: "academic",
    parentCategory: "Project",
    role: "UX/UI Designer / Web Designer",
    subjectName: "SIT Hello World Hackathon (School of Information Technology - SIT, KMUTT)",
    duration: "January – February 2025",
    overview:
      "A complete redesign and redevelopment of the SIT Room Reservation System at KMUTT. The project addressed critical usability flaws in the legacy system—including complicated booking workflows, cumbersome room filtering, and a lack of real-time reservation statuses—transforming it into a modern, intuitive, and highly responsive platform for students and faculty.\n\n" +
      "Core Goals & Key Features:\n" +
      "1. MVP Quick Booking Flow (Hero Section): Enables instant booking directly from the landing page by selecting Building, Room, and Date in 3 simple steps before confirming details.\n" +
      "2. Real-time Status Tracking: Transparently displays reservation lifecycle states: PENDING, CONFIRMED, CANCELLED, and EXPIRED.\n" +
      "3. Conflict Prevention & Security: Intelligent scheduling algorithm preventing duplicate time-slot bookings, paired with email confirmation notifications and unique Reservation Keys.",
    myRoleTitle: "UX/UI Designer / Web Designer",
    myRoleDescription:
      "• MVP Interface Design: Designed the primary web application interface in Figma, including the Landing Page with quick-filter Hero Section, step-by-step Reservation Flow, and Booking Status & History screens.\n" +
      "• Cross-functional Collaboration: Partnered closely with Database (CS) and Frontend/Backend (IT) teammates to align UI specifications with the ER Diagram structure and API endpoints.",
    keyLearnings:
      "1. Cross-functional Collaboration in Hackathons: Gained invaluable experience communicating across design (DSI) and technical disciplines (CS/IT), understanding backend schema constraints and API integration requirements.\n" +
      "2. Designing for Minimum Viable Products (MVP): Learned to prioritize high-impact core user flows under tight time constraints, ensuring the essential room-booking flow was frictionless.\n" +
      "3. Aligning UI with Data Models: Mastered translating complex database states and relationships (ERD) into clean, user-friendly visual feedback and status badges.",
    tools: [
      "Figma",
      "ER Diagram",
      "Discord",
      "Canva"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-6629&embed-host=share",
    designImages: []
  },
  TH: {
    projectName: "SIT Hello World Hippo",
    categoryName: "การแข่งขันวิชาการ",
    categoryKey: "academic",
    parentCategory: "โปรเจกต์",
    role: "UX/UI Designer / Web Designer",
    subjectName: "SIT Hello World Hackathon (School of Information Technology - SIT, KMUTT)",
    duration: "มกราคม – กุมภาพันธ์ 2568",
    overview:
      "โครงการ Redesign และพัฒนาระบบจองห้องเรียนและห้องประชุมของคณะเทคโนโลยีสารสนเทศ (SIT KMUTT) ใหม่ทั้งหมด เพื่อแก้ปัญหาระบบเดิมที่มีหน้าตาการใช้งานซับซ้อน ค้นหาห้องยาก และไม่รองรับการตรวจสอบสถานะการจองแบบ Real-time ให้กลายเป็นแพลตฟอร์มที่ทันสมัย สะดวก รวดเร็ว และใช้งานได้จริง\n\n" +
      "วัตถุประสงค์และฟีเจอร์หลัก (Key Goals & Features):\n" +
      "1. MVP Quick Booking Flow (Hero Section): ออกแบบให้สามารถจองได้ทันทีตั้งแต่หน้าแรก โดยเลือก: ตึกเรียน (Building), ห้องเรียน (Room), วันที่ต้องการใช้งาน (Date) แล้วกดไปยังขั้นตอนกรอกรายละเอียดการจองได้ทันที\n" +
      "2. Real-time Status Tracking: แจ้งสถานะการจองอย่างชัดเจน ได้แก่ PENDING, CONFIRMED, CANCELLED, และ EXPIRED\n" +
      "3. Conflict Prevention & Security: ระบบตรวจสอบเวลาเพื่อป้องกันการจองซ้ำซ้อน พร้อมระบบยืนยันผ่านอีเมลและจัดเก็บ Reservation Key",
    myRoleTitle: "UX/UI Designer / Web Designer",
    myRoleDescription:
      "• MVP Interface Design (Figma): ออกแบบหน้าจอเว็บไซต์หลักในระดับ MVP ได้แก่ หน้าแรก (Landing Page) และ Hero Section คัดกรองห้องว่าง, หน้าแบบฟอร์มการจองห้อง (Reservation Flow), หน้าแสดงสถานะและประวัติการจองห้อง (Booking Status & History)\n" +
      "• Cross-functional Collaboration: ทำงานร่วมกับสมาชิกในทีมหลากหลายสายงาน ได้แก่ ทีม Database (CS) และทีม Frontend/Backend (IT) เพื่อส่งมอบสเปกงานออกแบบและตรวจทานความเป็นไปได้ตามโครงสร้าง ERD และ API Specification",
    keyLearnings:
      "1. การทำงานร่วมกันแบบ Cross-functional ในเวที Hackathon: ได้เรียนรู้การประสานงานระหว่างสายงานดีไซน์ (DSI) กับเพื่อนร่วมทีมสายพัฒนา (CS/IT) ทำให้เข้าใจมุมมองทางเทคนิค โครงสร้างฐานข้อมูล และข้อจำกัดของระบบ\n" +
      "2. การออกแบบสำหรับ MVP (Minimum Viable Product): เรียนรู้การจัดลำดับความสำคัญของฟังก์ชันการทำงานภายใต้เวลาที่จำกัด โดยมุ่งเน้นไปที่ Core User Flow ของการจองห้องให้สำเร็จได้รวดเร็วที่สุด\n" +
      "3. การออกแบบ UI ให้สอดคล้องกับ Data Model: เข้าใจกระบวนการแปลง Entity-Relationship Diagram (ERD) และสถานะในฐานข้อมูลให้ออกมาเป็น Visual Feedback ที่ผู้ใช้เข้าใจง่ายบนหน้าจอ",
    tools: [
      "Design & Prototyping: Figma",
      "Database & Architecture Reference: ER Diagram",
      "Collaboration: Discord, Canva"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-6629&embed-host=share",
    designImages: []
  }
};

export default function ProjectDetailSITHelloWorldHippo() {
  const { lang } = useLanguage();
  const currentData = DATA[lang] || DATA.EN;
  return <ProjectDetailTemplate {...currentData} />;
}
