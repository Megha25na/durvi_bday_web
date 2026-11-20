import os

DIR = "/Users/meghana/.gemini/antigravity/scratch/birthday-surprise-website/assets/images"
os.makedirs(DIR, exist_ok=True)

def save(filename, content):
    path = os.path.join(DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip())
    print(f"Generated {filename}")

bouquet_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8F1F5"/>
      <stop offset="100%" stop-color="#D0E3EE"/>
    </linearGradient>
    <radialGradient id="roseGrad1" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFD1DC"/>
      <stop offset="60%" stop-color="#F497B3"/>
      <stop offset="100%" stop-color="#DE6E8F"/>
    </radialGradient>
    <radialGradient id="roseGrad2" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF0F5"/>
      <stop offset="70%" stop-color="#FBC4D4"/>
      <stop offset="100%" stop-color="#F285A2"/>
    </radialGradient>
    <radialGradient id="peonyGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#FCE7EE"/>
      <stop offset="100%" stop-color="#E8A7BD"/>
    </radialGradient>
  </defs>
  <rect width="600" height="750" fill="url(#bg)"/>
  
  <circle cx="100" cy="150" r="180" fill="#FFFFFF" opacity="0.3"/>
  <circle cx="500" cy="200" r="150" fill="#C5DCE8" opacity="0.4"/>
  
  <path d="M120 750 C140 580 200 500 240 480" stroke="#FDE5D8" stroke-width="60" stroke-linecap="round"/>
  <path d="M480 750 C460 580 400 500 360 480" stroke="#FDE5D8" stroke-width="60" stroke-linecap="round"/>
  <path d="M100 750 C120 620 160 560 210 540" stroke="#FFFFFF" stroke-width="70" stroke-linecap="round"/>
  <path d="M500 750 C480 620 440 560 390 540" stroke="#FFFFFF" stroke-width="70" stroke-linecap="round"/>

  <polygon points="200,680 400,680 470,440 130,440" fill="#E4CBB4" stroke="#D1B295" stroke-width="4"/>
  <polygon points="210,680 390,680 440,490 160,490" fill="#D7BEA6"/>
  <ellipse cx="300" cy="580" rx="40" ry="15" fill="none" stroke="#7E5835" stroke-width="6"/>
  <ellipse cx="270" cy="580" rx="30" ry="20" fill="none" stroke="#7E5835" stroke-width="5" transform="rotate(-20 270 580)"/>
  <ellipse cx="330" cy="580" rx="30" ry="20" fill="none" stroke="#7E5835" stroke-width="5" transform="rotate(20 330 580)"/>
  
  <g fill="#7A9A7C" opacity="0.85">
    <ellipse cx="180" cy="350" rx="20" ry="35" transform="rotate(-35 180 350)"/>
    <ellipse cx="150" cy="310" rx="16" ry="28" transform="rotate(-45 150 310)"/>
    <ellipse cx="220" cy="280" rx="18" ry="32" transform="rotate(-20 220 280)"/>
    <ellipse cx="380" cy="270" rx="20" ry="36" transform="rotate(25 380 270)"/>
    <ellipse cx="440" cy="320" rx="18" ry="30" transform="rotate(40 440 320)"/>
    <ellipse cx="420" cy="250" rx="15" ry="28" transform="rotate(30 420 250)"/>
    <ellipse cx="300" cy="220" rx="16" ry="30"/>
  </g>

  <g fill="#FFFFFF" opacity="0.9">
    <circle cx="160" cy="260" r="5"/><circle cx="180" cy="240" r="4"/><circle cx="200" cy="270" r="6"/>
    <circle cx="410" cy="230" r="5"/><circle cx="430" cy="250" r="6"/><circle cx="390" cy="210" r="5"/>
    <circle cx="280" cy="210" r="6"/><circle cx="330" cy="200" r="5"/><circle cx="310" cy="180" r="6"/>
  </g>

  <g>
    <circle cx="230" cy="370" r="55" fill="url(#roseGrad1)"/>
    <path d="M205 350 Q230 325 255 350 Q230 380 205 350" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.7"/>
    <circle cx="370" cy="360" r="60" fill="url(#roseGrad2)"/>
    <path d="M345 340 Q370 315 395 340 Q370 375 345 340" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.7"/>
    <circle cx="300" cy="320" r="70" fill="url(#peonyGrad)"/>
    <circle cx="300" cy="320" r="50" fill="#FFCCD8" opacity="0.8"/>
    <circle cx="300" cy="320" r="30" fill="#FFA5B8" opacity="0.85"/>
    <circle cx="220" cy="270" r="45" fill="url(#roseGrad2)"/>
    <circle cx="380" cy="260" r="48" fill="url(#roseGrad1)"/>
    <circle cx="300" cy="230" r="42" fill="url(#peonyGrad)"/>
  </g>

  <g transform="translate(180, 480)">
    <rect x="0" y="0" width="240" height="46" rx="23" fill="#FFFFFF" stroke="#8CB0D4" stroke-width="3"/>
    <text x="120" y="28" font-family="sans-serif" font-size="18" font-weight="bold" fill="#254B77" text-anchor="middle">FLOWERS FOR YOU ♡</text>
  </g>
</svg>"""

save("bouquet.svg", bouquet_svg)

couple_window_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
  <defs>
    <linearGradient id="warmSunset" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE8CD"/>
      <stop offset="50%" stop-color="#FCD5CE"/>
      <stop offset="100%" stop-color="#D8E2DC"/>
    </linearGradient>
  </defs>
  <rect width="500" height="400" fill="url(#warmSunset)"/>
  
  <circle cx="420" cy="80" r="50" fill="#FFF7ED" opacity="0.8"/>
  <rect x="0" y="320" width="500" height="80" fill="#B7B7A4" opacity="0.3"/>

  <ellipse cx="200" cy="380" rx="90" ry="110" fill="#264653"/>
  <ellipse cx="200" cy="245" rx="22" ry="28" fill="#F8D3B8"/>
  <ellipse cx="200" cy="210" rx="60" ry="65" fill="#F8D3B8"/>
  <path d="M140 200 C135 140 180 125 240 135 C270 140 270 170 265 210 C240 180 230 180 190 185 C160 190 150 210 140 200 Z" fill="#2B2D42"/>
  <ellipse cx="180" cy="205" rx="5" ry="7" fill="#2B2D42"/>
  <ellipse cx="225" cy="205" rx="5" ry="7" fill="#2B2D42"/>
  <path d="M190 235 Q205 255 220 235" stroke="#D00000" stroke-width="4" stroke-linecap="round" fill="none"/>
  <circle cx="168" cy="220" r="12" fill="#FF85A1" opacity="0.5"/>
  <circle cx="236" cy="220" r="12" fill="#FF85A1" opacity="0.5"/>

  <ellipse cx="320" cy="370" rx="80" ry="110" fill="#E76F51"/>
  <ellipse cx="305" cy="250" rx="20" ry="26" fill="#F5C7A9"/>
  <ellipse cx="305" cy="215" rx="55" ry="60" fill="#F5C7A9"/>
  <path d="M250 200 C245 130 300 120 365 130 C380 150 385 240 375 320 C360 280 365 240 355 210 C340 180 320 180 290 185 Z" fill="#3D2B1F"/>
  <path d="M250 200 C245 250 250 310 260 340" stroke="#3D2B1F" stroke-width="12" stroke-linecap="round"/>
  <path d="M280 205 Q290 195 300 205" stroke="#2B2D42" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M320 205 Q330 195 340 205" stroke="#2B2D42" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M295 230 Q310 250 325 230" stroke="#E63946" stroke-width="4" stroke-linecap="round" fill="#FFFFFF"/>
  <circle cx="275" cy="218" r="12" fill="#FF85A1" opacity="0.6"/>
  <circle cx="345" cy="218" r="12" fill="#FF85A1" opacity="0.6"/>

  <g fill="#E63946">
    <path d="M260 140 C260 130 248 125 242 133 C236 125 224 130 224 140 C224 152 242 165 242 165 C242 165 260 152 260 140 Z" transform="scale(0.8) translate(70, 10)"/>
    <path d="M260 140 C260 130 248 125 242 133 C236 125 224 130 224 140 C224 152 242 165 242 165 C242 165 260 152 260 140 Z" transform="scale(0.6) translate(300, 60)"/>
  </g>
  <circle cx="80" cy="120" r="4" fill="#FFFFFF"/>
  <circle cx="400" cy="170" r="5" fill="#FFFFFF"/>
</svg>"""

save("couple-window.svg", couple_window_svg)

photobooth_1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" width="100%" height="100%">
  <rect width="300" height="240" fill="#E2EDF8"/>
  <text x="150" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">PHOTOBOOTH 01</text>
  <circle cx="150" cy="115" r="45" fill="#F8D3B8"/>
  <path d="M100 240 C110 180 190 180 200 240" fill="#254B77"/>
  <path d="M110 100 C110 65 190 65 190 100 Z" fill="#3D2B1F"/>
  <path d="M210 160 L210 120 M222 160 L228 122" stroke="#F8D3B8" stroke-width="9" stroke-linecap="round"/>
  <circle cx="138" cy="112" r="4" fill="#1D3859"/>
  <circle cx="162" cy="112" r="4" fill="#1D3859"/>
  <path d="M142 130 Q150 142 158 130" stroke="#E63946" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="130" cy="122" r="8" fill="#FF85A1" opacity="0.6"/>
  <circle cx="170" cy="122" r="8" fill="#FF85A1" opacity="0.6"/>
</svg>"""
save("strip-1.svg", photobooth_1)

photobooth_2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" width="100%" height="100%">
  <rect width="300" height="240" fill="#D5E8F8"/>
  <text x="150" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">PHOTOBOOTH 02</text>
  <circle cx="120" cy="105" r="35" fill="#F8D3B8"/>
  <circle cx="180" cy="105" r="35" fill="#F5C7A9"/>
  <path d="M70 240 C80 160 150 160 160 240" fill="#457B9D"/>
  <path d="M140 240 C150 160 220 160 230 240" fill="#E76F51"/>
  <path d="M150 145 C150 138 142 134 138 140 C134 134 126 138 126 145 C126 154 138 162 138 162 C138 162 150 154 150 145 Z" fill="#E63946" transform="translate(12, 10) scale(1.3)"/>
</svg>"""
save("strip-2.svg", photobooth_2)

photobooth_3 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 240" width="100%" height="100%">
  <rect width="300" height="240" fill="#CBE2F8"/>
  <text x="150" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">PHOTOBOOTH 03</text>
  <circle cx="150" cy="115" r="45" fill="#F8D3B8"/>
  <path d="M90 240 C100 180 200 180 210 240" fill="#335F84"/>
  <polygon points="135,95 140,110 155,110 142,120 147,135 135,125 123,135 128,120 115,110 130,110" fill="#254B77"/>
  <polygon points="165,95 170,110 185,110 172,120 177,135 165,125 153,135 158,120 145,110 160,110" fill="#254B77"/>
  <path d="M140 140 Q150 155 160 140" stroke="#1D3859" stroke-width="3" fill="#E63946"/>
</svg>"""
save("strip-3.svg", photobooth_3)

fave_pic = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="goldenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE5D9"/>
      <stop offset="60%" stop-color="#FFCAD4"/>
      <stop offset="100%" stop-color="#B5E2FA"/>
    </linearGradient>
  </defs>
  <rect width="500" height="500" fill="url(#goldenGlow)"/>
  <circle cx="380" cy="120" r="80" fill="#FFFFFF" opacity="0.6"/>
  <circle cx="120" cy="80" r="30" fill="#FFFFFF" opacity="0.4"/>
  <circle cx="440" cy="240" r="40" fill="#FFFFFF" opacity="0.3"/>
  <ellipse cx="220" cy="460" rx="110" ry="140" fill="#2A475E"/>
  <ellipse cx="290" cy="470" rx="100" ry="140" fill="#EDAFB8"/>
  <ellipse cx="230" cy="270" rx="45" ry="52" fill="#F8D3B8"/>
  <path d="M180 260 C175 190 230 180 270 200 C270 230 250 240 220 235 Z" fill="#22223B"/>
  <ellipse cx="280" cy="285" rx="42" ry="50" fill="#F5C7A9"/>
  <path d="M250 250 C260 180 320 180 330 230 C340 300 330 380 310 400 Z" fill="#4A3B32"/>
  <circle cx="255" cy="270" r="10" fill="#FF85A1" opacity="0.4"/>
  <text x="250" y="470" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">MY FAVORITE HUMAN ♡</text>
</svg>"""
save("couple-fave.svg", fave_pic)

gallery_images = [
    ("gallery-1.svg", "BIRTHDAY CAKE", """
      <rect width="400" height="300" fill="#FCEADE"/>
      <ellipse cx="200" cy="230" rx="120" ry="25" fill="#E0AFA0"/>
      <path d="M100 180 C100 210 300 210 300 180 L300 220 C300 250 100 250 100 220 Z" fill="#FFF1E6"/>
      <ellipse cx="200" cy="180" rx="100" ry="25" fill="#F8EDEB"/>
      <path d="M100 180 Q120 205 140 185 Q160 210 180 185 Q200 210 220 185 Q240 210 260 185 Q280 205 300 180" stroke="#F4978E" stroke-width="8" fill="none"/>
      <rect x="195" y="130" width="10" height="40" fill="#335F84"/>
      <path d="M200 110 Q208 122 200 130 Q192 122 200 110" fill="#F39A59"/>
      <circle cx="200" cy="120" r="16" fill="#FEE440" opacity="0.3"/>
      <circle cx="150" cy="180" r="3" fill="#E63946"/><circle cx="230" cy="185" r="3" fill="#457B9D"/><circle cx="190" cy="190" r="3" fill="#F4A261"/>
    """),
    ("gallery-2.svg", "ROAD TRIP ADVENTURE", """
      <rect width="400" height="300" fill="#D0F4DE"/>
      <circle cx="200" cy="120" r="70" fill="#FFDDD2"/>
      <polygon points="50,260 160,110 270,260" fill="#A3C4BC"/>
      <polygon points="180,260 280,140 380,260" fill="#88A096"/>
      <polygon points="170,260 230,260 210,190 190,190" fill="#495057"/>
      <line x1="200" y1="200" x2="200" y2="250" stroke="#F8F9FA" stroke-width="3" stroke-dasharray="6,6"/>
      <text x="200" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">OUR BEST ROAD TRIP 🚗💨</text>
    """),
    ("gallery-3.svg", "CAFE DATE", """
      <rect width="400" height="300" fill="#FDE2E4"/>
      <circle cx="200" cy="150" r="110" fill="#FFFFFF"/>
      <circle cx="140" cy="150" r="40" fill="#E76F51"/>
      <circle cx="140" cy="150" r="32" fill="#6F4E37"/>
      <circle cx="260" cy="150" r="40" fill="#2A9D8F"/>
      <circle cx="260" cy="150" r="32" fill="#6F4E37"/>
      <text x="200" y="275" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">COFFEE &amp; CONVERSATIONS ☕</text>
    """),
    ("gallery-4.svg", "STARGAZING NIGHT", """
      <rect width="400" height="300" fill="#22333B"/>
      <path d="M80 50 A30 30 0 1 0 120 90 A25 25 0 1 1 80 50 Z" fill="#FEE440"/>
      <circle cx="200" cy="50" r="2" fill="#FFF"/><circle cx="280" cy="70" r="3" fill="#FFF"/>
      <circle cx="340" cy="40" r="2" fill="#FFF"/><circle cx="150" cy="110" r="2" fill="#FFF"/>
      <circle cx="240" cy="130" r="3" fill="#FFF"/><circle cx="320" cy="100" r="2" fill="#FFF"/>
      <line x1="280" y1="30" x2="350" y2="70" stroke="#FFF" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
      <ellipse cx="200" cy="350" rx="250" ry="120" fill="#0A0908"/>
      <circle cx="190" cy="225" r="10" fill="#E0AFA0"/>
      <circle cx="210" cy="223" r="10" fill="#E0AFA0"/>
      <path d="M175 250 C180 235 220 235 225 250 Z" fill="#495057"/>
      <text x="200" y="285" font-family="sans-serif" font-size="13" font-weight="bold" fill="#E0AFA0" text-anchor="middle">MIDNIGHT WISHES ✨</text>
    """),
    ("gallery-5.svg", "SUNSET BEACH", """
      <rect width="400" height="300" fill="#FFDDD2"/>
      <ellipse cx="200" cy="170" r="60" fill="#E76F51"/>
      <rect x="0" y="170" width="400" height="130" fill="#83C5BE"/>
      <path d="M0 210 Q100 195 200 210 T400 210 L400 300 L0 300 Z" fill="#E29578" opacity="0.6"/>
      <text x="200" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#254B77" text-anchor="middle">GOLDEN HOUR WALKS 🌅</text>
    """),
    ("gallery-6.svg", "OUR MEMORY", """
      <rect width="400" height="300" fill="#E8DFF5"/>
      <circle cx="200" cy="140" r="80" fill="#FFF"/>
      <path d="M200 160 C200 135 160 115 160 145 C160 170 200 200 200 200 C200 200 240 170 240 145 C240 115 200 135 200 160 Z" fill="#F72585"/>
      <text x="200" y="250" font-family="sans-serif" font-size="16" font-weight="bold" fill="#254B77" text-anchor="middle">TO A MILLION MORE MEMORIES ♡</text>
    """)
]

for filename, title, inner in gallery_images:
    save(filename, f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">{inner}</svg>')

print("All assets successfully generated!")
