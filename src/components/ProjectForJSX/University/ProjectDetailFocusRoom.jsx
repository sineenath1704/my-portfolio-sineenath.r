import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';
import { useLanguage } from '../../../context/LanguageContext';

const DATA = {
  EN: {
    projectName: "Focus Room Project",
    categoryName: "University Project",
    categoryKey: "university",
    parentCategory: "Project",
    role: "UX/UI Designer",
    subjectName: "DSI109: User Interface and User Experience (School of Information Technology - SIT, KMUTT)",
    duration: "March – May 2026",
    overview:
      "A web application designed to solve classroom environmental challenges and enhance learning experiences in university lecture halls (Case study: Classroom Building 2 - CB2, KMUTT). Built around the core research question: 'Does classroom environment impact learning quality?', the project provides solutions that enable students to learn comfortably and comprehend course material effectively, regardless of where they sit in the classroom.\n\n" +
      "Key Research Insights:\n" +
      "• Back-row Students: Chose the back row seeking a 'Safe Zone' to avoid direct pressure and scrutiny from professors, but suffered from poor slide visibility and easily lost focus.\n" +
      "• Front-row Students: Sat at the front to view lecture slides clearly and remain attentive, but faced heightened stress and were often disturbed by conversational noise from the back.\n\n" +
      "Core Features of Focus Room:\n" +
      "1. AI Chatbot Summaries & Quiz Generation: Allows users to prompt an AI to summarize lecture content directly from uploaded PDF slide decks and generate comprehension quizzes.\n" +
      "2. Anonymous Noise Reporting: Sends non-intrusive warning popups to noisy peers' screens without revealing the sender's identity, followed by a 5-minute check-in prompt to evaluate if noise levels decreased.\n" +
      "3. Anonymous In-Class Feedback: Empowers students to ask questions or give feedback to instructors in real-time without fear or hesitation.\n\n" +
      "Usability Testing Results:\n" +
      "• Opening Course Files: 100% Success Rate (Avg. Duration: 58.3s)\n" +
      "• Noise Alert Feature: 100% Success Rate (Avg. Duration: 24.2s)\n" +
      "• Generate Quiz Feature: 80% Success Rate (Avg. Duration: 41s)",
    myRoleTitle: "UX/UI Designer",
    myRoleDescription:
      "• User Journey Mapping: Developed a 5-stage User Journey Map (Arrival -> Information Check -> Navigation -> Settling In -> In-Class Experience).\n" +
      "• Information Architecture & Wireframing: Created Site Maps and User Flows for the AI Chatbot, Anonymous Noise Reporting, and Feedback features, progressing from Low- to Medium-Fidelity Wireframes.\n" +
      "• UI Design & Design System Creation: Crafted High-Fidelity prototypes in Figma, establishing a comprehensive Design System (Typography, Color Psychology, Semantic Tokens, and Components).",
    keyLearnings:
      "1. Comprehensive User-Centered Design (UCD): Executed end-to-end design thinking from Empathize, Define, Ideate, Prototype to Testing, understanding that all design decisions must be rooted in user data and empirical insights.\n" +
      "2. Social Experience Design & Psychology: Solved interpersonal tensions in the classroom using anonymous interaction flows and psychological color theory (e.g., using subtle yellow warning tones instead of aggressive red to avoid feeling threatened).\n" +
      "3. Interpreting Usability Metrics: Realized that a 100% success rate does not necessarily mean an interface is easy to use if misclick rates remain high; learned to iterate visual affordance based on quantitative metrics.",
    tools: [
      "Figma (Wireframing, High-Fidelity Prototype, Design System)",
      "Canva",
      "Figma Presentation Mode"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=0-1&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-1527&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  },
  TH: {
    projectName: "Focus Room Project",
    categoryName: "โปรเจกต์มหาวิทยาลัย",
    categoryKey: "university",
    parentCategory: "โปรเจกต์",
    role: "UX/UI Designer",
    subjectName: "DSI109: User Interface and User Experience (School of Information Technology - SIT, KMUTT)",
    duration: "มีนาคม – พฤษภาคม 2569",
    overview:
      "เว็บแอปพลิเคชันเพื่อแก้ปัญหาสภาพแวดล้อมและประสบการณ์การเรียนรู้ในห้องเรียนมหาวิทยาลัย (กรณีศึกษา: อาคารเรียนรวม CB2 มจธ.) ภายใต้คำถามวิจัยหลัก 'สภาพแวดล้อมในห้องเรียนส่งผลต่อคุณภาพการเรียนหรือไม่?' เพื่อสร้างโซลูชันที่ช่วยให้นักศึกษานั่งเรียนได้อย่างสบายใจและเข้าใจเนื้อหาได้อย่างเต็มประสิทธิภาพ ไม่ว่าจะนั่งตำแหน่งใดในห้องเรียน\n\n" +
      "ปัญหาที่พบจากการวิจัย (Key Insights):\n" +
      "• กลุ่มนั่งหลังห้อง: เลือกนั่งหลังห้องเพราะต้องการ 'Safe Zone' หลีกเลี่ยงความกดดันและการถูกจับจ้องจากอาจารย์ แต่มีอุปสรรคมองสไลด์ไม่ชัดและหลุดโฟกัสง่าย\n" +
      "• กลุ่มนั่งหน้าห้อง: นั่งหน้าห้องเพื่อให้เห็นสไลด์ชัดเจน แต่ต้องเผชิญความกดดันและมักหงุดหงิดกับเสียงคุยรบกวนของกลุ่มหลังห้อง\n\n" +
      "ฟีเจอร์หลักของ Focus Room:\n" +
      "1. AI Chatbot สรุปเนื้อหาและสร้างแบบทดสอบ: สามารถ Prompt ให้ AI สรุปบทเรียนจากไฟล์ PDF และสร้างแบบทดสอบ (Generate Quiz) วัดความเข้าใจ\n" +
      "2. ระบบแจ้งเตือนเพื่อนที่คุยเสียงดังแบบไม่ระบุตัวตน (Anonymous Noise Reporting): ส่งข้อความเตือนไปยังหน้าจอเพื่อนโดยไม่เปิดเผยตัวตน พร้อมระบบสอบถามติดตามผลหลัง 5 นาที\n" +
      "3. ระบบส่งคำถามและ Feedback ให้อาจารย์แบบไม่ระบุตัวตน (Anonymous Feedback): ช่วยให้นักศึกษากล้าถามข้อสงสัยในคาบเรียนแบบ Real-time โดยไม่รู้สึกประหม่า\n\n" +
      "ผลการทดสอบ Usability Testing:\n" +
      "• Task เปิดไฟล์เรียน: Success Rate 100% (เวลาเฉลี่ย 58.3 วินาที)\n" +
      "• Task เตือนเพื่อนเสียงดัง: Success Rate 100% (เวลาเฉลี่ย 24.2 วินาที)\n" +
      "• Task Generate Quiz: Success Rate 80% (เวลาเฉลี่ย 41 วินาที)",
    myRoleTitle: "UX/UI Designer",
    myRoleDescription:
      "• User Journey Mapping: พัฒนา User Journey Map 5 ขั้นตอน (Arrival -> Information Check -> Navigation -> Settling In -> In-Class Experience)\n" +
      "• Information Architecture & Wireframing: จัดทำ Site Map และ User Flows สำหรับฟีเจอร์ AI Chatbot, ระบบเตือนเพื่อน, และระบบ Feedback จากนั้นออกแบบ Low- to Medium-Fidelity Wireframes\n" +
      "• UI Design & Design System Creation: ออกแบบ High-Fidelity Prototype ใน Figma พร้อมจัดทำ Design System (Typography, Color Psychology, Semantic Tokens, Components)",
    keyLearnings:
      "1. กระบวนการ User-Centered Design (UCD) อย่างเต็มรูปแบบ: ได้ลงมือทำตั้งแต่ขั้น Empathize, Define, Ideate, Prototype ไปจนถึง Testing เข้าใจว่าการตัดสินใจออกแบบต้องมี User Insight และ Data รองรับเสมอ\n" +
      "2. การแก้ปัญหาเชิงจิตวิทยาและสังคมด้วยงานออกแบบ (Social Experience Design): เรียนรู้วิธีคลี่คลายความขัดแย้งในห้องเรียนด้วยการใช้ระบบ Anonymous Interaction และการเลือกใช้สีเหลืองสำหรับการเตือนแทนสีแดง เพื่อลดความรู้สึกคุกคาม\n" +
      "3. การตีความข้อมูล Usability Metrics: เข้าใจว่า Success Rate 100% ไม่ได้แปลว่า UI ใช้งานง่ายเสมอไป หากมี Misclick Rate สูง แสดงว่า Visual Affordance ยังไม่ชัดเจนพอ ซึ่งต้องนำข้อมูลมาปรับปรุงแบบ Iterative Design",
    tools: [
      "UX/UI Design & Prototyping: Figma (Wireframing, High-Fidelity Prototype, Design System)",
      "Presentation: Canva, Figma Presentation Mode"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=0-1&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-1527&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  }
};

export default function ProjectDetailFocusRoom() {
  const { lang } = useLanguage();
  const currentData = DATA[lang] || DATA.EN;
  return <ProjectDetailTemplate {...currentData} />;
}
