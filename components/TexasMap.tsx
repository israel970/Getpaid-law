'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// City coordinates normalized to SVG viewBox (0-400)
const cityCoordinates: Record<string, { x: number; y: number; name: string }> = {
  'el-paso': { x: 45, y: 195, name: 'El Paso' },
  'amarillo': { x: 130, y: 55, name: 'Amarillo' },
  'lubbock': { x: 135, y: 115, name: 'Lubbock' },
  'midland': { x: 115, y: 175, name: 'Midland' },
  'odessa': { x: 105, y: 180, name: 'Odessa' },
  'abilene': { x: 175, y: 155, name: 'Abilene' },
  'waco': { x: 230, y: 195, name: 'Waco' },
  'dallas': { x: 255, y: 145, name: 'Dallas' },
  'fort-worth': { x: 240, y: 150, name: 'Fort Worth' },
  'plano': { x: 260, y: 138, name: 'Plano' },
  'arlington': { x: 248, y: 155, name: 'Arlington' },
  'irving': { x: 250, y: 148, name: 'Irving' },
  'tyler': { x: 295, y: 165, name: 'Tyler' },
  'austin': { x: 225, y: 235, name: 'Austin' },
  'san-antonio': { x: 200, y: 270, name: 'San Antonio' },
  'houston': { x: 290, y: 265, name: 'Houston' },
  'corpus-christi': { x: 230, y: 335, name: 'Corpus Christi' },
  'laredo': { x: 155, y: 330, name: 'Laredo' },
  'mcallen': { x: 185, y: 375, name: 'McAllen' },
  'brownsville': { x: 205, y: 390, name: 'Brownsville' },
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
        viewBox="0 0 400 420"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Texas State Outline */}
        <path
          d="M 45 50
             L 190 50
             L 190 45
             L 260 45
             L 260 50
             L 265 50
             L 265 55
             L 275 55
             L 280 60
             L 290 65
             L 300 68
             L 310 70
             L 320 75
             L 330 85
             L 335 95
             L 340 110
             L 345 125
             L 348 145
             L 350 165
             L 352 185
             L 350 200
             L 345 215
             L 335 230
             L 325 245
             L 315 260
             L 305 275
             L 295 290
             L 285 305
             L 275 320
             L 265 335
             L 250 345
             L 235 355
             L 220 370
             L 210 385
             L 200 395
             L 185 400
             L 165 395
             L 145 375
             L 130 355
             L 115 335
             L 100 310
             L 90 285
             L 75 260
             L 60 235
             L 50 210
             L 40 185
             L 35 160
             L 35 130
             L 38 100
             L 42 70
             L 45 50 Z"
          fill="#1f1f1f"
          stroke="#FFB800"
          strokeWidth="2"
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
                r={16}
                fill="rgba(34, 197, 94, 0.3)"
                className="animate-pulse"
              />
            )}

            {/* City dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={hoveredCity === slug ? 10 : 7}
              fill={hoveredCity === slug ? '#22c55e' : '#FFB800'}
              stroke={hoveredCity === slug ? '#22c55e' : '#FFB800'}
              strokeWidth="2"
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setHoveredCity(slug)}
              onMouseLeave={() => setHoveredCity(null)}
              onClick={() => handleCityClick(slug)}
              style={{
                filter: hoveredCity === slug ? 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))' : 'none',
              }}
            />

            {/* City label on hover */}
            {hoveredCity === slug && (
              <g>
                {/* Label background */}
                <rect
                  x={city.x - 40}
                  y={city.y - 32}
                  width={80}
                  height={20}
                  rx={4}
                  fill="rgba(10, 10, 10, 0.9)"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
                {/* Label text */}
                <text
                  x={city.x}
                  y={city.y - 18}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
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
