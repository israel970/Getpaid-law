export interface PracticeArea {
  slug: string
  title: string
  shortTitle: string
  description: string
  heroImage: string
  category: string
}

export const practiceAreas: PracticeArea[] = [
  // General
  { slug: 'personal-injury-lawyer', title: 'Personal Injury Lawyer', shortTitle: 'Personal Injury', description: 'Comprehensive personal injury legal services for all types of accidents and injuries.', heroImage: 'personal-injury.jpg', category: 'General' },

  // Vehicle Accidents
  { slug: 'car-accident-lawyer', title: 'Car Accident Lawyer', shortTitle: 'Car Accidents', description: 'Experienced car accident lawyers fighting for maximum compensation.', heroImage: 'car-accident.jpg', category: 'Vehicle Accidents' },
  { slug: 'truck-accident-lawyer', title: 'Truck Accident Lawyer', shortTitle: 'Truck Accidents', description: 'Truck accident attorneys with experience against major carriers.', heroImage: 'truck-accident.jpg', category: 'Vehicle Accidents' },
  { slug: '18-wheeler-accident-lawyer', title: '18-Wheeler Accident Lawyer', shortTitle: '18-Wheeler Accidents', description: 'Specialized 18-wheeler and semi-truck accident representation.', heroImage: '18-wheeler.jpg', category: 'Vehicle Accidents' },
  { slug: 'motorcycle-accident-lawyer', title: 'Motorcycle Accident Lawyer', shortTitle: 'Motorcycle Accidents', description: 'Motorcycle accident lawyers who understand rider rights.', heroImage: 'motorcycle.jpg', category: 'Vehicle Accidents' },
  { slug: 'hit-and-run-lawyer', title: 'Hit and Run Lawyer', shortTitle: 'Hit and Run', description: 'Pursuing justice for hit and run accident victims.', heroImage: 'hit-and-run.jpg', category: 'Vehicle Accidents' },
  { slug: 'drunk-driving-accident-lawyer', title: 'Drunk Driving Accident Lawyer', shortTitle: 'Drunk Driving Accidents', description: 'Holding drunk drivers accountable for their actions.', heroImage: 'drunk-driving.jpg', category: 'Vehicle Accidents' },
  { slug: 'rideshare-accident-lawyer', title: 'Rideshare Accident Lawyer', shortTitle: 'Rideshare Accidents', description: 'Uber and Lyft accident claims handled expertly.', heroImage: 'rideshare.jpg', category: 'Vehicle Accidents' },
  { slug: 'uber-lyft-accident-lawyer', title: 'Uber/Lyft Accident Lawyer', shortTitle: 'Uber/Lyft Accidents', description: 'Navigating complex rideshare accident claims.', heroImage: 'uber-lyft.jpg', category: 'Vehicle Accidents' },
  { slug: 'box-truck-accident-lawyer', title: 'Box Truck Accident Lawyer', shortTitle: 'Box Truck Accidents', description: 'Box truck and delivery vehicle accident claims.', heroImage: 'box-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'delivery-truck-accident-lawyer', title: 'Delivery Truck Accident Lawyer', shortTitle: 'Delivery Truck Accidents', description: 'Delivery vehicle accident representation.', heroImage: 'delivery-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'dump-truck-accident-lawyer', title: 'Dump Truck Accident Lawyer', shortTitle: 'Dump Truck Accidents', description: 'Dump truck accident injury claims.', heroImage: 'dump-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'garbage-truck-accident-lawyer', title: 'Garbage Truck Accident Lawyer', shortTitle: 'Garbage Truck Accidents', description: 'Garbage and waste truck accident claims.', heroImage: 'garbage-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'tanker-truck-accident-lawyer', title: 'Tanker Truck Accident Lawyer', shortTitle: 'Tanker Truck Accidents', description: 'Tanker truck and hazmat accident claims.', heroImage: 'tanker-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'tow-truck-accident-lawyer', title: 'Tow Truck Accident Lawyer', shortTitle: 'Tow Truck Accidents', description: 'Tow truck accident injury claims.', heroImage: 'tow-truck.jpg', category: 'Vehicle Accidents' },
  { slug: 'concrete-mixer-accident-lawyer', title: 'Concrete Mixer Accident Lawyer', shortTitle: 'Concrete Mixer Accidents', description: 'Concrete mixer truck accident representation.', heroImage: 'concrete-mixer.jpg', category: 'Vehicle Accidents' },
  { slug: 'oversized-load-accident-lawyer', title: 'Oversized Load Accident Lawyer', shortTitle: 'Oversized Load Accidents', description: 'Wide load and oversized cargo accident claims.', heroImage: 'oversized-load.jpg', category: 'Vehicle Accidents' },
  { slug: 'head-on-collision-lawyer', title: 'Head-On Collision Lawyer', shortTitle: 'Head-On Collisions', description: 'Serious head-on collision injury claims.', heroImage: 'head-on.jpg', category: 'Vehicle Accidents' },
  { slug: 'rear-end-collision-lawyer', title: 'Rear-End Collision Lawyer', shortTitle: 'Rear-End Collisions', description: 'Rear-end accident injury representation.', heroImage: 'rear-end.jpg', category: 'Vehicle Accidents' },
  { slug: 't-bone-accident-lawyer', title: 'T-Bone Accident Lawyer', shortTitle: 'T-Bone Accidents', description: 'Side-impact and T-bone collision claims.', heroImage: 't-bone.jpg', category: 'Vehicle Accidents' },
  { slug: 'multi-vehicle-accident-lawyer', title: 'Multi-Vehicle Accident Lawyer', shortTitle: 'Multi-Vehicle Accidents', description: 'Complex multi-car pileup claims.', heroImage: 'multi-vehicle.jpg', category: 'Vehicle Accidents' },
  { slug: 'distracted-driving-lawyer', title: 'Distracted Driving Lawyer', shortTitle: 'Distracted Driving', description: 'Texting and distracted driver accident claims.', heroImage: 'distracted-driving.jpg', category: 'Vehicle Accidents' },
  { slug: 'uninsured-motorist-lawyer', title: 'Uninsured Motorist Lawyer', shortTitle: 'Uninsured Motorist', description: 'UM/UIM claims against uninsured drivers.', heroImage: 'uninsured-motorist.jpg', category: 'Vehicle Accidents' },

  // Serious Injuries
  { slug: 'wrongful-death-lawyer', title: 'Wrongful Death Lawyer', shortTitle: 'Wrongful Death', description: 'Compassionate wrongful death representation for families.', heroImage: 'wrongful-death.jpg', category: 'Serious Injuries' },
  { slug: 'brain-injury-lawyer', title: 'Brain Injury Lawyer', shortTitle: 'Brain Injuries', description: 'Brain injury and head trauma legal representation.', heroImage: 'brain-injury.jpg', category: 'Serious Injuries' },
  { slug: 'traumatic-brain-injury-lawyer', title: 'Traumatic Brain Injury Lawyer', shortTitle: 'Traumatic Brain Injuries', description: 'TBI and head injury legal representation.', heroImage: 'brain-injury.jpg', category: 'Serious Injuries' },
  { slug: 'spinal-cord-injury-lawyer', title: 'Spinal Cord Injury Lawyer', shortTitle: 'Spinal Cord Injuries', description: 'Spinal cord and paralysis injury claims.', heroImage: 'spinal-cord.jpg', category: 'Serious Injuries' },
  { slug: 'burn-injury-lawyer', title: 'Burn Injury Lawyer', shortTitle: 'Burn Injuries', description: 'Serious burn injury compensation claims.', heroImage: 'burn-injury.jpg', category: 'Serious Injuries' },
  { slug: 'amputation-injury-lawyer', title: 'Amputation Injury Lawyer', shortTitle: 'Amputation Injuries', description: 'Limb loss and amputation injury claims.', heroImage: 'amputation.jpg', category: 'Serious Injuries' },
  { slug: 'paralysis-injury-lawyer', title: 'Paralysis Injury Lawyer', shortTitle: 'Paralysis Injuries', description: 'Paralysis and mobility loss claims.', heroImage: 'paralysis.jpg', category: 'Serious Injuries' },
  { slug: 'coma-injury-lawyer', title: 'Coma Injury Lawyer', shortTitle: 'Coma Injuries', description: 'Coma and severe brain injury claims.', heroImage: 'coma.jpg', category: 'Serious Injuries' },
  { slug: 'back-injury-lawyer', title: 'Back Injury Lawyer', shortTitle: 'Back Injuries', description: 'Back and spine injury representation.', heroImage: 'back-injury.jpg', category: 'Serious Injuries' },
  { slug: 'neck-injury-lawyer', title: 'Neck Injury Lawyer', shortTitle: 'Neck Injuries', description: 'Neck injury and whiplash claims.', heroImage: 'neck-injury.jpg', category: 'Serious Injuries' },
  { slug: 'whiplash-injury-lawyer', title: 'Whiplash Injury Lawyer', shortTitle: 'Whiplash Injuries', description: 'Whiplash and soft tissue claims.', heroImage: 'whiplash.jpg', category: 'Serious Injuries' },
  { slug: 'broken-bones-lawyer', title: 'Broken Bones Lawyer', shortTitle: 'Broken Bones', description: 'Fracture and broken bone injury claims.', heroImage: 'broken-bones.jpg', category: 'Serious Injuries' },
  { slug: 'concussion-injury-lawyer', title: 'Concussion Injury Lawyer', shortTitle: 'Concussion Injuries', description: 'Concussion and mild TBI claims.', heroImage: 'concussion.jpg', category: 'Serious Injuries' },
  { slug: 'internal-injuries-lawyer', title: 'Internal Injuries Lawyer', shortTitle: 'Internal Injuries', description: 'Internal bleeding and organ damage claims.', heroImage: 'internal-injuries.jpg', category: 'Serious Injuries' },
  { slug: 'nerve-damage-lawyer', title: 'Nerve Damage Lawyer', shortTitle: 'Nerve Damage', description: 'Nerve damage and neuropathy claims.', heroImage: 'nerve-damage.jpg', category: 'Serious Injuries' },
  { slug: 'soft-tissue-injury-lawyer', title: 'Soft Tissue Injury Lawyer', shortTitle: 'Soft Tissue Injuries', description: 'Muscle, tendon, and ligament injury claims.', heroImage: 'soft-tissue.jpg', category: 'Serious Injuries' },
  { slug: 'joint-injury-lawyer', title: 'Joint Injury Lawyer', shortTitle: 'Joint Injuries', description: 'Joint damage and mobility claims.', heroImage: 'joint-injury.jpg', category: 'Serious Injuries' },
  { slug: 'road-rash-lawyer', title: 'Road Rash Lawyer', shortTitle: 'Road Rash', description: 'Motorcycle road rash injury claims.', heroImage: 'road-rash.jpg', category: 'Serious Injuries' },
  { slug: 'scarring-disfigurement-lawyer', title: 'Scarring & Disfigurement Lawyer', shortTitle: 'Scarring & Disfigurement', description: 'Permanent scarring and disfigurement claims.', heroImage: 'scarring.jpg', category: 'Serious Injuries' },
  { slug: 'repetitive-stress-injury-lawyer', title: 'Repetitive Stress Injury Lawyer', shortTitle: 'Repetitive Stress Injuries', description: 'RSI and repetitive motion injury claims.', heroImage: 'repetitive-stress.jpg', category: 'Serious Injuries' },

  // Workplace & Premises
  { slug: 'work-injury-lawyer', title: 'Work Injury Lawyer', shortTitle: 'Work Injuries', description: 'Work injury and on-the-job accident claims.', heroImage: 'workplace.jpg', category: 'Workplace & Premises' },
  { slug: 'workplace-injury-lawyer', title: 'Workplace Injury Lawyer', shortTitle: 'Workplace Injuries', description: 'Work injury and on-the-job accident claims.', heroImage: 'workplace.jpg', category: 'Workplace & Premises' },
  { slug: 'construction-accident-lawyer', title: 'Construction Accident Lawyer', shortTitle: 'Construction Accidents', description: 'Construction site injury representation.', heroImage: 'construction.jpg', category: 'Workplace & Premises' },
  { slug: 'oil-field-injury-lawyer', title: 'Oil Field Injury Lawyer', shortTitle: 'Oil Field Injuries', description: 'Oilfield and energy sector injury claims.', heroImage: 'oil-field.jpg', category: 'Workplace & Premises' },
  { slug: 'machinery-accident-lawyer', title: 'Machinery Accident Lawyer', shortTitle: 'Machinery Accidents', description: 'Industrial machinery injury claims.', heroImage: 'machinery.jpg', category: 'Workplace & Premises' },
  { slug: 'electrocution-injury-lawyer', title: 'Electrocution Injury Lawyer', shortTitle: 'Electrocution Injuries', description: 'Electrical shock and electrocution claims.', heroImage: 'electrocution.jpg', category: 'Workplace & Premises' },
  { slug: 'fall-from-height-lawyer', title: 'Fall From Height Lawyer', shortTitle: 'Falls From Height', description: 'Ladder, scaffold, and height fall claims.', heroImage: 'fall-from-height.jpg', category: 'Workplace & Premises' },
  { slug: 'workplace-burn-lawyer', title: 'Workplace Burn Lawyer', shortTitle: 'Workplace Burns', description: 'Workplace burn and chemical burn claims.', heroImage: 'workplace-burn.jpg', category: 'Workplace & Premises' },
  { slug: 'workplace-vehicle-accident-lawyer', title: 'Workplace Vehicle Accident Lawyer', shortTitle: 'Workplace Vehicle Accidents', description: 'Forklift and workplace vehicle claims.', heroImage: 'workplace-vehicle.jpg', category: 'Workplace & Premises' },
  { slug: 'toxic-exposure-lawyer', title: 'Toxic Exposure Lawyer', shortTitle: 'Toxic Exposure', description: 'Chemical and toxic substance claims.', heroImage: 'toxic-exposure.jpg', category: 'Workplace & Premises' },
  { slug: 'slip-and-fall-lawyer', title: 'Slip and Fall Lawyer', shortTitle: 'Slip & Fall', description: 'Premises liability slip and fall claims.', heroImage: 'slip-and-fall.jpg', category: 'Workplace & Premises' },
  { slug: 'premises-liability-lawyer', title: 'Premises Liability Lawyer', shortTitle: 'Premises Liability', description: 'Property owner negligence claims.', heroImage: 'premises-liability.jpg', category: 'Workplace & Premises' },
  { slug: 'dog-bite-lawyer', title: 'Dog Bite Lawyer', shortTitle: 'Dog Bites', description: 'Dog attack and animal bite claims.', heroImage: 'dog-bite.jpg', category: 'Workplace & Premises' },
  { slug: 'wet-floor-accident-lawyer', title: 'Wet Floor Accident Lawyer', shortTitle: 'Wet Floor Accidents', description: 'Wet floor slip and fall claims.', heroImage: 'wet-floor.jpg', category: 'Workplace & Premises' },
  { slug: 'stairway-accident-lawyer', title: 'Stairway Accident Lawyer', shortTitle: 'Stairway Accidents', description: 'Stairway fall injury claims.', heroImage: 'stairway.jpg', category: 'Workplace & Premises' },
  { slug: 'uneven-surface-accident-lawyer', title: 'Uneven Surface Accident Lawyer', shortTitle: 'Uneven Surface Accidents', description: 'Trip and fall on uneven surfaces.', heroImage: 'uneven-surface.jpg', category: 'Workplace & Premises' },
  { slug: 'poor-lighting-accident-lawyer', title: 'Poor Lighting Accident Lawyer', shortTitle: 'Poor Lighting Accidents', description: 'Inadequate lighting injury claims.', heroImage: 'poor-lighting.jpg', category: 'Workplace & Premises' },
  { slug: 'cluttered-aisle-accident-lawyer', title: 'Cluttered Aisle Accident Lawyer', shortTitle: 'Cluttered Aisle Accidents', description: 'Store aisle hazard claims.', heroImage: 'cluttered-aisle.jpg', category: 'Workplace & Premises' },
  { slug: 'weather-related-fall-lawyer', title: 'Weather-Related Fall Lawyer', shortTitle: 'Weather-Related Falls', description: 'Ice, snow, and weather hazard claims.', heroImage: 'weather-related.jpg', category: 'Workplace & Premises' },
  { slug: 'medical-malpractice-lawyer', title: 'Medical Malpractice Lawyer', shortTitle: 'Medical Malpractice', description: 'Doctor and hospital negligence claims.', heroImage: 'medical-malpractice.jpg', category: 'Workplace & Premises' },
  { slug: 'product-liability-lawyer', title: 'Product Liability Lawyer', shortTitle: 'Product Liability', description: 'Defective product injury claims.', heroImage: 'product-liability.jpg', category: 'Workplace & Premises' },

  // Civil Rights
  { slug: 'police-brutality-lawyer', title: 'Police Brutality Lawyer', shortTitle: 'Police Brutality', description: 'Police misconduct and brutality claims.', heroImage: 'police-brutality.jpg', category: 'Civil Rights' },
  { slug: 'excessive-force-lawyer', title: 'Excessive Force Lawyer', shortTitle: 'Excessive Force', description: 'Law enforcement excessive force claims.', heroImage: 'excessive-force.jpg', category: 'Civil Rights' },
  { slug: 'wrongful-arrest-lawyer', title: 'Wrongful Arrest Lawyer', shortTitle: 'Wrongful Arrest', description: 'False arrest and wrongful detention claims.', heroImage: 'wrongful-arrest.jpg', category: 'Civil Rights' },
  { slug: 'false-imprisonment-lawyer', title: 'False Imprisonment Lawyer', shortTitle: 'False Imprisonment', description: 'Unlawful detention and imprisonment claims.', heroImage: 'false-imprisonment.jpg', category: 'Civil Rights' },
  { slug: 'malicious-prosecution-lawyer', title: 'Malicious Prosecution Lawyer', shortTitle: 'Malicious Prosecution', description: 'Wrongful prosecution civil claims.', heroImage: 'malicious-prosecution.jpg', category: 'Civil Rights' },
  { slug: 'illegal-search-seizure-lawyer', title: 'Illegal Search & Seizure Lawyer', shortTitle: 'Illegal Search & Seizure', description: 'Fourth Amendment violation claims.', heroImage: 'illegal-search.jpg', category: 'Civil Rights' },
  { slug: 'police-shooting-lawyer', title: 'Police Shooting Lawyer', shortTitle: 'Police Shootings', description: 'Officer-involved shooting claims.', heroImage: 'police-shooting.jpg', category: 'Civil Rights' },
  { slug: 'jail-prison-abuse-lawyer', title: 'Jail/Prison Abuse Lawyer', shortTitle: 'Jail/Prison Abuse', description: 'Inmate abuse and neglect claims.', heroImage: 'jail-abuse.jpg', category: 'Civil Rights' },
  { slug: 'racial-profiling-lawyer', title: 'Racial Profiling Lawyer', shortTitle: 'Racial Profiling', description: 'Discriminatory policing claims.', heroImage: 'racial-profiling.jpg', category: 'Civil Rights' },
  { slug: 'first-amendment-retaliation-lawyer', title: 'First Amendment Retaliation Lawyer', shortTitle: 'First Amendment Retaliation', description: 'Free speech retaliation claims.', heroImage: 'first-amendment.jpg', category: 'Civil Rights' },
]

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find(area => area.slug === slug)
}

export function getPracticeAreasByCategory(category: string): PracticeArea[] {
  return practiceAreas.filter(area => area.category === category)
}

export const categories = Array.from(new Set(practiceAreas.map(area => area.category)))
