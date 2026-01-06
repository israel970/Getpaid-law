#!/usr/bin/env python3
"""
Enhance Landing Pages Script
Generates enhanced city + case type landing pages with 1,500-2,500 words,
local references, expanded FAQs, and internal linking.
"""

import json
import os
from pathlib import Path

# Load data files
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent

with open(SCRIPT_DIR / "city_data.json", "r") as f:
    CITY_DATA = json.load(f)

with open(SCRIPT_DIR / "case_type_content.json", "r") as f:
    CASE_TYPE_DATA = json.load(f)

# Map case type slugs to their keys in the JSON
CASE_TYPE_MAP = {
    "car-accident-lawyer": "car-accident",
    "truck-accident-lawyer": "truck-accident",
    "18-wheeler-accident-lawyer": "18-wheeler-accident",
    "motorcycle-accident-lawyer": "motorcycle-accident",
    "uber-lyft-accident-lawyer": "uber-lyft-accident",
    "drunk-driving-accident-lawyer": "drunk-driving-accident",
    "hit-and-run-lawyer": "hit-and-run",
    "wrongful-death-lawyer": "wrongful-death",
    "slip-and-fall-lawyer": "slip-and-fall",
    "work-injury-lawyer": "work-injury",
    "dog-bite-lawyer": "dog-bite",
    "brain-injury-lawyer": "brain-injury"
}

def get_dangerous_roads_list(city_data):
    """Get formatted list of dangerous roads for intro paragraphs."""
    roads = city_data.get("dangerous_roads", [])
    if not roads:
        return "major highways and local roads"
    road_names = [r["name"] for r in roads[:4]]
    if len(road_names) > 1:
        return ", ".join(road_names[:-1]) + " and " + road_names[-1]
    return road_names[0] if road_names else "major highways"

def get_dangerous_roads_answer(city_data, case_type):
    """Generate answer for 'most dangerous roads' FAQ."""
    roads = city_data.get("dangerous_roads", [])
    city_name = city_data["name"]

    if not roads:
        return f"Major highways and arterial roads throughout {city_name} see frequent accidents. Contact our office for information about specific dangerous locations."

    road_list = []
    for road in roads[:3]:
        spots = road.get("dangerous_spots", [])
        if spots:
            road_list.append(f"{road['name']} (particularly near {spots[0]})")
        else:
            road_list.append(road["name"])

    return f"In {city_name}, {case_type} accidents frequently occur on {', '.join(road_list)}. These roads see heavy traffic and multiple factors contribute to their high accident rates."

def get_hospital_name(city_data):
    """Get primary hospital name for the city."""
    hospitals = city_data.get("hospitals", [])
    if hospitals:
        return hospitals[0]["name"]
    return "local trauma centers"

def escape_json_string(s):
    """Escape special characters for JSON embedding."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def generate_faq_schema(faqs):
    """Generate FAQ schema JSON-LD."""
    entities = []
    for faq in faqs:
        q = escape_json_string(faq["q"])
        a = escape_json_string(faq["a"])
        entities.append(f'{{"@type": "Question", "name": "{q}", "acceptedAnswer": {{"@type": "Answer", "text": "{a}"}}}}')
    return ", ".join(entities)

def generate_internal_links_section(city_data, case_type_data, current_city_slug, current_case_slug):
    """Generate internal linking section HTML."""
    nearby_cities = city_data.get("nearby_cities", [])
    related_cases = case_type_data.get("related_case_types", [])
    injuries = case_type_data.get("injuries", [])

    html = '''    <section class="internal-links-section">
        <div class="content-container">
            <h2>Related Legal Resources</h2>
'''

    # Nearby cities with same case type
    if nearby_cities:
        html += '''            <div class="links-group">
                <h3>Nearby Cities We Serve</h3>
                <div class="link-chips">
'''
        for city in nearby_cities[:4]:
            city_slug = city.lower().replace(" ", "-")
            link_slug = f"{city_slug}-{current_case_slug}"
            html += f'                    <a href="../{link_slug}/" class="link-chip">{city}</a>\n'
        html += '''                </div>
            </div>
'''

    # Related case types in same city
    if related_cases:
        city_name = city_data["name"]
        html += '''            <div class="links-group">
                <h3>Other Practice Areas</h3>
                <div class="link-chips">
'''
        for case_slug in related_cases[:4]:
            case_key = CASE_TYPE_MAP.get(case_slug, "")
            if case_key and case_key in CASE_TYPE_DATA:
                case_name = CASE_TYPE_DATA[case_key]["name"]
                link_slug = f"{current_city_slug}-{case_slug}"
                html += f'                    <a href="../{link_slug}/" class="link-chip">{city_name} {case_name}</a>\n'
        html += '''                </div>
            </div>
'''

    html += '''        </div>
    </section>
'''
    return html

def generate_dangerous_roads_section(city_data, case_type_name):
    """Generate expanded dangerous roads section."""
    roads = city_data.get("dangerous_roads", [])
    city_name = city_data["name"]

    if not roads:
        return ""

    html = f'''    <section class="content-section">
        <div class="content-container">
            <h2>Dangerous Roads for {case_type_name}s in {city_name}</h2>
            <p>Understanding where accidents happen most frequently can help you stay safe—and helps our attorneys build stronger cases when accidents do occur. Here are {city_name}'s most dangerous roads:</p>
            <div class="roads-list">
'''

    for road in roads[:5]:
        html += f'''                <div class="road-item">
                    <h3>{road["name"]}</h3>
                    <p>{road["description"]}</p>
'''
        spots = road.get("dangerous_spots", [])
        if spots:
            html += f'''                    <p><strong>High-risk areas:</strong> {", ".join(spots[:3])}</p>
'''
        html += '''                </div>
'''

    html += '''            </div>
        </div>
    </section>
'''
    return html

def generate_medical_section(city_data, case_type_name):
    """Generate medical care section."""
    hospitals = city_data.get("hospitals", [])
    city_name = city_data["name"]

    if not hospitals:
        return ""

    html = f'''    <section class="content-section bg-light">
        <div class="content-container">
            <h2>Medical Care After a {case_type_name} in {city_name}</h2>
            <p>Getting proper medical care after an accident is crucial—both for your health and your legal case. {city_name} has excellent medical facilities for treating accident injuries:</p>
            <div class="hospitals-grid">
'''

    for hospital in hospitals[:4]:
        trauma_level = hospital.get("trauma_level", "General")
        specialties = hospital.get("specialties", [])
        html += f'''                <div class="hospital-card">
                    <h3>{hospital["name"]}</h3>
                    <p class="hospital-address">{hospital["address"]}</p>
                    <p class="hospital-level"><strong>Trauma Level:</strong> {trauma_level}</p>
'''
        if specialties:
            html += f'''                    <p class="hospital-specialties"><strong>Specialties:</strong> {", ".join(specialties[:3])}</p>
'''
        html += '''                </div>
'''

    html += f'''            </div>
            <p class="medical-note"><strong>Important:</strong> Always seek medical attention after any accident, even if you feel fine. Some injuries don't show symptoms immediately. Medical documentation also strengthens your legal case.</p>
        </div>
    </section>
'''
    return html

def generate_court_section(city_data, case_type_name):
    """Generate legal process / court section."""
    courts = city_data.get("courts", {})
    city_name = city_data["name"]
    county = city_data.get("county", "the local county")

    if not courts:
        return ""

    html = f'''    <section class="content-section">
        <div class="content-container">
            <h2>The Legal Process for {case_type_name}s in {county}</h2>
            <p>Understanding how the legal system works in {county} can help set expectations for your case:</p>

            <div class="court-info">
                <h3>{courts.get("main_courthouse", "County Courthouse")}</h3>
                <p><strong>Address:</strong> {courts.get("address", "Contact us for courthouse information")}</p>
                <p><strong>District Courts:</strong> {courts.get("district_courts", "Various district courts handle civil matters")}</p>
                <p><strong>Filing:</strong> {courts.get("civil_filing", "District Clerk's Office")}</p>
            </div>

            <div class="timeline-info">
                <h3>Typical Case Timeline</h3>
                <p>{courts.get("typical_timeline", "Personal injury cases typically take 12-24 months from filing to resolution, though this varies based on case complexity.")}</p>
            </div>

            <p>Our attorneys regularly appear in {county} courts and understand local procedures, judges, and what works with local juries. This experience helps us navigate your case efficiently and effectively.</p>
        </div>
    </section>
'''
    return html

def generate_statistics_section(city_data, case_type_name):
    """Generate local accident statistics section."""
    stats = city_data.get("crash_stats", {})
    city_name = city_data["name"]
    county = city_data.get("county", "the local area")

    if not stats:
        return ""

    html = f'''    <section class="stats-section">
        <div class="content-container">
            <h2>{case_type_name} Statistics in {city_name}</h2>
            <p>{city_name} and {county} see thousands of motor vehicle accidents each year. Understanding the scope of the problem shows why experienced legal representation is essential:</p>

            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">{stats.get("total_crashes_2023", "N/A")}</span>
                    <span class="stat-label">Total Crashes (2023)</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">{stats.get("fatal_crashes_2023", "N/A")}</span>
                    <span class="stat-label">Fatal Crashes</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">{stats.get("serious_injury_crashes", "N/A")}</span>
                    <span class="stat-label">Serious Injury Crashes</span>
                </div>
            </div>

            <p><strong>Leading Cause:</strong> {stats.get("top_cause", "Various factors including speeding and distracted driving")}</p>

            <p>These statistics represent real people whose lives were impacted by negligent drivers. If you've been injured, our {city_name} attorneys are here to help you get the compensation you deserve.</p>
        </div>
    </section>
'''
    return html

def generate_enhanced_page(city_slug, case_type_slug):
    """Generate a complete enhanced landing page."""

    # Get data
    city_data = CITY_DATA.get(city_slug)
    case_key = CASE_TYPE_MAP.get(case_type_slug)
    case_type_data = CASE_TYPE_DATA.get(case_key)

    if not city_data or not case_type_data:
        print(f"Missing data for {city_slug} or {case_type_slug}")
        return None

    city_name = city_data["name"]
    case_type_name = case_type_data["name"]
    county = city_data.get("county", "the local county")
    phone = city_data.get("phone", "(512) 883-0012")

    # Generate dynamic content
    dangerous_roads_list = get_dangerous_roads_list(city_data)
    dangerous_roads_answer = get_dangerous_roads_answer(city_data, case_type_name.lower())
    hospital_name = get_hospital_name(city_data)

    # Process intro paragraphs with replacements
    intro_paragraphs = []
    for para in case_type_data.get("intro_paragraphs", []):
        processed = para.replace("{city}", city_name)
        processed = processed.replace("{county}", county)
        processed = processed.replace("{crash_stats}", city_data.get("crash_stats", {}).get("total_crashes_2023", "thousands of"))
        processed = processed.replace("{dangerous_roads_list}", dangerous_roads_list)
        processed = processed.replace("{downtown_areas}", "downtown, the airport, and entertainment districts")
        intro_paragraphs.append(processed)

    # Process why local lawyer paragraphs
    why_local = []
    for para in case_type_data.get("why_local_lawyer", []):
        processed = para.replace("{city}", city_name)
        processed = processed.replace("{county}", county)
        why_local.append(processed)

    # Process FAQs with city-specific replacements
    faqs = []
    for faq in case_type_data.get("faqs", []):
        q = faq["q"].replace("{city}", city_name).replace("{county}", county)
        a = faq["a"].replace("{city}", city_name).replace("{county}", county)
        a = a.replace("{dangerous_roads_answer}", dangerous_roads_answer)
        a = a.replace("{hospital_name}", hospital_name)
        a = a.replace("{dangerous_roads_list}", dangerous_roads_list)
        faqs.append({"q": q, "a": a})

    # Generate hero subtitle
    hero_subtitle = case_type_data.get("hero_subtitle_template", "").replace("{city}", city_name)

    # Generate page title and meta description
    page_title = f"{city_name} {case_type_name} Lawyer | GetPaid.law"
    meta_description = f"Experienced {city_name} {case_type_name.lower()} lawyer fighting for maximum compensation. Free consultation for {county} accident victims."

    # Build HTML
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{page_title}</title>
    <meta name="description" content="{meta_description}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    <link rel="icon" type="image/png" href="../images/logos/favicon.png">
    <script src="../nav.js" defer></script>

    <!-- LegalService Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "GetPaid.law - {city_name} {case_type_name} Lawyer",
        "description": "{escape_json_string(meta_description)}",
        "url": "https://www.getpaid.law/{city_slug}-{case_type_slug}/",
        "telephone": "{phone}",
        "areaServed": {{
            "@type": "City",
            "name": "{city_name}",
            "containedInPlace": {{
                "@type": "State",
                "name": "Texas"
            }}
        }},
        "serviceType": ["{case_type_name} Lawyer", "Personal Injury Attorney", "{city_name} Attorney"]
    }}
    </script>

    <!-- FAQ Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{generate_faq_schema(faqs)}]
    }}
    </script>

    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.getpaid.law/"
            }},
            {{
                "@type": "ListItem",
                "position": 2,
                "name": "{case_type_name} Lawyer",
                "item": "https://www.getpaid.law/{case_type_slug}/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{city_name} {case_type_name} Lawyer",
                "item": "https://www.getpaid.law/{city_slug}-{case_type_slug}/"
            }}
        ]
    }}
    </script>
</head>
<body>
    <nav class="main-nav">
        <div class="nav-container">
            <a href="../" class="logo">
                <img src="/images/logos/logo.png" alt="GetPaid.law" />
            </a>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="nav-links">
                <a href="../car-accident-lawyer/" class="nav-link">Car Accidents</a>
                <a href="../truck-accident-lawyer/" class="nav-link">Truck Accidents</a>
                <a href="../motorcycle-accident-lawyer/" class="nav-link">Motorcycle Accidents</a>
                <a href="../workplace-injury-lawyer/" class="nav-link">Workplace Injuries</a>
                <a href="../wrongful-death-lawyer/" class="nav-link">Wrongful Death</a>
                <div class="nav-dropdown">
                    <span class="nav-link dropdown-toggle">More <span class="dropdown-arrow">&#9662;</span></span>
                    <div class="dropdown-menu">
                        <a href="../slip-and-fall-lawyer/">Slip & Fall</a>
                        <a href="../police-brutality-lawyer/">Police Brutality</a>
                    </div>
                </div>
                <a href="../contact/" class="nav-link btn">Free Consultation</a>
            </div>
        </div>
    </nav>

    <section class="hero practice-area-hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1>{city_name} {case_type_name} Lawyer</h1>
                <p class="hero-subtitle">{hero_subtitle}</p>
                <div class="hero-cta-group">
                    <a href="tel:{phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}" class="btn primary">Call Now: {phone}</a>
                    <a href="../contact/" class="btn secondary">Free Consultation</a>
                </div>
            </div>
            <div class="hero-image-container">
                <img class="hero-image" src="/images/heroes/{city_slug}.jpg" alt="{city_name} {case_type_name} Lawyer">
            </div>
        </div>
    </section>

    <section class="content-section">
        <div class="content-container">
            <h2>Why You Need a {city_name} {case_type_name} Lawyer</h2>
'''

    # Add intro paragraphs
    for i, para in enumerate(intro_paragraphs):
        if i == 0:
            html += f'            <p class="lead">{para}</p>\n'
        else:
            html += f'            <p>{para}</p>\n'

    html += '''        </div>
    </section>
'''

    # Add statistics section
    html += generate_statistics_section(city_data, case_type_name)

    # Add dangerous roads section
    html += generate_dangerous_roads_section(city_data, case_type_name)

    # Add why local lawyer section
    html += f'''    <section class="content-section bg-light">
        <div class="content-container">
            <h2>Why Choose a Local {city_name} Attorney?</h2>
'''
    for para in why_local:
        html += f'            <p>{para}</p>\n'
    html += '''        </div>
    </section>
'''

    # Add types section
    types = case_type_data.get("types", [])
    if types:
        types_title = case_type_data.get("types_section_title", f"Types of {case_type_name} Cases")
        html += f'''    <section class="types-section">
        <div class="content-container">
            <h2>{types_title}</h2>
            <div class="types-grid">
'''
        for type_item in types[:6]:
            html += f'''                <div class="type-card">
                    <h3>{type_item["title"]}</h3>
                    <p>{type_item["description"]}</p>
                </div>
'''
        html += '''            </div>
        </div>
    </section>
'''

    # Add medical section
    html += generate_medical_section(city_data, case_type_name)

    # Add Texas laws section
    laws = case_type_data.get("texas_laws", [])
    if laws:
        html += f'''    <section class="content-section">
        <div class="content-container">
            <h2>Texas {case_type_name} Laws</h2>
            <p>Understanding Texas law is crucial for maximizing your recovery. Here are key legal principles affecting {case_type_name.lower()} cases:</p>
            <ul>
'''
        for law in laws:
            html += f'                <li><strong>{law["title"]}:</strong> {law["content"]}</li>\n'
        html += '''            </ul>
        </div>
    </section>
'''

    # Add court/legal process section
    html += generate_court_section(city_data, case_type_name)

    # Add compensation section
    html += f'''    <section class="compensation-section">
        <div class="content-container">
            <h2>Compensation for {city_name} {case_type_name} Victims</h2>
            <p>Victims of {case_type_name.lower()}s in {city_name} may be entitled to significant compensation including:</p>
            <div class="compensation-grid">
                <div class="compensation-item">
                    <h3>Medical Expenses</h3>
                    <p>Emergency care, surgeries, rehabilitation, physical therapy, and all ongoing treatment costs</p>
                </div>
                <div class="compensation-item">
                    <h3>Lost Income</h3>
                    <p>Current lost wages, future lost earnings, reduced earning capacity, and lost benefits</p>
                </div>
                <div class="compensation-item">
                    <h3>Pain & Suffering</h3>
                    <p>Physical pain, emotional distress, anxiety, depression, and loss of enjoyment of life</p>
                </div>
                <div class="compensation-item">
                    <h3>Property Damage</h3>
                    <p>Vehicle repair or replacement, personal property damage, and rental car expenses</p>
                </div>
            </div>
        </div>
    </section>
'''

    # Add FAQ section
    html += f'''    <section class="faq-section">
        <div class="content-container">
            <h2>Frequently Asked Questions About {city_name} {case_type_name}s</h2>
            <div class="faq-container">
'''
    for faq in faqs:
        html += f'''                <div class="faq-item">
                    <h3>{faq["q"]}</h3>
                    <p>{faq["a"]}</p>
                </div>
'''
    html += '''            </div>
        </div>
    </section>
'''

    # Add injury links section
    injuries = case_type_data.get("injuries", [])
    if injuries:
        html += f'''    <section class="injury-links-section">
        <div class="content-container">
            <h2>Common Injuries in {city_name} {case_type_name}s</h2>
            <p>{case_type_name}s often result in serious injuries that require extensive medical treatment. Learn more about specific injuries:</p>
            <div class="injury-links">
'''
        injury_names = {
            "traumatic-brain-injury-lawyer": "Traumatic Brain Injury",
            "spinal-cord-injury-lawyer": "Spinal Cord Injury",
            "broken-bones-lawyer": "Broken Bones",
            "internal-organ-damage-lawyer": "Internal Injuries",
            "burn-injury-lawyer": "Burn Injuries",
            "whiplash-lawyer": "Whiplash",
            "soft-tissue-injury-lawyer": "Soft Tissue Injuries",
            "back-injury-lawyer": "Back Injuries",
            "neck-injury-lawyer": "Neck Injuries",
            "amputation-lawyer": "Amputation",
            "road-rash-lawyer": "Road Rash",
            "shoulder-injury-lawyer": "Shoulder Injuries",
            "knee-injury-lawyer": "Knee Injuries",
            "hip-injury-lawyer": "Hip Injuries",
            "wrongful-death-lawyer": "Wrongful Death",
            "paralysis-lawyer": "Paralysis",
            "concussion-lawyer": "Concussion",
            "facial-injury-lawyer": "Facial Injuries",
            "nerve-damage-lawyer": "Nerve Damage",
            "scarring-disfigurement-lawyer": "Scarring & Disfigurement"
        }
        for injury in injuries[:8]:
            name = injury_names.get(injury, injury.replace("-lawyer", "").replace("-", " ").title())
            html += f'                <a href="../{injury}/" class="injury-link">{name}</a>\n'
        html += '''            </div>
        </div>
    </section>
'''

    # Add internal links section
    html += generate_internal_links_section(city_data, case_type_data, city_slug, case_type_slug)

    # Add CTA section
    html += f'''    <section class="cta-section">
        <div class="content-container">
            <h2>Injured in {city_name}? Get Help Now</h2>
            <p>Our experienced {city_name} {case_type_name.lower()} attorneys are ready to fight for the compensation you deserve. Free consultation—no fees unless we win.</p>
            <div class="hero-cta-group">
                <a href="tel:{phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}" class="btn primary">Call {phone}</a>
                <a href="../contact/" class="btn secondary">Free Consultation</a>
            </div>
        </div>
    </section>

    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-main">
                <div class="footer-brand">
                    <img src="/images/logos/logo.png" alt="GetPaid.law" class="footer-logo">
                    <p class="footer-tagline">Fighting for the compensation you deserve</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Practice Areas</h4>
                        <a href="../car-accident-lawyer/">Car Accidents</a>
                        <a href="../truck-accident-lawyer/">Truck Accidents</a>
                        <a href="../motorcycle-accident-lawyer/">Motorcycle Accidents</a>
                        <a href="../workplace-injury-lawyer/">Workplace Injuries</a>
                    </div>
                    <div class="footer-column">
                        <h4>More Areas</h4>
                        <a href="../wrongful-death-lawyer/">Wrongful Death</a>
                        <a href="../slip-and-fall-lawyer/">Slip & Fall</a>
                        <a href="../police-brutality-lawyer/">Police Brutality</a>
                        <a href="../blog/">Legal Blog</a>
                    </div>
                    <div class="footer-column">
                        <h4>Contact</h4>
                        <a href="tel:{phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}">{phone}</a>
                        <a href="../contact/">Free Consultation</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 GetPaid.law. All rights reserved.</p>
                <p class="disclaimer">This website is for informational purposes only and does not constitute legal advice.</p>
            </div>
        </div>
    </footer>

    <div class="floating-cta">
        <a href="tel:{phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}" class="btn primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Free Consultation
        </a>
    </div>

    <div class="popup-overlay" id="popupOverlay">
        <div class="popup-content">
            <button class="popup-close" onclick="closePopup()">&times;</button>
            <h3>Free Case Evaluation</h3>
            <p>Get your free consultation today. No fees unless we win.</p>
            <a href="tel:{phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}" class="btn primary">Call {phone}</a>
            <a href="../contact/" class="btn secondary">Contact Online</a>
        </div>
    </div>

    <script>
        function closePopup() {{
            document.getElementById('popupOverlay').classList.remove('active');
            sessionStorage.setItem('popupClosed', 'true');
        }}
        setTimeout(() => {{
            if (!sessionStorage.getItem('popupClosed')) {{
                document.getElementById('popupOverlay').classList.add('active');
            }}
        }}, 30000);
    </script>
</body>
</html>
'''

    return html

def count_words(html):
    """Roughly count words in HTML content."""
    import re
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', html)
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    # Count words
    words = text.split()
    return len(words)

def main():
    """Generate all enhanced landing pages."""

    cities = list(CITY_DATA.keys())
    case_types = list(CASE_TYPE_MAP.keys())

    total_pages = 0
    word_counts = []

    print(f"Generating enhanced pages for {len(cities)} cities and {len(case_types)} case types...")
    print(f"Total pages to generate: {len(cities) * len(case_types)}")
    print("-" * 50)

    for city_slug in cities:
        city_name = CITY_DATA[city_slug]["name"]

        for case_type_slug in case_types:
            # Generate page
            html = generate_enhanced_page(city_slug, case_type_slug)

            if html:
                # Create directory
                page_dir = PROJECT_DIR / f"{city_slug}-{case_type_slug}"
                page_dir.mkdir(exist_ok=True)

                # Write file
                page_file = page_dir / "index.html"
                with open(page_file, "w") as f:
                    f.write(html)

                # Count words
                word_count = count_words(html)
                word_counts.append(word_count)

                total_pages += 1
                print(f"  Generated: {city_slug}-{case_type_slug} ({word_count} words)")

    print("-" * 50)
    print(f"Total pages generated: {total_pages}")
    print(f"Average word count: {sum(word_counts) // len(word_counts)}")
    print(f"Min word count: {min(word_counts)}")
    print(f"Max word count: {max(word_counts)}")

if __name__ == "__main__":
    main()
