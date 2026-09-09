import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../BackToTop";
import { useLanguage } from "../../context/LanguageContext";

const TEMPLATE_TEXT = {
  EN: {
    home: 'Home',
    parentCategory: 'Project',
    projectDuration: 'Project duration:',
    overview: 'Project overview',
    myRole: 'My Role',
    keyLearnings: 'Key learnings',
    tools: 'Tools',
    ctaBtn: 'Contact to work together',
    categories: {
      internship: 'Internship Experience',
      university: 'University Project',
      academic: 'Academic competition',
      'case-study': 'Case Study',
    },
  },
  TH: {
    home: 'หน้าแรก',
    parentCategory: 'โปรเจกต์',
    projectDuration: 'ระยะเวลา:',
    overview: 'ภาพรวมโปรเจกต์',
    myRole: 'บทบาทของฉัน',
    keyLearnings: 'สิ่งที่ได้เรียนรู้',
    tools: 'เครื่องมือ',
    ctaBtn: 'ติดต่อเพื่อร่วมงานกัน',
    categories: {
      internship: 'ประสบการณ์ฝึกงาน',
      university: 'โปรเจกต์มหาวิทยาลัย',
      academic: 'การแข่งขันวิชาการ',
      'case-study': 'กรณีศึกษา',
    },
  },
};

// ─── Social Media Icons (Pixel-perfect inline SVGs matching the design) ───
const GmailIcon = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5 hover:scale-110 transition-transform">
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-0.5,4.75L45,40V16.2z" />
    <path fill="#1e88e5" d="M3,16.2l5,2.75l0.5,4.75L3,40V16.2z" />
    <path fill="#e53935" d="M45,16.2L24,31.75L3,16.2v-5.4c0-2.5,2.7-4,4.9-2.7L24,18l16.1-9.9c2.2-1.3,4.9,0.2,4.9,2.7V16.2z" />
    <path fill="#c62828" d="M43,8.1L24,20L5,8.1C4.4,7.7,3.7,7.6,3,7.7v3.1l21,15.5l21-15.5V7.7C44.3,7.6,43.6,7.7,43,8.1z" />
    <path fill="#fbc02d" d="M40,23.7V40c0,1.1-0.9,2-2,2H10c-1.1,0-2-0.9-2-2V23.7l16,11.8L40,23.7z" />
  </svg>
);

const LineIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#06C755] flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
    <span className="text-white text-[7.5px] font-bold tracking-tighter leading-none">LINE</span>
  </div>
);

const LinkedinIcon = () => (
  <div className="w-5 h-5 rounded-xs bg-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  </div>
);

const DiscordIcon = () => (
  <div className="w-5 h-5 rounded-full bg-[#5865F2] flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.893a.076.076 0 0 0-.041.106c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.028z" />
    </svg>
  </div>
);

const GithubIcon = () => (
  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform shadow-xs">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  </div>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.587v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.587v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.491 0 4.517 2.014 4.517 4.49S10.663 24 8.172 24zm0-7.509c-1.666 0-3.044 1.355-3.044 3.019s1.378 3.019 3.044 3.019c1.667 0 3.045-1.355 3.045-3.019s-1.378-3.019-3.045-3.019zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z" />
  </svg>
);

const SocialIconsRow = () => (
  <div className="flex items-center gap-3">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sineenathrueangsri@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Gmail"
    >
      <GmailIcon />
    </a>
    <a href="#" aria-label="LINE">
      <LineIcon />
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <LinkedinIcon />
    </a>
    <a href="#" aria-label="Discord">
      <DiscordIcon />
    </a>
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <GithubIcon />
    </a>
  </div>
);

// ─── Section Component with Left Black Bar (matching the design) ───
const Section = ({ title, children }) => (
  <div className="mb-7">
    <div className="border-l-[3px] border-black pl-3 mb-2.5">
      <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-poppins tracking-tight">
        {title}
      </h2>
    </div>
    <div className="pl-3.5">{children}</div>
  </div>
);

// ─── Interactive Figma Design Workspace (Pan, Zoom, Drag, Reset, Fullscreen) ───
const FigmaDesignWorkspace = ({ figmaEmbedUrl = "", designImages = [] }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState(figmaEmbedUrl ? "embed" : "canvas");
  const containerRef = useRef(null);

  // Zoom helpers
  const handleZoomIn = () => setScale((s) => Math.min(3, +(s + 0.2).toFixed(1)));
  const handleZoomOut = () => setScale((s) => Math.max(0.4, +(s - 0.2).toFixed(1)));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (activeTab === "embed") return;
    // Only drag on left click
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || activeTab === "embed") return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Wheel zoom
  const handleWheel = (e) => {
    if (activeTab === "embed") return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.min(3, Math.max(0.4, +(s + delta).toFixed(2))));
  };

  // Touch drag for mobile
  const handleTouchStart = (e) => {
    if (activeTab === "embed" || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || activeTab === "embed" || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-[28px] overflow-hidden border border-neutral-300 shadow-inner select-none transition-all duration-300 ${isFullscreen ? "h-screen bg-[#2c2c2c]" : "aspect-[16/10] sm:aspect-[16/9] min-h-[420px] max-h-[640px] bg-[#D4D4D4]"
        }`}
    >
      {/* ─── Top Control Toolbar ─── */}
      <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        {/* Workspace Badge / Status */}
        <div className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-sm text-xs font-medium text-neutral-800 font-poppins">
          <span className="text-[#F24E1E]">
            <FigmaIcon />
          </span>
          <span className="font-semibold">Workspace for Figma design</span>
          {figmaEmbedUrl && (
            <div className="flex ml-1.5 border-l border-neutral-200 pl-2 gap-1 text-[11px]">
              <button
                type="button"
                onClick={() => setActiveTab("canvas")}
                className={`px-2 py-0.5 rounded-full transition-colors ${activeTab === "canvas" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-black"
                  }`}
              >
                Canvas
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("embed")}
                className={`px-2 py-0.5 rounded-full transition-colors ${activeTab === "embed" ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-black"
                  }`}
              >
                Live Embed
              </button>
            </div>
          )}
        </div>

        {/* Pan & Zoom Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-sm text-xs text-neutral-800 font-poppins">
          <button
            type="button"
            onClick={handleZoomOut}
            title="Zoom out"
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-100 active:scale-95 transition-all text-neutral-700 font-bold"
          >
            −
          </button>
          <button
            type="button"
            onClick={handleReset}
            title="Click to reset zoom"
            className="px-2 py-0.5 min-w-[50px] text-center font-semibold text-neutral-700 hover:text-black transition-colors"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            type="button"
            onClick={handleZoomIn}
            title="Zoom in"
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-100 active:scale-95 transition-all text-neutral-700 font-bold"
          >
            +
          </button>

          <div className="h-4 w-[1px] bg-neutral-200 mx-1" />

          <button
            type="button"
            onClick={handleReset}
            title="Reset position and zoom"
            className="px-2 py-0.5 text-[11px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Fit
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-neutral-100 active:scale-95 transition-all text-neutral-700"
          >
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ─── Bottom-Left Helper Hint ─── */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs text-[11px] text-white/80 font-poppins">
        <span>✋ Drag to pan left / right</span>
        <span>•</span>
        <span>🔍 Scroll or click + / − to zoom</span>
      </div>

      {/* ─── Main Workspace Canvas ─── */}
      {activeTab === "embed" && figmaEmbedUrl ? (
        <iframe
          src={figmaEmbedUrl}
          title="Figma Live Embed"
          className="w-full h-full border-0"
          allowFullScreen
        />
      ) : (
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`w-full h-full flex items-center justify-center overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          style={{
            backgroundImage: "radial-gradient(#b0b0b0 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Transformable Canvas Content */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.15s ease-out",
            }}
            className="flex items-center gap-8 p-10 select-none pointer-events-auto"
          >
            {/* If user provided custom design images */}
            {designImages.length > 0 ? (
              designImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200"
                >
                  <div className="px-4 py-2 bg-neutral-100 border-b border-neutral-200 text-xs text-neutral-500 font-mono">
                    # Frame {idx + 1}
                  </div>
                  <img
                    src={imgSrc}
                    alt={`Figma Frame ${idx + 1}`}
                    className="max-h-[500px] w-auto object-contain pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))
            ) : (
              /* Default Figma Artboards Showcase (Interactive Mockup Frames) */
              <div className="flex items-start gap-8">
                {/* Artboard Frame 1: Mobile UI Flow */}
                <div className="w-[280px] bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200/80 flex-shrink-0">
                  <div className="px-4 py-2 bg-[#F6F7F9] border-b border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span># 01 - Mobile App Home</span>
                    <span className="text-[10px] text-neutral-400">375 x 812</span>
                  </div>
                  <div className="p-4 bg-neutral-50">
                    <div className="w-full h-12 bg-[#FFF5CF] rounded-xl mb-3 flex items-center px-3 border border-[#E2C779]/40">
                      <div className="w-7 h-7 rounded-full bg-[#610200] text-white flex items-center justify-center text-[10px] font-bold">
                        SR
                      </div>
                      <div className="ml-2.5">
                        <div className="w-20 h-2.5 bg-neutral-800 rounded-sm mb-1" />
                        <div className="w-12 h-2 bg-neutral-400 rounded-sm" />
                      </div>
                    </div>
                    <div className="w-full h-28 bg-[#820000] rounded-2xl mb-3 p-3 text-white flex flex-col justify-end shadow-xs">
                      <div className="w-16 h-3 bg-white/40 rounded-sm mb-1.5" />
                      <div className="w-32 h-4 bg-white rounded-sm mb-1" />
                      <div className="w-24 h-2 bg-white/60 rounded-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="h-20 bg-white rounded-xl border border-neutral-200 p-2.5 flex flex-col justify-between shadow-xs">
                        <div className="w-6 h-6 rounded-lg bg-red-100" />
                        <div className="w-14 h-2 bg-neutral-600 rounded-sm" />
                      </div>
                      <div className="h-20 bg-white rounded-xl border border-neutral-200 p-2.5 flex flex-col justify-between shadow-xs">
                        <div className="w-6 h-6 rounded-lg bg-amber-100" />
                        <div className="w-16 h-2 bg-neutral-600 rounded-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 bg-white rounded-xl border border-neutral-200 flex items-center px-3 justify-between">
                        <div className="w-24 h-2.5 bg-neutral-700 rounded-sm" />
                        <div className="w-10 h-2 bg-neutral-300 rounded-sm" />
                      </div>
                      <div className="h-10 bg-white rounded-xl border border-neutral-200 flex items-center px-3 justify-between">
                        <div className="w-28 h-2.5 bg-neutral-700 rounded-sm" />
                        <div className="w-8 h-2 bg-neutral-300 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artboard Frame 2: Web Dashboard Layout */}
                <div className="w-[480px] bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200/80 flex-shrink-0">
                  <div className="px-4 py-2 bg-[#F6F7F9] border-b border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span># 02 - Responsive Web Layout</span>
                    <span className="text-[10px] text-neutral-400">1440 x 900</span>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="w-32 h-3 bg-neutral-300 rounded-full ml-3" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-12 h-3 bg-neutral-200 rounded-sm" />
                        <div className="w-12 h-3 bg-neutral-200 rounded-sm" />
                        <div className="w-16 h-5 bg-[#610200] rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="h-24 rounded-xl bg-gradient-to-br from-red-50 to-amber-50 border border-red-200/60 p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-red-900">Conversion Rate</span>
                        <div className="text-xl font-bold text-red-950 font-poppins">68.4%</div>
                        <div className="w-16 h-1.5 bg-red-200 rounded-full" />
                      </div>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-neutral-700">Active Users</span>
                        <div className="text-xl font-bold text-neutral-900 font-poppins">12,450</div>
                        <div className="w-20 h-1.5 bg-neutral-300 rounded-full" />
                      </div>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-[#FFF8E6] to-[#FFF0C2] border border-amber-300/60 p-3 flex flex-col justify-between">
                        <span className="text-[10px] font-bold text-amber-900">Satisfaction</span>
                        <div className="text-xl font-bold text-amber-950 font-poppins">4.9 / 5.0</div>
                        <div className="w-14 h-1.5 bg-amber-300 rounded-full" />
                      </div>
                    </div>
                    <div className="h-32 bg-neutral-50 rounded-xl border border-dashed border-neutral-300 flex flex-col items-center justify-center text-center p-4">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 mb-2 flex items-center justify-center text-neutral-500 font-bold text-xs">
                        UI
                      </div>
                      <div className="text-xs font-semibold text-neutral-700 font-poppins">
                        Interactive Figma Design Canvas
                      </div>
                      <div className="text-[11px] text-neutral-400 font-poppins">
                        Zoom in, drag, or slide left and right to inspect UI details
                      </div>
                    </div>
                  </div>
                </div>

                {/* Artboard Frame 3: Design System Components */}
                <div className="w-[300px] bg-white rounded-3xl shadow-xl overflow-hidden border border-neutral-200/80 flex-shrink-0">
                  <div className="px-4 py-2 bg-[#F6F7F9] border-b border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span># 03 - Design System</span>
                    <span className="text-[10px] text-neutral-400">Tokens</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider">Color Palette</div>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-lg bg-[#610200] shadow-xs" title="Primary #610200" />
                      <div className="w-10 h-10 rounded-lg bg-[#820000] shadow-xs" title="Wine #820000" />
                      <div className="w-10 h-10 rounded-lg bg-[#FFF5CF] border border-neutral-200 shadow-xs" title="Cream #FFF5CF" />
                      <div className="w-10 h-10 rounded-lg bg-[#191411] shadow-xs" title="Secondary #191411" />
                      <div className="w-10 h-10 rounded-lg bg-neutral-300 shadow-xs" title="Grey #D4D4D4" />
                    </div>
                    <div className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mt-2">Buttons & States</div>
                    <div className="space-y-2">
                      <div className="w-full py-2 bg-[#610200] text-white text-[11px] font-semibold text-center rounded-full shadow-xs">
                        Primary Action
                      </div>
                      <div className="w-full py-2 bg-[#FFF5CF] text-[#610200] text-[11px] font-bold text-center rounded-full border border-[#E3C985]">
                        Contact to work together
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Main ProjectDetailTemplate Component ───
export default function ProjectDetailTemplate({
  projectName = "NAME PROJECT",
  categoryName = "XXXX Project",
  parentCategory = "Project",
  categoryKey,
  role = "Role",
  subjectName = "Subject/Hackathon name",
  duration = "Month-day-year",
  overview = "xxxxxxxxxx",
  myRoleTitle = "Role",
  myRoleDescription = "xxxxxxxxxxxxxxxxxxxxxxxx",
  keyLearnings = "xxxxxxxxxxxxxxxxxx",
  tools = ["xxxxxx"],
  figmaEmbedUrl = "",
  designImages = [],
  onContactClick,
}) {
  const targetCategoryKey = (() => {
    if (categoryKey) return categoryKey;
    if (!categoryName) return 'internship';
    const lower = categoryName.toLowerCase();
    if (lower.includes('intern')) return 'internship';
    if (lower.includes('univ')) return 'university';
    if (lower.includes('hack') || lower.includes('acad')) return 'academic';
    if (lower.includes('case') || lower.includes('study')) return 'case-study';
    return 'internship';
  })();

  const { lang, setLang } = useLanguage();
  const tl = TEMPLATE_TEXT[lang] || TEMPLATE_TEXT.EN;

  const displayParentCategory = tl.parentCategory || parentCategory;
  const displayCategoryName = tl.categories?.[targetCategoryKey] || categoryName;

  const handleScrollToContact = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/home#contact";
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-poppins antialiased">
      {/* ─── Breadcrumb Navigation ─── */}
      <div className="border-b border-neutral-200 px-6 sm:px-12 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto gap-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-poppins flex-wrap">
            <Link
              to="/home"
              className="text-neutral-600 hover:text-black transition-colors"
            >
              {tl.home}
            </Link>
            <span className="text-neutral-400 font-normal">›</span>
            <Link
              to="/home?category=all#projects"
              state={{ category: "all" }}
              onClick={() => {
                const elem = document.getElementById("projects");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-neutral-600 hover:text-black transition-colors"
            >
              {displayParentCategory}
            </Link>
            <span className="text-neutral-400 font-normal">›</span>
            <Link
              to={`/home?category=${targetCategoryKey}#projects`}
              state={{ category: targetCategoryKey }}
              onClick={() => {
                const elem = document.getElementById("projects");
                if (elem) elem.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-neutral-600 hover:text-black cursor-pointer transition-colors"
            >
              {displayCategoryName}
            </Link>
            <span className="text-neutral-400 font-normal">›</span>
            <span className="font-bold text-neutral-900">{projectName}</span>
          </nav>

          {/* Language Switcher */}
          <div 
            className="flex items-center bg-neutral-100 p-0.5 rounded-full border border-neutral-300 select-none flex-shrink-0"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang && setLang('TH')}
              className={`px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                lang === 'TH'
                  ? 'bg-secondary text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
              }`}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLang && setLang('EN')}
              className={`px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                lang === 'EN'
                  ? 'bg-secondary text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black hover:bg-neutral-200/60'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8 sm:py-12">
        {/* ─── Header: Name Project & Role (Matching Exact Screenshot) ─── */}
        <div className="mb-8">
          {/* Project Title: Font Sekuya (from index.css) */}
          <h1 className="font-sekuya text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-black leading-tight mb-1">
            {projectName}
          </h1>

          {/* Role: Font Rubik Doodle Shadow (from index.css & Google Fonts) */}
          <div className="font-rubik text-4xl sm:text-5xl md:text-6xl text-neutral-900 leading-tight mb-3">
            {role}
          </div>

          {/* Project Meta Details */}
          <div className="text-xs sm:text-sm text-neutral-700 font-poppins leading-relaxed space-y-0.5">
            <p>{subjectName}</p>
            <p>{tl.projectDuration} {duration}</p>
          </div>
        </div>

        {/* ─── Gray Box: Interactive Figma Design Workspace ─── */}
        <div className="mb-12">
          <FigmaDesignWorkspace
            figmaEmbedUrl={figmaEmbedUrl}
            designImages={designImages}
          />
        </div>

        {/* ─── Content Sections (Left Black Border Bar) ─── */}
        <div className="max-w-3xl space-y-6">
          <Section title={tl.overview}>
            <p className="text-xs sm:text-sm text-neutral-800 font-poppins leading-relaxed whitespace-pre-line">
              {overview}
            </p>
          </Section>

          <Section title={tl.myRole}>
            <p className="font-bold text-xs sm:text-sm text-neutral-900 font-poppins mb-1">
              {myRoleTitle}
            </p>
            <p className="text-xs sm:text-sm text-neutral-800 font-poppins leading-relaxed whitespace-pre-line">
              {myRoleDescription}
            </p>
          </Section>

          <Section title={tl.keyLearnings}>
            <p className="text-xs sm:text-sm text-neutral-800 font-poppins leading-relaxed whitespace-pre-line">
              {keyLearnings}
            </p>
          </Section>

          <Section title={tl.tools}>
            <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-800 font-poppins space-y-1">
              {Array.isArray(tools) ? (
                tools.map((tool, i) => <li key={i}>{tool}</li>)
              ) : (
                <li>{tools}</li>
              )}
            </ul>
          </Section>
        </div>

        {/* ─── Footer / CTA (Bottom Right: Button & Colored Social Icons) ─── */}
        <div className="flex flex-col items-end gap-4 mt-16 sm:mt-24">
          <button
            type="button"
            onClick={handleScrollToContact}
            className="px-8 py-3 rounded-full bg-[#FDEFC9] text-[#610200] font-poppins font-bold text-sm border border-[#E3C985] shadow-xs hover:bg-[#fae7b0] active:scale-98 transition-all cursor-pointer"
          >
            {tl.ctaBtn}
          </button>

          {/* 5 Social Media Icons matching the screenshot layout */}
          <div className="flex justify-end pt-1">
            <SocialIconsRow />
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
