#!/usr/bin/env python3
"""
Generate all 12 Austin case type landing pages with consistent template.
"""

import os

# Case type data
CASE_TYPES = {
    "car-accident": {
        "name": "Car Accident",
        "title": "Austin Car Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Car Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Crashed on I-35? Rear-ended on MoPac? Hit by a distracted driver? Insurance companies will try to lowball you. Our network of experienced Austin car accident attorneys fights for maximum compensation—and you pay nothing unless you win.",
        "meta_description": "Injured in a car accident in Austin or Central Texas? Get matched with an experienced car accident lawyer today. Free consultation. No fees unless you win. Call (512) 883-0012.",
        "hero_image": "car-accident.jpg",
        "hero_alt": "Austin car accident attorneys",
        "schema_service_type": "Car Accident Legal Services",
        "why_need": """<p><figure class="content-image">
    <img src="/images/content/car-damage.jpg" alt="Car accident damage">
</figure>Every year, thousands of car accidents occur on Central Texas roads. From the congested lanes of I-35 to the high-speed corridors of Highway 130, Austin-area drivers face serious risks every time they get behind the wheel. When an accident happens, insurance companies immediately start working to minimize what they pay you—not to help you get better.</p>
        <p>An experienced Austin car accident lawyer levels the playing field. They handle the insurance adjusters, gather evidence, document your injuries, and fight for every dollar you deserve. And because they work on contingency, you don't pay a dime unless they win your case.</p>""",
        "cards_title": "Types of Austin Car Accidents We Handle",
        "cards_subtitle": "Our network of car accident attorneys handles all types of vehicle collisions.",
        "cards": [
            {"title": "Rear-End Collisions", "desc": "The most common type of accident in Austin traffic. Even \"minor\" rear-end crashes can cause whiplash, herniated discs, and long-term neck and back problems."},
            {"title": "T-Bone Accidents", "desc": "Side-impact crashes at intersections can cause catastrophic injuries. Drivers who run red lights or fail to yield are typically liable."},
            {"title": "Head-On Collisions", "desc": "The most dangerous type of crash. Often caused by wrong-way drivers, distracted driving, or drivers crossing the center line."},
            {"title": "Hit and Run Accidents", "desc": "If a driver fled the scene, you may still have options. Your UM/UIM coverage can provide compensation while police search for the driver."},
            {"title": "Drunk Driving Accidents", "desc": "Drunk drivers can be held liable for both compensatory and punitive damages. Austin's bar scene means DUI accidents are unfortunately common."},
            {"title": "Distracted Driving", "desc": "Texting, eating, GPS use—distracted driving is now the leading cause of accidents. Phone records can prove the other driver was at fault."},
            {"title": "Uber & Lyft Accidents", "desc": "Rideshare accidents involve complex insurance issues. The driver's status (app on, passenger in car) determines which insurance applies."},
            {"title": "Uninsured Drivers", "desc": "Texas has one of the highest uninsured driver rates in the country. Your own UM/UIM coverage is critical for protection."},
            {"title": "Multi-Vehicle Pileups", "desc": "Common on I-35 and Highway 130. Multiple liable parties and insurance companies make these cases complex—but often more valuable."}
        ],
        "injury_links": [
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Neck Injuries", "url": "/neck-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Concussions", "url": "/concussion-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "How much does an Austin car accident lawyer cost?", "a": "Most Austin car accident lawyers work on contingency, meaning you pay nothing upfront. The attorney only gets paid if you win your case, typically 33% of your settlement. You won't pay any out-of-pocket costs for legal representation."},
            {"q": "How long do I have to file a car accident claim in Texas?", "a": "In Texas, you have 2 years from the date of the car accident to file a personal injury lawsuit. However, if your claim involves a government vehicle or entity, you may have as little as 6 months to file a notice of claim. Contact an attorney as soon as possible to protect your rights."},
            {"q": "What should I do immediately after a car accident in Austin?", "a": "After an Austin car accident: (1) Call 911 and stay at the scene, (2) Seek medical attention even if you feel fine, (3) Take photos of all vehicles, injuries, and the scene, (4) Exchange information with other drivers but don't admit fault, (5) Get contact info from witnesses, (6) Report the accident to your insurance, (7) Contact a car accident lawyer before giving recorded statements."},
            {"q": "How much is my Austin car accident case worth?", "a": "Car accident case values depend on medical expenses, lost wages, pain and suffering, and the severity of injuries. Minor accidents might settle for $10,000-$25,000, while serious injuries involving surgery or permanent disability can be worth $100,000 to several million dollars."},
            {"q": "What if the other driver doesn't have insurance?", "a": "Texas has one of the highest uninsured driver rates in the country. If you're hit by an uninsured driver, you can file a claim with your own uninsured/underinsured motorist (UM/UIM) coverage. An attorney can help you maximize recovery from all available sources."},
            {"q": "Can I still recover damages if I was partially at fault?", "a": "Yes. Texas follows a 'modified comparative fault' rule. You can recover damages as long as you're not more than 50% at fault. However, your compensation is reduced by your percentage of fault."}
        ]
    },
    "truck-accident": {
        "name": "Truck Accident",
        "title": "Austin Truck Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Truck Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Hit by a semi on I-35? Injured in a commercial truck crash? Trucking companies have teams of lawyers and investigators—you need experienced legal help on your side. Free consultation, no fee unless you win.",
        "meta_description": "Injured in a truck accident in Austin or Central Texas? Our network of truck accident lawyers fights trucking companies and their insurers. Free consultation. Call (512) 883-0012.",
        "hero_image": "truck-accident.jpg",
        "hero_alt": "Austin truck accident attorneys",
        "schema_service_type": "Truck Accident Legal Services",
        "why_need": """<p>Truck accidents are not like car accidents. When an 80,000-pound commercial vehicle collides with a passenger car, the results are almost always catastrophic. Victims face life-altering injuries, massive medical bills, and lost income—while trucking companies deploy teams of lawyers and investigators to minimize what they pay.</p>
        <p>An experienced Austin truck accident lawyer knows how to take on these powerful companies. They understand federal trucking regulations, how to preserve critical evidence like driver logs and black box data, and how to identify all potentially liable parties—from the driver to the trucking company to the cargo loader.</p>
        <p>Texas highways like I-35, I-10, and Highway 130 see constant truck traffic. Austin's position as a major distribution hub means commercial trucks are everywhere—and accidents happen daily. If you've been hurt, you need a lawyer who specializes in these complex cases.</p>""",
        "cards_title": "Types of Austin Truck Accidents We Handle",
        "cards_subtitle": "Our network includes attorneys experienced in all commercial vehicle accident cases.",
        "cards": [
            {"title": "18-Wheeler Accidents", "desc": "The most common and often most severe truck accidents. These massive vehicles can cause catastrophic damage in any collision."},
            {"title": "Delivery Truck Accidents", "desc": "Amazon, FedEx, UPS, and other delivery trucks are everywhere in Austin. Their drivers often face pressure to make tight schedules."},
            {"title": "Tanker Truck Accidents", "desc": "Liquid cargo shifts during turns and braking, making tankers prone to rollovers. Chemical spills add additional hazards."},
            {"title": "Dump Truck Accidents", "desc": "Common around Austin's many construction zones. Overloaded trucks and falling debris cause serious accidents."},
            {"title": "Garbage Truck Accidents", "desc": "Frequent stops and blind spots make garbage trucks dangerous. Cities and waste management companies can be held liable."},
            {"title": "Oversized Load Accidents", "desc": "Wide loads and heavy equipment on Austin highways create hazards. Permit violations can establish liability."},
            {"title": "Box Truck Accidents", "desc": "Often driven by inexperienced operators. Moving trucks and rental vehicles are involved in many Austin accidents."},
            {"title": "Tow Truck Accidents", "desc": "Emergency stops and roadside work create dangerous situations. Improperly secured vehicles can cause additional crashes."},
            {"title": "Concrete Mixer Accidents", "desc": "Heavy, top-heavy vehicles common around Austin's construction boom. Rollovers and crushing injuries are common."}
        ],
        "injury_links": [
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Paralysis", "url": "/paralysis-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Who can be held liable in an Austin truck accident?", "a": "Multiple parties may be liable: the truck driver, the trucking company, the cargo loading company, the truck manufacturer, and maintenance providers. An experienced attorney will investigate all potential sources of compensation."},
            {"q": "What federal regulations apply to truck accidents?", "a": "Trucking companies must follow FMCSA regulations including hours of service limits (11 hours driving, 14 hours on-duty), mandatory rest breaks, drug and alcohol testing, and vehicle maintenance requirements. Violations can establish liability."},
            {"q": "How is a truck accident case different from a car accident?", "a": "Truck accidents involve more complex liability, larger insurance policies ($750,000 minimum federal requirement), federal regulations, electronic logging devices (ELDs), and black box data. These cases require specialized legal knowledge."},
            {"q": "What evidence is important in a truck accident case?", "a": "Critical evidence includes the truck's black box data, driver logs, inspection records, driver qualification files, drug test results, and dispatch communications. A lawyer can send a spoliation letter to preserve this evidence before it's destroyed."},
            {"q": "How much is a truck accident case worth?", "a": "Truck accident cases typically involve more severe injuries and higher settlements than car accidents. Cases involving permanent injuries or death can be worth millions. The minimum insurance requirement for commercial trucks is $750,000."},
            {"q": "How long do I have to file a truck accident lawsuit in Texas?", "a": "You have 2 years from the date of the accident to file a lawsuit. However, critical evidence can be lost quickly—trucking companies may legally destroy some records after 6 months. Contact an attorney immediately."}
        ]
    },
    "18-wheeler-accident": {
        "name": "18-Wheeler Accident",
        "title": "Austin 18-Wheeler Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">18-Wheeler Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Crashed into by a semi-truck on I-35? Injured in a big rig collision? These cases are complex—trucking companies have aggressive legal teams, and you need experienced representation to level the playing field.",
        "meta_description": "Injured by an 18-wheeler in Austin? Our truck accident lawyers take on trucking companies and their insurers. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "18-wheeler.jpg",
        "hero_alt": "Austin 18-wheeler accident attorneys",
        "schema_service_type": "18-Wheeler Accident Legal Services",
        "why_need": """<p>18-wheeler accidents are among the most devastating crashes on Texas roads. When a fully loaded semi-truck weighing up to 80,000 pounds collides with a passenger vehicle, the results are often catastrophic—or fatal. Survivors face months or years of recovery, mounting medical bills, and an uncertain future.</p>
        <p>Meanwhile, trucking companies immediately dispatch teams of investigators and lawyers to the scene. Their goal is simple: minimize what they pay you. They'll look for any reason to shift blame, dispute your injuries, or pressure you into a quick, lowball settlement.</p>
        <p>You need a lawyer who knows how to fight back. An experienced Austin 18-wheeler accident attorney understands federal trucking regulations, knows how to preserve critical evidence, and can identify all liable parties—from the driver to the trucking company to the broker who arranged the load.</p>""",
        "cards_title": "Common Causes of 18-Wheeler Accidents in Austin",
        "cards_subtitle": "Understanding what caused your crash helps establish liability and maximize your compensation.",
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
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Wrongful Death", "url": "/wrongful-death-lawyer/"}
        ],
        "faqs": [
            {"q": "What makes 18-wheeler accident cases different from car accidents?", "a": "18-wheeler cases involve federal regulations, multiple potentially liable parties (driver, trucking company, broker, loader), larger insurance policies, and more severe injuries. They require specialized legal expertise."},
            {"q": "What is the minimum insurance for 18-wheelers?", "a": "Federal law requires commercial trucks to carry at least $750,000 in liability coverage—and trucks hauling hazardous materials must carry up to $5 million. This means more compensation is available for serious injuries."},
            {"q": "How do I prove the trucking company is liable?", "a": "Trucking companies can be liable for negligent hiring, inadequate training, pressuring drivers to violate hours-of-service rules, and failing to maintain vehicles. An attorney can obtain company records that prove these violations."},
            {"q": "What is a black box in a truck?", "a": "Commercial trucks have electronic control modules (ECMs) that record speed, braking, and other data. This \"black box\" data can prove a driver was speeding, didn't brake in time, or violated regulations."},
            {"q": "Should I talk to the trucking company's insurance adjuster?", "a": "No. Insurance adjusters are trained to get you to say things that hurt your case. Don't give recorded statements or sign any documents without first consulting an attorney."},
            {"q": "How much is my 18-wheeler accident case worth?", "a": "Values range from hundreds of thousands to millions of dollars depending on injury severity. Permanent disabilities, loss of income, and wrongful death cases command the highest settlements."}
        ]
    },
    "motorcycle-accident": {
        "name": "Motorcycle Accident",
        "title": "Austin Motorcycle Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Motorcycle Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Laid down your bike because of a negligent driver? Motorcycle accidents often result in serious injuries—and insurance companies often try to blame the rider. Our attorneys fight that bias and get you the compensation you deserve.",
        "meta_description": "Injured in a motorcycle accident in Austin? Our lawyers fight insurance company bias against riders. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "motorcycle-accident.jpg",
        "hero_alt": "Austin motorcycle accident attorneys",
        "schema_service_type": "Motorcycle Accident Legal Services",
        "why_need": """<p>Motorcycle accidents are different. When you're exposed on two wheels, even a minor collision can result in devastating injuries—road rash, broken bones, traumatic brain injuries, or worse. And unlike car accidents, motorcyclists face an uphill battle against bias.</p>
        <p>Insurance companies and juries often assume motorcyclists are reckless, even when a car driver was clearly at fault. They'll dig through your riding history, look for any traffic violations, and try to shift blame onto you. This bias can dramatically reduce your compensation—or eliminate it entirely.</p>
        <p>You need a lawyer who understands motorcycle culture and knows how to fight this bias. An experienced Austin motorcycle accident attorney will prove the other driver's negligence, document your injuries properly, and present your case in a way that overcomes prejudice against riders.</p>""",
        "cards_title": "Types of Austin Motorcycle Accidents We Handle",
        "cards_subtitle": "Our attorneys have experience with all types of motorcycle crashes caused by negligent drivers.",
        "cards": [
            {"title": "Left-Turn Accidents", "desc": "The most common motorcycle crash. A car turns left in front of an oncoming motorcycle because the driver \"didn't see\" the bike."},
            {"title": "Lane Change Accidents", "desc": "Drivers fail to check blind spots before changing lanes, sideswiping motorcycles. These crashes often happen on I-35 and MoPac."},
            {"title": "Rear-End Collisions", "desc": "Drivers following too closely rear-end stopped motorcycles. Without a protective cage, these crashes cause serious injuries."},
            {"title": "Door Accidents", "desc": "A parked driver opens their door into traffic without looking, directly into the path of a motorcyclist."},
            {"title": "Road Hazard Accidents", "desc": "Potholes, debris, and poor road conditions that cars can ignore can be deadly for motorcycles. Cities can be held liable."},
            {"title": "Intersection Collisions", "desc": "Running red lights and stop signs causes devastating T-bone crashes with motorcycles."},
            {"title": "Drunk Driver Accidents", "desc": "Impaired drivers pose extreme danger to motorcyclists. Punitive damages may be available in these cases."},
            {"title": "Distracted Driver Accidents", "desc": "Texting drivers are especially dangerous to motorcyclists because they're less visible than cars."},
            {"title": "Highway Accidents", "desc": "High-speed crashes on I-35, MoPac, and Highway 130 often result in catastrophic injuries or death."}
        ],
        "injury_links": [
            {"name": "Road Rash", "url": "/road-rash-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Scarring & Disfigurement", "url": "/scarring-disfigurement-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Does Texas require motorcycle helmets?", "a": "Texas requires helmets for riders under 21 and riders without approved safety courses or insurance. However, insurance companies may try to use lack of helmet use against older riders—even though it's legal."},
            {"q": "How do you overcome bias against motorcyclists?", "a": "We document your safe riding history, gather witness statements, use accident reconstruction experts, and emphasize the other driver's negligence. We present your case in a way that overcomes prejudice."},
            {"q": "What if the driver says they didn't see me?", "a": "\"I didn't see the motorcycle\" is not a valid defense. All drivers have a duty to look for motorcycles. Failure to see what's there is negligence."},
            {"q": "Can I recover damages if I wasn't wearing a helmet?", "a": "Yes. In Texas, failure to wear a helmet doesn't bar recovery. Insurance companies may argue it contributed to head injuries, but this doesn't eliminate their client's liability for causing the crash."},
            {"q": "What's the average motorcycle accident settlement?", "a": "Motorcycle accidents typically result in more severe injuries than car accidents, leading to higher settlements. Cases involving permanent injuries often settle for six or seven figures."},
            {"q": "Should I give a recorded statement to the insurance company?", "a": "Never give a recorded statement without consulting an attorney. Insurance adjusters are trained to ask questions designed to hurt your case and shift blame to you."}
        ]
    },
    "uber-lyft-accident": {
        "name": "Uber & Lyft Accident",
        "title": "Austin Uber & Lyft Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Uber & Lyft Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Injured in a rideshare accident? Whether you were a passenger, another driver, or a pedestrian, these cases involve complex insurance issues. Our attorneys know how to navigate the rideshare maze and get you maximum compensation.",
        "meta_description": "Injured in an Uber or Lyft accident in Austin? Our lawyers navigate complex rideshare insurance. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "rideshare.jpg",
        "hero_alt": "Austin Uber Lyft accident attorneys",
        "schema_service_type": "Rideshare Accident Legal Services",
        "why_need": """<p>Rideshare accidents are uniquely complicated. Unlike regular car accidents, Uber and Lyft crashes involve multiple layers of insurance—and which policy applies depends on exactly what the driver was doing at the moment of the crash. Was the app off? Was the driver waiting for a ride request? Were they en route to pick up a passenger? Did they have a passenger in the car?</p>
        <p>Each scenario triggers different insurance coverage, and both Uber and Lyft have teams of lawyers ready to argue their coverage doesn't apply. Meanwhile, you're dealing with serious injuries and mounting medical bills.</p>
        <p>An experienced Austin rideshare accident attorney knows exactly how to navigate this maze. They'll determine which insurance policies apply, deal with multiple insurance companies simultaneously, and fight to get you the maximum compensation available under all applicable policies.</p>""",
        "cards_title": "Types of Uber & Lyft Accident Cases We Handle",
        "cards_subtitle": "Our network includes attorneys experienced in all rideshare accident scenarios.",
        "cards": [
            {"title": "Passenger Injuries", "desc": "If you were injured as an Uber or Lyft passenger, you have the clearest path to compensation—up to $1 million in coverage."},
            {"title": "Accidents with Rideshare Drivers", "desc": "If an Uber or Lyft driver hit your car, insurance coverage depends on their app status at the time of the crash."},
            {"title": "Pedestrian Accidents", "desc": "Rideshare drivers distracted by the app often hit pedestrians. These cases can involve both rideshare and personal insurance."},
            {"title": "Bicycle Accidents", "desc": "Rideshare drivers making quick pickups and drop-offs create hazards for cyclists throughout Austin."},
            {"title": "Rideshare Driver Injuries", "desc": "If you drive for Uber or Lyft and were injured by another driver, you may have claims against multiple policies."},
            {"title": "Parking Lot Accidents", "desc": "Rideshare pickups and drop-offs in parking lots lead to frequent accidents. Coverage can be complex."},
            {"title": "Airport Accidents", "desc": "The busy rideshare zones at Austin-Bergstrom Airport see frequent accidents due to congested conditions."},
            {"title": "Drunk Passenger Interference", "desc": "When passengers distract or interfere with drivers causing accidents, liability can extend to the passenger."},
            {"title": "App Malfunction Accidents", "desc": "When the app directs drivers into dangerous situations, Uber or Lyft may share liability."}
        ],
        "injury_links": [
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Back Injuries", "url": "/back-injury-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Neck Injuries", "url": "/neck-injury-lawyer/"},
            {"name": "Concussions", "url": "/concussion-injury-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"}
        ],
        "faqs": [
            {"q": "How much insurance do Uber and Lyft carry?", "a": "When a driver has a passenger or is en route to pickup, both companies provide up to $1 million in liability coverage. When the app is on but waiting for a request, coverage is limited to $50,000 per person."},
            {"q": "What if the rideshare driver's app was off?", "a": "If the driver's app was completely off, only their personal auto insurance applies. Many personal policies exclude commercial activity, leaving limited coverage."},
            {"q": "Can I sue Uber or Lyft directly?", "a": "It's difficult because drivers are classified as independent contractors. However, their insurance policies provide substantial coverage, and in some cases, the company itself may bear liability."},
            {"q": "What should I do after a rideshare accident?", "a": "Get the driver's name and license, take screenshots of the app showing trip details, photograph the scene and vehicles, seek medical attention, and contact an attorney before talking to insurance companies."},
            {"q": "How long do rideshare accident cases take?", "a": "These cases often take longer than regular car accidents due to the complex insurance issues. However, the larger insurance policies mean more compensation is available for serious injuries."},
            {"q": "What if the rideshare driver was at fault?", "a": "If the rideshare driver caused the accident, you can claim against their personal insurance and potentially Uber or Lyft's commercial policy, depending on their app status."}
        ]
    },
    "drunk-driving-accident": {
        "name": "Drunk Driving Accident",
        "title": "Austin Drunk Driving Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Drunk Driving Accident</span> Lawyer Ready to Get You Paid",
        "subtitle": "Hit by a drunk driver in Austin? You may be entitled to punitive damages on top of compensation for your injuries. Our attorneys hold drunk drivers—and the bars that over-served them—fully accountable.",
        "meta_description": "Injured by a drunk driver in Austin? Our lawyers pursue maximum damages including punitive damages. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "drunk-driving.jpg",
        "hero_alt": "Austin drunk driving accident attorneys",
        "schema_service_type": "Drunk Driving Accident Legal Services",
        "why_need": """<p>Being hit by a drunk driver is infuriating. You did everything right, and someone's reckless decision to drive intoxicated changed your life. The good news: Texas law provides additional remedies for drunk driving accident victims that aren't available in ordinary car accident cases.</p>
        <p>Beyond compensation for your injuries, you may be entitled to punitive damages—additional money designed to punish the drunk driver and deter others from similar behavior. If the driver was over-served at a bar or restaurant, Texas's \"dram shop\" laws may also make that establishment liable for your injuries.</p>
        <p>Austin's vibrant bar scene on Sixth Street, Rainey Street, and throughout the city means drunk driving accidents are tragically common. An experienced attorney knows how to investigate these cases, gather evidence of intoxication, and pursue all available sources of compensation.</p>""",
        "cards_title": "Drunk Driving Liability in Texas",
        "cards_subtitle": "Multiple parties may be liable when a drunk driver injures you.",
        "cards": [
            {"title": "The Drunk Driver", "desc": "The driver is liable for choosing to drive while intoxicated. Criminal DWI charges don't prevent you from filing a civil lawsuit."},
            {"title": "Bars & Restaurants", "desc": "Texas dram shop laws hold establishments liable for over-serving visibly intoxicated customers who then cause accidents."},
            {"title": "Party Hosts", "desc": "Social hosts who serve alcohol to minors can be liable if that minor causes a drunk driving accident."},
            {"title": "Employers", "desc": "If the drunk driver was at a work event, the employer may be liable for providing or allowing excessive alcohol consumption."},
            {"title": "Liquor Stores", "desc": "Retailers who sell alcohol to visibly intoxicated persons or minors can be held liable under dram shop laws."},
            {"title": "Vehicle Owners", "desc": "If someone lent their car to a person they knew (or should have known) was intoxicated, they may share liability."},
            {"title": "Nightclub Promoters", "desc": "Event promoters who encourage excessive drinking through open bars or drinking contests may bear some liability."},
            {"title": "Country Clubs", "desc": "Private clubs that over-serve members can be held to dram shop standards like commercial establishments."},
            {"title": "Wedding Venues", "desc": "Venues that continue serving visibly intoxicated guests can be liable for accidents that result."}
        ],
        "injury_links": [
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Spinal Cord Injuries", "url": "/spinal-cord-injury-lawyer/"},
            {"name": "Broken Bones", "url": "/broken-bones-lawyer/"},
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Whiplash", "url": "/whiplash-injury-lawyer/"},
            {"name": "Burn Injuries", "url": "/burn-injury-lawyer/"},
            {"name": "Paralysis", "url": "/paralysis-injury-lawyer/"},
            {"name": "Wrongful Death", "url": "/wrongful-death-lawyer/"}
        ],
        "faqs": [
            {"q": "What are punitive damages?", "a": "Punitive damages are additional compensation beyond your actual losses, designed to punish the drunk driver for reckless behavior. Texas allows punitive damages when a defendant acted with gross negligence—and driving drunk almost always qualifies."},
            {"q": "What is Texas dram shop law?", "a": "Texas law holds bars, restaurants, and liquor stores liable if they serve alcohol to a visibly intoxicated person who then causes an accident. This gives victims an additional source of compensation beyond just the driver."},
            {"q": "What if the drunk driver has no insurance?", "a": "Drunk drivers often have minimal or no insurance. But dram shop claims against bars, uninsured motorist coverage, and the drunk driver's personal assets can all provide compensation."},
            {"q": "Does a DWI conviction help my civil case?", "a": "Yes. A criminal conviction or even an arrest for DWI provides strong evidence of intoxication for your civil case. We can use police reports, breathalyzer results, and field sobriety tests."},
            {"q": "How do you prove a bar over-served someone?", "a": "We investigate the bar's surveillance footage, receipts, server testimony, and witness statements. Toxicology reports can show BAC levels that prove the driver was served while already visibly intoxicated."},
            {"q": "What compensation can I recover?", "a": "You can recover medical expenses, lost wages, pain and suffering, and punitive damages. If the drunk driver killed a family member, you can also pursue wrongful death damages."}
        ]
    },
    "hit-and-run": {
        "name": "Hit and Run",
        "title": "Austin Hit and Run Accident Lawyer",
        "h1": "Austin <span class=\"highlight\">Hit and Run</span> Accident Lawyer Ready to Get You Paid",
        "subtitle": "Driver fled the scene after hitting you? You still have options for compensation. Our attorneys help hit and run victims recover through uninsured motorist claims, investigation, and tracking down the driver.",
        "meta_description": "Injured in a hit and run in Austin? Our lawyers help victims recover compensation even when the driver flees. Free consultation. Call (512) 883-0012.",
        "hero_image": "hit-and-run.jpg",
        "hero_alt": "Austin hit and run accident attorneys",
        "schema_service_type": "Hit and Run Accident Legal Services",
        "why_need": """<p>A hit and run accident adds insult to injury. Not only are you dealing with physical trauma, but the driver who caused it fled the scene—leaving you with medical bills and no obvious way to recover compensation. Many victims assume nothing can be done. That's not true.</p>
        <p>Even if the driver is never found, you may have substantial coverage through your own uninsured motorist (UM) policy. If the driver is eventually identified, you can pursue their insurance and personal assets. And sometimes, investigation reveals the driver—through surveillance footage, witness descriptions, or vehicle debris left at the scene.</p>
        <p>An experienced Austin hit and run attorney knows how to pursue all avenues of recovery. They'll work with investigators to track down the driver, file proper claims with your insurance company, and fight for maximum compensation whether the driver is found or not.</p>""",
        "cards_title": "Hit and Run Recovery Options",
        "cards_subtitle": "Multiple paths to compensation exist even when the driver flees.",
        "cards": [
            {"title": "Uninsured Motorist Claims", "desc": "Your own UM coverage treats a hit and run like an uninsured driver—potentially providing full compensation even if the driver is never found."},
            {"title": "Driver Investigation", "desc": "Surveillance cameras, witness descriptions, license plate readers, and vehicle debris can help identify the fleeing driver."},
            {"title": "Police Coordination", "desc": "We work with Austin PD and surrounding agencies to share information and increase chances of finding the driver."},
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
            {"name": "Internal Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Road Rash", "url": "/road-rash-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Can I get compensation if the driver is never found?", "a": "Yes. If you have uninsured motorist (UM) coverage, you can file a claim with your own insurance company. Texas law treats hit and run drivers as uninsured for UM purposes."},
            {"q": "What should I do immediately after a hit and run?", "a": "Call 911 immediately, try to remember any details about the vehicle (color, make, model, plate), look for witnesses and surveillance cameras, seek medical attention, and contact an attorney."},
            {"q": "How do you find hit and run drivers?", "a": "We review surveillance footage from nearby businesses and traffic cameras, interview witnesses, check license plate readers, and examine vehicle debris. Many drivers are eventually identified."},
            {"q": "What if I don't have uninsured motorist coverage?", "a": "Finding the driver becomes more critical. We'll work harder on investigation. If found, we pursue their insurance and personal assets. Other coverages like MedPay may provide some relief."},
            {"q": "Will my rates go up if I file a UM claim?", "a": "Texas law prohibits insurance companies from raising your rates solely because you filed an uninsured motorist claim. You're using coverage you paid for."},
            {"q": "What if the driver is found but claims I hit them?", "a": "We gather evidence to prove what really happened—surveillance footage, witness statements, vehicle damage patterns, and accident reconstruction experts if needed."}
        ]
    },
    "wrongful-death": {
        "name": "Wrongful Death",
        "title": "Austin Wrongful Death Lawyer",
        "h1": "Austin <span class=\"highlight\">Wrongful Death</span> Lawyer Ready to Get You Justice",
        "subtitle": "Lost a loved one due to someone else's negligence? While nothing can bring them back, a wrongful death lawsuit can provide financial security for your family and hold the responsible parties accountable.",
        "meta_description": "Lost a loved one in Austin due to negligence? Our wrongful death lawyers help families get justice and compensation. Free consultation. Call (512) 883-0012.",
        "hero_image": "wrongful-death.jpg",
        "hero_alt": "Austin wrongful death attorneys",
        "schema_service_type": "Wrongful Death Legal Services",
        "why_need": """<p>The death of a loved one is devastating. When that death was caused by someone else's negligence or wrongful act, the grief is compounded by anger and a sense of injustice. A wrongful death lawsuit can't bring your loved one back, but it can provide your family with financial security and hold the responsible parties accountable.</p>
        <p>Texas wrongful death law allows surviving spouses, children, and parents to recover substantial compensation. This includes economic losses like the income your loved one would have earned, as well as non-economic damages for loss of companionship, guidance, and care.</p>
        <p>These cases require sensitivity and experience. An Austin wrongful death attorney understands what your family is going through and handles the legal burden while you focus on grieving and healing. They'll deal with insurance companies, investigate the death, and build a case that honors your loved one's memory.</p>""",
        "cards_title": "Causes of Wrongful Death in Texas",
        "cards_subtitle": "Wrongful death claims arise when negligence or wrongful acts cause fatal injuries.",
        "cards": [
            {"title": "Car Accidents", "desc": "Traffic fatalities are among the most common wrongful death cases. Negligent, drunk, or distracted drivers can be held liable."},
            {"title": "Truck Accidents", "desc": "Commercial truck crashes frequently result in fatalities due to the size disparity between trucks and passenger vehicles."},
            {"title": "Workplace Accidents", "desc": "While workers' comp limits some claims, third-party negligence or intentional employer misconduct can support wrongful death suits."},
            {"title": "Medical Malpractice", "desc": "When doctors, nurses, or hospitals make fatal errors, families can pursue wrongful death damages."},
            {"title": "Defective Products", "desc": "Dangerous products from vehicles to medications can cause deaths that result in manufacturer liability."},
            {"title": "Premises Liability", "desc": "Property owners who fail to address hazards that cause fatal accidents can be held liable."},
            {"title": "Criminal Acts", "desc": "Even when a criminal is prosecuted, families can pursue civil wrongful death claims separately."},
            {"title": "Nursing Home Abuse", "desc": "When nursing home neglect or abuse causes death, facilities and staff can be held liable."},
            {"title": "Drowning", "desc": "Pool owners, property managers, and product manufacturers may be liable for drowning deaths."}
        ],
        "injury_links": [],
        "faqs": [
            {"q": "Who can file a wrongful death lawsuit in Texas?", "a": "Under Texas law, the surviving spouse, children, and parents of the deceased can file a wrongful death claim. If they don't file within three months, the estate's executor may file on their behalf."},
            {"q": "What compensation is available in wrongful death cases?", "a": "Families can recover lost income and benefits the deceased would have earned, funeral and burial expenses, loss of companionship and care, mental anguish, and loss of inheritance."},
            {"q": "What's the difference between wrongful death and survival claims?", "a": "Wrongful death compensates surviving family members for their losses. Survival claims compensate the estate for the deceased's pain and suffering and losses before death. Both can be filed together."},
            {"q": "How long do we have to file a wrongful death lawsuit?", "a": "Texas has a 2-year statute of limitations for wrongful death claims. The clock typically starts on the date of death. Acting quickly preserves evidence and witness memories."},
            {"q": "Can we still file if criminal charges are pending?", "a": "Yes. Civil wrongful death cases are separate from criminal prosecution. Different standards of proof apply—criminal cases require \"beyond reasonable doubt\" while civil cases only require \"preponderance of evidence.\""},
            {"q": "What if our loved one was partially at fault?", "a": "Texas's comparative fault rules apply. As long as your loved one was 50% or less at fault, family members can still recover damages, reduced by the percentage of fault."}
        ]
    },
    "slip-and-fall": {
        "name": "Slip and Fall",
        "title": "Austin Slip and Fall Lawyer",
        "h1": "Austin <span class=\"highlight\">Slip and Fall</span> Lawyer Ready to Get You Paid",
        "subtitle": "Injured in a fall at a store, restaurant, or property? Property owners have a duty to keep their premises safe. When they fail, and you get hurt, our attorneys fight to hold them accountable.",
        "meta_description": "Injured in a slip and fall accident in Austin? Our premises liability lawyers hold negligent property owners accountable. Free consultation. Call (512) 883-0012.",
        "hero_image": "slip-and-fall.jpg",
        "hero_alt": "Austin slip and fall accident attorneys",
        "schema_service_type": "Slip and Fall Legal Services",
        "why_need": """<p>Slip and fall accidents might sound minor, but they cause serious injuries every day—broken hips, head trauma, back injuries, and more. When you fall on someone else's property due to a hazardous condition, you may be entitled to significant compensation for your injuries.</p>
        <p>Property owners in Texas have a legal duty to keep their premises reasonably safe for visitors. When they fail—whether it's a wet floor without warning signs, a broken staircase, poor lighting, or an uneven surface—they can be held liable for injuries that result.</p>
        <p>But property owners and their insurance companies fight these claims aggressively. They'll argue you should have seen the hazard, that you were walking carelessly, or that they had no way of knowing about the dangerous condition. An experienced Austin slip and fall lawyer knows how to counter these defenses and prove liability.</p>""",
        "cards_title": "Common Slip and Fall Hazards",
        "cards_subtitle": "Property owners can be liable for many types of dangerous conditions.",
        "cards": [
            {"title": "Wet Floors", "desc": "Spilled liquids, freshly mopped floors without warning signs, and tracked-in rain are major slip hazards in stores and restaurants."},
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
            {"name": "Hip Fractures", "url": "/broken-bones-lawyer/"},
            {"name": "Soft Tissue Injuries", "url": "/soft-tissue-injury-lawyer/"},
            {"name": "Concussions", "url": "/concussion-injury-lawyer/"},
            {"name": "Joint Injuries", "url": "/joint-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "How do I prove the property owner was negligent?", "a": "You must show: (1) A dangerous condition existed, (2) The owner knew or should have known about it, (3) They failed to fix it or warn visitors, and (4) This caused your injury. An attorney can gather evidence to prove each element."},
            {"q": "What if there was a 'Wet Floor' sign?", "a": "A warning sign doesn't automatically protect the owner. If the sign was inadequate, poorly placed, or the hazard existed too long, they can still be liable."},
            {"q": "What if I was partially at fault for my fall?", "a": "Texas comparative fault rules apply. You can recover damages if you were 50% or less at fault. Your compensation is reduced by your percentage of fault."},
            {"q": "How long do I have to file a slip and fall lawsuit?", "a": "Texas has a 2-year statute of limitations. But property owners often destroy surveillance footage quickly, so contacting an attorney immediately is critical."},
            {"q": "What should I do after a slip and fall?", "a": "Report the fall to management, take photos of the hazard, get witness contact info, seek medical attention immediately, and contact an attorney before giving recorded statements."},
            {"q": "What compensation can I recover?", "a": "You can recover medical expenses, lost wages, pain and suffering, and long-term care costs if you have permanent injuries. Serious falls can result in substantial settlements."}
        ]
    },
    "work-injury": {
        "name": "Work Injury",
        "title": "Austin Work Injury Lawyer",
        "h1": "Austin <span class=\"highlight\">Work Injury</span> Lawyer Ready to Get You Paid",
        "subtitle": "Injured on the job? Workers' comp may not be your only option. Our attorneys help injured workers explore third-party claims, non-subscriber lawsuits, and other paths to full compensation.",
        "meta_description": "Injured at work in Austin? Our lawyers help you get compensation beyond workers' comp. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "workplace-injury.jpg",
        "hero_alt": "Austin work injury attorneys",
        "schema_service_type": "Work Injury Legal Services",
        "why_need": """<p>When you're injured at work, workers' compensation may only be the beginning. While workers' comp provides medical benefits and partial wage replacement, it doesn't compensate you for pain and suffering—and the benefits are often inadequate for serious injuries.</p>
        <p>But Texas is unique: many employers opt out of workers' compensation entirely. These \"non-subscribers\" can be sued directly for negligence, and you can recover full damages including pain and suffering. Even if your employer has workers' comp, you may have claims against third parties—equipment manufacturers, subcontractors, or property owners whose negligence caused your injury.</p>
        <p>An experienced Austin work injury attorney knows how to maximize compensation for injured workers. They'll identify all potentially liable parties, navigate the workers' comp system, and pursue additional claims when available.</p>""",
        "cards_title": "Types of Work Injury Cases We Handle",
        "cards_subtitle": "Our network includes attorneys experienced in all types of workplace accidents.",
        "cards": [
            {"title": "Construction Accidents", "desc": "Falls, equipment accidents, and electrocutions are common on Austin's many construction sites. Multiple liable parties may exist."},
            {"title": "Oil Field Injuries", "desc": "Texas oil field work is among the most dangerous. Explosions, toxic exposure, and equipment failures cause severe injuries."},
            {"title": "Falls from Heights", "desc": "Inadequate fall protection, scaffolding failures, and ladder accidents cause serious workplace injuries."},
            {"title": "Machinery Accidents", "desc": "Unguarded machines, lock-out/tag-out failures, and equipment malfunctions lead to crush injuries and amputations."},
            {"title": "Vehicle Accidents", "desc": "Forklifts, company vehicles, and equipment collisions in warehouses and work sites cause many injuries."},
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
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Electrocution Injuries", "url": "/electrocution-injury-lawyer/"},
            {"name": "Repetitive Stress", "url": "/repetitive-stress-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "What if my employer doesn't have workers' comp?", "a": "Texas doesn't require employers to carry workers' compensation. If your employer is a \"non-subscriber,\" you can sue them directly and recover full damages including pain and suffering—which workers' comp doesn't provide."},
            {"q": "Can I sue someone other than my employer?", "a": "Yes. Third-party claims against equipment manufacturers, subcontractors, property owners, and others are not limited by workers' comp. These claims can provide full compensation for your injuries."},
            {"q": "What benefits does workers' comp provide?", "a": "Workers' comp covers medical expenses and provides wage replacement (typically 70% of your average weekly wage). It doesn't cover pain and suffering or provide full wage replacement."},
            {"q": "How long do I have to report a work injury?", "a": "You should report your injury to your employer immediately. Delays can hurt your workers' comp claim. For lawsuits, the statute of limitations is generally 2 years."},
            {"q": "What if my workers' comp claim is denied?", "a": "Denials can be appealed through the Texas Division of Workers' Compensation. An attorney can help you navigate this process and fight for benefits."},
            {"q": "Can I be fired for filing a workers' comp claim?", "a": "Texas law prohibits retaliation for filing a workers' comp claim. If you're fired or discriminated against, you may have additional claims against your employer."}
        ]
    },
    "dog-bite": {
        "name": "Dog Bite",
        "title": "Austin Dog Bite Lawyer",
        "h1": "Austin <span class=\"highlight\">Dog Bite</span> Lawyer Ready to Get You Paid",
        "subtitle": "Attacked by a dog in Austin? Texas law holds dog owners responsible for their pet's dangerous behavior. Our attorneys fight for compensation for your injuries, scarring, and trauma.",
        "meta_description": "Bitten by a dog in Austin? Our lawyers hold negligent dog owners accountable for attacks. Free consultation. No fee unless you win. Call (512) 883-0012.",
        "hero_image": "dog-bite.jpg",
        "hero_alt": "Austin dog bite attorneys",
        "schema_service_type": "Dog Bite Legal Services",
        "why_need": """<p>Dog attacks can cause devastating injuries—deep puncture wounds, torn muscles, broken bones, and permanent scarring. Children are particularly vulnerable, often suffering facial injuries that require multiple surgeries. Beyond physical harm, victims frequently develop lasting fear and psychological trauma.</p>
        <p>Texas uses a \"one bite\" rule with important modifications. While owners may not be liable for a first bite if they had no reason to know their dog was dangerous, they can still be liable if they were negligent in controlling the animal or if the dog was violating leash laws.</p>
        <p>An experienced Austin dog bite attorney knows how to prove owner liability and maximize compensation. They'll investigate the dog's history, the circumstances of the attack, and whether the owner violated local ordinances—building the strongest possible case for your recovery.</p>""",
        "cards_title": "Dog Owner Liability in Texas",
        "cards_subtitle": "Dog owners can be held liable under several legal theories.",
        "cards": [
            {"title": "Known Dangerous Dog", "desc": "If the owner knew the dog had aggressive tendencies or had bitten before, they're liable for any attack."},
            {"title": "Negligent Handling", "desc": "Owners who fail to properly restrain, fence, or control their dogs can be liable even for first bites."},
            {"title": "Leash Law Violations", "desc": "Austin requires dogs to be leashed in public. Violating leash laws can establish negligence per se."},
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
            {"name": "Infection Injuries", "url": "/internal-injuries-lawyer/"},
            {"name": "Traumatic Brain Injury", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Amputation", "url": "/amputation-injury-lawyer/"},
            {"name": "Psychological Trauma", "url": "/traumatic-brain-injury-lawyer/"}
        ],
        "faqs": [
            {"q": "Does Texas have a one-bite rule?", "a": "Sort of. Texas owners aren't automatically liable for a first bite if they had no reason to know the dog was dangerous. But they can still be liable for negligence in controlling the dog, violating leash laws, or other negligent conduct."},
            {"q": "What if the dog has never bitten anyone before?", "a": "You can still recover if the owner was negligent—failing to leash the dog, letting it roam, or ignoring aggressive behavior. Prior bites aren't required if the owner was otherwise careless."},
            {"q": "What compensation can I recover for a dog bite?", "a": "Victims can recover medical expenses (including plastic surgery), lost wages, pain and suffering, disfigurement, and psychological trauma. Children's claims often include future surgery costs."},
            {"q": "Will the dog be put down?", "a": "That's a separate process from your civil claim. Austin may declare a dog dangerous and require additional restrictions. Euthanasia is only ordered for the most severe cases."},
            {"q": "What if I was bitten at the dog owner's home?", "a": "Homeowner's insurance typically covers dog bites. Even if the owner claims they can't afford to pay, their insurance policy may provide substantial coverage."},
            {"q": "What should I do after a dog bite?", "a": "Seek immediate medical attention, report the bite to Austin Animal Services (this creates an official record), document your injuries with photos, get the owner's information, and contact an attorney."}
        ]
    },
    "brain-injury": {
        "name": "Brain Injury",
        "title": "Austin Brain Injury Lawyer",
        "h1": "Austin <span class=\"highlight\">Brain Injury</span> Lawyer Ready to Get You Paid",
        "subtitle": "Suffered a traumatic brain injury due to someone's negligence? TBIs can change everything—your ability to work, your relationships, your entire life. Our attorneys fight for compensation that accounts for your long-term needs.",
        "meta_description": "Suffered a brain injury in Austin? Our TBI lawyers understand long-term impacts and fight for maximum compensation. Free consultation. Call (512) 883-0012.",
        "hero_image": "brain-injury.jpg",
        "hero_alt": "Austin brain injury attorneys",
        "schema_service_type": "Brain Injury Legal Services",
        "why_need": """<p>Traumatic brain injuries are among the most devastating injuries a person can suffer. Even a \"mild\" TBI can cause lasting cognitive problems, personality changes, headaches, and difficulty working. Severe TBIs can result in permanent disability, requiring lifetime care.</p>
        <p>The challenge with TBI cases is that symptoms often aren't immediately visible—no cast, no obvious wound. Insurance companies exploit this, arguing that victims are exaggerating or that their problems existed before the accident. They'll lowball settlements that ignore the long-term costs of living with a brain injury.</p>
        <p>An experienced Austin brain injury attorney understands these tactics and how to counter them. They work with neurologists, neuropsychologists, and life care planners to document your injuries, project future costs, and build a case that accounts for how the TBI will affect the rest of your life.</p>""",
        "cards_title": "Common Causes of Traumatic Brain Injury",
        "cards_subtitle": "TBIs can result from many types of accidents and negligent conduct.",
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
            {"name": "Cognitive Impairment", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Memory Loss", "url": "/traumatic-brain-injury-lawyer/"},
            {"name": "Skull Fractures", "url": "/broken-bones-lawyer/"},
            {"name": "Nerve Damage", "url": "/nerve-damage-lawyer/"}
        ],
        "faqs": [
            {"q": "What are the symptoms of TBI?", "a": "TBI symptoms range from headaches and confusion to memory loss, personality changes, difficulty concentrating, sleep problems, and sensory issues. Symptoms may appear immediately or develop over days."},
            {"q": "Why are TBI cases worth more than other injury cases?", "a": "TBIs often cause permanent impairment affecting every aspect of life. Cases must account for lifelong medical care, lost earning capacity, and decreased quality of life—resulting in larger settlements."},
            {"q": "What experts are needed in a TBI case?", "a": "TBI cases typically require neurologists, neuropsychologists, radiologists, vocational experts, and life care planners. Their testimony documents your injuries and future needs."},
            {"q": "What if my TBI symptoms seem mild?", "a": "\"Mild\" TBIs can cause significant long-term problems. Many victims initially feel fine, then develop worsening symptoms. Always seek medical evaluation and legal consultation after any head injury."},
            {"q": "How is future care calculated in TBI cases?", "a": "Life care planners project all future medical needs, therapy, medications, assistance, and accommodations for the rest of your life. This can total millions of dollars for severe TBIs."},
            {"q": "What's the statute of limitations for TBI cases?", "a": "Generally 2 years from the accident date. However, TBI symptoms sometimes develop slowly—consult an attorney promptly to protect your rights."}
        ]
    }
}

def generate_page(case_type_slug, case_data):
    """Generate the HTML page for a case type."""

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
        injury_links_html = '\n            <a href="'.join([''] + [f'{link["url"]}" class="injury-link">{link["name"]}</a>' for link in case_data["injury_links"]])
        injury_links_html = f'''<div class="injury-links">{injury_links_html}
        </div>'''

    # Build FAQ HTML and schema
    faq_html = ""
    faq_schema_items = []
    for faq in case_data["faqs"]:
        faq_html += f'''
        <div class="faq-item">
            <div class="faq-question">{faq["q"]}</div>
            <div class="faq-answer">{faq["a"]}</div>
        </div>
'''
        escaped_answer = faq["a"].replace('"', '\\"')
        faq_schema_items.append(f'''            {{
                "@type": "Question",
                "name": "{faq["q"]}",
                "acceptedAnswer": {{
                    "@type": "Answer",
                    "text": "{escaped_answer}"
                }}
            }}''')

    faq_schema = ",\n".join(faq_schema_items)

    page_slug = f"austin-{case_type_slug}-lawyer"

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{case_data["title"]} | Free Consultation | GetPaid.law</title>

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
    <meta name="description" content="{case_data["meta_description"]}">
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
            "name": "Austin, Texas"
        }},
        "description": "Expert {case_data["name"].lower()} attorneys in Austin, Texas. Free consultation, no fee unless you win your case."
    }}
    </script>
    <!-- Preconnect to critical origins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.callrail.com">

    <!-- Preload font CSS -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></noscript>

    <!-- CallRail Call Tracking -->
    <script type="text/javascript" async src="//cdn.callrail.com/companies/362899256/4008e07fcf3ba5d73fc1/12/swap.js"></script>

    <!-- Local Business Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "GetPaid.law - {case_data["title"]}s",
        "description": "Connect with top-rated Austin {case_data["name"].lower()} attorneys. Serving Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, San Marcos, and all of Central Texas.",
        "url": "https://www.getpaid.law/{page_slug}/",
        "telephone": "(512) 883-0012",
        "areaServed": [
            {{"@type": "City", "name": "Austin"}},
            {{"@type": "City", "name": "Round Rock"}},
            {{"@type": "City", "name": "Cedar Park"}},
            {{"@type": "City", "name": "Pflugerville"}},
            {{"@type": "City", "name": "Georgetown"}},
            {{"@type": "City", "name": "San Marcos"}},
            {{"@type": "City", "name": "Kyle"}},
            {{"@type": "City", "name": "Leander"}},
            {{"@type": "City", "name": "Lakeway"}},
            {{"@type": "City", "name": "Bee Cave"}},
            {{"@type": "City", "name": "Dripping Springs"}},
            {{"@type": "City", "name": "Buda"}}
        ],
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
        .dropdown a.active {{ color: var(--accent); }}
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
        .content-section h3 {{ font-size: 1.4rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: var(--white); }}
        .content-section p {{ color: var(--light-gray); margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.8; }}
        .content-section ul {{ color: var(--light-gray); margin-bottom: 1.5rem; padding-left: 1.5rem; }}
        .content-section li {{ margin-bottom: 0.5rem; font-size: 1.05rem; line-height: 1.7; }}
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
        .mobile-nav-link:hover {{ color: #00ff88; }}
        .mobile-nav-section {{ border-bottom: 1px solid #1a1a1a; }}
        .mobile-nav-header {{ display: flex; justify-content: space-between; align-items: center; padding: 1rem; color: white; font-size: 1.125rem; font-weight: 500; cursor: pointer; }}
        .mobile-nav-header svg {{ width: 20px; height: 20px; transition: transform 0.3s ease; }}
        .mobile-nav-header.active svg {{ transform: rotate(180deg); }}
        .mobile-dropdown {{ display: none; padding-left: 1rem; padding-bottom: 0.5rem; }}
        .mobile-dropdown.active {{ display: block; }}
        .mobile-dropdown a {{ display: block; padding: 0.75rem 1rem; color: #a0a0a0; text-decoration: none; font-size: 1rem; }}
        .mobile-dropdown a:hover {{ color: #00ff88; }}
        .mobile-phone-btn {{ display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 1.5rem; padding: 1rem; background: #00ff88; color: #0a0a0a; text-decoration: none; font-size: 1.125rem; font-weight: 600; border-radius: 8px; }}
        .mobile-phone-btn svg {{ width: 24px; height: 24px; }}
        @media (max-width: 900px) {{ .mobile-menu-btn {{ display: flex; }} .header-phone span {{ display: none; }} }}
        @media (min-width: 901px) {{ .mobile-menu-btn {{ display: none; }} .mobile-menu {{ display: none !important; }} }}
        .content-image {{ float: right; margin: 0 0 1.5rem 2rem; max-width: 350px; border-radius: 12px; border: 2px solid var(--accent); }}
        .content-image img {{ width: 100%; border-radius: 10px; display: block; }}
        @media (max-width: 768px) {{ .content-image {{ float: none; margin: 0 auto 1.5rem; max-width: 100%; }} }}
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header-wrapper">
        <header>
            <a href="/" class="logo">Get<span>Paid</span></a>
            <nav class="main-nav">
                <a href="/" class="nav-link">Home</a>
                <div class="nav-item">
                    <span class="nav-link" style="cursor: pointer;">
                        Practice Areas
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
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
                    <span class="nav-link" style="cursor: pointer;">
                        Locations
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(512) 883-0012</span>
            </a>
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </header>
    </div>

    <!-- Mobile Menu -->
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
            Call (512) 883-0012
        </a>
    </div>
    <div class="header-spacer"></div>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>{case_data["h1"]}</h1>
            <p>{case_data["subtitle"]}</p>
            <div class="hero-cta">
                <a href="tel:512-883-0012" class="phone-cta">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now: (512) 883-0012
                </a>
                <p class="cta-subtext">Free consultation • Available 24/7 • No fee unless you win</p>
            </div>
        </div>
        <div class="hero-image">
            <img src="/images/heroes/{case_data["hero_image"]}" alt="{case_data["hero_alt"]}" width="600" height="400" loading="eager">
        </div>
    </section>

    <!-- Why You Need a Lawyer -->
    <section class="content-section">
        <h2>Why You Need an {case_data["title"]}</h2>
        {case_data["why_need"]}
    </section>

    <!-- Types/Causes Grid -->
    <section class="accident-types-section">
        <div class="accident-types-content">
            <h2>{case_data["cards_title"]}</h2>
            <p>{case_data["cards_subtitle"]}</p>
            <div class="accident-grid">
{cards_html}            </div>
        </div>
    </section>

    <!-- Common Injuries -->
    <section class="content-section">
        <h2>Common {case_data["name"]} Injuries</h2>
        <p>{case_data["name"]} accidents cause a wide range of injuries, from minor bruises to life-changing trauma. Understanding your injury is crucial for getting proper compensation. Learn more about the specific injuries we handle:</p>
        {injury_links_html}
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <h2>Frequently Asked Questions</h2>
{faq_html}
    </section>

    <!-- Final CTA -->
    <section class="cta-section">
        <h2>Don't Wait to Get the Help You Deserve</h2>
        <p>Every day you wait, evidence disappears and memories fade. Insurance companies are already building their case to pay you as little as possible. Get an experienced {case_data["title"].lower()} in your corner today.</p>
        <a href="tel:512-883-0012" class="phone-cta">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (512) 883-0012
        </a>
    </section>

    <!-- Footer -->
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

    <!-- Floating CTA Button -->
    <style>
        .floating-cta {{ position: fixed; bottom: 2rem; right: 2rem; background: var(--accent); color: var(--black); padding: 1rem 1.5rem; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1rem; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.4); transition: all 0.3s; z-index: 999; display: flex; align-items: center; gap: 0.5rem; border: none; cursor: pointer; font-family: inherit; }}
        .floating-cta:hover {{ background: var(--accent-hover); transform: translateY(-3px); box-shadow: 0 6px 25px rgba(34, 197, 94, 0.5); }}
        @media (max-width: 640px) {{ .floating-cta {{ bottom: 1rem; right: 1rem; padding: 0.875rem 1.25rem; font-size: 0.9rem; }} }}
        .cta-popup {{ position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); z-index: 1001; display: none; align-items: center; justify-content: center; padding: 1rem; }}
        .cta-popup.active {{ display: flex; }}
        .cta-popup-content {{ background: var(--dark); border: 1px solid var(--gray); border-radius: 16px; padding: 2rem; max-width: 320px; width: 100%; text-align: center; position: relative; }}
        .cta-popup-close {{ position: absolute; top: 0.75rem; right: 1rem; background: none; border: none; color: var(--light-gray); font-size: 1.75rem; cursor: pointer; line-height: 1; }}
        .cta-popup-close:hover {{ color: var(--white); }}
        .cta-popup-content h3 {{ font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--white); }}
        .cta-popup-call {{ display: flex; align-items: center; justify-content: center; gap: 0.75rem; width: 100%; padding: 1rem; background: var(--accent); color: var(--black); text-decoration: none; font-weight: 700; font-size: 1.1rem; border-radius: 8px; margin-bottom: 0.75rem; transition: background 0.2s; }}
        .cta-popup-call:hover {{ background: var(--accent-hover); }}
        .cta-popup-call svg {{ width: 22px; height: 22px; }}
        .popup-divider {{ display: flex; align-items: center; margin: 1.25rem 0; color: var(--light-gray); font-size: 0.85rem; }}
        .popup-divider::before, .popup-divider::after {{ content: ''; flex: 1; height: 1px; background: var(--gray); }}
        .popup-divider span {{ padding: 0 0.75rem; }}
        .popup-form {{ display: flex; flex-direction: column; gap: 0.75rem; }}
        .popup-form input, .popup-form select {{ width: 100%; padding: 0.875rem 1rem; background: var(--gray); border: 1px solid #2a2a2a; border-radius: 8px; color: var(--white); font-size: 1rem; font-family: inherit; }}
        .popup-form input:focus, .popup-form select:focus {{ outline: none; border-color: var(--accent); }}
        .popup-form input::placeholder {{ color: #525252; }}
        .popup-form select {{ cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23a3a3a3' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; }}
        .popup-form select option {{ background: var(--dark); }}
        .popup-submit-btn {{ width: 100%; padding: 1rem; background: var(--accent); color: var(--black); border: none; border-radius: 8px; font-size: 1rem; font-weight: 700; cursor: pointer; font-family: inherit; transition: background 0.2s; }}
        .popup-submit-btn:hover {{ background: var(--accent-hover); }}
        .popup-disclaimer {{ margin-top: 0.75rem; font-size: 0.8rem; color: #525252; }}
    </style>
    <button class="floating-cta" onclick="toggleCtaPopup()">Get What I Deserve</button>
    <div class="cta-popup" id="ctaPopup">
        <div class="cta-popup-content">
            <button class="cta-popup-close" onclick="toggleCtaPopup()">&times;</button>
            <h3>Get Your Free Case Review</h3>
            <a href="tel:512-883-0012" class="cta-popup-call">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call (512) 883-0012
            </a>
            <div class="popup-divider"><span>or fill out the form</span></div>
            <form id="popup-form" class="popup-form">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="tel" name="phone" placeholder="Phone Number" required>
                <select name="case-type" required>
                    <option value="" disabled selected>Type of Injury</option>
                    <option value="Car Accident">Car Accident</option>
                    <option value="Truck Accident">Truck Accident</option>
                    <option value="Motorcycle Accident">Motorcycle Accident</option>
                    <option value="Workplace Injury">Workplace Injury</option>
                    <option value="Slip & Fall">Slip & Fall</option>
                    <option value="Wrongful Death">Wrongful Death</option>
                    <option value="Police Brutality">Police Brutality</option>
                    <option value="Brain Injury">Brain Injury / TBI</option>
                    <option value="Spinal Cord Injury">Spinal Cord Injury</option>
                    <option value="Back Injury">Back / Neck Injury</option>
                    <option value="Broken Bones">Broken Bones</option>
                    <option value="Burn Injury">Burn Injury</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" class="popup-submit-btn">Get What I Deserve</button>
            </form>
            <p class="popup-disclaimer">Free consultation. No fee unless you win.</p>
        </div>
    </div>
    <script>
        function toggleCtaPopup() {{ document.getElementById('ctaPopup').classList.toggle('active'); }}
        document.getElementById('ctaPopup').addEventListener('click', function(e) {{ if (e.target === this) toggleCtaPopup(); }});
        document.getElementById('popup-form').addEventListener('submit', function(e) {{
            e.preventDefault();
            const btn = this.querySelector('.popup-submit-btn');
            btn.textContent = 'Submitting...'; btn.disabled = true;
            const fd = new FormData(this);
            const url = 'https://script.google.com/macros/s/AKfycbwu-Yc8nPaHrdJj3KEz8jvZJF6I51o7-ZIGYjBarvEPPOzvNYWhqoQ7AxTrlINgmbAspw/exec?name=' + encodeURIComponent(fd.get('name')) + '&phone=' + encodeURIComponent(fd.get('phone')) + '&email=Not%20provided&caseType=' + encodeURIComponent(fd.get('case-type')) + '&story=Submitted%20via%20popup';
            fetch(url, {{ method: 'GET', mode: 'no-cors' }}).then(() => {{ window.location.href = '/thank-you/'; }}).catch(() => {{ window.location.href = '/thank-you/'; }});
        }});
    </script>
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

    for case_type_slug, case_data in CASE_TYPES.items():
        dir_name = f"austin-{case_type_slug}-lawyer"
        dir_path = os.path.join(base_dir, dir_name)

        # Create directory if it doesn't exist
        os.makedirs(dir_path, exist_ok=True)

        # Generate and write the page
        html = generate_page(case_type_slug, case_data)
        file_path = os.path.join(dir_path, "index.html")

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(html)

        print(f"Created: {dir_name}/index.html")

    print(f"\nDone! Created {len(CASE_TYPES)} Austin case type pages.")


if __name__ == "__main__":
    main()
