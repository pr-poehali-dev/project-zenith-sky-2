export default function SplineScene() {
  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-end pr-8 md:pr-24"
      style={{ background: "transparent" }}
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96 select-none">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
        >
          {/* Branch */}
          <rect x="30" y="155" width="340" height="22" rx="11" fill="#8B6914" />
          <rect x="30" y="155" width="340" height="10" rx="5" fill="#A07820" />

          {/* Body */}
          <ellipse cx="200" cy="230" rx="68" ry="75" fill="#C8B89A" />
          <ellipse cx="200" cy="225" rx="60" ry="68" fill="#D4C4A8" />

          {/* Belly */}
          <ellipse cx="200" cy="240" rx="38" ry="45" fill="#E8DCCC" />

          {/* Left arm (hanging) */}
          <path
            d="M148 175 C130 170 115 175 108 185 C100 195 105 210 115 215 C125 220 138 210 145 200 C150 190 148 180 148 175Z"
            fill="#C8B89A"
          />
          {/* Left claw */}
          <path d="M105 218 C100 225 97 230 103 232" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
          <path d="M110 222 C107 230 106 236 112 237" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
          <path d="M116 224 C115 232 115 238 121 238" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />

          {/* Right arm (hanging) */}
          <path
            d="M252 175 C270 170 285 175 292 185 C300 195 295 210 285 215 C275 220 262 210 255 200 C250 190 252 180 252 175Z"
            fill="#C8B89A"
          />
          {/* Right claw */}
          <path d="M295 218 C300 225 303 230 297 232" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
          <path d="M290 222 C293 230 294 236 288 237" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />
          <path d="M284 224 C285 232 285 238 279 238" stroke="#8B6914" strokeWidth="3" strokeLinecap="round" />

          {/* Left leg */}
          <ellipse cx="173" cy="298" rx="22" ry="30" fill="#C8B89A" transform="rotate(-10 173 298)" />
          <ellipse cx="168" cy="324" rx="18" ry="12" fill="#B8A88A" />
          {/* Left foot claws */}
          <path d="M158 330 C154 337 152 342 158 343" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M167 333 C165 340 164 345 170 345" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M176 330 C177 337 178 342 172 343" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right leg */}
          <ellipse cx="227" cy="298" rx="22" ry="30" fill="#C8B89A" transform="rotate(10 227 298)" />
          <ellipse cx="232" cy="324" rx="18" ry="12" fill="#B8A88A" />
          {/* Right foot claws */}
          <path d="M222 330 C218 337 216 342 222 343" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M231 333 C229 340 228 345 234 345" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M240 330 C241 337 242 342 236 343" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" />

          {/* Head */}
          <ellipse cx="200" cy="158" rx="52" ry="48" fill="#D4C4A8" />
          <ellipse cx="200" cy="158" rx="44" ry="40" fill="#E0D0B8" />

          {/* Face mask */}
          <ellipse cx="200" cy="165" rx="30" ry="25" fill="#C8B898" />

          {/* Eyes (sleepy) */}
          <ellipse cx="185" cy="152" rx="10" ry="10" fill="white" />
          <ellipse cx="215" cy="152" rx="10" ry="10" fill="white" />
          {/* Sleepy eyelids */}
          <path d="M175 152 Q185 146 195 152" fill="#C8B898" />
          <path d="M205 152 Q215 146 225 152" fill="#C8B898" />
          {/* Pupils */}
          <ellipse cx="185" cy="155" rx="5" ry="4" fill="#5C4030" />
          <ellipse cx="215" cy="155" rx="5" ry="4" fill="#5C4030" />
          {/* Eye shine */}
          <circle cx="187" cy="153" r="1.5" fill="white" />
          <circle cx="217" cy="153" r="1.5" fill="white" />

          {/* Nose */}
          <ellipse cx="200" cy="165" rx="6" ry="4" fill="#A09080" />

          {/* Smile */}
          <path d="M190 175 Q200 182 210 175" stroke="#A09080" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Ears */}
          <ellipse cx="155" cy="128" rx="18" ry="16" fill="#C8B89A" />
          <ellipse cx="155" cy="128" rx="11" ry="10" fill="#E8D4C0" />
          <ellipse cx="245" cy="128" rx="18" ry="16" fill="#C8B89A" />
          <ellipse cx="245" cy="128" rx="11" ry="10" fill="#E8D4C0" />

          {/* Fur texture lines */}
          <path d="M200 110 Q197 100 200 92" stroke="#C4B095" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M210 112 Q210 102 214 95" stroke="#C4B095" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M190 112 Q188 102 186 95" stroke="#C4B095" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* ZZZ sleep bubbles */}
          <text x="240" y="120" fontSize="18" fill="#9B8BCD" fontWeight="bold" opacity="0.8"
            style={{ animation: "zzz 2s ease-in-out infinite" }}>Z</text>
          <text x="258" y="100" fontSize="14" fill="#9B8BCD" fontWeight="bold" opacity="0.6"
            style={{ animationDelay: "0.5s" }}>Z</text>
          <text x="272" y="84" fontSize="10" fill="#9B8BCD" fontWeight="bold" opacity="0.4"
            style={{ animationDelay: "1s" }}>Z</text>
        </svg>

        {/* Floating animation wrapper */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes zzz {
            0%, 100% { opacity: 0.8; transform: translateY(0) scale(1); }
            50% { opacity: 0.3; transform: translateY(-8px) scale(0.9); }
          }
          .sloth-float {
            animation: float 4s ease-in-out infinite;
          }
          .zzz-1 { animation: zzz 2s ease-in-out infinite; }
          .zzz-2 { animation: zzz 2s ease-in-out infinite 0.5s; }
          .zzz-3 { animation: zzz 2s ease-in-out infinite 1s; }
        `}</style>
      </div>
    </div>
  )
}
