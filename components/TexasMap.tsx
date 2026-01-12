'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// City coordinates calculated from real lat/long data
// Texas bounds: lat 25.84-36.5°N, lng 93.51-106.65°W
// SVG viewBox: 500x420
const cityCoordinates: Record<string, { x: number; y: number; name: string }> = {
  // Major Texas Cities
  'austin': { x: 332, y: 238, name: 'Austin' },
  'houston': { x: 415, y: 256, name: 'Houston' },
  'dallas': { x: 365, y: 150, name: 'Dallas' },
  'san-antonio': { x: 305, y: 268, name: 'San Antonio' },
  'fort-worth': { x: 346, y: 151, name: 'Fort Worth' },
  'el-paso': { x: 26, y: 186, name: 'El Paso' },
  'arlington': { x: 354, y: 152, name: 'Arlington' },
  'corpus-christi': { x: 344, y: 325, name: 'Corpus Christi' },
  'plano': { x: 368, y: 142, name: 'Plano' },
  'laredo': { x: 270, y: 334, name: 'Laredo' },
  'lubbock': { x: 188, y: 122, name: 'Lubbock' },
  'irving': { x: 360, y: 149, name: 'Irving' },
  'garland': { x: 372, y: 148, name: 'Garland' },
  'frisco': { x: 366, y: 138, name: 'Frisco' },
  'mckinney': { x: 370, y: 134, name: 'McKinney' },
  'amarillo': { x: 189, y: 65, name: 'Amarillo' },
  'brownsville': { x: 340, y: 391, name: 'Brownsville' },
  'grand-prairie': { x: 352, y: 154, name: 'Grand Prairie' },
  'pasadena': { x: 422, y: 260, name: 'Pasadena' },
  'mesquite': { x: 375, y: 152, name: 'Mesquite' },
  'killeen': { x: 328, y: 210, name: 'Killeen' },
  'mcallen': { x: 315, y: 381, name: 'McAllen' },
  'midland': { x: 180, y: 178, name: 'Midland' },
  'waco': { x: 353, y: 193, name: 'Waco' },
  'denton': { x: 358, y: 138, name: 'Denton' },
  'carrollton': { x: 362, y: 145, name: 'Carrollton' },
  'abilene': { x: 262, y: 162, name: 'Abilene' },
  'beaumont': { x: 458, y: 250, name: 'Beaumont' },
  'odessa': { x: 170, y: 183, name: 'Odessa' },
  'richardson': { x: 367, y: 146, name: 'Richardson' },
  'the-woodlands': { x: 410, y: 242, name: 'The Woodlands' },
  'sugar-land': { x: 408, y: 265, name: 'Sugar Land' },
  'pearland': { x: 414, y: 268, name: 'Pearland' },
  'college-station': { x: 378, y: 225, name: 'College Station' },
  'league-city': { x: 422, y: 275, name: 'League City' },
  'tyler': { x: 417, y: 165, name: 'Tyler' },
  'allen': { x: 369, y: 140, name: 'Allen' },
  'temple': { x: 335, y: 208, name: 'Temple' },

  // Austin Metro Area
  'bee-cave': { x: 325, y: 240, name: 'Bee Cave' },
  'cedar-park': { x: 328, y: 232, name: 'Cedar Park' },
  'georgetown': { x: 332, y: 224, name: 'Georgetown' },
  'kyle': { x: 330, y: 248, name: 'Kyle' },
  'lakeway': { x: 322, y: 238, name: 'Lakeway' },
  'leander': { x: 326, y: 228, name: 'Leander' },
  'pflugerville': { x: 338, y: 234, name: 'Pflugerville' },
  'round-rock': { x: 336, y: 230, name: 'Round Rock' },
  'san-marcos': { x: 328, y: 256, name: 'San Marcos' },
  'buda': { x: 330, y: 244, name: 'Buda' },
  'bastrop': { x: 348, y: 244, name: 'Bastrop' },
  'dripping-springs': { x: 320, y: 242, name: 'Dripping Springs' },
  'hutto': { x: 342, y: 228, name: 'Hutto' },
  'manor': { x: 342, y: 236, name: 'Manor' },
  'taylor': { x: 346, y: 224, name: 'Taylor' },
  'new-braunfels': { x: 315, y: 260, name: 'New Braunfels' },
  'seguin': { x: 328, y: 264, name: 'Seguin' },

  // Houston Metro Area
  'katy': { x: 398, y: 258, name: 'Katy' },
  'cypress': { x: 402, y: 248, name: 'Cypress' },
  'spring': { x: 412, y: 244, name: 'Spring' },
  'humble': { x: 420, y: 248, name: 'Humble' },
  'baytown': { x: 432, y: 258, name: 'Baytown' },
  'missouri-city': { x: 408, y: 268, name: 'Missouri City' },
  'conroe': { x: 408, y: 232, name: 'Conroe' },
  'galveston': { x: 436, y: 288, name: 'Galveston' },
  'texas-city': { x: 428, y: 280, name: 'Texas City' },
  'friendswood': { x: 420, y: 272, name: 'Friendswood' },

  // San Antonio Metro Area
  'boerne': { x: 292, y: 260, name: 'Boerne' },
  'schertz': { x: 316, y: 264, name: 'Schertz' },
  'live-oak': { x: 310, y: 266, name: 'Live Oak' },
  'universal-city': { x: 312, y: 265, name: 'Universal City' },
  'cibolo': { x: 320, y: 262, name: 'Cibolo' },
}

// Accurate Texas outline derived from US Census GeoJSON data
const texasPath = "M 189.4,20.0 L 253.0,20.0 L 253.0,88.0 L 255.7,87.6 L 263.5,94.3 L 267.8,93.2 L 278.9,93.6 L 281.4,100.3 L 288.5,99.9 L 296.2,103.0 L 303.1,102.6 L 306.0,105.5 L 310.4,102.2 L 317.1,103.7 L 320.0,107.6 L 325.0,108.2 L 327.7,113.0 L 333.8,108.4 L 342.1,111.0 L 345.2,113.9 L 349.2,112.6 L 352.1,117.0 L 360.9,109.1 L 363.4,113.2 L 371.1,113.2 L 378.4,115.6 L 381.1,118.7 L 388.0,113.3 L 395.5,111.6 L 398.9,113.5 L 407.2,110.1 L 409.1,112.0 L 418.2,112.2 L 420.5,109.1 L 429.5,112.6 L 432.9,116.6 L 446.4,120.5 L 450.0,123.7 L 457.0,122.0 L 461.9,123.5 L 461.9,142.2 L 461.9,178.1 L 469.6,185.8 L 469.8,193.4 L 479.4,207.6 L 480.0,215.1 L 476.4,224.2 L 472.9,227.8 L 474.0,232.6 L 471.5,236.3 L 474.2,243.0 L 466.0,255.5 L 469.1,258.9 L 463.3,259.1 L 445.0,263.9 L 438.5,261.2 L 437.4,255.5 L 432.8,259.5 L 429.5,258.5 L 427.8,263.5 L 431.4,265.7 L 432.0,272.2 L 425.5,279.1 L 414.9,287.7 L 393.8,297.0 L 391.6,295.4 L 385.3,297.7 L 385.1,295.6 L 376.5,297.2 L 372.4,292.7 L 369.9,293.7 L 379.2,302.7 L 372.4,305.6 L 366.1,303.9 L 365.1,310.2 L 357.3,316.7 L 349.2,328.8 L 344.0,341.5 L 340.2,340.6 L 339.2,345.2 L 343.2,344.0 L 341.3,353.2 L 338.6,353.6 L 338.4,358.8 L 341.7,361.7 L 342.7,372.3 L 346.5,375.9 L 347.5,382.6 L 350.5,388.6 L 339.8,392.2 L 335.4,387.6 L 327.1,385.9 L 316.2,386.3 L 306.8,380.5 L 299.6,379.9 L 294.3,375.3 L 287.0,373.8 L 282.0,369.4 L 278.7,358.8 L 272.4,352.5 L 273.1,347.1 L 270.3,341.3 L 271.2,336.3 L 266.8,330.8 L 263.2,330.2 L 257.2,325.2 L 255.3,318.9 L 250.1,313.1 L 242.6,308.3 L 239.0,297.7 L 235.5,294.8 L 230.9,286.4 L 229.4,279.5 L 224.9,274.5 L 217.4,270.1 L 215.7,267.0 L 208.8,264.3 L 203.4,256.6 L 188.1,254.9 L 178.8,255.3 L 171.0,252.6 L 169.2,256.2 L 160.8,257.4 L 154.4,264.7 L 150.6,276.4 L 148.5,276.6 L 143.7,283.5 L 137.9,283.7 L 129.3,278.3 L 107.6,269.7 L 103.4,265.1 L 94.9,260.7 L 89.0,250.7 L 88.6,241.6 L 82.6,234.3 L 81.3,228.0 L 77.4,224.0 L 63.8,218.0 L 56.5,210.0 L 50.5,207.1 L 44.2,200.2 L 35.4,196.5 L 29.2,187.3 L 24.0,185.4 L 20.0,181.3 L 21.0,177.9 L 145.4,177.9 L 145.4,142.7 L 146.2,107.2 L 146.4,20.0 L 147.7,20.0 L 189.4,20.0 Z"

// Major cities get larger dots
const majorCities = new Set([
  'austin', 'houston', 'dallas', 'san-antonio', 'fort-worth', 'el-paso',
  'arlington', 'corpus-christi', 'plano', 'laredo', 'lubbock', 'amarillo',
  'brownsville', 'mcallen', 'midland', 'waco', 'beaumont', 'tyler'
])

export default function TexasMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const router = useRouter()

  const handleCityClick = (slug: string) => {
    router.push(`/${slug}-personal-injury-lawyer`)
  }

  const getBaseRadius = (slug: string) => majorCities.has(slug) ? 5 : 3.5

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 500 420"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }}
      >
        {/* Texas State Outline - from US Census GeoJSON */}
        <path
          d={texasPath}
          fill="#1f1f1f"
          stroke="#FFB800"
          strokeWidth="2"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />

        {/* City Markers */}
        {Object.entries(cityCoordinates).map(([slug, city]) => {
          const baseRadius = getBaseRadius(slug)
          const isHovered = hoveredCity === slug

          return (
            <g key={slug}>
              {/* Glow effect for hovered city */}
              {isHovered && (
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
                r={isHovered ? baseRadius * 2 : baseRadius}
                fill={isHovered ? '#22c55e' : '#FFB800'}
                stroke={isHovered ? '#16a34a' : '#E6A600'}
                strokeWidth={isHovered ? 2 : 1.5}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredCity(slug)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => handleCityClick(slug)}
                style={{
                  filter: isHovered
                    ? 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.9))'
                    : 'drop-shadow(0 0 3px rgba(255, 184, 0, 0.5))',
                }}
              />

              {/* City label on hover */}
              {isHovered && (
                <g className="pointer-events-none">
                  <rect
                    x={city.x - 55}
                    y={city.y - 36}
                    width={110}
                    height={24}
                    rx={4}
                    fill="rgba(10, 10, 10, 0.95)"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                  <text
                    x={city.x}
                    y={city.y - 19}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {city.name}
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gold"></span>
          <span className="text-gray-light">City</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent"></span>
          <span className="text-gray-light">Click to view</span>
        </div>
        <div className="text-gray-light">
          <span className="text-gold font-semibold">{Object.keys(cityCoordinates).length}</span> cities served
        </div>
      </div>

      {/* Mobile: Organized city list by region */}
      <div className="md:hidden mt-8">
        <MobileCityList onCityClick={handleCityClick} />
      </div>
    </div>
  )
}

function MobileCityList({ onCityClick }: { onCityClick: (slug: string) => void }) {
  const [expanded, setExpanded] = useState(false)

  // Sort cities alphabetically for mobile list
  const sortedCities = Object.entries(cityCoordinates).sort((a, b) =>
    a[1].name.localeCompare(b[1].name)
  )

  const displayedCities = expanded ? sortedCities : sortedCities.filter(([slug]) => majorCities.has(slug))

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {displayedCities.map(([slug, city]) => (
          <button
            key={slug}
            onClick={() => onCityClick(slug)}
            className="bg-gray border border-transparent hover:border-accent rounded-lg px-3 py-2 text-sm text-left transition-colors"
          >
            {city.name}
          </button>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full mt-4 text-center text-accent hover:text-accent-hover font-semibold py-2 transition-colors"
      >
        {expanded ? 'Show less cities' : `Show all ${sortedCities.length} cities`}
      </button>
    </div>
  )
}
