import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const animationStyles = `
  @keyframes lp-sway {
    0%   { transform: rotate(0deg); }
    25%  { transform: rotate(4deg); }
    50%  { transform: rotate(0deg); }
    75%  { transform: rotate(-4deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes lp-poke {
    0%   { transform: rotate(0deg); }
    8%   { transform: rotate(20deg); }
    20%  { transform: rotate(-14deg); }
    34%  { transform: rotate(10deg); }
    48%  { transform: rotate(-6deg); }
    62%  { transform: rotate(4deg); }
    76%  { transform: rotate(-2deg); }
    90%  { transform: rotate(1deg); }
    100% { transform: rotate(0deg); }
  }

  .lp-tag-pin {
    width: 9px;
    height: 9px;
    border-radius: 9999px;
    margin: 0 auto;
    background: radial-gradient(circle at 35% 30%, #ffffff, #cfcfcf 55%, #8a8a8a 100%);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.35);
  }

  .lp-tag-swing {
    transform-origin: top center;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: lp-sway 4.5s ease-in-out infinite;
    cursor: pointer;
  }

  .lp-tag-swing.lp-poked {
    animation: lp-poke 1.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 1;
  }

  .lp-tag-string {
    width: 3px;
    height: 46px;
    margin-bottom: -9px;
    border-radius: 2px;
    background: repeating-linear-gradient(45deg, #ffffffe6 0 2px, #ffffff80 2px 4px);
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  }

  .lp-tag-card {
    position: relative;
    padding-top: 22px;
  }

  .lp-tag-hole {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: radial-gradient(circle at 35% 30%, #6b7280, #1f2937 70%);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  @keyframes lp-fade-up {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes lp-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes lp-drift-a {
    0%   { transform: translate(-8%, -6%) scale(1); }
    50%  { transform: translate(4%, 6%) scale(1.12); }
    100% { transform: translate(-8%, -6%) scale(1); }
  }

  @keyframes lp-drift-b {
    0%   { transform: translate(6%, 4%) scale(1); }
    50%  { transform: translate(-6%, -8%) scale(1.08); }
    100% { transform: translate(6%, 4%) scale(1); }
  }

  @keyframes lp-orbit {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to   { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes lp-orbit-reverse {
    from { transform: translate(-50%, -50%) rotate(360deg); }
    to   { transform: translate(-50%, -50%) rotate(0deg); }
  }

  @keyframes lp-pulse-glow {
    0%, 100% { box-shadow: 0 4px 4px #00000040, 0 0 0 0 rgba(255, 255, 255, 0.25); }
    50%      { box-shadow: 0 4px 4px #00000040, 0 0 0 14px rgba(255, 255, 255, 0); }
  }

  .lp-blob {
    position: absolute;
    border-radius: 9999px;
    filter: blur(60px);
    pointer-events: none;
  }

  .lp-blob-a {
    width: 520px;
    height: 520px;
    background: rgba(255, 255, 255, 0.14);
    top: -10%;
    left: -8%;
    animation: lp-drift-a 22s ease-in-out infinite;
  }

  .lp-blob-b {
    width: 420px;
    height: 420px;
    background: rgba(255, 255, 255, 0.1);
    bottom: -12%;
    right: -6%;
    animation: lp-drift-b 26s ease-in-out infinite;
  }

  .lp-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 9999px;
    border: 1px dashed rgba(255, 255, 255, 0.18);
    pointer-events: none;
  }

  .lp-ring-outer {
    width: clamp(420px, 48vw, 780px);
    height: clamp(420px, 48vw, 780px);
    animation: lp-orbit 60s linear infinite;
  }

  .lp-ring-inner {
    width: clamp(320px, 36vw, 600px);
    height: clamp(320px, 36vw, 600px);
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.08);
    animation: lp-orbit-reverse 46s linear infinite;
  }

  .lp-enter {
    opacity: 0;
    animation: lp-fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .lp-bg-enter {
    opacity: 0;
    animation: lp-fade-in 1.6s ease-out forwards;
  }

  .lp-icon {
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
  }

  .lp-icon:hover {
    transform: translateY(-4px) scale(1.12);
    opacity: 1 !important;
  }

  .lp-explore-btn {
    position: relative;
    animation: lp-pulse-glow 3.2s ease-in-out infinite;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .lp-explore-btn:hover {
    transform: translateY(-3px);
    background: #ffffff33;
  }

  .lp-explore-btn::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .lp-explore-btn:hover::after {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .lp-blob-a, .lp-blob-b, .lp-ring-outer, .lp-ring-inner, .lp-explore-btn {
      animation: none !important;
    }
    .lp-enter, .lp-bg-enter {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`

function Landing() {
    const navigate = useNavigate()
    const [poked, setPoked] = useState(false)

    const handlePoke = () => {
        if (poked) return
        setPoked(true)
        setTimeout(() => setPoked(false), 1700)
    }

    return (
        <main className="relative w-full h-screen bg-primary overflow-hidden flex flex-col items-center justify-center">
            <style>{animationStyles}</style>

            {/* Ambient background: drifting glow + orbiting rings, subtle and continuous */}
            <div className="lp-blob lp-blob-a lp-bg-enter" />
            <div className="lp-blob lp-blob-b lp-bg-enter" style={{ animationDelay: '0.3s' }} />
            <div className="lp-ring lp-ring-outer lp-bg-enter" style={{ animationDelay: '0.5s' }} />
            <div className="lp-ring lp-ring-inner lp-bg-enter" style={{ animationDelay: '0.5s' }} />

            {/* Fine dotted grid for texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.15]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* ชื่อ - hanging tag, swings on load and on poke */}
            <div className="lp-enter mb-[50px]" style={{ animationDelay: '0.1s' }}>
                <div className="lp-tag-pin" />
                <div
                    className={`lp-tag-swing ${poked ? 'lp-poked' : ''}`}
                    onClick={handlePoke}
                    title="Give it a poke"
                >
                    <div className="lp-tag-string" />
                    <div className="lp-tag-card flex items-center justify-center px-[50px] py-3 bg-white rounded-[10px] shadow-[0px_4px_4px_#00000040]">
                        <span className="lp-tag-hole" />
                        <h1 className="font-poppins text-h1 font-semibold text-secondary whitespace-nowrap">
                            Sineenath Rueangsri
                        </h1>
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="flex flex-col items-center gap-2 relative z-10">
                <p
                    className="lp-enter font-seaweed text-seaweed1 text-white text-center"
                    style={{ animationDelay: '0.28s' }}
                >
                    Welcome to my
                </p>
                <p
                    className="lp-enter font-sekuya text-sekuya2 text-white [text-shadow:0px_4px_4px_#00000040]"
                    style={{ animationDelay: '0.44s' }}
                >
                    Portfolio
                </p>
                <p
                    className="lp-enter font-rubik text-rubik1 text-white text-center [text-shadow:0px_4px_4px_#00000040] whitespace-nowrap"
                    style={{ animationDelay: '0.6s' }}
                >
                    WEBSITE
                </p>
            </div>

            {/* Social Icons */}
            <div className="lp-enter flex items-center gap-[clamp(50px,3vw,50px)] mt-[20px]" style={{ animationDelay: '0.76s' }}>

                {/* Globe */}
                <div className="lp-icon w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </div>

                {/* Code */}
                <div className="lp-icon w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </div>

                {/* User Group */}
                <div className="lp-icon w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                </div>

            </div>

            {/* Explore Button */}
            <div className="lp-enter absolute bottom-[100px] right-[100px]" style={{ animationDelay: '0.92s' }}>
                <button
                    onClick={() => navigate('/home')}
                    className="lp-explore-btn px-[50px] py-5 bg-[#ffffff1a] rounded-[50px] border-2 border-white text-white font-poppins text-h1 font-semibold backdrop-blur-sm shadow-[0px_4px_4px_#00000040]"
                >
                    Explore Journey
                </button>
            </div>
        </main>
    )
}

export default Landing
