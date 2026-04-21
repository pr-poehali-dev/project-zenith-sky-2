export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-end pr-4 md:pr-16">
      <style>{`
        @keyframes sloth-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .sloth-float { animation: sloth-float 4s ease-in-out infinite; }
      `}</style>

      <div className="sloth-float w-64 h-72 md:w-[420px] md:h-[460px] select-none">
        <svg viewBox="0 0 420 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

          {/* === DECORATIVE ARCS === */}
          <path d="M145 380 Q55 220 145 70" stroke="#8DBFBF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M275 380 Q365 220 275 70" stroke="#8DBFBF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          {/* Leaves LEFT */}
          <ellipse cx="80" cy="300" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-25 80 300)"/>
          <ellipse cx="62" cy="250" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-45 62 250)"/>
          <ellipse cx="60" cy="195" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-65 60 195)"/>
          <ellipse cx="78" cy="140" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-85 78 140)"/>
          <ellipse cx="112" cy="95" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-105 112 95)"/>
          <ellipse cx="155" cy="62" rx="9" ry="17" fill="#8DBFBF" transform="rotate(-120 155 62)"/>

          {/* Leaves RIGHT */}
          <ellipse cx="340" cy="300" rx="9" ry="17" fill="#8DBFBF" transform="rotate(25 340 300)"/>
          <ellipse cx="358" cy="250" rx="9" ry="17" fill="#8DBFBF" transform="rotate(45 358 250)"/>
          <ellipse cx="360" cy="195" rx="9" ry="17" fill="#8DBFBF" transform="rotate(65 360 195)"/>
          <ellipse cx="342" cy="140" rx="9" ry="17" fill="#8DBFBF" transform="rotate(85 342 140)"/>
          <ellipse cx="308" cy="95" rx="9" ry="17" fill="#8DBFBF" transform="rotate(105 308 95)"/>
          <ellipse cx="265" cy="62" rx="9" ry="17" fill="#8DBFBF" transform="rotate(120 265 62)"/>

          {/* Heart top center */}
          <path d="M210 28 C210 28 204 19 197 22 C190 25 190 34 197 40 L210 53 L223 40 C230 34 230 25 223 22 C216 19 210 28 210 28Z" fill="#8DBFBF"/>

          {/* === DESK === */}
          <rect x="75" y="382" width="270" height="15" rx="7.5" fill="#3D1A0A"/>

          {/* === LAPTOP === */}
          {/* Laptop base/body */}
          <rect x="108" y="305" width="204" height="80" rx="10" fill="#F2C0B8"/>
          <rect x="113" y="310" width="194" height="70" rx="7" fill="#F7CFCA"/>
          {/* Laptop bottom edge */}
          <rect x="104" y="378" width="212" height="10" rx="5" fill="#E8AFA6"/>

          {/* === SLOTH BODY === */}
          <ellipse cx="210" cy="270" rx="98" ry="115" fill="#3D1A0A"/>
          {/* Chest/belly lighter area */}
          <ellipse cx="210" cy="278" rx="62" ry="78" fill="#F5EDE0"/>

          {/* === HEAD === */}
          <ellipse cx="210" cy="158" rx="85" ry="88" fill="#3D1A0A"/>

          {/* Face cream */}
          <ellipse cx="210" cy="170" rx="60" ry="62" fill="#F5EDE0"/>

          {/* Dark eye patches */}
          <ellipse cx="184" cy="157" rx="24" ry="22" fill="#3D1A0A"/>
          <ellipse cx="236" cy="157" rx="24" ry="22" fill="#3D1A0A"/>

          {/* Squinting eyes — curved lines */}
          <path d="M164 159 Q184 144 204 159" stroke="#F5EDE0" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
          <path d="M216 159 Q236 144 256 159" stroke="#F5EDE0" strokeWidth="4.5" strokeLinecap="round" fill="none"/>

          {/* Nose (heart shape, small) */}
          <path d="M210 182 C210 182 205 175 199 178 C193 181 193 188 199 193 L210 202 L221 193 C227 188 227 181 221 178 C215 175 210 182 210 182Z" fill="#3D1A0A"/>

          {/* Smile */}
          <path d="M192 205 Q210 218 228 205" stroke="#3D1A0A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

          {/* Top head fur tufts */}
          <ellipse cx="210" cy="74" rx="13" ry="20" fill="#3D1A0A"/>
          <ellipse cx="194" cy="80" rx="9" ry="16" fill="#3D1A0A"/>
          <ellipse cx="226" cy="80" rx="9" ry="16" fill="#3D1A0A"/>

        </svg>
      </div>
    </div>
  )
}
