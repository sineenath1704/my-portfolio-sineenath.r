import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';

export default function ProjectDetailHerEvidence() {
  const projectData = {
    projectName: "HerEvidence Platform",
    categoryName: "Hackathon",
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
    designImages: []
  };

  return <ProjectDetailTemplate {...projectData} />;
}
