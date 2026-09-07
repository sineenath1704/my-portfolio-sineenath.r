import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';

export default function ProjectDetailONEPUT() {
  const projectData = {
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
  };

  return <ProjectDetailTemplate {...projectData} />;
}
