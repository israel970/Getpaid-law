export interface City {
  slug: string
  name: string
  county: string
  heroImage: string
}

export const cities: City[] = [
  // Major Texas Cities
  { slug: 'austin', name: 'Austin', county: 'Travis County', heroImage: 'austin.jpg' },
  { slug: 'houston', name: 'Houston', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'dallas', name: 'Dallas', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'san-antonio', name: 'San Antonio', county: 'Bexar County', heroImage: 'san-antonio.jpg' },
  { slug: 'fort-worth', name: 'Fort Worth', county: 'Tarrant County', heroImage: 'dallas.jpg' },
  { slug: 'el-paso', name: 'El Paso', county: 'El Paso County', heroImage: 'west-texas.jpg' },
  { slug: 'arlington', name: 'Arlington', county: 'Tarrant County', heroImage: 'dallas.jpg' },
  { slug: 'corpus-christi', name: 'Corpus Christi', county: 'Nueces County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'plano', name: 'Plano', county: 'Collin County', heroImage: 'dallas.jpg' },
  { slug: 'laredo', name: 'Laredo', county: 'Webb County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'lubbock', name: 'Lubbock', county: 'Lubbock County', heroImage: 'west-texas.jpg' },
  { slug: 'irving', name: 'Irving', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'garland', name: 'Garland', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'frisco', name: 'Frisco', county: 'Collin County', heroImage: 'dallas.jpg' },
  { slug: 'mckinney', name: 'McKinney', county: 'Collin County', heroImage: 'dallas.jpg' },
  { slug: 'amarillo', name: 'Amarillo', county: 'Potter County', heroImage: 'west-texas.jpg' },
  { slug: 'brownsville', name: 'Brownsville', county: 'Cameron County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'grand-prairie', name: 'Grand Prairie', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'pasadena', name: 'Pasadena', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'mesquite', name: 'Mesquite', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'killeen', name: 'Killeen', county: 'Bell County', heroImage: 'austin.jpg' },
  { slug: 'mcallen', name: 'McAllen', county: 'Hidalgo County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'midland', name: 'Midland', county: 'Midland County', heroImage: 'west-texas.jpg' },
  { slug: 'waco', name: 'Waco', county: 'McLennan County', heroImage: 'austin.jpg' },
  { slug: 'denton', name: 'Denton', county: 'Denton County', heroImage: 'dallas.jpg' },
  { slug: 'carrollton', name: 'Carrollton', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'abilene', name: 'Abilene', county: 'Taylor County', heroImage: 'west-texas.jpg' },
  { slug: 'beaumont', name: 'Beaumont', county: 'Jefferson County', heroImage: 'houston.jpg' },
  { slug: 'odessa', name: 'Odessa', county: 'Ector County', heroImage: 'west-texas.jpg' },
  { slug: 'richardson', name: 'Richardson', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'the-woodlands', name: 'The Woodlands', county: 'Montgomery County', heroImage: 'houston.jpg' },
  { slug: 'sugar-land', name: 'Sugar Land', county: 'Fort Bend County', heroImage: 'houston.jpg' },
  { slug: 'pearland', name: 'Pearland', county: 'Brazoria County', heroImage: 'houston.jpg' },
  { slug: 'college-station', name: 'College Station', county: 'Brazos County', heroImage: 'austin.jpg' },
  { slug: 'league-city', name: 'League City', county: 'Galveston County', heroImage: 'houston.jpg' },
  { slug: 'tyler', name: 'Tyler', county: 'Smith County', heroImage: 'dallas.jpg' },
  { slug: 'allen', name: 'Allen', county: 'Collin County', heroImage: 'dallas.jpg' },
  { slug: 'temple', name: 'Temple', county: 'Bell County', heroImage: 'austin.jpg' },

  // Austin Metro Area
  { slug: 'bee-cave', name: 'Bee Cave', county: 'Travis County', heroImage: 'bee-cave.jpg' },
  { slug: 'cedar-park', name: 'Cedar Park', county: 'Williamson County', heroImage: 'cedar-park.jpg' },
  { slug: 'georgetown', name: 'Georgetown', county: 'Williamson County', heroImage: 'georgetown.jpg' },
  { slug: 'kyle', name: 'Kyle', county: 'Hays County', heroImage: 'kyle.jpg' },
  { slug: 'lakeway', name: 'Lakeway', county: 'Travis County', heroImage: 'lakeway.jpg' },
  { slug: 'leander', name: 'Leander', county: 'Williamson County', heroImage: 'leander.jpg' },
  { slug: 'pflugerville', name: 'Pflugerville', county: 'Travis County', heroImage: 'pflugerville.jpg' },
  { slug: 'round-rock', name: 'Round Rock', county: 'Williamson County', heroImage: 'round-rock.jpg' },
  { slug: 'san-marcos', name: 'San Marcos', county: 'Hays County', heroImage: 'san-marcos.jpg' },
  { slug: 'buda', name: 'Buda', county: 'Hays County', heroImage: 'austin.jpg' },
  { slug: 'bastrop', name: 'Bastrop', county: 'Bastrop County', heroImage: 'austin.jpg' },
  { slug: 'dripping-springs', name: 'Dripping Springs', county: 'Hays County', heroImage: 'austin.jpg' },
  { slug: 'hutto', name: 'Hutto', county: 'Williamson County', heroImage: 'austin.jpg' },
  { slug: 'manor', name: 'Manor', county: 'Travis County', heroImage: 'austin.jpg' },
  { slug: 'taylor', name: 'Taylor', county: 'Williamson County', heroImage: 'austin.jpg' },
  { slug: 'new-braunfels', name: 'New Braunfels', county: 'Comal County', heroImage: 'san-antonio.jpg' },
  { slug: 'seguin', name: 'Seguin', county: 'Guadalupe County', heroImage: 'san-antonio.jpg' },

  // Houston Metro Area
  { slug: 'katy', name: 'Katy', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'cypress', name: 'Cypress', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'spring', name: 'Spring', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'humble', name: 'Humble', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'baytown', name: 'Baytown', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'missouri-city', name: 'Missouri City', county: 'Fort Bend County', heroImage: 'houston.jpg' },
  { slug: 'conroe', name: 'Conroe', county: 'Montgomery County', heroImage: 'houston.jpg' },
  { slug: 'galveston', name: 'Galveston', county: 'Galveston County', heroImage: 'houston.jpg' },
  { slug: 'texas-city', name: 'Texas City', county: 'Galveston County', heroImage: 'houston.jpg' },
  { slug: 'friendswood', name: 'Friendswood', county: 'Galveston County', heroImage: 'houston.jpg' },

  // San Antonio Metro Area
  { slug: 'boerne', name: 'Boerne', county: 'Kendall County', heroImage: 'san-antonio.jpg' },
  { slug: 'schertz', name: 'Schertz', county: 'Guadalupe County', heroImage: 'san-antonio.jpg' },
  { slug: 'live-oak', name: 'Live Oak', county: 'Bexar County', heroImage: 'san-antonio.jpg' },
  { slug: 'universal-city', name: 'Universal City', county: 'Bexar County', heroImage: 'san-antonio.jpg' },
  { slug: 'cibolo', name: 'Cibolo', county: 'Guadalupe County', heroImage: 'san-antonio.jpg' },

  // Regional Areas
  { slug: 'rio-grande-valley', name: 'Rio Grande Valley', county: 'Hidalgo County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'west-texas', name: 'West Texas', county: 'Multiple Counties', heroImage: 'west-texas.jpg' },
]

// Featured cities to show on homepage (major metros)
export const featuredCities = cities.filter(city =>
  ['austin', 'houston', 'dallas', 'san-antonio', 'fort-worth', 'el-paso',
   'arlington', 'corpus-christi', 'plano', 'lubbock', 'laredo', 'irving',
   'amarillo', 'mcallen', 'waco', 'midland'].includes(city.slug)
)

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug)
}

// Practice areas that have city-specific pages
export const cityPracticeAreas = [
  'car-accident-lawyer',
  'truck-accident-lawyer',
  '18-wheeler-accident-lawyer',
  'motorcycle-accident-lawyer',
  'personal-injury-lawyer',
  'wrongful-death-lawyer',
  'slip-and-fall-lawyer',
  'brain-injury-lawyer',
  'dog-bite-lawyer',
  'drunk-driving-accident-lawyer',
  'hit-and-run-lawyer',
  'uber-lyft-accident-lawyer',
  'work-injury-lawyer',
  'workplace-injury-lawyer',
  'police-brutality-lawyer',
]
