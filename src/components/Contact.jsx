import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { useLanguage } from '../context/LanguageContext';

const TEXT = {
  EN: {
    badge: 'Contact',
    heading: 'CONTACT ME',
    subtitle: 'Feel free to reach out',
    thankYouTitle: 'Thank You for Your Message',
    thankYouDesc: 'Your message has been received successfully. I appreciate you taking the time to reach out and will respond as soon as possible.',
    formTitle: 'Contact urgently',
    formDesc: 'Please provide me with the details, and I will get back to you within 1 business day.',
    hideBtn: 'Hide',
    getInTouchBtn: 'Get In Touch',
    contactSection: '01 / CONTACT DETAILS',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'e.g. Niles / ABC Studio',
    emailLabel: 'Email Address *',
    positionLabel: 'Position / Role',
    positionPlaceholder: 'e.g. HR Manager, Founder',
    orgLabel: 'Organization',
    projectSection: '02 / PROJECT DETAILS',
    jobTitleLabel: 'Job Title / Project *',
    jobTitlePlaceholder: 'e.g. UX/UI Designer',
    timelineLabel: 'Timeline / Start Date',
    timelinePlaceholder: 'e.g. July 2024 / 2 months',
    budgetLabel: 'Budget / Salary (Optional)',
    budgetPlaceholder: 'e.g. 20,000 Baht / Negotiable',
    projectTypeLabel: 'Project Type *',
    workFormatLabel: 'Work Format *',
    jobDetailsLabel: 'Job Details / Expectations',
    jobDetailsPlaceholder: 'Tell me about the project, required skills, or scope of work...',
    interviewCheck: "I'd like to schedule an introductory call / interview first.",
    preferredDateLabel: 'Preferred Date/Time',
    preferredDatePlaceholder: 'e.g. Mon-Wed, 10:00 - 17:00',
    preferredChannelLabel: 'Preferred Channel',
    selectChannel: 'Select Channel',
    privacyNote: 'Your information will only be used to contact you regarding this specific inquiry.',
    submitBtn: 'Send Proposal',
    location: 'Bangkok, Thailand',
    projectTypes: [
      { key: 'Full-time', label: 'Full-time' },
      { key: 'Freelance', label: 'Freelance' },
      { key: 'Internship', label: 'Internship' },
      { key: 'Collaboration / Hackathon', label: 'Collaboration / Hackathon' },
    ],
    workFormats: [
      { key: 'Online (remote Work)', label: 'Online (Remote Work)' },
      { key: 'Onsite', label: 'Onsite' },
      { key: 'Hybrid', label: 'Hybrid' },
    ],
  },
  TH: {
    badge: 'Contact',
    heading: 'CONTACT ME',
    subtitle: 'Feel free to reach out',
    thankYouTitle: 'ขอบคุณที่ติดต่อมา',
    thankYouDesc: 'ได้รับข้อความของคุณเรียบร้อยแล้ว ขอบคุณที่สละเวลาติดต่อมา ฉันจะตอบกลับโดยเร็วที่สุด',
    formTitle: 'ติดต่อด่วน',
    formDesc: 'กรุณาแจ้งรายละเอียด ฉันจะตอบกลับภายใน 1 วันทำการ',
    hideBtn: 'ซ่อน',
    getInTouchBtn: 'ติดต่อฉัน',
    contactSection: '01 / ข้อมูลการติดต่อ',
    fullName: 'ชื่อ-นามสกุล *',
    fullNamePlaceholder: 'เช่น สมศรี / ABC Studio',
    emailLabel: 'อีเมล *',
    positionLabel: 'ตำแหน่ง / บทบาท',
    positionPlaceholder: 'เช่น ฝ่ายบุคคล, ผู้ก่อตั้ง',
    orgLabel: 'องค์กร',
    projectSection: '02 / รายละเอียดโปรเจกต์',
    jobTitleLabel: 'ตำแหน่งงาน / โปรเจกต์ *',
    jobTitlePlaceholder: 'เช่น UX/UI Designer',
    timelineLabel: 'ระยะเวลา / วันเริ่มต้น',
    timelinePlaceholder: 'เช่น ก.ค. 2567 / 2 เดือน',
    budgetLabel: 'งบประมาณ / เงินเดือน (ถ้ามี)',
    budgetPlaceholder: 'เช่น 20,000 บาท / ต่อรองได้',
    projectTypeLabel: 'ประเภทงาน *',
    workFormatLabel: 'รูปแบบการทำงาน *',
    jobDetailsLabel: 'รายละเอียดงาน / ความคาดหวัง',
    jobDetailsPlaceholder: 'เล่าเรื่องโปรเจกต์, ทักษะที่ต้องการ หรือขอบเขตของงาน...',
    interviewCheck: 'ขอนัดสัมภาษณ์ก่อน',
    preferredDateLabel: 'วันเวลาที่สะดวก',
    preferredDatePlaceholder: 'เช่น จันทร์-พุธ, 10:00 - 17:00',
    preferredChannelLabel: 'ช่องทางที่ต้องการ',
    selectChannel: 'เลือกช่องทาง',
    privacyNote: 'ข้อมูลของคุณจะใช้เพื่อติดต่อในเรื่องนี้เท่านั้น',
    submitBtn: 'ส่งข้อความ',
    location: 'กรุงเทพมหานคร, ประเทศไทย',
    projectTypes: [
      { key: 'Full-time', label: 'งานประจำ (Full-time)' },
      { key: 'Freelance', label: 'ฟรีแลนซ์ (Freelance)' },
      { key: 'Internship', label: 'ฝึกงาน (Internship)' },
      { key: 'Collaboration / Hackathon', label: 'ร่วมโปรเจกต์ / Hackathon' },
    ],
    workFormats: [
      { key: 'Online (remote Work)', label: 'ออนไลน์ (Remote Work)' },
      { key: 'Onsite', label: 'ออนไซต์ (Onsite)' },
      { key: 'Hybrid', label: 'ไฮบริด (Hybrid)' },
    ],
  },
};

function Contact() {
  const { lang } = useLanguage();
  const t = TEXT[lang] || TEXT.EN;
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    position: '',
    organization: '',
    jobTitle: '',
    budget: '',
    timeline: '',
    projectType: [],
    workFormat: [],
    jobDetails: '',
    preferredDate: '',
    preferredChannel: '',
    interview: false,
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleToggle = (field, value) => {
    setForm((prev) => {
      const current = prev[field] || [];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter((item) => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const handleCheckbox = (e) => {
    setForm({ ...form, interview: e.target.checked });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_portfolio-sr",
      "template_6h8tyha",
      {
        fullName: form.fullName,
        email: form.email,
        position: form.position,
        organization: form.organization,
        jobTitle: form.jobTitle,
        budget: form.budget,
        timeline: form.timeline,
        projectType: form.projectType.join(", "),
        workFormat: form.workFormat.join(", "),
        jobDetails: form.jobDetails,
        preferredDate: form.preferredDate,
        preferredChannel: form.preferredChannel,
        interview: form.interview ? "Yes" : "No",
      },
      "BXI0Xbmrzr1Gtt-jS"
    );

    setSubmitted(true);
  } catch (error) {
    console.error("Email sending failed:", error);
    alert("Failed to send message. Please try again.");
  }
};

  const [isFormExpanded, setIsFormExpanded] = useState(true);

  const projectTypes = t.projectTypes || [];
  const workFormats = t.workFormats || [];

  const socialLinks = [
    {
      label: 'Gmail',
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sineenathrueangsri@gmail.com",
      color: '#EA4335',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#0A66C2',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
      color: '#fff',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    // {
    //   label: 'Behance',
    //   href: 'https://behance.net',
    //   color: '#1769ff',
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    //       <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.673 1.45.673 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.17 1.34-.48.34-1.05.59-1.7.75-.65.16-1.35.24-2.09.24H0V4.51h6.938v-.007zM3.34 10.7h3.17c.63 0 1.14-.16 1.54-.48.4-.32.59-.82.59-1.5 0-.4-.07-.73-.2-.99a1.5 1.5 0 0 0-.55-.6 2.4 2.4 0 0 0-.83-.3c-.32-.06-.67-.09-1.05-.09H3.34v3.97zm0 5.65h3.64c.36 0 .71-.04 1.05-.11.34-.07.64-.2.9-.38.26-.18.47-.43.63-.74.16-.32.24-.72.24-1.21 0-.95-.27-1.63-.8-2.05-.54-.42-1.25-.62-2.14-.62H3.34v5.11zm14.05-9.19c-1.3 0-2.38.42-3.24 1.27-.86.85-1.38 2.04-1.55 3.58h9.09c-.12-1.53-.62-2.73-1.48-3.58-.86-.85-1.78-1.27-2.82-1.27zm4.12 9.46c-.5.67-1.24 1-2.21 1-.65 0-1.2-.13-1.64-.4-.44-.27-.8-.6-1.07-1-.27-.4-.46-.83-.57-1.29H24c.04-.6.06-1.18.06-1.73 0-1.2-.2-2.27-.6-3.2-.4-.93-.96-1.72-1.66-2.36-.7-.64-1.52-1.13-2.47-1.47-.95-.34-1.98-.51-3.1-.51-1.2 0-2.28.2-3.24.6-.96.4-1.78.96-2.45 1.67-.67.71-1.19 1.56-1.55 2.55-.36.99-.54 2.08-.54 3.27 0 1.23.18 2.34.53 3.33.35.99.86 1.84 1.52 2.55.66.71 1.47 1.26 2.43 1.65.96.39 2.04.59 3.24.59 1.58 0 2.91-.37 3.99-1.1 1.08-.73 1.86-1.88 2.35-3.45h-2.98c-.18.58-.51 1.05-1 1.33z" />
    //     </svg>
    //   ),
    // },
    // {
    //   label: 'Figma',
    //   href: 'https://figma.com',
    //   color: '#F24E1E',
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    //       <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.491 0 4.517 2.014 4.517 4.49S10.663 24 8.172 24zm0-7.509c-1.666 0-3.044 1.355-3.044 3.019s1.378 3.019 3.044 3.019c1.667 0 3.045-1.355 3.045-3.019s-1.378-3.019-3.045-3.019zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <section id="contact" className="min-h-screen bg-white py-24 px-6 md:px-16 text-neutral-800 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="border border-black bg-[#FFFBEA] px-4 py-1 rounded-full text-sm font-medium mb-8 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            {t.badge}
          </div>
          <h2 className="font-sekuya text-sekuya3 tracking-widest uppercase mb-1">
            {t.heading}
          </h2>
          <span className="font-rochester text-rochester text-neutral-500">
            {t.subtitle}
          </span>
        </div>

        {/* ─── Contact Info Row ─── */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-neutral-600">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-black" />
            <span>{t.location}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-black" />
            <span>(+66) 61-408-3711</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5 text-black" />

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sineenathrueangsri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              sineenathrueangsri@gmail.com
            </a>
          </div>
        </div>

        {/* ─── Contact Form ─── */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-5">
                <div className="mx-auto w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-bold text-2xl text-black mb-2">
                {t.thankYouTitle}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {t.thankYouDesc}
              </p>
            </div>
          ) : (
            <>
              {/* Header + Collapse Button - อยู่นอก isFormExpanded */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-bold text-xl text-black">{t.formTitle}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{t.formDesc}</p>
                </div>
                <button
                  onClick={() => setIsFormExpanded(!isFormExpanded)}
                  className="px-4 py-2 rounded-full bg-red-900 text-white flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-red-950 transition-all duration-300 gap-2"
                  type="button"
                >
                  <span className="text-sm font-semibold">
                    {isFormExpanded ? t.hideBtn : t.getInTouchBtn}
                  </span>
                </button>
              </div>

              {/* Form Content - ขึ้นลงตามสถานะ */}
              {isFormExpanded && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Details Section */}
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6">{t.contactSection}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.fullName}</label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder={t.fullNamePlaceholder}
                          value={form.fullName}
                          onChange={handleChange}
                          required
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.emailLabel}</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="hello@company.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.positionLabel}</label>
                        <input
                          type="text"
                          name="position"
                          placeholder={t.positionPlaceholder}
                          value={form.position}
                          onChange={handleChange}
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.orgLabel}</label>
                        <input
                          type="text"
                          name="organization"
                          placeholder="https://"
                          value={form.organization}
                          onChange={handleChange}
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6">{t.projectSection}</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.jobTitleLabel}</label>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder={t.jobTitlePlaceholder}
                          value={form.jobTitle}
                          onChange={handleChange}
                          required
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.timelineLabel}</label>
                        <input
                          type="text"
                          name="timeline"
                          placeholder={t.timelinePlaceholder}
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.budgetLabel}</label>
                        <input
                          type="text"
                          name="budget"
                          placeholder={t.budgetPlaceholder}
                          value={form.budget}
                          onChange={handleChange}
                          className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-neutral-700 mb-3">{t.projectTypeLabel}</label>
                      <div className="flex flex-wrap gap-3">
                        {projectTypes.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => handleToggle('projectType', item.key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${form.projectType.includes(item.key)
                              ? 'border-black bg-black text-white'
                              : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                              }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Work Format */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-neutral-700 mb-3">{t.workFormatLabel}</label>
                      <div className="flex flex-wrap gap-3">
                        {workFormats.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => handleToggle('workFormat', item.key)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${form.workFormat.includes(item.key)
                              ? 'border-black bg-black text-white'
                              : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                              }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.jobDetailsLabel}</label>
                      <textarea
                        name="jobDetails"
                        rows={5}
                        placeholder={t.jobDetailsPlaceholder}
                        value={form.jobDetails}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white resize-none"
                      />
                    </div>
                  </div>

                  {/* Interview Section */}
                  <div className="mb-10 pb-10 border-b border-neutral-200">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="interview"
                        checked={form.interview}
                        onChange={handleCheckbox}
                        className="w-4 h-4 rounded border-neutral-300"
                      />
                      <span className="text-sm text-neutral-700">{t.interviewCheck}</span>
                    </label>

                    {form.interview && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.preferredDateLabel}</label>
                          <input
                            type="text"
                            name="preferredDate"
                            placeholder={t.preferredDatePlaceholder}
                            value={form.preferredDate}
                            onChange={handleChange}
                            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-neutral-700 mb-2">{t.preferredChannelLabel}</label>
                          <select
                            name="preferredChannel"
                            value={form.preferredChannel}
                            onChange={handleChange}
                            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-900/20 bg-white"
                          >
                            <option value="">{t.selectChannel}</option>
                            <option value="zoom">Zoom</option>
                            <option value="google-meet">Google Meet</option>
                            <option value="teams">Teams</option>
                            <option value="phone">Phone</option>
                            <option value="in-person">In Person</option>
                          </select>
                        </div>
                      </div>
                    )}
                    <p className="text-xs text-neutral-400 mt-3">{t.privacyNote}</p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    {t.submitBtn}
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* ─── Footer Section ─── */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-rochester text-neutral-800 mb-6">Sineenath Rueangsri</p>

          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-300 text-neutral-800"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;