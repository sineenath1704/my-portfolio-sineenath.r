import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';
import { useLanguage } from '../../../context/LanguageContext';

const DATA = {
  EN: {
    projectName: "HerEvidence Platform",
    categoryName: "Academic competition",
    categoryKey: "academic",
    parentCategory: "Project",
    role: "UX/UI Designer & Developer",
    subjectName: "SIT Hackathon (Honorable Mention) — Driving SDG Goal 5: Gender Equality",
    duration: "May – June 2025",
    overview:
      "A secure digital evidence vault designed for women facing domestic violence and sexual harassment. Driven by the motto 'Whenever you need evidence, remember you have us,' the platform provides a safe, structured, and legally compliant space to record, store, and organize incident evidence for legal proceedings.\n\n" +
      "Ethical UX Research & Insights:\n" +
      "• Conducted sensitive UX research using Mock Users & Scenarios (Persona 'Maria', 29).\n" +
      "• Pain points included uncertainty regarding which evidence holds legal weight, scattered evidence across disparate apps, lack of a clear timeline, and acute anxiety regarding data privacy.\n\n" +
      "Core Solutions:\n" +
      "1. Secure Evidence Vault & Folder Organization: Multi-format evidence storage (photos, chat logs, audio files, text notes) with a safe recovery (Retrieve) system.\n" +
      "2. Timeline & Data Integrity System: Chronological incident timeline with a strict 2-day editing window policy to preserve evidence integrity in court.\n" +
      "3. AI Her Guide: Step-by-step intelligent assistant guiding victims on evidence collection and immediate safety protocols.\n" +
      "4. Legal Information Hub: Comprehensive legal resources, victim rights, and emergency contacts.",
    myRoleTitle: "UX/UI Designer & Developer",
    myRoleDescription:
      "• UX/UI Design & Prototyping: Designed the complete set of responsive UI screens in Figma (Home, Evidence Upload, Folder Management, File Retrieve, AI Chatbot, and Legal Hub).\n" +
      "• Frontend & Backend Development: Collaborated on building the functional High-Fidelity MVP using React and Node.js, leveraging AI-assisted coding to accelerate development within the tight hackathon deadline.",
    keyLearnings:
      "1. Designing for Sensitive & High-stakes Contexts: Learned ethical research methodologies that safeguard user emotional well-being while prioritizing uncompromising data privacy and security.\n" +
      "2. Legal-Tech & Data Integrity: Understood legal standards for digital evidence, including immutable timestamping and restricted editing windows to maintain evidentiary weight.\n" +
      "3. Full-Stack Development Under Pressure: Gained hands-on experience bridging design and development (React + Node.js) to deliver a working prototype within hackathon time constraints.",
    tools: [
      "Figma (UI Design, Wireframes, Interactive Prototype, ER Diagram)",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
      "Postman",
      "Discord",
      "Canva"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-6427&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-5944&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  },
  TH: {
    projectName: "HerEvidence Platform",
    categoryName: "การแข่งขันวิชาการ",
    categoryKey: "academic",
    parentCategory: "โปรเจกต์",
    role: "UX/UI Designer & Developer",
    subjectName: "SIT Hackathon (Honorable Mention) — ขับเคลื่อนเป้าหมาย SDG Goal 5: Gender Equality",
    duration: "พฤษภาคม – มิถุนายน 2568",
    overview:
      "แพลตฟอร์มบันทึกและจัดเก็บหลักฐานดิจิทัลเพื่อผู้หญิงที่เผชิญความรุนแรงในครอบครัวและการคุกคามทางเพศ เพื่อเป็น 'พื้นที่ปลอดภัยสำหรับการรวบรวมหลักฐาน' ที่ปลอดภัย เป็นส่วนตัว เป็นระบบ และมีความน่าเชื่อถือพร้อมนำไปใช้ในกระบวนการยุติธรรม ภายใต้สโลแกน 'วันไหนที่คุณต้องการหลักฐาน ให้จำไว้ว่ามีเรา'\n\n" +
      "ปัญหาที่พบและการวิจัยทางจริยธรรม (Ethical UX Research):\n" +
      "• เนื่องจากเป็นประเด็นอ่อนไหวสูง จึงทำวิจัยผ่าน Mock Users & Mock Scenarios โดยจำลอง Persona 'Maria' (อายุ 29 ปี)\n" +
      "• Pain Points: ผู้เสียหายไม่รู้ว่าควรเก็บหลักฐานอะไร, ข้อมูลกระจัดกระจายหลายแอป, ขาดลำดับเวลา (Timeline) ชัดเจน, กังวลเรื่อง Data Privacy กลัวคนอื่นแอบเข้าถึงหรือข้อมูลรั่วไหล\n\n" +
      "ฟีเจอร์หลัก (Core Solutions):\n" +
      "1. Secure Evidence Vault & Folder Organization: จัดเก็บหลักฐานได้หลายรูปแบบ (รูปภาพ, ข้อความแชท, ไฟล์เสียง, บันทึก) พร้อมระบบถังขยะกู้คืน (Retrieve)\n" +
      "2. Timeline & Data Integrity System: จัดเรียงลำดับเหตุการณ์ตาม Timeline พร้อมนโยบายจำกัดเวลาแก้ไขภายใน 2 วันเพื่อรักษาความน่าเชื่อถือทางกฎหมาย\n" +
      "3. AI Her Guide: ผู้ช่วยอัจฉริยะแนะนำการเก็บหลักฐานและแนวทางการปฏิบัติตัวอย่างถูกต้องตามขั้นตอน\n" +
      "4. Legal Information Hub: รวบรวมข้อมูลกฎหมาย สิทธิผู้เสียหาย และเบอร์ติดต่อหน่วยงานช่วยเหลือ",
    myRoleTitle: "UX/UI Designer & Developer",
    myRoleDescription:
      "• UX/UI Design & Prototyping: ออกแบบหน้าจอทั้งหมดใน Figma (Home, Evidence Upload, Folder, Retrieve, AI Chatbot, Legal Hub)\n" +
      "• Frontend & Backend Development: ร่วมพัฒนาระบบจริงโดยใช้ React และ Node.js เพื่อสร้างเป็น High-Fidelity MVP และมีการใช้ AI เข้ามาช่วยในการเขียนโค้ดให้เสร็จทันกำหนดการการแข่งขัน",
    keyLearnings:
      "1. การออกแบบสำหรับประเด็นที่ละเอียดอ่อน (Designing for Sensitive & High-stakes Contexts): เรียนรู้การทำวิจัยอย่างมีจริยธรรมโดยไม่ซ้ำเติมสภาพจิตใจของผู้ใช้ และคำนึงถึงความปลอดภัยของข้อมูลสูงสุด (Data Privacy & Security)\n" +
      "2. Legal-Tech & Data Integrity: เข้าใจหลักการจัดเก็บหลักฐานดิจิทัลตามกฎหมาย เช่น การบันทึก Timestamp และการจำกัดสิทธิ์แก้ไขข้อมูลเพื่อรักษาความบริสุทธิ์ของพยานหลักฐาน\n" +
      "3. การทำงานแบบ Full-stack ภายใต้กรอบเวลา Hackathon: ได้ฝึกการเป็นทั้ง Designer และ Developer พัฒนาโค้ดทั้งหน้าบ้านและหลังบ้านอย่างรวดเร็วเพื่อให้ได้ระบบที่ใช้งานได้จริง",
    tools: [
      "Design & Prototyping: Figma (UI Design, Wireframes, Interactive Prototype, ER Diagram)",
      "Development: React, Node.js, JavaScript, Tailwind CSS, Postman",
      "Collaboration: Discord, Canva"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-6427&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=4-5944&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  }
};

export default function ProjectDetailHerEvidence() {
  const { lang } = useLanguage();
  const currentData = DATA[lang] || DATA.EN;
  return <ProjectDetailTemplate {...currentData} />;
}
