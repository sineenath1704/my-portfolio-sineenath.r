import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button once user scrolls down past 300px from Home
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const homeElem = document.getElementById('home');
    if (homeElem) {
      homeElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`
        group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40
        w-12 h-12 rounded-full
        bg-[#191411] text-white
        flex items-center justify-center
        shadow-[0_4px_16px_rgba(0,0,0,0.35)]
        border border-neutral-700/60
        hover:bg-primary hover:border-primary/80
        hover:shadow-[0_6px_22px_rgba(97,2,0,0.45)]
        hover:scale-110 active:scale-95
        transition-all duration-300 ease-out cursor-pointer
        ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }
      `}
    >
      <svg
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

export default BackToTop;
