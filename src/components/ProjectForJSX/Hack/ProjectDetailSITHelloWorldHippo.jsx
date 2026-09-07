import React from 'react';
import ProjectDetailTemplate from '../ProjectDetailTemplate';

export default function ProjectDetailSITHelloWorldHippo() {
  const projectData = {
    projectName: "SIT Hello World Hippo",
    categoryName: "Hackathon",
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
    figmaEmbedUrl: "",
    designImages: []
  };

  return <ProjectDetailTemplate {...projectData} />;
}
