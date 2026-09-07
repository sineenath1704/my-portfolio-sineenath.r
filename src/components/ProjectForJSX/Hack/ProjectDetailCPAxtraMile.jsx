import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';

export default function ProjectDetailCPAxtraMile() {
  const projectData = {
    projectName: "Smart Adviser (Makro Pro)",
    categoryName: "Hackathon",
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
    figmaEmbedUrl: "",
    designImages: []
  };

  return <ProjectDetailTemplate {...projectData} />;
}
