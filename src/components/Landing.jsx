import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()

    return (
        <main className="relative w-full h-screen bg-primary overflow-hidden flex flex-col items-center justify-center">

            {/* ชื่อ */}
            <div className="flex items-center justify-center px-[50px] py-5 bg-white rounded-[50px] shadow-[0px_4px_4px_#00000040] mb-[50px]">
                <h1 className="font-poppins text-h1 font-semibold text-secondary whitespace-nowrap">
                    Sineenath Rueangsri
                </h1>
            </div>

            {/* Title */}
            <div className="flex flex-col items-center gap-2">
                <p className="font-seaweed text-seaweed1 text-white text-center">
                    Welcome to my
                </p>
                <p className="font-sekuya text-sekuya2 text-white [text-shadow:0px_4px_4px_#00000040]">
                    Portfolio
                </p>
                <p className="font-rubik text-rubik1 text-white text-center [text-shadow:0px_4px_4px_#00000040] whitespace-nowrap">
                    WEBSITE
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-[clamp(50px,3vw,50px)] mt-[20px]">

                {/* Globe */}
                <div className="w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </div>

                {/* Code */}
                <div className="w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </div>

                {/* User Group */}
                <div className="w-[clamp(16px,2vw,30px)] h-[clamp(16px,2vw,30px)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                </div>

            </div>

            {/* Explore Button */}
            <div className="absolute bottom-[100px] right-[100px]">
                <button
                    onClick={() => navigate('/home')}
                    className="px-[50px] py-5 bg-[#ffffff1a] rounded-[50px] border-2 border-white text-white font-poppins text-h1 font-semibold backdrop-blur-sm shadow-[0px_4px_4px_#00000040]"
                >
                    Explore Journey
                </button>
            </div>
        </main>
    )
}

export default Landing