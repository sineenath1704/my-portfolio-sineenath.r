import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    // จัดให้เมนูอยู่กึ่งกลางด้านบน และลอยเหนือเนื้อหา (Fixed)
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white px-3 py-2 rounded-full shadow-lg flex items-center justify-center min-w-[320px] md:min-w-[450px] border-1 border-black">
      <nav className="flex items-center justify-between w-full text-sm font-medium text-neutral-800 px-2">
        <a 
          href="#home" 
          onClick={() => setActiveSection('home')}
          className={getLinkClass('home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={() => setActiveSection('about')}
          className={getLinkClass('about')}
        >
          About Me
        </a>
        <a 
          href="#projects" 
          onClick={() => setActiveSection('projects')}
          className={getLinkClass('projects')}
        >
          Project
        </a>
        
        {/* เส้นแบ่งแนวตั้ง */}
        <div className="h-5 w-[1px] bg-neutral-300 mx-2" />
        
        <a 
          href="#contact" 
          onClick={() => setActiveSection('contact')}
          className={getLinkClass('contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;