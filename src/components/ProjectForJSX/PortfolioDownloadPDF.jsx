import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const COVER_DATA = {
  EN: {
    portfolioTitle: 'PORTFOLIO',
    subtitle: 'UX/UI DESIGNER INTERNSHIP',
    name: 'Sineenath Rueangsri',
    internshipTitle: 'Seeking Internship Position',
    position: 'UX/UI Designer Internship',
    periodLabel: 'Internship Period',
    periodVal: 'December 15, 2026 – March 15, 2027', // Mock period as requested
    universityLabel: 'University',
    universityVal: "King Mongkut's University of Technology Thonburi (KMUTT)",
    facultyLabel: 'Faculty / Major',
    facultyVal: 'School of Information Technology (SIT), Digital Service Innovation (DSI)',
    yearLabel: 'Academic Year',
    yearVal: '3rd Year Undergraduate Student',
  },
  TH: {
    portfolioTitle: 'PORTFOLIO',
    subtitle: 'UX/UI DESIGNER INTERNSHIP',
    name: 'Sineenath Rueangsri',
    internshipTitle: 'เป้าหมายการฝึกงาน',
    position: 'นักศึกษาฝึกงานตำแหน่ง UX/UI Designer',
    periodLabel: 'ระยะเวลาการฝึกงาน',
    periodVal: '15 ธันวาคม 2569 - 15 มีนาคม 2570',
    universityLabel: 'สถาบันการศึกษา',
    universityVal: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)',
    facultyLabel: 'คณะ / สาขา',
    facultyVal: 'คณะเทคโนโลยีสารสนเทศ (SIT), สาขานวัตกรรมบริการดิจิทัล (DSI)',
    yearLabel: 'ระดับชั้นปี',
    yearVal: 'นักศึกษาชั้นปีที่ 3',
  },
};

const ABOUT_DATA = {
  EN: {
    badge: 'About Me',
    name: 'Sineenath Rueangsri',
    role: 'UX/UI Designer & Web Designer',
    profileDesc:
      "A third-year student in Digital Service Innovation (DSI) at King Mongkut's University of Technology Thonburi (KMUTT), with a passion for UX/UI and web design. Experienced in designing user flows, wireframes, and interactive prototypes through academic projects and hackathons. Possesses foundational frontend knowledge (HTML, CSS, JavaScript, React) to bridge the gap between design and development, ensuring seamless handoffs. Seeking a UX/UI Design internship to enhance analytical and user-centered design skills while contributing to organizational growth.",
    university: "King Mongkut's University of Technology Thonburi (KMUTT)",
    faculty: 'School of Information Technology (SIT)',
    degree: 'Bachelor of Arts in Digital Service Innovation',
    year: '2024 – Present (Expected Graduation: 2028)',
    gpa: '3.57 / 4.0',
    coursework: 'Web Technology and Database, Digital Application Production, User Experience and Interface, Psychology for Digital Service, Digital Marketing, Market Research, Digital Project Management',
    designTools: ['Figma', 'Canva'],
    frontendSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'MySQL', 'VS Code'],
    aiTools: ['Google Antigravity', 'Claude', 'Gemini', 'OpenAI ChatGPT'],
    uxSkills: ['User Research & Persona Creation', 'Wireframing & User Flow', 'Interactive Prototyping', 'Information Architecture', 'Responsive Web & Mobile Design'],
    softSkills: ['Cross-functional Collaboration', 'Effective Communication', 'Problem Solving & Critical Thinking', 'Adaptability & Creativity'],
    languages: ['Thai (Native)', 'English (Basic Working Proficiency)'],
  },
  TH: {
    badge: 'About Me',
    name: 'Sineenath Rueangsri',
    role: 'UX/UI Designer & Web Designer',
    profileDesc:
      'นักศึกษาชั้นปีที่ 3 สาขานวัตกรรมบริการดิจิทัล (DSI) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.) มีความสนใจในการออกแบบ UX/UI และ Web Design พร้อมประสบการณ์ในการออกแบบ User Flows, Wireframes และ Interactive Prototypes จากโครงงานการศึกษาและการเข้าร่วม Hackathons มีพื้นฐานด้าน Frontend ได้แก่ HTML, CSS, JavaScript และ React ซึ่งช่วยให้สามารถทำงานร่วมกับทีมนักพัฒนาและเข้าใจข้อจำกัดในการพัฒนาผลิตภัณฑ์ได้ดียิ่งขึ้น',
    university: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)',
    faculty: 'คณะเทคโนโลยีสารสนเทศ (SIT)',
    degree: 'ปริญญาตรี สาขานวัตกรรมบริการดิจิทัล',
    year: '2567 – ปัจจุบัน (คาดว่าจะสำเร็จการศึกษา: 2571)',
    gpa: '3.57 / 4.0',
    coursework: 'เทคโนโลยีเว็บและฐานข้อมูล, การผลิตแอปพลิเคชันดิจิทัล, UX/UI, จิตวิทยาเพื่อบริการดิจิทัล, ดิจิทัลมาร์เก็ตติ้ง, การวิจัยตลาด, การบริหารโครงการดิจิทัล',
    designTools: ['Figma', 'Canva'],
    frontendSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'MySQL', 'VS Code'],
    aiTools: ['Google Antigravity', 'Claude', 'Gemini', 'OpenAI ChatGPT'],
    uxSkills: ['การวิจัยผู้ใช้และสร้าง Persona', 'Wireframing & User Flow', 'Interactive Prototyping', 'Information Architecture', 'การออกแบบ Web & Mobile แบบ Responsive'],
    softSkills: ['การทำงานข้ามทีม', 'การสื่อสารอย่างมีประสิทธิภาพ', 'การแก้ปัญหาและคิดเชิงวิพากษ์', 'ความยืดหยุ่นและความคิดสร้างสรรค์'],
    languages: ['ภาษาไทย (ภาษาแม่)', 'ภาษาอังกฤษ (ระดับพื้นฐานในการทำงาน)'],
  },
};

const PROJECTS_DATA = [
  {
    id: 'focus-room',
    coverImage: '/Picture/Cover-Project/FocusRoom-Cover.png',
    screenshots: [
      { src: '/Picture/PictureToPortPDF/FocusRoom/class.png', caption: 'Classroom Overview' },
      { src: '/Picture/PictureToPortPDF/FocusRoom/AI.home.png', caption: 'AI Summaries' },
      { src: '/Picture/PictureToPortPDF/FocusRoom/AlarmFriend.png', caption: 'Noise Alert' },
      { src: '/Picture/PictureToPortPDF/FocusRoom/Quiz.png', caption: 'Quiz Generator' },
    ],
    EN: {
      category: 'University Project',
      title: 'Focus Room Project',
      role: 'UX/UI Designer',
      subject: 'DSI109: User Interface and User Experience (School of Information Technology - SIT, KMUTT)',
      duration: 'March – May 2026',
      overview:
        "A web application designed to solve classroom environmental challenges in university lecture halls (CB2 KMUTT). Built around the core question: 'Does classroom environment impact learning quality?', providing equal focus regardless of seating position.\n\n" +
        "Key Research Insights:\n" +
        "• Back-row Students: Chose the back as a 'Safe Zone' to avoid pressure, but suffered from poor slide visibility and lost focus.\n" +
        "• Front-row Students: Sat at front for clear visibility, but faced stress and conversational noise from the back.\n\n" +
        "Core Features & Testing Results:\n" +
        "1. AI Chatbot Summaries & Quiz Generation: Prompts AI to summarize lecture PDF slides and generate quizzes.\n" +
        "2. Anonymous Noise Reporting: Non-intrusive warning popups with a 5-minute follow-up prompt.\n" +
        "3. Anonymous Feedback: Enables students to ask instructors questions in real-time without hesitation.\n" +
        "• Usability Results: File Open (100%), Noise Alert (100%), Quiz Gen (80%).",
      roleDesc:
        "• User Journey Mapping: Developed a 5-stage User Journey Map (Arrival -> Info -> Navigation -> Settling In -> In-Class).\n" +
        "• Information Architecture & Wireframing: Created Site Maps and User Flows for AI Chatbot, Noise Alerts, and Feedback.\n" +
        "• UI Design & Design System: Built High-Fidelity prototypes in Figma with complete Typography, Colors, and Tokens.",
      learnings:
        "1. End-to-End User-Centered Design (UCD): Validated every design decision through user research and empirical data.\n" +
        "2. Social Experience Design & Psychology: Solved interpersonal tensions using anonymous interactions and subtle yellow warning tones.\n" +
        "3. Usability Metrics: Iterated visual affordance by analyzing misclick rates rather than just task success.",
      tools: ['Figma (Wireframe, Prototype, Design System)', 'Canva', 'Figma Presentation Mode'],
    },
    TH: {
      category: 'โปรเจกต์มหาวิทยาลัย',
      title: 'Focus Room Project',
      role: 'UX/UI Designer',
      subject: 'DSI109: User Interface and User Experience (School of Information Technology - SIT, KMUTT)',
      duration: 'มีนาคม – พฤษภาคม 2569',
      overview:
        "เว็บแอปพลิเคชันแก้ปัญหาสภาพแวดล้อมในห้องเรียนมหาวิทยาลัย (กรณีศึกษา CB2 มจธ.) ภายใต้คำถามวิจัย 'สภาพแวดล้อมในห้องเรียนส่งผลต่อคุณภาพการเรียนหรือไม่?' เพื่อให้นักศึกษาเรียนได้อย่างสบายใจและมีประสิทธิภาพสูงสุด\n\n" +
        "ปัญหาที่พบจากการวิจัย (Key Insights):\n" +
        "• กลุ่มนั่งหลังห้อง: เลือกนั่งเพราะต้องการ 'Safe Zone' หลีกเลี่ยงความกดดัน แต่มองสไลด์ไม่ชัดและหลุดโฟกัสง่าย\n" +
        "• กลุ่มนั่งหน้าห้อง: นั่งเพื่อให้เห็นสไลด์ชัดเจน แต่ต้องเผชิญความกดดันและเสียงคุยรบกวนจากด้านหลัง\n\n" +
        "ฟีเจอร์หลักและผลการทดสอบ Usability:\n" +
        "1. AI Chatbot สรุปเนื้อหาและสร้างแบบทดสอบ: สรุปบทเรียนจากสไลด์ PDF และ Generate Quiz วัดความเข้าใจ\n" +
        "2. ระบบเตือนเพื่อนคุยเสียงดังแบบไม่ระบุตัวตน (Anonymous Noise Alert) พร้อมติดตามผลหลัง 5 นาที\n" +
        "3. ระบบส่งคำถามและ Feedback ให้อาจารย์แบบ Real-time โดยไม่รู้สึกประหม่า\n" +
        "• ผลการทดสอบ: เปิดไฟล์เรียน (100%), เตือนเพื่อนเสียงดัง (100%), Generate Quiz (80%)",
      roleDesc:
        "• User Journey Mapping: พัฒนา Journey Map 5 ขั้นตอนสำหรับประสบการณ์การเรียนรู้ในห้องเรียน\n" +
        "• Information Architecture & Wireframing: จัดทำ Site Map และ User Flows แล้วออกแบบ Low- ถึง Medium-Fidelity\n" +
        "• UI Design & Design System: ออกแบบ High-Fidelity Prototype พร้อมระบบ Typography, Color Tokens และ Components",
      learnings:
        "1. กระบวนการ User-Centered Design (UCD) ครบวงจร: ทุกการตัดสินใจออกแบบต้องมีข้อมูล Insight รองรับเสมอ\n" +
        "2. การแก้ปัญหาเชิงจิตวิทยาและสังคมด้วยงานออกแบบ: ใช้ระบบ Anonymous และสีเหลืองเตือนแทนสีแดงเพื่อลดความคุกคาม\n" +
        "3. การตีความข้อมูล Usability: วิเคราะห์ Misclick Rate เพื่อปรับปรุง Visual Affordance ให้ชัดเจนขึ้น",
      tools: ['Figma (Wireframing, Prototype, Design System)', 'Canva', 'Figma Presentation Mode'],
    },
  },
  {
    id: 'cp-axtra-mile',
    coverImage: '/Picture/Cover-Project/CP-Axtra-Mile-Cover.png',
    screenshots: [
      { src: '/Picture/PictureToPortPDF/CP-AxtraMile/home_Sale Daily.png', caption: 'Home & Deals' },
      { src: '/Picture/PictureToPortPDF/CP-AxtraMile/Expire Log.png', caption: 'Expiry Log' },
      { src: '/Picture/PictureToPortPDF/CP-AxtraMile/Notification.png', caption: 'Get Makro points' },
      { src: '/Picture/PictureToPortPDF/CP-AxtraMile/Chat AI.png', caption: 'AI Suggestion' },
    ],
    EN: {
      category: 'Academic competition',
      title: 'Smart Adviser (Makro Pro)',
      role: 'UX/UI Designer',
      subject: 'CP Axtra Mile Hackathon 2025 (Top 10 Finalist / Certificate of Participation)',
      duration: 'June – August 2025 (Final Event: August 1, 2025)',
      overview:
        "'Smart Adviser' is an intelligent assistant feature integrated into the Makro Pro app under the concept 'Your thoughtful assistant that recommends deals and reminds you before food expires,' curbing food waste across wholesale and retail.\n\n" +
        "Key Findings & Pain Points:\n" +
        "• CP Axtra (Makro): Fresh food spoilage caused 24,400 tons food waste in 2024 (~2,099 million THB loss).\n" +
        "• Shoppers: 93.2% of surveyed shoppers discarded food due to expiration; only 11.3% tracked dates.\n\n" +
        "Core Solutions:\n" +
        "1. Reduce Food Waste: Fresh food dashboard and Expiry Log; targeted lockscreen expiry notifications; 0.1 Makro Points incentive.\n" +
        "2. Drive Sales with AI & Recommended Menu: AI recipe generator based on purchases + food preservation guides.\n" +
        "3. Personalized Promotions: Tailored deal banners matching B2B & B2C repurchase patterns.\n" +
        "• Projected Impact: 25% reduction in food waste (~6,100 tons/yr), +3,132.63M THB app sales/yr.",
      roleDesc:
        "• UI Mockups & Flow Design: Designed UI for Expiry Log, AI Recipe Recommendation, and Promotions in Figma.\n" +
        "• Design System Integration: Designed strictly within Makro Pro's established design language.\n" +
        "• Pitching Deck: Co-authored business impact metrics, financial projections, and product roadmap.",
      learnings:
        "1. Working within Existing Design Systems: Learned to introduce features seamlessly into a large-scale enterprise application with an existing visual identity and active user base.",
      tools: ['Figma', 'Canva', 'Figma Presentation Mode'],
    },
    TH: {
      category: 'การแข่งขันวิชาการ',
      title: 'Smart Adviser (Makro Pro)',
      role: 'UX/UI Designer',
      subject: 'CP Axtra Mile Hackathon 2025 (Top 10 Finalist / Certificate of Participation)',
      duration: 'มิถุนายน – สิงหาคม 2568 (รอบชิงชนะเลิศ: 1 สิงหาคม 2568)',
      overview:
        "ฟีเจอร์ผู้ช่วยอัจฉริยะบนแอป Makro Pro ภายใต้แนวคิด 'ผู้ช่วยที่รู้ใจ แนะนำโปรโมชันและแจ้งเตือนให้ใช้ก่อนหมดอายุ' เพื่อแก้ปัญหาความสูญเสียจากอาหารสด (Food Waste) ทั้งในระดับธุรกิจและผู้บริโภค พร้อมขับเคลื่อนยอดขาย\n\n" +
        "ปัญหาที่พบและการวิจัย (Pain Points & Findings):\n" +
        "• ฝั่ง Makro: สินค้าอาหารสดหมดอายุก่อนขาย ก่อ Food Waste สูงถึง 24,400 ตันในปี 2567 (สูญเสียมูลค่า ~2,099 ล้านบาท)\n" +
        "• ฝั่งลูกค้า: จากแบบสอบถาม 93.2% เคยทิ้งอาหารหมดอายุ และมีเพียง 11.3% เท่านั้นที่ติดตามวันหมดอายุสม่ำเสมอ\n\n" +
        "ฟีเจอร์หลัก (Core Solutions):\n" +
        "1. ลด Food Waste ด้วยการแจ้งเตือนวันหมดอายุ: บันทึก Expiry Log, แจ้งเตือน Lockscreen, ระบบ Gamification สะสมแต้ม\n" +
        "2. เพิ่มยอดขายด้วย AI และเมนูแนะนำ: แนะนำสูตรอาหารจากวัตถุดิบที่ซื้อ, วิธียืดอายุอาหาร, แนะนำของซื้อเพิ่ม\n" +
        "3. โปรโมชันเฉพาะบุคคล (Personalized Promotions): แบนเนอร์และข้อเสนอพิเศษสำหรับลูกค้า B2B และ B2C\n" +
        "• ผลลัพธ์คาดการณ์: ลด Food Waste 25% (~6,100 ตัน/ปี), ยอดขายอาหารสดผ่านแอปเพิ่ม 3,132.63 ล้านบาท/ปี",
      roleDesc:
        "• UI Mockups & Flow Design: ออกแบบ UI ฟีเจอร์ Expiry Log, AI Recipes และ Promotions ใน Figma\n" +
        "• Design System Integration: ออกแบบกลมกลืนกับ Design Language เดิมของ Makro Pro\n" +
        "• Pitching Deck: ร่วมจัดทำข้อมูล Business Impact, Financial Projection และ Roadmap นำเสนอคณะกรรมการ",
      learnings:
        "1. การทำงานบน Design Language ที่มีอยู่เดิม: เข้าใจความท้าทายในการพัฒนาฟีเจอร์ใหม่ให้กับแอปขนาดใหญ่ที่มีผู้ใช้งานจำนวนมาก",
      tools: ['Figma', 'Canva', 'Figma Presentation Mode'],
    },
  },
  {
    id: 'herevidence',
    coverImage: '/Picture/Cover-Project/Herevidence-Cover.png',
    screenshots: [
      { src: '/Picture/PictureToPortPDF/HerEvidence/Home.png', caption: 'Home' },
      { src: '/Picture/PictureToPortPDF/HerEvidence/AIHerGuide.png', caption: 'AI Her Guide' },
      { src: '/Picture/PictureToPortPDF/HerEvidence/RelatedNews.png', caption: 'Legal Hub' },
    ],
    EN: {
      category: 'Academic competition',
      title: 'HerEvidence Platform',
      role: 'UX/UI Designer & Developer',
      subject: 'SIT Hackathon (Honorable Mention) — Driving SDG Goal 5: Gender Equality',
      duration: 'May – June 2025',
      overview:
        "A secure digital evidence vault designed for women facing domestic violence and sexual harassment.\n\n" +
        "Ethical UX Research & Insights:\n" +
        "• Persona 'Maria' (29): Pain points included uncertainty over which evidence holds legal weight, scattered files across apps, lack of timeline, and anxiety over privacy leaks.\n\n" +
        "Core Solutions:\n" +
        "1. Secure Evidence Vault: Multi-format storage (photos, chats, audio, notes) with recovery system.\n" +
        "2. Timeline & Data Integrity: Chronological incident timeline with a strict 2-day editing window to preserve evidence integrity.\n" +
        "3. AI Her Guide: Intelligent assistant guiding evidence collection and immediate safety protocols.\n" +
        "4. Legal Information Hub: Victim rights info and emergency contacts.",
      roleDesc:
        "• UX/UI Design & Prototyping: Designed full responsive screens in Figma.\n" +
        "• Frontend & Backend Development: Built functional MVP using React, Node.js, and Tailwind CSS.",
      learnings:
        "1. Designing for Sensitive Contexts: Ethical research methodologies prioritizing user emotional safety and uncompromising data privacy.\n" +
        "2. Legal-Tech & Data Integrity: Understood legal standards for digital evidence, including immutable timestamping.\n" +
        "3. Full-Stack Development Under Pressure: Bridged UI/UX design with practical code delivery within hackathon time constraints.",
      tools: ['Figma', 'React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Postman', 'Discord', 'Canva'],
    },
    TH: {
      category: 'การแข่งขันวิชาการ',
      title: 'HerEvidence Platform',
      role: 'UX/UI Designer & Developer',
      subject: 'SIT Hackathon (Honorable Mention) — ขับเคลื่อนเป้าหมาย SDG Goal 5: Gender Equality',
      duration: 'พฤษภาคม – มิถุนายน 2568',
      overview:
        "แพลตฟอร์มจัดเก็บหลักฐานดิจิทัลสำหรับผู้หญิงที่เผชิญความรุนแรงในครอบครัวและการคุกคามทางเพศ เป็นพื้นที่ปลอดภัยในการรวบรวมหลักฐานที่มีความน่าเชื่อถือทางกฎหมาย'\n\n" +
        "งานวิจัยและปัญหาที่พบ (Ethical UX Research):\n" +
        "• วิจัยผ่าน Persona 'Maria' (29 ปี) พบปัญหาไม่รู้ว่าควรเก็บหลักฐานใด, ข้อมูลกระจัดกระจายหลายแอป, ขาด Timeline ที่ชัดเจน, และกังวลเรื่อง Data Privacy สูงมาก\n\n" +
        "ฟีเจอร์หลัก (Core Solutions):\n" +
        "1. Secure Evidence Vault: บันทึกหลักฐานได้หลายรูปแบบ (รูปภาพ, แชท, เสียง, บันทึก) พร้อมระบบกู้คืน\n" +
        "2. Timeline & Data Integrity: เรียงลำดับตามเหตุการณ์ พร้อมนโยบายจำกัดเวลาแก้ไขใน 2 วันเพื่อรักษาความบริสุทธิ์ของพยานหลักฐาน\n" +
        "3. AI Her Guide: ผู้ช่วยแนะนำขั้นตอนการเก็บหลักฐานและแนวทางปฏิบัติตัว\n" +
        "4. Legal Information Hub: รวมข้อมูลกฎหมาย สิทธิผู้เสียหาย และเบอร์ติดต่อหน่วยงานช่วยเหลือ",
      roleDesc:
        "• UX/UI Design & Prototyping: ออกแบบหน้าจอทั้งหมดใน Figma\n" +
        "• Frontend & Backend Development: ร่วมพัฒนา MVP ด้วย React, Node.js และ Tailwind CSS",
      learnings:
        "1. การออกแบบสำหรับประเด็นที่ละเอียดอ่อน: วิจัยอย่างมีจริยธรรมโดยไม่ซ้ำเติมสภาพจิตใจ และคำนึงถึงความปลอดภัยของข้อมูลสูงสุด\n" +
        "2. Legal-Tech & Data Integrity: เข้าใจหลักการจัดเก็บหลักฐานดิจิทัลตามกฎหมาย (Timestamp & Restricted Edit)\n" +
        "3. การทำงาน Full-stack ภายใต้กรอบเวลา: ผสานบทบาท Designer และ Developer ส่งมอบระบบที่ใช้งานได้จริง",
      tools: ['Figma', 'React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Postman', 'Discord', 'Canva'],
    },
  },
  {
    id: 'sit-hippo',
    coverImage: '/Picture/Cover-Project/SIT-Hippo-Cover.png',
    screenshots: [
      { src: '/Picture/PictureToPortPDF/HelloWorldHippo/home.png', caption: 'Home & Quick Hero' },
      { src: '/Picture/PictureToPortPDF/HelloWorldHippo/CheckRoom.png', caption: 'Check room' },
      { src: '/Picture/PictureToPortPDF/HelloWorldHippo/FromReserve.png', caption: 'Booking Form' },
    ],
    EN: {
      category: 'Academic competition',
      title: 'SIT Hello World Hippo',
      role: 'UX/UI Designer / Web Designer',
      subject: 'SIT Hello World Hackathon (School of Information Technology - SIT, KMUTT)',
      duration: 'January – February 2025',
      overview:
        "A complete redesign of the SIT Room Reservation System at KMUTT, transforming a complicated multi-step legacy system into a fast, intuitive, and modern room booking experience.\n\n" +
        "Core Goals & Key Features:\n" +
        "1. MVP Quick Booking Flow (Hero Section): Instant booking in 3 simple steps (Building, Room, Date) directly on the landing page.\n" +
        "2. Real-time Status Tracking: Clear reservation lifecycle states (PENDING, CONFIRMED, CANCELLED, EXPIRED).\n" +
        "3. Conflict Prevention & Security: Smart scheduling algorithm preventing overlapping reservations with email verification.",
      roleDesc:
        "• MVP Interface Design: Designed primary web interfaces in Figma (Landing Page, Quick Booking Hero, Reservation Form, Booking History).\n" +
        "• Cross-functional Collaboration: Partnered with CS (Database/ERD) and IT (Frontend/Backend) teammates to ensure technical feasibility.",
      learnings:
        "1. Cross-functional Collaboration: Mastered communicating across design (DSI) and engineering disciplines (CS/IT).\n" +
        "2. Designing for MVP: Prioritized high-impact core booking flows under strict hackathon deadlines.\n" +
        "3. Aligning UI with Data Models: Translated complex database ERD states into clear visual badges and status indicators.",
      tools: ['Figma', 'ER Diagram', 'Discord', 'Canva'],
    },
    TH: {
      category: 'การแข่งขันวิชาการ',
      title: 'SIT Hello World Hippo',
      role: 'UX/UI Designer / Web Designer',
      subject: 'SIT Hello World Hackathon (School of Information Technology - SIT, KMUTT)',
      duration: 'มกราคม – กุมภาพันธ์ 2568',
      overview:
        "โครงการ Redesign ระบบจองห้องเรียนและห้องประชุมของคณะ SIT KMUTT เพื่อแก้ปัญหาระบบเดิมที่ซับซ้อน ค้นหาห้องยาก และไม่มีสถานะแบบ Real-time ให้ใช้งานได้สะดวกรวดเร็ว\n\n" +
        "วัตถุประสงค์และฟีเจอร์หลัก:\n" +
        "1. MVP Quick Booking Flow (Hero Section): จองห้องได้ทันทีใน 3 ขั้นตอน (ตึก, ห้อง, วันที่) บนหน้าแรก\n" +
        "2. Real-time Status Tracking: แสดงสถานะการจองชัดเจน (PENDING, CONFIRMED, CANCELLED, EXPIRED)\n" +
        "3. Conflict Prevention & Security: ตรวจสอบเวลาเพื่อป้องกันการจองซ้ำซ้อน พร้อมยืนยันผ่านอีเมลและจัดเก็บ Reservation Key",
      roleDesc:
        "• MVP Interface Design (Figma): ออกแบบหน้าแรก, Hero Section คัดกรองห้อง, ฟอร์มการจอง และหน้าประวัติการจอง\n" +
        "• Cross-functional Collaboration: ประสานงานกับทีม Database (CS) และ Developer (IT) เพื่อความถูกต้องตาม ERD",
      learnings:
        "1. การทำงานร่วมกันข้ามสายงาน: ประสานงานระหว่างดีไซเนอร์ (DSI) และโปรแกรมเมอร์ (CS/IT) เข้าใจข้อจำกัดทางเทคนิค\n" +
        "2. การออกแบบสำหรับ MVP: มุ่งเน้นไปที่ Core User Flow ของการจองห้องให้สำเร็จได้รวดเร็วที่สุด\n" +
        "3. การแปลง Data Model สู่ UI: ถ่ายทอดโครงสร้าง ERD ให้ออกมาเป็น Visual Feedback ที่ผู้ใช้เข้าใจง่าย",
      tools: ['Figma', 'ER Diagram', 'Discord', 'Canva'],
    },
  },
];

export default function PortfolioDownloadPDF() {
  const { lang } = useLanguage();
  const activeLang = lang === 'TH' ? 'TH' : 'EN';
  const cover = COVER_DATA[activeLang];
  const about = ABOUT_DATA[activeLang];

  return (
    <div className="min-h-screen bg-neutral-200/80 py-8 px-4 font-poppins text-neutral-900 print:p-0 print:m-0 print:bg-white">
      {/* ─── Embedded Print Stylesheet for A4 Portrait ─── */}
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nav, header, footer, .navbar, .back-to-top, .no-print {
            display: none !important;
          }
          .slide-page {
            width: 210mm !important;
            height: 297mm !important;
            max-height: 297mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 10mm 12mm !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>

      {/* ─── Floating Fixed Print Button ─── */}
      <button
        type="button"
        onClick={() => window.print()}
        className="no-print fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#610200] text-white font-poppins font-bold text-sm shadow-2xl hover:bg-[#820000] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        title="Download PDF"
      >
        <span>Download PDF</span>
      </button>

      <div className="max-w-[794px] mx-auto space-y-8 print:space-y-0">

        {/* ═════════════════════════════════════════════════════════
            PAGE 1: COVER หน้าปก (A4 Portrait)
        ═════════════════════════════════════════════════════════ */}
        <section className="slide-page w-full max-w-[794px] min-h-[1123px] aspect-[210/297] bg-white rounded-2xl shadow-xl border border-neutral-300 p-10 mx-auto flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none">
          {/* Top Header Tag */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="border border-black bg-[#FFFBEA] px-3.5 py-1 rounded-full text-xs font-semibold text-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#610200]" />
              {cover.subtitle}
            </span>
            <span className="text-xs font-bold text-neutral-400 font-poppins">
              01 / 07
            </span>
          </div>

          {/* Main Title & Hero Image */}
          <div className="my-auto flex flex-col items-center text-center py-4">
            <h1 className="font-sekuya text-5xl sm:text-6xl uppercase tracking-widest text-[#610200] leading-none mb-2">
              {cover.portfolioTitle}
            </h1>
            <h2 className="font-rubik text-2xl sm:text-3xl uppercase tracking-wide text-neutral-900 mb-6">
              {cover.name}
            </h2>

            {/* Photo Container */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-[#820000]/10 via-[#FFF5CF]/30 to-[#820000]/15 border-2 border-[#820000]/20 shadow-xl flex items-end justify-center mb-6">
              <img
                src="/Picture/PicHome.png"
                alt="Sineenath Rueangsri"
                className="w-full h-full object-contain object-bottom filter drop-shadow-md"
              />
            </div>

            {/* Candidate Key Information Card */}
            <div className="w-full max-w-lg bg-neutral-50 border border-neutral-200/90 rounded-2xl p-5 text-left shadow-xs space-y-2.5">
              <div className="border-l-[3px] border-[#610200] pl-3 mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#610200]">
                  {cover.internshipTitle}
                </h3>
                <p className="text-sm font-bold text-neutral-900">{cover.position}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs pt-1 border-t border-neutral-200 mt-5">
                <div className='mt-3'>
                  <p className="text-neutral-500 font-medium text-[11px]">{cover.periodLabel}</p>
                  <p className="font-semibold text-neutral-900">{cover.periodVal}</p>
                </div>
                <div className='mt-3'>
                  <p className="text-neutral-500 font-medium text-[11px]">{cover.yearLabel}</p>
                  <p className="font-semibold text-neutral-900">{cover.yearVal}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200 text-xs mt-5">
                <p className="text-neutral-500 font-medium text-[11px] mt-3">{cover.universityLabel} & {cover.facultyLabel}</p>
                <p className="font-semibold text-neutral-900">{cover.universityVal}</p>
                <p className="text-neutral-700 text-[11px]">{cover.facultyVal}</p>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[11px] text-neutral-500 font-poppins">
            <span>Portfolio Document Presentation</span>
            <span>Sineenath Rueangsri — KMUTT</span>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            PAGE 2: ABOUT ME / PROFILE (A4 Portrait)
        ═════════════════════════════════════════════════════════ */}
        <section className="slide-page w-full max-w-[794px] min-h-[1123px] aspect-[210/297] bg-white rounded-2xl shadow-xl border border-neutral-300 p-10 mx-auto flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-3">
              
              <h2 className="font-sekuya text-xl uppercase tracking-wider text-black">
                PROFILE
              </h2>
            </div>
            <span className="text-xs font-bold text-neutral-400 font-poppins">
              02 / 07
            </span>
          </div>

          {/* Main Body */}
          <div className="my-auto space-y-5 py-1">

            {/*Photo */}
            <div className="w-100 h-70 rounded-xl overflow-hidden flex items-center justify-center mx-auto">
              <img
                src="/Picture/Profile.png"
                alt={about.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Top Bio*/}
            <div className="flex items-start gap-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-5">
              <div className="space-y-1.5 flex-1">
                <h3 className="font-rubik text-2xl text-[#610200] leading-tight">
                  {about.name}
                </h3>
                <p className="font-rochester text-base text-neutral-600">
                  {about.role}
                </p>
                <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                  {about.profileDesc}
                </p>
              </div>
            </div>

            {/* Education Section*/}
            <div className="rounded-2xl px-5 py-2">
              <div className="border-l-[3px] border-black pl-2.5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {activeLang === 'TH' ? 'ประวัติการศึกษา' : 'Education'}
                </h4>
              </div>
              <div className="text-xs text-neutral-800 space-y-1">
                <p className="font-bold text-sm text-neutral-900">{about.university}</p>
                <p className="text-neutral-700 font-medium">{about.faculty} — {about.degree}</p>
                <div className="flex items-center gap-6 pt-1 text-[11.5px]">
                  <p><span className="font-semibold text-neutral-900">{activeLang === 'TH' ? 'ช่วงเวลา:' : 'Period:'}</span> {about.year}</p>
                  <p><span className="font-semibold text-neutral-900">{activeLang === 'TH' ? 'เกรดเฉลี่ย:' : 'GPA:'}</span> {about.gpa}</p>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="rounded-2xl px-4 py-2">
              <div className="border-l-[3px] border-black pl-2.5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {activeLang === 'TH' ? 'เครื่องมือและทักษะทางเทคนิค' : 'Tools & Technical Skills'}
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-1 text-xs">
                <div>
                  <span className="font-bold text-neutral-800 block text-[11px] mb-1">
                    {activeLang === 'TH' ? 'ทักษะ Frontend:' : 'Frontend Skills:'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {about.frontendSkills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md bg-black text-white text-[10.5px] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-neutral-800 block text-[11px] mb-1">
                    {activeLang === 'TH' ? 'เครื่องมือ AI:' : 'AI Tools:'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {about.aiTools.map((a) => (
                      <span key={a} className="px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-700 text-[10px]">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                 <div>
                  <span className="font-bold text-neutral-800 block text-[11px] mb-1">
                    {activeLang === 'TH' ? 'เครื่องมือออกแบบ:' : 'Design Tools:'}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {about.designTools.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-[#FFFBEA] border border-neutral-300 text-neutral-800 text-[10.5px] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            

            {/* Skills: UX, Soft Skills, Languages */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <h5 className="text-[11px] font-bold text-neutral-900 mb-1 border-b border-neutral-200 pb-1">
                  {activeLang === 'TH' ? 'ทักษะ UX/UI' : 'UX/UI Design Skills'}
                </h5>
                <ul className="text-[10.5px] text-neutral-700 space-y-1">
                  {about.uxSkills.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <h5 className="text-[11px] font-bold text-neutral-900 mb-1 border-b border-neutral-200 pb-1">
                  {activeLang === 'TH' ? 'ทักษะด้านบุคลิกภาพ' : 'Soft Skills'}
                </h5>
                <ul className="text-[10.5px] text-neutral-700 space-y-1">
                  {about.softSkills.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <h5 className="text-[11px] font-bold text-neutral-900 mb-1 border-b border-neutral-200 pb-1">
                  {activeLang === 'TH' ? 'ภาษา' : 'Languages'}
                </h5>
                <ul className="text-[10.5px] text-neutral-700 space-y-1">
                  {about.languages.map((l, i) => (
                    <li key={i}>• {l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[11px] text-neutral-500 font-poppins">
            <span>About Me</span>
            <span>Sineenath Rueangsri — KMUTT</span>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════
            PAGES 3 - 6: 4 PROJECTS (A4 Portrait)
        ═════════════════════════════════════════════════════════ */}
        {PROJECTS_DATA.map((proj, idx) => {
          const p = proj[activeLang];
          const pageNum = `0${idx + 3} / 07`;

          return (
            <section
              key={proj.id}
              className="slide-page w-full max-w-[794px] min-h-[1123px] aspect-[210/297] bg-white rounded-2xl shadow-xl border border-neutral-300 p-10 mx-auto flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="font-sekuya text-lg md:text-xl uppercase tracking-wider text-black">
                    {p.title}
                  </h2>
                  <span className="border border-black bg-[#FFFBEA] px-3 py-0.5 rounded-full text-xs font-semibold text-black shadow-xs">
                    {p.category}
                  </span>
                </div>
                <span className="text-xs font-bold text-neutral-400 font-poppins">
                  {pageNum}
                </span>
              </div>

              {/* Sub-Header: Role & Meta */}
              <div className="font-rubik text-5xl text-[#610200] m-5">
                  {p.role}
                </div>
                <div className="text-[11px] text-neutral-600 font-poppins  ml-5 mb-5">
                  <p className="font-semibold text-neutral-900">{p.subject}</p>
                  <p>{p.duration}</p>
                </div>

              {/* Showcase UI Screenshots Gallery from PictureToPDF */}
              {proj.screenshots && proj.screenshots.length > 0 && (
                <div className="my-2">
                  <div className="grid grid-cols-4 gap-2.5">
                    {proj.screenshots.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col items-center bg-neutral-50 rounded-xl p-1.5 border border-neutral-200 shadow-xs"
                      >
                        <div className="w-full h-24 sm:h-28 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                          <img
                            src={s.src}
                            alt={s.caption}
                            className="w-full h-full object-contain object-center"
                          />
                        </div>
                        <span className="text-[9.5px] font-semibold text-neutral-600 mt-1 truncate max-w-full">
                          {s.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Content Area */}
              <div className="space-y-3.5 my-auto py-1 mt-5">
                {/* Overview */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5">
                  <div className="border-l-[3px] border-black pl-2 mb-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      {activeLang === 'TH' ? 'ภาพรวมโปรเจกต์ & ผลการวิจัย' : 'Project Overview & Research Insights'}
                    </h3>
                  </div>
                  <p className="text-[11.5px] text-neutral-700 leading-relaxed whitespace-pre-line">
                    {p.overview}
                  </p>
                </div>

                {/* My Role & Responsibilities */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 shadow-xs">
                  <div className="border-l-[3px] border-black pl-2 mb-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      {activeLang === 'TH' ? 'บทบาทและความรับผิดชอบ' : 'My Role & Contributions'}
                    </h3>
                  </div>
                  <p className="text-[11.5px] text-neutral-700 leading-relaxed whitespace-pre-line">
                    {p.roleDesc}
                  </p>
                </div>

                {/* Key Learnings */}
                <div className="bg-[#FFF5CF]/25 border border-[#E3C985]/70 rounded-xl p-3.5">
                  <div className="border-l-[3px] border-black pl-2 mb-1.5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      {activeLang === 'TH' ? 'สิ่งที่ได้เรียนรู้' : 'Key Learnings'}
                    </h3>
                  </div>
                  <p className="text-[11.5px] text-neutral-700 leading-relaxed whitespace-pre-line">
                    {p.learnings}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex items-center gap-2 flex-wrap pt-0.5">
                  <span className="text-[10.5px] font-bold text-neutral-800 uppercase tracking-wider">
                    {activeLang === 'TH' ? 'เครื่องมือ:' : 'Tools:'}
                  </span>
                  {p.tools.map((t, idxTool) => (
                    <span
                      key={idxTool}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-[10.5px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Bar */}
              <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[11px] text-neutral-500 font-poppins">
                <span>{p.title}</span>
                <span>Sineenath Rueangsri — Portfolio</span>
              </div>
            </section>
          );
        })}

        {/* ═════════════════════════════════════════════════════════
            PAGE 7: COVER ปิด (THANK YOU & CONTACT)
        ═════════════════════════════════════════════════════════ */}
        <section className="slide-page w-full max-w-[794px] min-h-[1123px] aspect-[210/297] bg-white rounded-2xl shadow-xl border border-neutral-300 p-10 mx-auto flex flex-col justify-between overflow-hidden relative print:border-none print:shadow-none">
          {/* Top Header Tag */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="border border-black bg-[#FFFBEA] px-3.5 py-1 rounded-full text-xs font-semibold text-black flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#610200]" />
              {activeLang === 'TH' ? 'ติดต่อเพื่อร่วมงาน' : 'Get In Touch'}
            </span>
            <span className="text-xs font-bold text-neutral-400 font-poppins">
              07 / 07
            </span>
          </div>

          {/* Main Thank You & Contact Content */}
          <div className="my-auto flex flex-col items-center text-center py-6">
            <h2 className="font-sekuya text-5xl sm:text-6xl uppercase tracking-widest text-[#610200] leading-none mb-3">
              THANK YOU
            </h2>
            <p className="font-rubik text-xl sm:text-2xl text-neutral-800 mb-2">
              {activeLang === 'TH' ? 'ขอบคุณสำหรับการพิจารณาพอร์ตโฟลิโอ' : 'Thank You for Taking the Time to Review My Portfolio'}
            </p>
            <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed mb-8">
              {activeLang === 'TH'
                ? 'พร้อมที่จะเรียนรู้ ลงมือปฏิบัติจริง และร่วมสร้างสรรค์ประสบการณ์ดิจิทัลที่ตอบโจทย์ผู้ใช้งานร่วมกับทีมของคุณ'
                : 'Eager to learn, create user-centered digital solutions, and collaborate with innovative design and development teams.'}
            </p>

            {/* Contact Details Card */}
            <div className="w-full max-w-lg bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-left shadow-sm space-y-4">
              <div className="border-l-[3px] border-[#610200] pl-3 mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#610200]">
                  {activeLang === 'TH' ? 'ช่องทางการติดต่อ' : 'Contact Information'}
                </h3>
                <p className="text-xs text-neutral-600">UX/UI Designer & Web Designer</p>
              </div>

              <div className="space-y-3 text-xs border-t border-neutral-200 pt-3">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#610200]/10 text-[#610200] flex items-center justify-center font-bold shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[10.5px] font-medium">{activeLang === 'TH' ? 'เบอร์โทรศัพท์' : 'Phone Number'}</p>
                    <p className="font-semibold text-neutral-900">(+66) 61-408-3711</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#610200]/10 text-[#610200] flex items-center justify-center font-bold shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[10.5px] font-medium">{activeLang === 'TH' ? 'อีเมล' : 'Gmail / Email'}</p>
                    <a href="mailto:sineenath.work@gmail.com" className="font-semibold text-[#610200] hover:underline">
                      sineenath.work@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#610200]/10 text-[#610200] flex items-center justify-center font-bold shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[10.5px] font-medium">{activeLang === 'TH' ? 'ที่อยู่' : 'Location'}</p>
                    <p className="font-semibold text-neutral-900">
                      {activeLang === 'TH' ? 'กรุงเทพมหานคร, ประเทศไทย' : 'Bangkok, Thailand'}
                    </p>
                  </div>
                </div>

                {/* University */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#610200]/10 text-[#610200] flex items-center justify-center font-bold shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-[10.5px] font-medium">{activeLang === 'TH' ? 'สถาบันการศึกษา' : 'Institution'}</p>
                    <p className="font-semibold text-neutral-900">King Mongkut's University of Technology Thonburi (KMUTT)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[11px] text-neutral-500 font-poppins">
            <span>Portfolio Document Presentation</span>
            <span>Sineenath Rueangsri — KMUTT</span>
          </div>
        </section>

      </div>
    </div>
  );
}
