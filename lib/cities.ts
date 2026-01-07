export interface City {
  slug: string
  name: string
  county: string
  heroImage: string
}

export const cities: City[] = [
  { slug: 'austin', name: 'Austin', county: 'Travis County', heroImage: 'austin.jpg' },
  { slug: 'houston', name: 'Houston', county: 'Harris County', heroImage: 'houston.jpg' },
  { slug: 'dallas', name: 'Dallas', county: 'Dallas County', heroImage: 'dallas.jpg' },
  { slug: 'san-antonio', name: 'San Antonio', county: 'Bexar County', heroImage: 'san-antonio.jpg' },
  { slug: 'bee-cave', name: 'Bee Cave', county: 'Travis County', heroImage: 'bee-cave.jpg' },
  { slug: 'cedar-park', name: 'Cedar Park', county: 'Williamson County', heroImage: 'cedar-park.jpg' },
  { slug: 'georgetown', name: 'Georgetown', county: 'Williamson County', heroImage: 'georgetown.jpg' },
  { slug: 'kyle', name: 'Kyle', county: 'Hays County', heroImage: 'kyle.jpg' },
  { slug: 'lakeway', name: 'Lakeway', county: 'Travis County', heroImage: 'lakeway.jpg' },
  { slug: 'leander', name: 'Leander', county: 'Williamson County', heroImage: 'leander.jpg' },
  { slug: 'pflugerville', name: 'Pflugerville', county: 'Travis County', heroImage: 'pflugerville.jpg' },
  { slug: 'round-rock', name: 'Round Rock', county: 'Williamson County', heroImage: 'round-rock.jpg' },
  { slug: 'san-marcos', name: 'San Marcos', county: 'Hays County', heroImage: 'san-marcos.jpg' },
  { slug: 'rio-grande-valley', name: 'Rio Grande Valley', county: 'Hidalgo County', heroImage: 'rio-grande-valley.jpg' },
  { slug: 'west-texas', name: 'West Texas', county: 'Multiple Counties', heroImage: 'west-texas.jpg' },
]

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
