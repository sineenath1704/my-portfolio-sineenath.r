import React from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const TEXT = {
  EN: {
    portfolio: 'Portfolio',
    role: 'DESIGNER',
    resume: 'Resume',
    cta: "Let's work together",
  },
  TH: {
    portfolio: 'Portfolio',
    role: 'DESIGNER',
    resume: 'เรซูเม่',
    cta: 'ร่วมงานกับฉัน',
  },
};

function Home() {
  const { lang } = useLanguage();
  const t = TEXT[lang] || TEXT.EN;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 pb-12 select-none bg-[#FCFAFA]"
    >
      {/* ================= BACKGROUND BLOCKS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* ดวงที่ 1: มุมซ้ายบน (สีแดงเข้มดวงเล็ก) */}
        <div className="absolute -top-16 -left-16 w-90 h-100 bg-[#820000] rounded-full filter blur-[70px] opacity-95" />

        {/* ดวงที่ 2: มุมขวาบน (สีแดงเข้มดวงใหญ่และกว้างกว่า) */}
        <div className="absolute -top-50 -right-50 w-[500px] h-[700px] bg-[#820000] rounded-full filter blur-[80px] opacity-95" />

        {/* ดวงที่ 3: ตรงกลางด้านล่าง (ฐานสีแดงสว่างและแผ่ขึ้นด้านบน) */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1300px] h-[550px] bg-[#820000] rounded-full filter blur-[150px] opacity-100" />
      </div>
      {/* ========================================================= */}

      {/* ข้อความด้านซ้าย */}
      <div className="z-20 flex flex-col justify-center text-white space-y-0 max-w-xl md:w-1/2 pl-4">
        <span className="font-seaweed text-seaweed1 text-white mb-1 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          {t.portfolio}
        </span>
        <h1 className="font-sekuya text-sekuya1 uppercase leading-none text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          UX
        </h1>
        <h1 className="font-sekuya text-sekuya1 uppercase leading-none text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] -mt-4 flex inline-flex items-center gap-x-3">
          <span className="opacity-80">&</span>
          <span>UI</span>
        </h1>
        <h2 className="font-rubik text-rubik1 text-white uppercase tracking-widest mt-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          {t.role}
        </h2>
      </div>

      {/* ตรงกลาง: รูปภาพ */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-full max-w-[550px] h-[50vh] sm:h-[70vh] md:h-auto md:max-h-[90vh] z-10 flex items-end justify-center pointer-events-none md:pointer-events-auto">
        <img
          src="/Picture/PicHome.png"
          alt="UX/UI Designer Portrait"
          className="w-full h-full object-contain object-bottom filter"
          style={{
            filter: 'drop-shadow(0 15px 25px rgba(74,4,4,0.25))'
          }}
        />
      </div>

      {/* ฝั่งขวา: ปุ่ม Action */}
      <div className="absolute bottom-45 right-20 md:right-16 z-30 flex flex-col items-end space-y-6">
        <Link
          to="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="font-poppins text-h1 font-semibold text-white">
            {t.resume}
          </span>
          <div className="h-6 w-[1.5px] bg-white/50" />
        </Link>

        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-7 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full font-poppins text-h1 font-semibold text-white hover:bg-white hover:text-primary transition-all duration-300"
        >
          {t.cta}
        </button>
      </div>
    </section>
  )
}

export default Home;