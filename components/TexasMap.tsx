'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// City coordinates mapped to the Texas SVG viewBox
const cityCoordinates: Record<string, { x: number; y: number; name: string }> = {
  'el-paso': { x: 62, y: 340, name: 'El Paso' },
  'amarillo': { x: 200, y: 95, name: 'Amarillo' },
  'lubbock': { x: 210, y: 175, name: 'Lubbock' },
  'midland': { x: 185, y: 280, name: 'Midland' },
  'odessa': { x: 170, y: 285, name: 'Odessa' },
  'abilene': { x: 295, y: 250, name: 'Abilene' },
  'waco': { x: 385, y: 310, name: 'Waco' },
  'dallas': { x: 420, y: 215, name: 'Dallas' },
  'fort-worth': { x: 390, y: 225, name: 'Fort Worth' },
  'plano': { x: 430, y: 200, name: 'Plano' },
  'arlington': { x: 400, y: 230, name: 'Arlington' },
  'irving': { x: 410, y: 218, name: 'Irving' },
  'tyler': { x: 490, y: 260, name: 'Tyler' },
  'austin': { x: 380, y: 385, name: 'Austin' },
  'san-antonio': { x: 340, y: 445, name: 'San Antonio' },
  'houston': { x: 500, y: 420, name: 'Houston' },
  'corpus-christi': { x: 395, y: 555, name: 'Corpus Christi' },
  'laredo': { x: 270, y: 555, name: 'Laredo' },
  'mcallen': { x: 325, y: 635, name: 'McAllen' },
  'brownsville': { x: 365, y: 660, name: 'Brownsville' },
}

export default function TexasMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const router = useRouter()

  const handleCityClick = (slug: string) => {
    router.push(`/${slug}-personal-injury-lawyer`)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 620 720"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Accurate Texas State Outline */}
        <path
          d="M 178 18
             L 178 155
             L 103 155
             L 103 178
             L 78 178
             L 78 262
             L 65 280
             L 52 315
             L 45 355
             L 52 395
             L 72 435
             L 105 478
             L 148 518
             L 195 548
             L 235 565
             L 265 585
             L 290 615
             L 315 648
             L 345 668
             L 385 678
             L 425 665
             L 455 635
             L 472 598
             L 485 558
             L 508 525
             L 538 498
             L 565 478
             L 582 455
             L 588 425
             L 578 395
             L 558 368
             L 545 338
             L 545 305
             L 558 275
             L 575 248
             L 585 218
             L 582 188
             L 565 162
             L 538 142
             L 505 132
             L 468 128
             L 432 118
             L 398 98
             L 368 72
             L 345 48
             L 328 28
             L 318 18
             L 178 18 Z"
          fill="#1f1f1f"
          stroke="#FFB800"
          strokeWidth="3"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* City Markers */}
        {Object.entries(cityCoordinates).map(([slug, city]) => (
          <g key={slug}>
            {/* Glow effect for hovered city */}
            {hoveredCity === slug && (
              <circle
                cx={city.x}
                cy={city.y}
                r={22}
                fill="rgba(34, 197, 94, 0.3)"
                className="animate-pulse"
              />
            )}

            {/* City dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={hoveredCity === slug ? 12 : 8}
              fill={hoveredCity === slug ? '#22c55e' : '#FFB800'}
              stroke={hoveredCity === slug ? '#16a34a' : '#E6A600'}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredCity(slug)}
              onMouseLeave={() => setHoveredCity(null)}
              onClick={() => handleCityClick(slug)}
              style={{
                filter: hoveredCity === slug ? 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.9))' : 'drop-shadow(0 0 4px rgba(255, 184, 0, 0.5))',
              }}
            />

            {/* City label on hover */}
            {hoveredCity === slug && (
              <g>
                <rect
                  x={city.x - 55}
                  y={city.y - 42}
                  width={110}
                  height={28}
                  rx={6}
                  fill="rgba(10, 10, 10, 0.95)"
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <text
                  x={city.x}
                  y={city.y - 22}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="600"
                  className="pointer-events-none"
                >
                  {city.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          <span className="text-gray-light">City</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent"></span>
          <span className="text-gray-light">Click to view</span>
        </div>
      </div>

      {/* Mobile: Show city list below map */}
      <div className="md:hidden mt-8 grid grid-cols-2 gap-2">
        {Object.entries(cityCoordinates).map(([slug, city]) => (
          <button
            key={slug}
            onClick={() => handleCityClick(slug)}
            className="bg-gray border border-transparent hover:border-accent rounded-lg px-3 py-2 text-sm text-left transition-colors"
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  )
}
