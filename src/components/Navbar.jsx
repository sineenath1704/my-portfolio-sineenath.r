import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'contact'];

    // สร้าง Observer ตรวจจับว่า Section ไหนกำลังแสดงอยู่บนหน้าจอเกิน 30%
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // rootMargin ช่วยชดเชยความสูงของ Navbar ด้านบน
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    // เริ่มแปะตัวตรวจจับให้กับทุก Section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (sectionId) => {
    const isSelected = activeSection === sectionId;
    
    if (isSelected) {
      return "bg-primary text-white px-3 py-1 rounded-[10px] transition-all duration-300";
    }
    
    return " hover:bg-yellow-white px-3 py-1 rounded-[10px] transition-all duration-300 transition-colors";
  };

  // Navbar menu labels
  const navLabels = {
    home:    { TH: 'หน้าแรก', EN: 'Home' },
    about:   { TH: 'เกี่ยวกับฉัน', EN: 'About Me' },
    project: { TH: 'โปรเจกต์', EN: 'Project' },
    contact: { TH: 'ติดต่อ', EN: 'Contact' },
  };

  return (
    // จัดให้เมนูอยู่กึ่งกลางด้านบน และลอยเหนือเนื้อหา (Fixed)
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white px-3 py-2 rounded-full shadow-lg flex items-center justify-center min-w-[340px] sm:min-w-[440px] md:min-w-[520px] border border-black">
      <nav className="flex items-center justify-between w-full text-xs sm:text-sm font-medium text-neutral-800 px-2 gap-1 sm:gap-2">
        <a 
          href="#home" 
          onClick={() => setActiveSection('home')}
          className={getLinkClass('home')}
        >
          {navLabels.home[lang]}
        </a>
        <a 
          href="#about" 
          onClick={() => setActiveSection('about')}
          className={getLinkClass('about')}
        >
          {navLabels.about[lang]}
        </a>
        <a 
          href="#projects" 
          onClick={() => setActiveSection('projects')}
          className={getLinkClass('projects')}
        >
          {navLabels.project[lang]}
        </a>
        
        {/* เส้นแบ่งแนวตั้ง */}
        <div className="h-5 w-[1px] bg-neutral-300 mx-1 sm:mx-2" />
        
        <a 
          href="#contact" 
          onClick={() => setActiveSection('contact')}
          className={getLinkClass('contact')}
        >
          {navLabels.contact[lang]}
        </a>

        {/* เส้นแบ่งแนวตั้ง */}
        <div className="h-5 w-[1px] bg-neutral-300 mx-1 sm:mx-2" />

        {/* ปุ่มสลับภาษา TH / EN */}
        <div 
          className="flex items-center bg-neutral-100 p-0.5 rounded-full border border-neutral-300 select-none ml-0.5"
          role="group"
          aria-label="Language switcher"
        >
          <button
            type="button"
            onClick={() => setLang('TH')}
            className={`px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
              lang === 'TH'
                ? 'bg-secondary text-white shadow-xs'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
            }`}
          >
            TH
          </button>
          <button
            type="button"
            onClick={() => setLang('EN')}
            className={`px-2 sm:px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
              lang === 'EN'
                ? 'bg-secondary text-white shadow-xs'
                : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;