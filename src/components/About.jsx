import React from 'react';
import { Html5, Css, Javascript, React as ReactIcon, TailwindCss, Mysql, Figma, Canva, VisualStudioCode, GoogleAntigravity, Claude, Gemini, OpenaiChatgpt } from '@thesvg/react';
import { useLanguage } from '../context/LanguageContext';

const TEXT = {
  EN: {
    badge: 'About Me',
    heading: 'ABOUT ME',
    subtitle: 'Get to know me',
    profileTitle: 'Profile',
    profileName: 'Name: Sineenath Rueangsri',
    profileDesc:
      "A third-year student in Digital Service Innovation (DSI) at King Mongkut's University of Technology Thonburi (KMUTT), with a passion for UX/UI and web design. Experienced in designing user flows, wireframes, and interactive prototypes through academic projects and hackathons. Possesses foundational frontend knowledge (HTML, CSS, JavaScript, React) to bridge the gap between design and development, ensuring seamless handoffs. Seeking a UX/UI Design internship to enhance my analytical and user-centered design skills, while contributing to the continuous growth of your organization.",
    educationTitle: 'Education',
    university: "King Mongkut's University of Technology Thonburi,",
    faculty: 'School of Information Technology (SIT)',
    degree: 'Bachelor of Arts in Digital Service Innovation',
    year: '2024 – Present',
    expectedGrad: '(Expected Graduation: 2028)',
    gpa: 'GPA:',
    gpaVal: '3.57 / 4.0',
    coursework: 'Relevant Coursework:',
    courseworkVal: 'Web Technology and Database, Digital Application Production, User Experience and Interface, Psychology for Digital Service, Digital Marketing, Market Research, Digital Project Management',
    toolsTitle: 'Tools',
    designTools: 'Design Tools',
    frontendSkills: 'Frontend Skills (Foundational)',
    aiTools: 'AI Tools',
    additionalInfo: 'Additional Information',
    uxSkillsTitle: 'UX/UI Design Skills',
    uxSkills: ['User Research & Persona Creation', 'Wireframing & User Flow', 'Interactive Prototyping', 'Information Architecture', 'Responsive Web & Mobile Design'],
    softSkillsTitle: 'Soft Skills',
    softSkills: ['Cross-functional Collaboration', 'Effective Communication', 'Problem Solving & Critical Thinking', 'Adaptability & Creativity'],
    languagesTitle: 'Languages',
    languages: ['Thai (Native)', 'English (Basic Working Proficiency)'],
  },
  TH: {
    badge: 'About Me',
    heading: 'ABOUT ME',
    subtitle: 'Get to know me',
    profileTitle: 'โปรไฟล์',
    profileName: 'ชื่อ: สินีนาท เรืองศรี',
    profileDesc:
      'นักศึกษาชั้นปีที่ 3 สาขานวัตกรรมบริการดิจิทัล (DSI) มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.) มีความสนใจในการออกแบบ UX/UI และ Web Design พร้อมประสบการณ์ในการออกแบบ User Flows, Wireframes และ Interactive Prototypes จากโครงงานการศึกษาและการเข้าร่วม Hackathons มีพื้นฐานด้าน Frontend ได้แก่ HTML, CSS, JavaScript และ React ซึ่งช่วยให้สามารถทำงานร่วมกับทีมนักพัฒนาและเข้าใจข้อจำกัดในการพัฒนาผลิตภัณฑ์ได้ดีขึ้น ปัจจุบันกำลังมองหาโอกาสในการฝึกงานด้าน UX/UI Design เพื่อพัฒนาทักษะด้านการวิเคราะห์ผู้ใช้งานและการออกแบบที่ยึดผู้ใช้เป็นศูนย์กลาง',
    educationTitle: 'การศึกษา',
    university: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี,',
    faculty: 'คณะเทคโนโลยีสารสนเทศ (SIT)',
    degree: 'ปริญญาตรี สาขานวัตกรรมบริการดิจิทัล',
    year: '2567 – ปัจจุบัน',
    expectedGrad: '(คาดว่าจะสำเร็จการศึกษา: 2571)',
    gpa: 'เกรดเฉลี่ย:',
    gpaVal: '3.57 / 4.0',
    coursework: 'วิชาที่เกี่ยวข้อง:',
    courseworkVal: 'เทคโนโลยีเว็บและฐานข้อมูล, การผลิตแอปพลิเคชันดิจิทัล, UX/UI, จิตวิทยาเพื่อบริการดิจิทัล, ดิจิทัลมาร์เก็ตติ้ง, การวิจัยตลาด, การบริหารโครงการดิจิทัล',
    toolsTitle: 'เครื่องมือ',
    designTools: 'เครื่องมือออกแบบ',
    frontendSkills: 'ทักษะ Frontend (พื้นฐาน)',
    aiTools: 'เครื่องมือ AI',
    additionalInfo: 'ข้อมูลเพิ่มเติม',
    uxSkillsTitle: 'ทักษะ UX/UI Design',
    uxSkills: ['การวิจัยผู้ใช้และสร้าง Persona', 'Wireframing & User Flow', 'Interactive Prototyping', 'Information Architecture', 'การออกแบบ Web & Mobile แบบ Responsive'],
    softSkillsTitle: 'ทักษะด้านบุคลิกภาพ',
    softSkills: ['การทำงานข้ามทีม', 'การสื่อสารอย่างมีประสิทธิภาพ', 'การแก้ปัญหาและคิดเชิงวิพากษ์', 'ความยืดหยุ่นและความคิดสร้างสรรค์'],
    languagesTitle: 'ภาษา',
    languages: ['ภาษาไทย (ภาษาแม่)', 'ภาษาอังกฤษ (ระดับพื้นฐานในการทำงาน)'],
  },
};

function About() {
  const { lang } = useLanguage();
  const t = TEXT[lang] || TEXT.EN;
  const iconMap = {
    html: <Html5 className="h-8 w-8" />,
    css: <Css className="h-8 w-8" />,
    js: <Javascript className="h-8 w-8" />,
    react: <ReactIcon className="h-8 w-8" />,
    tailwind: <TailwindCss className="h-8 w-8" />,
    mysql: <Mysql className="h-8 w-8" />,
    figma: <Figma className="h-8 w-8" />,
    canva: <Canva className="h-8 w-8" />,
    GoogleAntigravity: <GoogleAntigravity className="h-8 w-8" />,
    claude: <Claude className="h-8 w-8" />,
    gemini: <Gemini className="h-8 w-8" />,
    chatgpt: <OpenaiChatgpt className="h-8 w-8" />,
    VScode: <VisualStudioCode className="h-8 w-8" />,
  };

  const aiTools = [
    { label: 'Google Antigravity', iconKey: 'GoogleAntigravity' },
    { label: 'Claude', iconKey: 'claude' },
    { label: 'Gemini', iconKey: 'gemini' },
    { label: 'OpenAI ChatGPT', iconKey: 'chatgpt' },
  ]

  const technicalSkills = [
    { label: 'Visual Studio Code', iconKey: 'VScode' },
    { label: 'HTML', iconKey: 'html' },
    { label: 'CSS', iconKey: 'css' },
    { label: 'JS', iconKey: 'js' },
    { label: 'React', iconKey: 'react' },
    { label: 'Tailwind', iconKey: 'tailwind' },
    { label: 'MySQL', iconKey: 'mysql' },
  ];

  const designTools = [
    { label: 'Figma', iconKey: 'figma' },
    { label: 'Canva', iconKey: 'canva' },
  ];

  return (
    <section id="about" className="min-h-screen bg-white py-24 px-6 md:px-16 text-neutral-800 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* ─── Section Header ─── */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="border border-black bg-[#FFFBEA] px-4 py-1 rounded-full font-poppins text-sm font-medium mb-8 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            {t.badge}
          </div>
          <h2 className="font-sekuya text-4xl md:text-5xl font-bold tracking-wide uppercase mb-2">
            {t.heading}
          </h2>
          <span className="font-rochester text-rochester text-neutral-500">
            {t.subtitle}
          </span>
        </div>

        {/* ─── Row 1: Profile + Education (left) | Photo (right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">

            {/* Profile */}
            <div>
              <div className="border-l-4 border-neutral-800 pl-4 mb-4">
                <h3 className="font-bold text-lg text-black">{t.profileTitle}</h3>
              </div>

              <p className="font-bold text-sm mb-3 text-black">
                {t.profileName}
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.profileDesc}
              </p>
            </div>

            {/* Education */}
            <div>
              <div className="border-l-4 border-neutral-800 pl-4 mb-4">
                <h3 className="font-bold text-lg text-black">{t.educationTitle}</h3>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-black">
                    {t.university}
                  </p>
                  <p className="text-sm font-bold text-black">
                    {t.faculty}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.degree}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-black">
                    {t.year}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.expectedGrad}
                  </p>
                </div>
              </div>

              <ul className="mt-4 text-sm text-neutral-600 leading-relaxed space-y-1">
                <li>
                  <strong className="text-black">{t.gpa}</strong> {t.gpaVal}
                </li>
                <li>
                  <strong className="text-black">{t.coursework}</strong>{' '}
                  {t.courseworkVal}
                </li>
              </ul>
            </div>

          </div>

          {/* Right: Profile Photo */}
          <div className="lg:col-span-6 flex justify-center items-start order-1 lg:order-2">
            <img
              src="/Picture/Profile.png"
              alt="Sineenath Rueangsri — UX/UI Designer"
              className="w-[70%] sm:w-[60%] md:w-[65%] lg:w-full h-auto object-contain object-center"
            />
          </div>

        </div>

        {/* ─── Row 2: Tools Section ─── */}
        <div>
          <div className="border-l-4 border-neutral-800 pl-4 mb-10">
            <h3 className="font-bold text-lg text-black">{t.toolsTitle}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">

            {/* Design Tools */}
            <div>
              <h4 className="font-bold text-sm text-black mb-6">{t.designTools}</h4>
              <div className="flex flex-wrap gap-5">
                {designTools.map((tool) => (
                  <div key={tool.label} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-neutral-300">
                      <div className="text-4xl">
                        {iconMap[tool.iconKey]}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-6">
                {t.frontendSkills}
              </h4>
              <div className="flex flex-wrap gap-5">
                {technicalSkills.map((skill) => (
                  <div key={skill.label} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-neutral-300">
                      <div className="text-4xl">
                        {iconMap[skill.iconKey]}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <h4 className="font-bold text-sm text-black mb-6">
                {t.aiTools}
              </h4>

              <div className="flex items-start gap-5 flex-nowrap">
                {aiTools.map((tool) => (
                  <div
                    key={tool.label}
                    className="flex flex-col items-center gap-3 shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-neutral-300">
                      <div className="text-4xl">
                        {iconMap[tool.iconKey]}
                      </div>
                    </div>

                    <span className="text-xs font-medium text-neutral-700 text-center">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── Row 3: Additional Information ─── */}
        <div className="mt-16">
          <div className="border-l-4 border-neutral-800 pl-4 mb-8">
            <h3 className="font-bold text-lg text-black">{t.additionalInfo}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* UX/UI Design Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">{t.uxSkillsTitle}</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                {t.uxSkills.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">{t.softSkillsTitle}</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                {t.softSkills.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-bold text-sm text-black mb-3">{t.languagesTitle}</h4>
              <ul className="text-sm text-neutral-700 space-y-1.5">
                {t.languages.map((l, i) => <li key={i}>• {l}</li>)}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;