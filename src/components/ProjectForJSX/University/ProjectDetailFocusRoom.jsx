import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';

export default function ProjectDetailFocusRoom() {
  const projectData = {
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
    designImages: []
  };

  return <ProjectDetailTemplate {...projectData} />;
}
