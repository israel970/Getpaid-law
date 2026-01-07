#!/usr/bin/env python3
"""
Generate city + case type landing pages for all cities.
Phase 2: San Antonio, Houston, Dallas, Rio Grande Valley, West Texas (60 pages)
Phase 3: Austin suburbs (108 pages)
"""

import os

# City data
CITIES = {
    "san-antonio": {
        "name": "San Antonio",
        "phone": "(512) 883-0012",
        "roads": ["I-35", "I-10", "Loop 410", "Loop 1604", "US-281", "US-90", "Highway 151"],
        "nearby": ["New Braunfels", "Seguin", "Schertz", "Boerne", "Leon Valley", "Alamo Heights"],
        "county": "Bexar County"
    },
    "houston": {
        "name": "Houston",
        "phone": "(512) 883-0012",
        "roads": ["I-45", "I-10", "US-59/I-69", "Beltway 8", "Loop 610", "US-290", "Highway 288"],
        "nearby": ["Katy", "Sugar Land", "The Woodlands", "Pearland", "Pasadena", "Baytown"],
        "county": "Harris County"
    },
    "dallas": {
        "name": "Dallas",
        "phone": "(512) 883-0012",
        "roads": ["I-35E", "I-35W", "I-30", "I-20", "US-75", "Loop 12", "I-635 (LBJ)"],
        "nearby": ["Fort Worth", "Arlington", "Plano", "Irving", "Frisco", "Garland"],
        "county": "Dallas County"
    },
    "rio-grande-valley": {
        "name": "Rio Grande Valley",
        "phone": "(512) 883-0012",
        "roads": ["I-69E", "US-77", "US-83", "US-281", "Expressway 83", "I-2"],
        "nearby": ["McAllen", "Brownsville", "Harlingen", "Edinburg", "Mission", "Pharr"],
        "county": "Hidalgo and Cameron Counties"
    },
    "west-texas": {
        "name": "West Texas",
        "phone": "(512) 883-0012",
        "roads": ["I-20", "I-10", "US-87", "US-385", "Loop 250", "Highway 191"],
        "nearby": ["Midland", "Odessa", "Lubbock", "El Paso", "Amarillo", "San Angelo"],
        "county": "Midland and Ector Counties"
    },
    # Austin suburbs for Phase 3
    "round-rock": {
        "name": "Round Rock",
        "phone": "(512) 883-0012",
        "roads": ["I-35", "US-79", "SH-45", "FM 1431", "University Blvd", "A.W. Grimes Blvd"],
        "nearby": ["Austin", "Pflugerville", "Hutto", "Georgetown", "Cedar Park"],
        "county": "Williamson County"
    },
    "cedar-park": {
        "name": "Cedar Park",
        "phone": "(512) 883-0012",
        "roads": ["US-183", "FM 1431", "Whitestone Blvd", "Cypress Creek Rd", "Bell Blvd"],
        "nearby": ["Austin", "Leander", "Round Rock", "Lakeway", "Pflugerville"],
        "county": "Williamson County"
    },
    "pflugerville": {
        "name": "Pflugerville",
        "phone": "(512) 883-0012",
        "roads": ["SH-130", "FM 685", "Pecan Street", "Wells Branch Pkwy", "Grand Avenue Pkwy"],
        "nearby": ["Austin", "Round Rock", "Hutto", "Manor", "Cedar Park"],
        "county": "Travis County"
    },
    "georgetown": {
        "name": "Georgetown",
        "phone": "(512) 883-0012",
        "roads": ["I-35", "US-29", "FM 2338", "Williams Dr", "University Ave", "Inner Loop"],
        "nearby": ["Austin", "Round Rock", "Cedar Park", "Hutto", "Taylor"],
        "county": "Williamson County"
    },
    "san-marcos": {
        "name": "San Marcos",
        "phone": "(512) 883-0012",
        "roads": ["I-35", "SH-80", "Ranch Road 12", "Aquarena Springs Dr", "Hopkins St"],
        "nearby": ["Austin", "Kyle", "New Braunfels", "Wimberley", "Lockhart"],
        "county": "Hays County"
    },
    "kyle": {
        "name": "Kyle",
        "phone": "(512) 883-0012",
        "roads": ["I-35", "FM 150", "FM 2001", "Center Street", "Kohler's Crossing"],
        "nearby": ["Austin", "San Marcos", "Buda", "Wimberley", "Lockhart"],
        "county": "Hays County"
    },
    "leander": {
        "name": "Leander",
        "phone": "(512) 883-0012",
        "roads": ["US-183", "FM 2243", "Crystal Falls Pkwy", "Bagdad Rd", "Hero Way"],
        "nearby": ["Austin", "Cedar Park", "Georgetown", "Liberty Hill", "Round Rock"],
        "county": "Williamson County"
    },
    "lakeway": {
        "name": "Lakeway",
        "phone": "(512) 883-0012",
        "roads": ["RR 620", "Lakeway Blvd", "Lohmans Crossing", "Bee Caves Rd", "FM 2222"],
        "nearby": ["Austin", "Bee Cave", "Dripping Springs", "Spicewood", "Cedar Park"],
        "county": "Travis County"
    },
    "bee-cave": {
        "name": "Bee Cave",
        "phone": "(512) 883-0012",
        "roads": ["RR 620", "Highway 71", "Bee Caves Rd", "Hamilton Pool Rd", "Ladera Blvd"],
        "nearby": ["Austin", "Lakeway", "Dripping Springs", "West Lake Hills", "Spicewood"],
        "county": "Travis County"
    }
}

# Case type data (simplified for city pages - full data in austin script)
CASE_TYPES = {
    "car-accident": {
        "name": "Car Accident",
        "hero_image": "car-accident.jpg",
        "schema_service_type": "Car Accident Legal Services",
        "cards": [
            {"title": "Rear-End Collisions", "desc": "The most common type of accident in traffic. Even \"minor\" rear-end crashes can cause whiplash, herniated discs, and long-term neck and back problems."},
            {"title": "T-Bone Accidents", "desc": "Side-impact crashes at intersections can cause catastrophic injuries. Drivers who run red lights or fail to yield are typically liable."},
            {"title": "Head-On Collisions", "desc": "The most dangerous type of crash. Often caused by wrong-way drivers, distracted driving, or drivers crossing the center line."},
            {"title": "Hit and Run Accidents", "desc": "If a driver fled the scene, you may still have options. Your UM/UIM coverage can provide compensation while police search for the driver."},
            {"title": "Drunk Driving Accidents", "desc": "Drunk drivers can be held liable for both compensatory and punitive damages. DUI accidents can result in significant settlements."},
            {"title": "Distracted Driving", "desc": "Texting, eating, GPS use—distracted driving is now the leading cause of accidents. Phone records can prove the other driver was at fault."},
            {"title": "Uber & Lyft Accidents", "desc": "Rideshare accidents involve complex insurance issues. The driver's status determines which insurance applies."},
            {"title": "Uninsured Drivers", "desc": "Texas has one of the highest uninsured driver rates in the country. Your own UM/UIM coverage is critical for protection."},
            {"title": "Multi-Vehicle Pileups", "desc": "Multiple liable parties and insurance companies make these cases complex—but often more valuable."}
        ],
        "injury_links": [
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Neck Injuries", "url": "/neck-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "How much does a car accident lawyer cost?", "a": "Most car accident lawyers work on contingency, meaning you pay nothing upfront. The attorney only gets paid if you win your case, typically 33% of your settlement."},
            {"q": "How long do I have to file a car accident claim in Texas?", "a": "In Texas, you have 2 years from the date of the car accident to file a personal injury lawsuit. Contact an attorney as soon as possible."},
            {"q": "What should I do immediately after a car accident?", "a": "Call 911, seek medical attention, take photos, exchange information with other drivers but don't admit fault, and contact a car accident lawyer before giving recorded statements."},
            {"q": "Can I still recover damages if I was partially at fault?", "a": "Yes. Texas follows a 'modified comparative fault' rule. You can recover damages as long as you're not more than 50% at fault."}
        ]
    },
    "truck-accident": {
        "name": "Truck Accident",
        "hero_image": "truck-accident.jpg",
        "schema_service_type": "Truck Accident Legal Services",
        "cards": [
            {"title": "18-Wheeler Accidents", "desc": "The most common and often most severe truck accidents. These massive vehicles can cause catastrophic damage in any collision."},
            {"title": "Delivery Truck Accidents", "desc": "Amazon, FedEx, UPS, and other delivery trucks are everywhere. Their drivers often face pressure to make tight schedules."},
            {"title": "Tanker Truck Accidents", "desc": "Liquid cargo shifts during turns and braking, making tankers prone to rollovers. Chemical spills add additional hazards."},
            {"title": "Dump Truck Accidents", "desc": "Common around construction zones. Overloaded trucks and falling debris cause serious accidents."},
            {"title": "Garbage Truck Accidents", "desc": "Frequent stops and blind spots make garbage trucks dangerous. Cities and waste management companies can be held liable."},
            {"title": "Oversized Load Accidents", "desc": "Wide loads and heavy equipment create hazards. Permit violations can establish liability."},
            {"title": "Box Truck Accidents", "desc": "Often driven by inexperienced operators. Moving trucks and rental vehicles are involved in many accidents."},
            {"title": "Tow Truck Accidents", "desc": "Emergency stops and roadside work create dangerous situations. Improperly secured vehicles can cause additional crashes."},
            {"title": "Concrete Mixer Accidents", "desc": "Heavy, top-heavy vehicles common around construction. Rollovers and crushing injuries are common."}
        ],
        "injury_links": [
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Who can be held liable in a truck accident?", "a": "Multiple parties may be liable: the truck driver, the trucking company, the cargo loading company, the truck manufacturer, and maintenance providers."},
            {"q": "What federal regulations apply to truck accidents?", "a": "Trucking companies must follow FMCSA regulations including hours of service limits, mandatory rest breaks, drug and alcohol testing, and vehicle maintenance requirements."},
            {"q": "How is a truck accident case different from a car accident?", "a": "Truck accidents involve more complex liability, larger insurance policies ($750,000 minimum federal requirement), federal regulations, and electronic logging devices."},
            {"q": "How much is a truck accident case worth?", "a": "Truck accident cases typically involve more severe injuries and higher settlements than car accidents. Cases involving permanent injuries can be worth millions."}
        ]
    },
    "18-wheeler-accident": {
        "name": "18-Wheeler Accident",
        "hero_image": "18-wheeler.jpg",
        "schema_service_type": "18-Wheeler Accident Legal Services",
        "cards": [
            {"title": "Driver Fatigue", "desc": "Despite federal hours-of-service regulations, many truckers drive while exhausted. A fatigued driver is as dangerous as a drunk driver."},
            {"title": "Speeding & Aggressive Driving", "desc": "Pressure to meet delivery deadlines leads to speeding and aggressive driving. Trucks need much more distance to stop than cars."},
            {"title": "Distracted Driving", "desc": "Long hours lead to cell phone use, eating, and other distractions. At 65 mph, looking at a phone for 5 seconds means traveling blind for 500 feet."},
            {"title": "Improper Loading", "desc": "Overloaded or improperly secured cargo can shift during transit, causing loss of control or cargo spills."},
            {"title": "Inadequate Maintenance", "desc": "Brake failures, tire blowouts, and other mechanical failures often result from cutting corners on maintenance."},
            {"title": "Blind Spot Accidents", "desc": "18-wheelers have massive blind spots on all four sides. \"No-zones\" accidents are common when trucks change lanes."},
            {"title": "Wide Turn Accidents", "desc": "Trucks need extra space to turn right. Cars caught between a turning truck and the curb can be crushed."},
            {"title": "Jackknife Accidents", "desc": "When the trailer swings out at an angle to the cab, the truck can sweep across multiple lanes of traffic."},
            {"title": "Underride Accidents", "desc": "When a car slides under a truck's trailer, the results are often fatal. Many trucks lack adequate underride guards."}
        ],
        "injury_links": [
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Paralysis", "url": "/paralysis-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Wrongful Death", "url": "/wrongful-death-lawyer/"}
        ],
        "faqs": [
            {"q": "What makes 18-wheeler accident cases different?", "a": "18-wheeler cases involve federal regulations, multiple potentially liable parties, larger insurance policies, and more severe injuries requiring specialized legal expertise."},
            {"q": "What is the minimum insurance for 18-wheelers?", "a": "Federal law requires commercial trucks to carry at least $750,000 in liability coverage—trucks hauling hazardous materials must carry up to $5 million."},
            {"q": "How do I prove the trucking company is liable?", "a": "Trucking companies can be liable for negligent hiring, inadequate training, pressuring drivers to violate hours-of-service rules, and failing to maintain vehicles."},
            {"q": "What is a black box in a truck?", "a": "Commercial trucks have electronic control modules (ECMs) that record speed, braking, and other data that can prove a driver was at fault."}
        ]
    },
    "motorcycle-accident": {
        "name": "Motorcycle Accident",
        "hero_image": "motorcycle-accident.jpg",
        "schema_service_type": "Motorcycle Accident Legal Services",
        "cards": [
            {"title": "Left-Turn Accidents", "desc": "The most common motorcycle crash. A car turns left in front of an oncoming motorcycle because the driver \"didn't see\" the bike."},
            {"title": "Lane Change Accidents", "desc": "Drivers fail to check blind spots before changing lanes, sideswiping motorcycles."},
            {"title": "Rear-End Collisions", "desc": "Drivers following too closely rear-end stopped motorcycles. Without a protective cage, these crashes cause serious injuries."},
            {"title": "Door Accidents", "desc": "A parked driver opens their door into traffic without looking, directly into the path of a motorcyclist."},
            {"title": "Road Hazard Accidents", "desc": "Potholes, debris, and poor road conditions that cars can ignore can be deadly for motorcycles. Cities can be held liable."},
            {"title": "Intersection Collisions", "desc": "Running red lights and stop signs causes devastating T-bone crashes with motorcycles."},
            {"title": "Drunk Driver Accidents", "desc": "Impaired drivers pose extreme danger to motorcyclists. Punitive damages may be available in these cases."},
            {"title": "Distracted Driver Accidents", "desc": "Texting drivers are especially dangerous to motorcyclists because bikes are less visible than cars."},
            {"title": "Highway Accidents", "desc": "High-speed crashes on major highways often result in catastrophic injuries or death."}
        ],
        "injury_links": [
            {"name": "Road Rash", "url": "/road-rash-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Scarring & Disfigurement", "url": "/scarring-disfigurement-lawyer/"}
        ],
        "faqs": [
            {"q": "Does Texas require motorcycle helmets?", "a": "Texas requires helmets for riders under 21 and riders without approved safety courses or insurance."},
            {"q": "How do you overcome bias against motorcyclists?", "a": "We document your safe riding history, gather witness statements, use accident reconstruction experts, and emphasize the other driver's negligence."},
            {"q": "What if the driver says they didn't see me?", "a": "\"I didn't see the motorcycle\" is not a valid defense. All drivers have a duty to look for motorcycles. Failure to see what's there is negligence."},
            {"q": "What's the average motorcycle accident settlement?", "a": "Motorcycle accidents typically result in more severe injuries than car accidents, leading to higher settlements. Permanent injuries often settle for six or seven figures."}
        ]
    },
    "uber-lyft-accident": {
        "name": "Uber & Lyft Accident",
        "hero_image": "rideshare.jpg",
        "schema_service_type": "Rideshare Accident Legal Services",
        "cards": [
            {"title": "Passenger Injuries", "desc": "If you were injured as an Uber or Lyft passenger, you have the clearest path to compensation—up to $1 million in coverage."},
            {"title": "Accidents with Rideshare Drivers", "desc": "If an Uber or Lyft driver hit your car, insurance coverage depends on their app status at the time of the crash."},
            {"title": "Pedestrian Accidents", "desc": "Rideshare drivers distracted by the app often hit pedestrians. These cases can involve both rideshare and personal insurance."},
            {"title": "Bicycle Accidents", "desc": "Rideshare drivers making quick pickups and drop-offs create hazards for cyclists."},
            {"title": "Rideshare Driver Injuries", "desc": "If you drive for Uber or Lyft and were injured by another driver, you may have claims against multiple policies."},
            {"title": "Parking Lot Accidents", "desc": "Rideshare pickups and drop-offs in parking lots lead to frequent accidents. Coverage can be complex."},
            {"title": "Airport Accidents", "desc": "Busy rideshare zones at airports see frequent accidents due to congested conditions."},
            {"title": "Drunk Passenger Interference", "desc": "When passengers distract or interfere with drivers causing accidents, liability can extend to the passenger."},
            {"title": "App Malfunction Accidents", "desc": "When the app directs drivers into dangerous situations, Uber or Lyft may share liability."}
        ],
        "injury_links": [
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Neck Injuries", "url": "/neck-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "How much insurance do Uber and Lyft carry?", "a": "When a driver has a passenger or is en route to pickup, both companies provide up to $1 million in liability coverage."},
            {"q": "What if the rideshare driver's app was off?", "a": "If the driver's app was completely off, only their personal auto insurance applies. Many personal policies exclude commercial activity."},
            {"q": "Can I sue Uber or Lyft directly?", "a": "It's difficult because drivers are classified as independent contractors. However, their insurance policies provide substantial coverage."},
            {"q": "What should I do after a rideshare accident?", "a": "Get the driver's info, take screenshots of the app showing trip details, photograph the scene, seek medical attention, and contact an attorney."}
        ]
    },
    "drunk-driving-accident": {
        "name": "Drunk Driving Accident",
        "hero_image": "drunk-driving.jpg",
        "schema_service_type": "Drunk Driving Accident Legal Services",
        "cards": [
            {"title": "The Drunk Driver", "desc": "The driver is liable for choosing to drive while intoxicated. Criminal DWI charges don't prevent you from filing a civil lawsuit."},
            {"title": "Bars & Restaurants", "desc": "Texas dram shop laws hold establishments liable for over-serving visibly intoxicated customers who then cause accidents."},
            {"title": "Party Hosts", "desc": "Social hosts who serve alcohol to minors can be liable if that minor causes a drunk driving accident."},
            {"title": "Employers", "desc": "If the drunk driver was at a work event, the employer may be liable for providing or allowing excessive alcohol consumption."},
            {"title": "Liquor Stores", "desc": "Retailers who sell alcohol to visibly intoxicated persons or minors can be held liable under dram shop laws."},
            {"title": "Vehicle Owners", "desc": "If someone lent their car to a person they knew was intoxicated, they may share liability."},
            {"title": "Nightclub Promoters", "desc": "Event promoters who encourage excessive drinking may bear some liability."},
            {"title": "Country Clubs", "desc": "Private clubs that over-serve members can be held to dram shop standards."},
            {"title": "Wedding Venues", "desc": "Venues that continue serving visibly intoxicated guests can be liable for accidents that result."}
        ],
        "injury_links": [
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Wrongful Death", "url": "/wrongful-death-lawyer/"}
        ],
        "faqs": [
            {"q": "What are punitive damages?", "a": "Punitive damages are additional compensation beyond your actual losses, designed to punish the drunk driver for reckless behavior."},
            {"q": "What is Texas dram shop law?", "a": "Texas law holds bars, restaurants, and liquor stores liable if they serve alcohol to a visibly intoxicated person who then causes an accident."},
            {"q": "What if the drunk driver has no insurance?", "a": "Dram shop claims against bars, uninsured motorist coverage, and the drunk driver's personal assets can all provide compensation."},
            {"q": "Does a DWI conviction help my civil case?", "a": "Yes. A criminal conviction or arrest for DWI provides strong evidence of intoxication for your civil case."}
        ]
    },
    "hit-and-run": {
        "name": "Hit and Run",
        "hero_image": "hit-and-run.jpg",
        "schema_service_type": "Hit and Run Accident Legal Services",
        "cards": [
            {"title": "Uninsured Motorist Claims", "desc": "Your own UM coverage treats a hit and run like an uninsured driver—potentially providing full compensation even if the driver is never found."},
            {"title": "Driver Investigation", "desc": "Surveillance cameras, witness descriptions, license plate readers, and vehicle debris can help identify the fleeing driver."},
            {"title": "Police Coordination", "desc": "We work with local police and surrounding agencies to share information and increase chances of finding the driver."},
            {"title": "Insurance Bad Faith", "desc": "If your insurer unreasonably denies or delays your UM claim, you may have additional claims against them."},
            {"title": "Underinsured Claims", "desc": "If the driver is found but has minimal insurance, your UIM coverage can fill the gap."},
            {"title": "Third Party Liability", "desc": "Sometimes a third party—like a bar that over-served the driver—shares liability and provides additional compensation."},
            {"title": "Medical Payment Coverage", "desc": "Your MedPay coverage provides immediate medical expense coverage regardless of who was at fault."},
            {"title": "Collision Coverage", "desc": "Your collision coverage can repair or replace your vehicle while we pursue other compensation."},
            {"title": "Crime Victim Compensation", "desc": "Texas has a Crime Victims' Compensation Program that can help with expenses while your case proceeds."}
        ],
        "injury_links": [
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"}
        ],
        "faqs": [
            {"q": "Can I get compensation if the driver is never found?", "a": "Yes. If you have uninsured motorist (UM) coverage, you can file a claim with your own insurance company."},
            {"q": "What should I do immediately after a hit and run?", "a": "Call 911 immediately, try to remember details about the vehicle, look for witnesses and surveillance cameras, seek medical attention, and contact an attorney."},
            {"q": "How do you find hit and run drivers?", "a": "We review surveillance footage, interview witnesses, check license plate readers, and examine vehicle debris."},
            {"q": "Will my rates go up if I file a UM claim?", "a": "Texas law prohibits insurance companies from raising your rates solely because you filed an uninsured motorist claim."}
        ]
    },
    "wrongful-death": {
        "name": "Wrongful Death",
        "hero_image": "wrongful-death.jpg",
        "schema_service_type": "Wrongful Death Legal Services",
        "cards": [
            {"title": "Car Accidents", "desc": "Traffic fatalities are among the most common wrongful death cases. Negligent, drunk, or distracted drivers can be held liable."},
            {"title": "Truck Accidents", "desc": "Commercial truck crashes frequently result in fatalities due to the size disparity between trucks and passenger vehicles."},
            {"title": "Workplace Accidents", "desc": "Third-party negligence or intentional employer misconduct can support wrongful death suits beyond workers' comp."},
            {"title": "Medical Malpractice", "desc": "When doctors, nurses, or hospitals make fatal errors, families can pursue wrongful death damages."},
            {"title": "Defective Products", "desc": "Dangerous products from vehicles to medications can cause deaths that result in manufacturer liability."},
            {"title": "Premises Liability", "desc": "Property owners who fail to address hazards that cause fatal accidents can be held liable."},
            {"title": "Criminal Acts", "desc": "Even when a criminal is prosecuted, families can pursue civil wrongful death claims separately."},
            {"title": "Nursing Home Abuse", "desc": "When nursing home neglect or abuse causes death, facilities and staff can be held liable."},
            {"title": "Drowning", "desc": "Pool owners, property managers, and product manufacturers may be liable for drowning deaths."}
        ],
        "injury_links": [],
        "faqs": [
            {"q": "Who can file a wrongful death lawsuit in Texas?", "a": "The surviving spouse, children, and parents of the deceased can file. If they don't file within three months, the estate's executor may file."},
            {"q": "What compensation is available in wrongful death cases?", "a": "Families can recover lost income, funeral expenses, loss of companionship, mental anguish, and loss of inheritance."},
            {"q": "What's the difference between wrongful death and survival claims?", "a": "Wrongful death compensates surviving family members. Survival claims compensate the estate for the deceased's pain and suffering before death."},
            {"q": "How long do we have to file a wrongful death lawsuit?", "a": "Texas has a 2-year statute of limitations for wrongful death claims, typically starting on the date of death."}
        ]
    },
    "slip-and-fall": {
        "name": "Slip and Fall",
        "hero_image": "slip-and-fall.jpg",
        "schema_service_type": "Slip and Fall Legal Services",
        "cards": [
            {"title": "Wet Floors", "desc": "Spilled liquids, freshly mopped floors without warning signs, and tracked-in rain are major slip hazards."},
            {"title": "Uneven Surfaces", "desc": "Cracked sidewalks, parking lot potholes, raised floor tiles, and transition strips cause many trip and fall injuries."},
            {"title": "Stairs & Steps", "desc": "Missing handrails, broken steps, inconsistent step heights, and poor lighting make staircases dangerous."},
            {"title": "Poor Lighting", "desc": "Inadequate lighting in parking lots, stairwells, and walkways prevents people from seeing hazards."},
            {"title": "Cluttered Aisles", "desc": "Stock in walkways, merchandise displays, and debris create tripping hazards in stores and warehouses."},
            {"title": "Weather Conditions", "desc": "Ice, snow, and rain create hazards that property owners must address promptly."},
            {"title": "Defective Flooring", "desc": "Worn carpet, loose floor tiles, and warped wood create hidden hazards."},
            {"title": "Parking Lot Hazards", "desc": "Potholes, speed bumps, wheel stops, and poor drainage cause falls in parking areas."},
            {"title": "Elevator & Escalator Defects", "desc": "Mechanical malfunctions in elevators and escalators can cause serious fall injuries."}
        ],
        "injury_links": [
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Joint Injuries", "url": "/joint-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "How do I prove the property owner was negligent?", "a": "You must show a dangerous condition existed, the owner knew about it, they failed to fix it or warn visitors, and this caused your injury."},
            {"q": "What if there was a 'Wet Floor' sign?", "a": "A warning sign doesn't automatically protect the owner. If the sign was inadequate or poorly placed, they can still be liable."},
            {"q": "What if I was partially at fault for my fall?", "a": "Texas comparative fault rules apply. You can recover damages if you were 50% or less at fault."},
            {"q": "How long do I have to file a slip and fall lawsuit?", "a": "Texas has a 2-year statute of limitations. But property owners often destroy surveillance footage quickly, so contact an attorney immediately."}
        ]
    },
    "work-injury": {
        "name": "Work Injury",
        "hero_image": "workplace-injury.jpg",
        "schema_service_type": "Work Injury Legal Services",
        "cards": [
            {"title": "Construction Accidents", "desc": "Falls, equipment accidents, and electrocutions are common on construction sites. Multiple liable parties may exist."},
            {"title": "Oil Field Injuries", "desc": "Texas oil field work is among the most dangerous. Explosions, toxic exposure, and equipment failures cause severe injuries."},
            {"title": "Falls from Heights", "desc": "Inadequate fall protection, scaffolding failures, and ladder accidents cause serious workplace injuries."},
            {"title": "Machinery Accidents", "desc": "Unguarded machines, lock-out/tag-out failures, and equipment malfunctions lead to crush injuries and amputations."},
            {"title": "Vehicle Accidents", "desc": "Forklifts, company vehicles, and equipment collisions cause many workplace injuries."},
            {"title": "Toxic Exposure", "desc": "Chemical exposure, asbestos, and hazardous materials can cause immediate injuries and long-term illness."},
            {"title": "Electrocution", "desc": "Electrical workers and construction workers face serious risk of electrocution and electrical burns."},
            {"title": "Repetitive Stress Injuries", "desc": "Carpal tunnel, back injuries, and other repetitive motion injuries develop over time and deserve compensation."},
            {"title": "Warehouse Injuries", "desc": "Heavy lifting, forklift accidents, and falling objects make warehouses dangerous workplaces."}
        ],
        "injury_links": [
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "What if my employer doesn't have workers' comp?", "a": "Texas doesn't require employers to carry workers' comp. Non-subscribers can be sued directly for full damages including pain and suffering."},
            {"q": "Can I sue someone other than my employer?", "a": "Yes. Third-party claims against equipment manufacturers, subcontractors, and property owners are not limited by workers' comp."},
            {"q": "What benefits does workers' comp provide?", "a": "Workers' comp covers medical expenses and provides wage replacement (typically 70% of wages). It doesn't cover pain and suffering."},
            {"q": "Can I be fired for filing a workers' comp claim?", "a": "Texas law prohibits retaliation for filing a workers' comp claim. If you're fired, you may have additional claims."}
        ]
    },
    "dog-bite": {
        "name": "Dog Bite",
        "hero_image": "dog-bite.jpg",
        "schema_service_type": "Dog Bite Legal Services",
        "cards": [
            {"title": "Known Dangerous Dog", "desc": "If the owner knew the dog had aggressive tendencies or had bitten before, they're liable for any attack."},
            {"title": "Negligent Handling", "desc": "Owners who fail to properly restrain, fence, or control their dogs can be liable even for first bites."},
            {"title": "Leash Law Violations", "desc": "Most Texas cities require dogs to be leashed in public. Violating leash laws can establish negligence."},
            {"title": "Landlord Liability", "desc": "Landlords who allow tenants to keep known dangerous dogs may share liability for attacks."},
            {"title": "Property Owner Liability", "desc": "Business owners and property managers can be liable if they allowed a dangerous dog on premises."},
            {"title": "Dog Walker Liability", "desc": "Professional dog walkers and pet sitters owe a duty of care that makes them liable for dogs they're handling."},
            {"title": "Harboring a Stray", "desc": "People who feed or shelter stray dogs may become liable for those dogs' behavior."},
            {"title": "Criminal Violations", "desc": "Owners of dogs declared dangerous by the city face strict liability and potential criminal charges."},
            {"title": "Breed-Specific Issues", "desc": "While Texas doesn't have breed bans, certain dogs' strength and tendencies affect damage calculations."}
        ],
        "injury_links": [
            {"name": "Scarring & Disfigurement", "url": "/scarring-disfigurement-lawyer/"},
            {"name": "Nerve Damage", "url": "/nerve-damage-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Does Texas have a one-bite rule?", "a": "Sort of. Owners aren't automatically liable for a first bite, but can be liable for negligence in controlling the dog or violating leash laws."},
            {"q": "What if the dog has never bitten anyone before?", "a": "You can still recover if the owner was negligent—failing to leash the dog, letting it roam, or ignoring aggressive behavior."},
            {"q": "What compensation can I recover for a dog bite?", "a": "Victims can recover medical expenses including plastic surgery, lost wages, pain and suffering, and disfigurement."},
            {"q": "What should I do after a dog bite?", "a": "Seek medical attention, report the bite to animal services, document your injuries with photos, get the owner's information, and contact an attorney."}
        ]
    },
    "brain-injury": {
        "name": "Brain Injury",
        "hero_image": "brain-injury.jpg",
        "schema_service_type": "Brain Injury Legal Services",
        "cards": [
            {"title": "Car Accidents", "desc": "The force of a collision can cause the brain to strike the inside of the skull, even without direct head impact."},
            {"title": "Motorcycle Accidents", "desc": "Riders suffer high rates of TBI even with helmets. The lack of vehicle protection makes head injuries common."},
            {"title": "Truck Accidents", "desc": "The massive force of commercial truck crashes causes severe TBIs, often with other traumatic injuries."},
            {"title": "Slip and Fall Accidents", "desc": "Falls are a leading cause of TBI, especially for older adults. Hitting concrete or tile floors causes serious head trauma."},
            {"title": "Workplace Accidents", "desc": "Falls from height, struck-by accidents, and equipment injuries cause many workplace TBIs."},
            {"title": "Assault", "desc": "Violent attacks, including those by inadequate security, can cause TBIs that result in civil liability."},
            {"title": "Sports Injuries", "desc": "Negligent coaching, unsafe equipment, and failure to follow concussion protocols can create liability."},
            {"title": "Medical Malpractice", "desc": "Surgical errors, anesthesia mistakes, and birth injuries can cause brain damage through medical negligence."},
            {"title": "Defective Products", "desc": "Helmets, vehicle safety systems, and other products that fail to protect against TBI may be defective."}
        ],
        "injury_links": [
            {"name": "Concussions", "url": "/concussion-injury-lawyer/"},
            {"name": "Coma", "url": "/coma-injury-lawyer/"},
            {"name": "Paralysis", "url": "/paralysis-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Nerve Damage", "url": "/nerve-damage-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"}
        ],
        "faqs": [
            {"q": "What are the symptoms of TBI?", "a": "Symptoms range from headaches and confusion to memory loss, personality changes, difficulty concentrating, and sleep problems."},
            {"q": "Why are TBI cases worth more than other injury cases?", "a": "TBIs often cause permanent impairment affecting every aspect of life. Cases must account for lifelong medical care and lost earning capacity."},
            {"q": "What experts are needed in a TBI case?", "a": "TBI cases typically require neurologists, neuropsychologists, radiologists, vocational experts, and life care planners."},
            {"q": "What if my TBI symptoms seem mild?", "a": "\"Mild\" TBIs can cause significant long-term problems. Always seek medical evaluation and legal consultation after any head injury."}
        ]
    }
}


def generate_page(city_slug, city_data, case_type_slug, case_data):
    """Generate the HTML page for a city + case type combination."""

    city_name = city_data["name"]
    case_name = case_data["name"]
    phone = city_data["phone"]
    roads = ", ".join(city_data["roads"][:5])
    nearby = ", ".join(city_data["nearby"][:4])

    title = f"{city_name} {case_name} Lawyer"
    page_slug = f"{city_slug}-{case_type_slug}-lawyer"

    h1 = f'{city_name} <span class="highlight">{case_name}</span> Lawyer Ready to Get You Paid'

    subtitle = f"Injured in a {case_name.lower()} in {city_name}? Insurance companies will try to lowball you. Our network of experienced {city_name} {case_name.lower()} attorneys fights for maximum compensation—and you pay nothing unless you win."

    meta_description = f"Injured in a {case_name.lower()} in {city_name}? Get matched with an experienced {case_name.lower()} lawyer today. Free consultation. No fees unless you win. Call {phone}."

    # Build cards HTML
    cards_html = ""
    for card in case_data["cards"]:
        cards_html += f'''                <div class="accident-card">
                    <h3>{card["title"]}</h3>
                    <p>{card["desc"]}</p>
                </div>
'''

    # Build injury links HTML
    injury_links_html = ""
    if case_data["injury_links"]:
        links = [f'<a href="{link["url"]}" class="injury-link">{link["name"]}</a>' for link in case_data["injury_links"]]
        injury_links_html = f'''<div class="injury-links">
            {chr(10).join(["            " + link for link in links])}
        </div>'''

    # Build FAQ HTML and schema
    faq_html = ""
    faq_schema_items = []
    for faq in case_data["faqs"]:
        q = faq["q"].replace("{city}", city_name)
        a = faq["a"].replace("{city}", city_name)
        faq_html += f'''
        <div class="faq-item">
            <div class="faq-question">{q}</div>
            <div class="faq-answer">{a}</div>
        </div>
'''
        escaped_answer = a.replace('"', '\\"')
        faq_schema_items.append(f'''            {{
                "@type": "Question",
                "name": "{q}",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{escaped_answer}"
                }}
            }}''')

    faq_schema = ",\n".join(faq_schema_items)

    why_need = f'''<p>Every year, {case_name.lower()} accidents cause serious injuries on {city_name} roads and highways. From the busy corridors of {roads} to neighborhood streets, {city_name} residents face risks every day. When an accident happens, insurance companies immediately start working to minimize what they pay—not to help you get better.</p>
        <p>An experienced {city_name} {case_name.lower()} lawyer levels the playing field. They handle the insurance adjusters, gather evidence, document your injuries, and fight for every dollar you deserve. Serving {city_name} and nearby areas including {nearby}.</p>
        <p>And because they work on contingency, you don't pay a dime unless they win your case.</p>'''

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | Free Consultation | GetPaid.law</title>

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7MSFEBBEWP"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag("js", new Date());
      gtag("config", "G-7MSFEBBEWP");
    </script>

    <!-- Microsoft Clarity -->
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){{
            c[a]=c[a]||function(){{(c[a].q=c[a].q||[]).push(arguments)}};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        }})(window, document, "clarity", "script", "uvdykjy6g2");
    </script>
    <meta name="description" content="{meta_description}">
    <link rel="canonical" href="https://www.getpaid.law/{page_slug}/">

    <!-- Schema Markup -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "{case_data["schema_service_type"]}",
        "provider": {{
            "@type": "LegalService",
            "name": "GetPaid.law",
            "telephone": "+1-512-883-0012"
        }},
        "areaServed": {{
            "@type": "City",
            "name": "{city_name}, Texas"
        }},
        "description": "Expert {case_name.lower()} attorneys in {city_name}, Texas. Free consultation, no fee unless you win your case."
    }}
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.callrail.com">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></noscript>
    <script type="text/javascript" async src="//cdn.callrail.com/companies/362899256/4008e07fcf3ba5d73fc1/12/swap.js"></script>

    <!-- Local Business Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "GetPaid.law - {title}s",
        "description": "Connect with top-rated {city_name} {case_name.lower()} attorneys. Serving {city_name} and surrounding areas.",
        "url": "https://www.getpaid.law/{page_slug}/",
        "telephone": "{phone}",
        "areaServed": {{
            "@type": "City",
            "name": "{city_name}"
        }},
        "priceRange": "Free Consultation"
    }}
    </script>

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
{faq_schema}
        ]
    }}
    </script>

    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        :root {{ --black: #0a0a0a; --dark: #141414; --gray: #1f1f1f; --light-gray: #a3a3a3; --white: #fafafa; --accent: #22c55e; --accent-hover: #16a34a; --red: #ef4444; }}
        body {{ font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background-color: var(--black); color: var(--white); line-height: 1.6; }}
        .header-wrapper {{ position: fixed; top: 0; left: 0; right: 0; background: var(--black); border-bottom: 1px solid var(--gray); z-index: 1000; }}
        header {{ padding: 1.5rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }}
        .header-spacer {{ height: 95px; }}
        .logo {{ font-size: 2rem; font-weight: 900; letter-spacing: -0.03em; text-decoration: none; color: var(--white); }}
        .logo span {{ color: var(--accent); }}
        .header-phone {{ display: flex; align-items: center; gap: 0.5rem; color: var(--white); text-decoration: none; font-weight: 700; font-size: 1.35rem; transition: color 0.2s; }}
        .header-phone:hover {{ color: var(--accent); }}
        .header-phone svg {{ width: 26px; height: 26px; }}
        .main-nav {{ display: flex; align-items: center; gap: 2rem; }}
        .nav-item {{ position: relative; }}
        .nav-link {{ color: var(--white); text-decoration: none; font-weight: 600; font-size: 1.05rem; padding: 0.5rem 0; display: flex; align-items: center; gap: 0.35rem; transition: color 0.2s; }}
        .nav-link:hover {{ color: var(--accent); }}
        .nav-link svg {{ width: 14px; height: 14px; transition: transform 0.2s; }}
        .nav-item:hover .nav-link svg {{ transform: rotate(180deg); }}
        .dropdown {{ position: absolute; top: 100%; left: 0; background: var(--dark); border: 1px solid var(--gray); border-radius: 8px; padding: 0.5rem 0; min-width: 200px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.2s; z-index: 1001; }}
        .nav-item:hover .dropdown {{ opacity: 1; visibility: visible; transform: translateY(0); }}
        .dropdown a {{ display: block; padding: 0.65rem 1.25rem; color: var(--light-gray); text-decoration: none; font-size: 1rem; transition: all 0.2s; }}
        .dropdown a:hover {{ background: var(--gray); color: var(--white); }}
        @media (max-width: 900px) {{ .main-nav {{ display: none; }} }}
        .hero {{ max-width: 1200px; margin: 0 auto; padding: 4rem 1.5rem 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }}
        .hero-content h1 {{ font-size: clamp(2.25rem, 4.5vw, 3.5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1.5rem; }}
        .hero-content h1 .highlight {{ color: var(--accent); }}
        .hero-content p {{ font-size: 1.35rem; color: var(--light-gray); margin-bottom: 2rem; max-width: 500px; }}
        .hero-cta {{ display: flex; flex-direction: column; gap: 1rem; }}
        .hero-image {{ position: relative; border-radius: 16px; overflow: hidden; }}
        .hero-image img {{ width: 100%; height: 100%; object-fit: cover; border-radius: 16px; min-height: 350px; }}
        .hero-image::after {{ content: ''; position: absolute; inset: 0; border: 2px solid var(--accent); border-radius: 16px; pointer-events: none; }}
        .phone-cta {{ display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem; background: var(--accent); color: var(--black); padding: 1.25rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.25rem; transition: all 0.2s; }}
        .phone-cta:hover {{ background: var(--accent-hover); transform: translateY(-2px); }}
        .phone-cta svg {{ width: 24px; height: 24px; }}
        .cta-subtext {{ font-size: 1rem; color: var(--light-gray); text-align: center; }}
        .content-section {{ max-width: 900px; margin: 0 auto; padding: 4rem 1.5rem; }}
        .content-section h2 {{ font-size: 2rem; font-weight: 800; margin-bottom: 1.5rem; color: var(--white); }}
        .content-section p {{ color: var(--light-gray); margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.8; }}
        .injury-links {{ display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }}
        .injury-link {{ display: inline-block; padding: 0.6rem 1.2rem; background: var(--gray); color: var(--white); text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 0.95rem; transition: all 0.2s; border: 1px solid transparent; }}
        .injury-link:hover {{ background: var(--accent); color: var(--black); border-color: var(--accent); }}
        .accident-types-section {{ background: var(--dark); padding: 4rem 1.5rem; }}
        .accident-types-content {{ max-width: 1200px; margin: 0 auto; }}
        .accident-types-content h2 {{ font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem; text-align: center; }}
        .accident-types-content > p {{ color: var(--light-gray); text-align: center; margin-bottom: 2.5rem; }}
        .accident-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }}
        .accident-card {{ background: var(--black); border: 1px solid var(--gray); border-radius: 12px; padding: 1.75rem; transition: border-color 0.2s; }}
        .accident-card:hover {{ border-color: var(--accent); }}
        .accident-card h3 {{ font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--white); }}
        .accident-card p {{ color: var(--light-gray); font-size: 1rem; }}
        .faq-section {{ max-width: 900px; margin: 0 auto; padding: 4rem 1.5rem; }}
        .faq-section h2 {{ font-size: 2rem; font-weight: 800; margin-bottom: 2rem; text-align: center; }}
        .faq-item {{ border-bottom: 1px solid var(--gray); padding: 1.5rem 0; }}
        .faq-item:first-of-type {{ border-top: 1px solid var(--gray); }}
        .faq-question {{ font-size: 1.1rem; font-weight: 600; color: var(--white); margin-bottom: 0.75rem; }}
        .faq-answer {{ color: var(--light-gray); font-size: 1rem; line-height: 1.7; }}
        .cta-section {{ text-align: center; padding: 5rem 1.5rem; background: linear-gradient(180deg, var(--dark) 0%, var(--black) 100%); }}
        .cta-section h2 {{ font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; }}
        .cta-section p {{ color: var(--light-gray); font-size: 1.15rem; max-width: 600px; margin: 0 auto 2rem; }}
        footer {{ border-top: 1px solid var(--gray); padding: 3rem 1.5rem; }}
        .footer-content {{ max-width: 1200px; margin: 0 auto; text-align: center; }}
        .footer-logo {{ font-size: 1.5rem; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 1.5rem; }}
        .footer-logo span {{ color: var(--accent); }}
        .footer-links {{ display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; }}
        .footer-links a {{ color: var(--light-gray); text-decoration: none; font-size: 1rem; transition: color 0.2s; }}
        .footer-links a:hover {{ color: var(--white); }}
        .footer-disclaimer {{ font-size: 0.8rem; color: #525252; max-width: 700px; margin: 0 auto; line-height: 1.6; }}
        @media (max-width: 900px) {{ .hero {{ grid-template-columns: 1fr; gap: 2.5rem; padding-top: 2rem; }} .hero-image {{ order: -1; }} .hero-image img {{ min-height: 250px; max-height: 300px; }} .accident-grid {{ grid-template-columns: 1fr; }} }}
        @media (max-width: 600px) {{ .header-phone span {{ display: none; }} .hero-content h1 {{ font-size: 2rem; }} .content-section h2, .accident-types-content h2, .faq-section h2 {{ font-size: 1.6rem; }} }}
        .mobile-menu-btn {{ display: none; align-items: center; justify-content: center; background: none; border: none; cursor: pointer; padding: 0.5rem; margin-left: 0.5rem; }}
        .mobile-menu-btn svg {{ width: 28px; height: 28px; color: white; }}
        .mobile-menu-btn .close-icon {{ display: none; }}
        .mobile-menu-btn.active .menu-icon {{ display: none; }}
        .mobile-menu-btn.active .close-icon {{ display: block; }}
        .mobile-menu {{ display: none; position: fixed; top: 70px; left: 0; right: 0; bottom: 0; background: #0a0a0a; z-index: 999; padding: 1rem; overflow-y: auto; flex-direction: column; }}
        .mobile-menu.active {{ display: flex; }}
        .mobile-nav-link {{ display: block; padding: 1rem; color: white; text-decoration: none; font-size: 1.125rem; font-weight: 500; border-bottom: 1px solid #1a1a1a; }}
        .mobile-nav-section {{ border-bottom: 1px solid #1a1a1a; }}
        .mobile-nav-header {{ display: flex; justify-content: space-between; align-items: center; padding: 1rem; color: white; font-size: 1.125rem; font-weight: 500; cursor: pointer; }}
        .mobile-nav-header svg {{ width: 20px; height: 20px; transition: transform 0.3s ease; }}
        .mobile-nav-header.active svg {{ transform: rotate(180deg); }}
        .mobile-dropdown {{ display: none; padding-left: 1rem; padding-bottom: 0.5rem; }}
        .mobile-dropdown.active {{ display: block; }}
        .mobile-dropdown a {{ display: block; padding: 0.75rem 1rem; color: #a0a0a0; text-decoration: none; font-size: 1rem; }}
        .mobile-phone-btn {{ display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1.5rem; padding: 1rem; background: #00ff88; color: #0a0a0a; text-decoration: none; font-size: 1.125rem; font-weight: 600; border-radius: 8px; }}
        @media (max-width: 900px) {{ .mobile-menu-btn {{ display: flex; }} }}
        @media (min-width: 901px) {{ .mobile-menu-btn {{ display: none; }} .mobile-menu {{ display: none !important; }} }}
    </style>
</head>
<body>
    <div class="header-wrapper">
        <header>
            <a href="/" class="logo">Get<span>Paid</span></a>
            <nav class="main-nav">
                <a href="/" class="nav-link">Home</a>
                <div class="nav-item">
                    <span class="nav-link" style="cursor: pointer;">Practice Areas <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
                    <div class="dropdown">
                        <a href="/car-accident-lawyer/">Car Accidents</a>
                        <a href="/truck-accident-lawyer/">Truck Accidents</a>
                        <a href="/motorcycle-accident-lawyer/">Motorcycle Accidents</a>
                        <a href="/wrongful-death-lawyer/">Wrongful Death</a>
                        <a href="/slip-and-fall-lawyer/">Slip & Fall</a>
                        <a href="/workplace-injury-lawyer/">Workplace Injuries</a>
                        <a href="/police-brutality-lawyer/">Police Brutality</a>
                    </div>
                </div>
                <div class="nav-item">
                    <span class="nav-link" style="cursor: pointer;">Locations <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></span>
                    <div class="dropdown">
                        <a href="/austin-personal-injury-lawyer/">Austin Area</a>
                        <a href="/san-antonio-personal-injury-lawyer/">San Antonio Area</a>
                        <a href="/houston-personal-injury-lawyer/">Houston Area</a>
                        <a href="/dallas-personal-injury-lawyer/">Dallas-Fort Worth</a>
                        <a href="/rio-grande-valley-personal-injury-lawyer/">Rio Grande Valley</a>
                        <a href="/west-texas-personal-injury-lawyer/">West Texas</a>
                    </div>
                </div>
                <a href="/our-mission/" class="nav-link">Our Mission</a>
                <a href="/blog/" class="nav-link">Blog</a>
                <a href="/our-process/" class="nav-link">Our Process</a>
            </nav>
            <a href="tel:512-883-0012" class="header-phone">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{phone}</span>
            </a>
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </header>
    </div>

    <div class="mobile-menu" id="mobileMenu">
        <a href="/" class="mobile-nav-link">Home</a>
        <div class="mobile-nav-section">
            <div class="mobile-nav-header" onclick="toggleMobileDropdown(this)">Practice Areas <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></div>
            <div class="mobile-dropdown">
                <a href="/car-accident-lawyer/">Car Accidents</a>
                <a href="/truck-accident-lawyer/">Truck Accidents</a>
                <a href="/motorcycle-accident-lawyer/">Motorcycle Accidents</a>
                <a href="/wrongful-death-lawyer/">Wrongful Death</a>
                <a href="/slip-and-fall-lawyer/">Slip & Fall</a>
                <a href="/workplace-injury-lawyer/">Workplace Injuries</a>
                <a href="/police-brutality-lawyer/">Police Brutality</a>
            </div>
        </div>
        <div class="mobile-nav-section">
            <div class="mobile-nav-header" onclick="toggleMobileDropdown(this)">Locations <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg></div>
            <div class="mobile-dropdown">
                <a href="/austin-personal-injury-lawyer/">Austin Area</a>
                <a href="/san-antonio-personal-injury-lawyer/">San Antonio Area</a>
                <a href="/houston-personal-injury-lawyer/">Houston Area</a>
                <a href="/dallas-personal-injury-lawyer/">Dallas-Fort Worth</a>
                <a href="/rio-grande-valley-personal-injury-lawyer/">Rio Grande Valley</a>
                <a href="/west-texas-personal-injury-lawyer/">West Texas</a>
            </div>
        </div>
        <a href="/our-mission/" class="mobile-nav-link">Our Mission</a>
        <a href="/blog/" class="mobile-nav-link">Blog</a>
        <a href="/our-process/" class="mobile-nav-link">Our Process</a>
        <a href="tel:512-883-0012" class="mobile-phone-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call {phone}
        </a>
    </div>
    <div class="header-spacer"></div>

    <section class="hero">
        <div class="hero-content">
            <h1>{h1}</h1>
            <p>{subtitle}</p>
            <div class="hero-cta">
                <a href="tel:512-883-0012" class="phone-cta">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Call Now: {phone}
                </a>
                <p class="cta-subtext">Free consultation • Available 24/7 • No fee unless you win</p>
            </div>
        </div>
        <div class="hero-image">
            <img src="/images/heroes/{case_data["hero_image"]}" alt="{city_name} {case_name.lower()} attorneys" width="600" height="400" loading="eager">
        </div>
    </section>

    <section class="content-section">
        <h2>Why You Need a {title}</h2>
        {why_need}
    </section>

    <section class="accident-types-section">
        <div class="accident-types-content">
            <h2>Types of {city_name} {case_name} Cases We Handle</h2>
            <p>Our network of {case_name.lower()} attorneys handles all types of cases throughout {city_name} and {city_data["county"]}.</p>
            <div class="accident-grid">
{cards_html}            </div>
        </div>
    </section>

    <section class="content-section">
        <h2>Common {case_name} Injuries</h2>
        <p>{case_name} accidents cause a wide range of injuries, from minor bruises to life-changing trauma. Learn more about the specific injuries we handle:</p>
        {injury_links_html}
    </section>

    <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
{faq_html}
    </section>

    <section class="cta-section">
        <h2>Don't Wait to Get the Help You Deserve</h2>
        <p>Every day you wait, evidence disappears and memories fade. Get an experienced {city_name} {case_name.lower()} lawyer in your corner today.</p>
        <a href="tel:512-883-0012" class="phone-cta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Now: {phone}
        </a>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-logo">Get<span>Paid</span></div>
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/austin-personal-injury-lawyer/">Austin Area</a>
                <a href="/our-process/">Our Process</a>
                <a href="/partners.html">Partner With Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <p class="footer-disclaimer">
                GetPaid.law is a lawyer referral service. We are not a law firm and do not provide legal advice.
                By submitting your information, you consent to be contacted by a participating attorney.
                Past results do not guarantee future outcomes. Each case is unique. Licensed to refer cases in Texas.
            </p>
        </div>
    </footer>

    <style>
        .floating-cta {{ position: fixed; bottom: 2rem; right: 2rem; background: var(--accent); color: var(--black); padding: 1rem 1.5rem; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1rem; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4); transition: all 0.3s; z-index: 999; display: flex; align-items: center; gap: 0.5rem; border: none; cursor: pointer; font-family: inherit; }}
        .floating-cta:hover {{ background: var(--accent-hover); transform: translateY(-3px); }}
        @media (max-width: 640px) {{ .floating-cta {{ bottom: 1rem; right: 1rem; padding: 0.875rem 1.25rem; font-size: 0.9rem; }} }}
    </style>
    <a href="tel:512-883-0012" class="floating-cta">Get What I Deserve</a>
    <script>
        function toggleMobileMenu() {{
            const menu = document.getElementById('mobileMenu');
            const btn = document.querySelector('.mobile-menu-btn');
            menu.classList.toggle('active');
            btn.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        }}
        function toggleMobileDropdown(header) {{
            header.classList.toggle('active');
            header.nextElementSibling.classList.toggle('active');
        }}
    </script>
</body>
</html>
'''
    return html


def main():
    base_dir = "/Users/israelmedina/Desktop/Getpaid-law"

    # Phase 2: Major cities (not including Austin which is done)
    phase2_cities = ["san-antonio", "houston", "dallas", "rio-grande-valley", "west-texas"]

    # Phase 3: Austin suburbs
    phase3_cities = ["round-rock", "cedar-park", "pflugerville", "georgetown", "san-marcos", "kyle", "leander", "lakeway", "bee-cave"]

    import sys
    phase = sys.argv[1] if len(sys.argv) > 1 else "2"

    if phase == "2":
        cities_to_generate = phase2_cities
        print(f"Generating Phase 2: {len(cities_to_generate)} cities x {len(CASE_TYPES)} case types = {len(cities_to_generate) * len(CASE_TYPES)} pages")
    elif phase == "3":
        cities_to_generate = phase3_cities
        print(f"Generating Phase 3: {len(cities_to_generate)} cities x {len(CASE_TYPES)} case types = {len(cities_to_generate) * len(CASE_TYPES)} pages")
    else:
        cities_to_generate = phase2_cities + phase3_cities
        print(f"Generating All: {len(cities_to_generate)} cities x {len(CASE_TYPES)} case types = {len(cities_to_generate) * len(CASE_TYPES)} pages")

    count = 0
    for city_slug in cities_to_generate:
        city_data = CITIES[city_slug]
        for case_type_slug, case_data in CASE_TYPES.items():
            dir_name = f"{city_slug}-{case_type_slug}-lawyer"
            dir_path = os.path.join(base_dir, dir_name)

            os.makedirs(dir_path, exist_ok=True)

            html = generate_page(city_slug, city_data, case_type_slug, case_data)
            file_path = os.path.join(dir_path, "index.html")

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(html)

            count += 1
            print(f"Created: {dir_name}/index.html")

    print(f"\nDone! Created {count} pages.")


if __name__ == "__main__":
    main()
