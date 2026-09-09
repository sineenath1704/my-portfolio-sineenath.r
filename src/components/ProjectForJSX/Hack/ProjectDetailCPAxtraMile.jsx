import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';
import { useLanguage } from '../../../context/LanguageContext';

const DATA = {
  EN: {
    projectName: "Smart Adviser (Makro Pro)",
    categoryName: "Academic competition",
    categoryKey: "academic",
    parentCategory: "Project",
    role: "UX/UI Designer",
    subjectName: "CP Axtra Mile Hackathon 2025 (Top 10 Finalist / Certificate of Participation)",
    duration: "June – August 2025 (Final Event: August 1, 2025)",
    overview:
      "'Smart Adviser' is an intelligent assistant feature integrated into the Makro Pro application under the concept 'Your thoughtful assistant that recommends deals and reminds you before food expires.' It addresses fresh food waste across wholesale and consumer levels while sustainably driving business revenue.\n\n" +
      "Key Findings & Pain Points:\n" +
      "• CP Axtra (Makro): Fresh food spoilage resulted in 24,400 tons of food waste in 2024, equating to an estimated financial loss of 2,099 million THB.\n" +
      "• Shoppers: User surveys revealed that 93.2% had discarded food due to expiration, while only 11.3% consistently tracked expiration dates.\n\n" +
      "Core Solutions:\n" +
      "1. Reduce Food Waste with Expiry Notifications: Fresh food dashboard and Expiry Log; targeted lockscreen expiry notifications for perishable items; incentive gamification awarding 0.1 Makro Points upon confirming consumption.\n" +
      "2. Drive Sales with AI & Recommended Menu: AI recipe generator based on purchased ingredients; fresh food preservation guides; suggested add-ons and seasonings for cross-selling.\n" +
      "3. Personalized Promotions: Tailored deal banners and promotions based on B2B and B2C repurchase patterns.\n\n" +
      "Projected Business & Sustainability Impact:\n" +
      "• Estimated 25% reduction in food waste (approx. 6,100 tons/year).\n" +
      "• Projected fresh food sales increase through the app by 3,132.63 million THB/year.",
    myRoleTitle: "UX/UI Designer",
    myRoleDescription:
      "• Research & Insight Synthesis: Collaborated on surveying Makro Pro users and local restaurant entrepreneurs in the Pracha Uthit area to extract actionable pain points.\n" +
      "• UI Mockups & Flow Design: Designed user interfaces for the Expiry Log, AI Recipe Recommendation, and Personalized Promotion features in Figma.\n" +
      "• Design System Integration: Maintained visual harmony by designing strictly within Makro Pro's established design language and component ecosystem.\n" +
      "• Pitching Deck & Business Presentation: Co-authored business impact metrics, financial projections, and product roadmaps presented to the judging committee.",
    keyLearnings:
      "1. Working within Existing Design Systems: Understood the nuances and challenges of introducing innovative features seamlessly into a large-scale enterprise application with an existing visual identity and active user base.",
    tools: [
      "Figma",
      "Canva",
      "Figma Presentation Mode"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-8213&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-8213&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  },
  TH: {
    projectName: "Smart Adviser (Makro Pro)",
    categoryName: "การแข่งขันวิชาการ",
    categoryKey: "academic",
    parentCategory: "โปรเจกต์",
    role: "UX/UI Designer",
    subjectName: "CP Axtra Mile Hackathon 2025 (Top 10 Finalist / Certificate of Participation)",
    duration: "มิถุนายน – สิงหาคม 2568 (วันจัดกิจกรรมรอบชิงชนะเลิศ: 1 สิงหาคม 2568)",
    overview:
      "'Smart Adviser' เป็นฟีเจอร์ผู้ช่วยอัจฉริยะที่พัฒนาขึ้นเพื่อต่อยอดบนแอปพลิเคชัน Makro Pro ภายใต้แนวคิด 'ผู้ช่วยที่รู้ใจ แนะนำโปรโมชันและแจ้งเตือนให้ใช้ก่อนหมดอายุ' เพื่อแก้ปัญหาความสูญเสียจากอาหารสด (Food Waste) ทั้งในระดับธุรกิจค้าส่งและผู้บริโภค พร้อมสร้างยอดขายเติบโตอย่างยั่งยืน\n\n" +
      "ปัญหาที่พบและการวิจัย (Pain Points & Findings):\n" +
      "• ฝั่ง Makro (CP Axtra): สินค้าหมดอายุก่อนขาย ก่อให้เกิด Food Waste สูงถึง 24,400 ตันในปี 2567 หรือสูญเสียมูลค่าสูงถึงประมาณ 2,099 ล้านบาท\n" +
      "• ฝั่งลูกค้า: จากแบบสอบถามพบว่า 93.2% เคยทิ้งอาหารเนื่องจากหมดอายุ และมีเพียง 11.3% เท่านั้นที่ติดตามวันหมดอายุอย่างสม่ำเสมอ\n\n" +
      "ฟีเจอร์หลัก (Core Solutions):\n" +
      "1. ลด Food Waste ด้วยการแจ้งเตือนวันหมดอายุ: หน้ารวมสินค้าอาหารสดและบันทึกวันหมดอายุ (Expiry Log), แจ้งเตือนสินค้าใกล้หมดอายุบน Lockscreen เฉพาะสินค้าที่เน่าเสียง่าย, Incentive Gamification รับ 0.1 Makro Points เมื่อกดยืนยันการใช้สินค้า\n" +
      "2. เพิ่มยอดขายด้วย AI และเมนูแนะนำ: แนะนำสูตรอาหารอัจฉริยะจากวัตถุดิบที่ลูกค้าซื้อไป, แนะนำวิธียืดอายุสินค้าอาหารสด (Food Preservation Guide), แนะนำวัตถุดิบและเครื่องปรุงเพิ่มเติม (Suggested Add-ons / Cross-selling)\n" +
      "3. โปรโมชันเฉพาะบุคคล (Personalized Promotions): แบนเนอร์และหน้ารวมโปรโมชันเฉพาะบุคคลสำหรับลูกค้า B2B และ B2C\n\n" +
      "ผลกระทบเชิงธุรกิจและความยั่งยืน (Projected Impact):\n" +
      "• ลด Food Waste ลงได้ 25% (ประมาณ 6,100 ตัน/ปี)\n" +
      "• ประมาณการยอดขายอาหารสดผ่านแอปเพิ่มขึ้น 3,132.63 ล้านบาท/ปี",
    myRoleTitle: "UX/UI Designer",
    myRoleDescription:
      "• Research & Insight Synthesis: ร่วมวิจัยกลุ่มตัวอย่างผู้ใช้ Makro Pro และผู้ประกอบการร้านอาหารในพื้นที่ประชาอุทิศเพื่อค้นหา Pain Points\n" +
      "• UI Mockups & Flow Design: ออกแบบหน้าจอ UI ฟีเจอร์ Expiry Log, AI Recipe Recommendation และ Personalized Promotion ใน Figma\n" +
      "• Design System Integration: ออกแบบ UI ให้สอดคล้องกลมกลืนกับ Design Language เดิมของ Makro Pro\n" +
      "• Pitching Deck & Business Presentation: ร่วมจัดทำข้อมูล Business Impact, Financial Projection และ Roadmap นำเสนอคณะกรรมการ",
    keyLearnings:
      "1. การทำงานบน Design Language ที่มีอยู่เดิม (Working within Existing Design Systems): เข้าใจความท้าทายในการออกแบบฟีเจอร์ใหม่ให้กลมกลืนกับแอปพลิเคชันขนาดใหญ่ที่มีผู้ใช้งานจำนวนมาก",
    tools: [
      "UI Design & Prototyping: Figma",
      "Presentation & Slide: Canva, Figma Presentation Mode"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-8213&embed-host=share",
    figmaProtoUrl: "https://www.figma.com/proto/S7cmL83OOt9bXdVjXV7ZyJ/Portfolio-Show-Case?node-id=1-8213&t=dlI3YJVtV4Qouj3i-1",
    designImages: []
  }
};

export default function ProjectDetailCPAxtraMile() {
  const { lang } = useLanguage();
  const currentData = DATA[lang] || DATA.EN;
  return <ProjectDetailTemplate {...currentData} />;
}
