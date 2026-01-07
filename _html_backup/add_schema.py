#!/usr/bin/env python3
"""
Add BreadcrumbList schema to all pages.
"""

import os
import re
import glob

BASE_DIR = "/Users/israelmedina/Desktop/Getpaid-law"

def get_breadcrumb_schema(page_type, city_name=None, case_type=None, page_title=None, page_url=None):
    """Generate BreadcrumbList schema based on page type."""

    if page_type == "city_case":
        # City + Case Type page (e.g., san-antonio-car-accident-lawyer)
        return f'''
    <!-- BreadcrumbList Schema -->
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
                "name": "{case_type}",
                "item": "https://www.getpaid.law/{case_type.lower().replace(' ', '-')}-lawyer/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{city_name} {case_type} Lawyer",
                "item": "https://www.getpaid.law/{page_url}/"
            }}
        ]
    }}
    </script>'''

    elif page_type == "practice_area":
        # Main practice area page (e.g., car-accident-lawyer)
        return f'''
    <!-- BreadcrumbList Schema -->
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
                "name": "{page_title}",
                "item": "https://www.getpaid.law/{page_url}/"
            }}
        ]
    }}
    </script>'''

    elif page_type == "location":
        # Location page (e.g., austin-personal-injury-lawyer)
        return f'''
    <!-- BreadcrumbList Schema -->
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
                "name": "Locations",
                "item": "https://www.getpaid.law/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{city_name} Personal Injury Lawyer",
                "item": "https://www.getpaid.law/{page_url}/"
            }}
        ]
    }}
    </script>'''

    elif page_type == "injury":
        # Injury type page (e.g., traumatic-brain-injury-lawyer)
        return f'''
    <!-- BreadcrumbList Schema -->
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
                "name": "Injury Types",
                "item": "https://www.getpaid.law/"
            }},
            {{
                "@type": "ListItem",
                "position": 3,
                "name": "{page_title}",
                "item": "https://www.getpaid.law/{page_url}/"
            }}
        ]
    }}
    </script>'''

    elif page_type == "subtype":
        # Accident/injury subtype page (e.g., rear-end-collision-lawyer)
        return f'''
    <!-- BreadcrumbList Schema -->
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
                "name": "{page_title}",
                "item": "https://www.getpaid.law/{page_url}/"
            }}
        ]
    }}
    </script>'''

    return ""


def add_schema_to_file(file_path, schema):
    """Add schema to a file before the </head> tag."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if BreadcrumbList schema already exists
    if 'BreadcrumbList' in content:
        return False

    # Insert before </head>
    content = content.replace('</head>', f'{schema}\n</head>')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return True


def get_city_name(slug):
    """Convert slug to city name."""
    city_map = {
        "austin": "Austin",
        "san-antonio": "San Antonio",
        "houston": "Houston",
        "dallas": "Dallas",
        "rio-grande-valley": "Rio Grande Valley",
        "west-texas": "West Texas",
        "round-rock": "Round Rock",
        "cedar-park": "Cedar Park",
        "pflugerville": "Pflugerville",
        "georgetown": "Georgetown",
        "san-marcos": "San Marcos",
        "kyle": "Kyle",
        "leander": "Leander",
        "lakeway": "Lakeway",
        "bee-cave": "Bee Cave"
    }
    return city_map.get(slug, slug.replace("-", " ").title())


def get_case_type_name(slug):
    """Convert case type slug to name."""
    case_map = {
        "car-accident": "Car Accident",
        "truck-accident": "Truck Accident",
        "18-wheeler-accident": "18-Wheeler Accident",
        "motorcycle-accident": "Motorcycle Accident",
        "uber-lyft-accident": "Uber & Lyft Accident",
        "drunk-driving-accident": "Drunk Driving Accident",
        "hit-and-run": "Hit and Run",
        "wrongful-death": "Wrongful Death",
        "slip-and-fall": "Slip and Fall",
        "work-injury": "Work Injury",
        "workplace-injury": "Workplace Injury",
        "dog-bite": "Dog Bite",
        "brain-injury": "Brain Injury",
        "police-brutality": "Police Brutality"
    }
    return case_map.get(slug, slug.replace("-", " ").title())


def process_city_case_pages():
    """Process all city + case type pages."""
    cities = [
        "austin", "san-antonio", "houston", "dallas", "rio-grande-valley", "west-texas",
        "round-rock", "cedar-park", "pflugerville", "georgetown", "san-marcos",
        "kyle", "leander", "lakeway", "bee-cave"
    ]
    case_types = [
        "car-accident", "truck-accident", "18-wheeler-accident", "motorcycle-accident",
        "uber-lyft-accident", "drunk-driving-accident", "hit-and-run", "wrongful-death",
        "slip-and-fall", "work-injury", "dog-bite", "brain-injury", "workplace-injury",
        "police-brutality"
    ]

    count = 0
    for city in cities:
        for case_type in case_types:
            dir_name = f"{city}-{case_type}-lawyer"
            file_path = os.path.join(BASE_DIR, dir_name, "index.html")

            if os.path.exists(file_path):
                city_name = get_city_name(city)
                case_name = get_case_type_name(case_type)

                schema = get_breadcrumb_schema(
                    "city_case",
                    city_name=city_name,
                    case_type=case_name,
                    page_url=dir_name
                )

                if add_schema_to_file(file_path, schema):
                    count += 1
                    print(f"Added schema: {dir_name}")

    return count


def process_practice_area_pages():
    """Process main practice area pages."""
    practice_areas = [
        ("car-accident-lawyer", "Car Accident Lawyer"),
        ("truck-accident-lawyer", "Truck Accident Lawyer"),
        ("motorcycle-accident-lawyer", "Motorcycle Accident Lawyer"),
        ("wrongful-death-lawyer", "Wrongful Death Lawyer"),
        ("slip-and-fall-lawyer", "Slip and Fall Lawyer"),
        ("workplace-injury-lawyer", "Workplace Injury Lawyer"),
        ("police-brutality-lawyer", "Police Brutality Lawyer"),
        ("medical-malpractice-lawyer", "Medical Malpractice Lawyer"),
        ("premises-liability-lawyer", "Premises Liability Lawyer"),
        ("product-liability-lawyer", "Product Liability Lawyer"),
    ]

    count = 0
    for slug, title in practice_areas:
        file_path = os.path.join(BASE_DIR, slug, "index.html")

        if os.path.exists(file_path):
            schema = get_breadcrumb_schema(
                "practice_area",
                page_title=title,
                page_url=slug
            )

            if add_schema_to_file(file_path, schema):
                count += 1
                print(f"Added schema: {slug}")

    return count


def process_location_pages():
    """Process location pages."""
    locations = [
        ("austin-personal-injury-lawyer", "Austin"),
        ("san-antonio-personal-injury-lawyer", "San Antonio"),
        ("houston-personal-injury-lawyer", "Houston"),
        ("dallas-personal-injury-lawyer", "Dallas"),
        ("rio-grande-valley-personal-injury-lawyer", "Rio Grande Valley"),
        ("west-texas-personal-injury-lawyer", "West Texas"),
        ("round-rock-personal-injury-lawyer", "Round Rock"),
        ("cedar-park-personal-injury-lawyer", "Cedar Park"),
        ("pflugerville-personal-injury-lawyer", "Pflugerville"),
        ("georgetown-personal-injury-lawyer", "Georgetown"),
        ("san-marcos-personal-injury-lawyer", "San Marcos"),
        ("kyle-personal-injury-lawyer", "Kyle"),
        ("leander-personal-injury-lawyer", "Leander"),
        ("lakeway-personal-injury-lawyer", "Lakeway"),
        ("bee-cave-personal-injury-lawyer", "Bee Cave"),
    ]

    count = 0
    for slug, city in locations:
        file_path = os.path.join(BASE_DIR, slug, "index.html")

        if os.path.exists(file_path):
            schema = get_breadcrumb_schema(
                "location",
                city_name=city,
                page_url=slug
            )

            if add_schema_to_file(file_path, schema):
                count += 1
                print(f"Added schema: {slug}")

    return count


def process_injury_pages():
    """Process injury type pages."""
    injuries = [
        ("traumatic-brain-injury-lawyer", "Traumatic Brain Injury Lawyer"),
        ("spinal-cord-injury-lawyer", "Spinal Cord Injury Lawyer"),
        ("back-injury-lawyer", "Back Injury Lawyer"),
        ("neck-injury-lawyer", "Neck Injury Lawyer"),
        ("whiplash-injury-lawyer", "Whiplash Injury Lawyer"),
        ("concussion-injury-lawyer", "Concussion Injury Lawyer"),
        ("broken-bones-lawyer", "Broken Bones Lawyer"),
        ("burn-injury-lawyer", "Burn Injury Lawyer"),
        ("paralysis-injury-lawyer", "Paralysis Injury Lawyer"),
        ("amputation-injury-lawyer", "Amputation Injury Lawyer"),
        ("soft-tissue-injury-lawyer", "Soft Tissue Injury Lawyer"),
        ("joint-injury-lawyer", "Joint Injury Lawyer"),
        ("scarring-disfigurement-lawyer", "Scarring & Disfigurement Lawyer"),
        ("nerve-damage-lawyer", "Nerve Damage Lawyer"),
        ("coma-injury-lawyer", "Coma Injury Lawyer"),
        ("internal-injuries-lawyer", "Internal Injuries Lawyer"),
        ("road-rash-lawyer", "Road Rash Lawyer"),
    ]

    count = 0
    for slug, title in injuries:
        file_path = os.path.join(BASE_DIR, slug, "index.html")

        if os.path.exists(file_path):
            schema = get_breadcrumb_schema(
                "injury",
                page_title=title,
                page_url=slug
            )

            if add_schema_to_file(file_path, schema):
                count += 1
                print(f"Added schema: {slug}")

    return count


def process_subtype_pages():
    """Process accident subtype pages."""
    # Find all remaining *-lawyer directories
    all_dirs = glob.glob(os.path.join(BASE_DIR, "*-lawyer"))

    # Exclude already processed types
    processed_prefixes = [
        "austin-", "san-antonio-", "houston-", "dallas-", "rio-grande-valley-", "west-texas-",
        "round-rock-", "cedar-park-", "pflugerville-", "georgetown-", "san-marcos-",
        "kyle-", "leander-", "lakeway-", "bee-cave-"
    ]

    known_types = [
        "car-accident-lawyer", "truck-accident-lawyer", "motorcycle-accident-lawyer",
        "wrongful-death-lawyer", "slip-and-fall-lawyer", "workplace-injury-lawyer",
        "police-brutality-lawyer", "medical-malpractice-lawyer", "premises-liability-lawyer",
        "product-liability-lawyer", "traumatic-brain-injury-lawyer", "spinal-cord-injury-lawyer",
        "back-injury-lawyer", "neck-injury-lawyer", "whiplash-injury-lawyer",
        "concussion-injury-lawyer", "broken-bones-lawyer", "burn-injury-lawyer",
        "paralysis-injury-lawyer", "amputation-injury-lawyer", "soft-tissue-injury-lawyer",
        "joint-injury-lawyer", "scarring-disfigurement-lawyer", "nerve-damage-lawyer",
        "coma-injury-lawyer", "internal-injuries-lawyer", "road-rash-lawyer"
    ]

    count = 0
    for dir_path in all_dirs:
        dir_name = os.path.basename(dir_path)

        # Skip city pages
        is_city_page = any(dir_name.startswith(prefix) for prefix in processed_prefixes)
        if is_city_page:
            continue

        # Skip already known types
        if dir_name in known_types:
            continue

        file_path = os.path.join(dir_path, "index.html")
        if os.path.exists(file_path):
            # Generate title from slug
            title = dir_name.replace("-lawyer", "").replace("-", " ").title() + " Lawyer"

            schema = get_breadcrumb_schema(
                "subtype",
                page_title=title,
                page_url=dir_name
            )

            if add_schema_to_file(file_path, schema):
                count += 1
                print(f"Added schema: {dir_name}")

    return count


def main():
    print("Adding BreadcrumbList schema to all pages...\n")

    print("=== City + Case Type Pages ===")
    city_count = process_city_case_pages()
    print(f"Updated {city_count} city+case pages\n")

    print("=== Practice Area Pages ===")
    practice_count = process_practice_area_pages()
    print(f"Updated {practice_count} practice area pages\n")

    print("=== Location Pages ===")
    location_count = process_location_pages()
    print(f"Updated {location_count} location pages\n")

    print("=== Injury Type Pages ===")
    injury_count = process_injury_pages()
    print(f"Updated {injury_count} injury pages\n")

    print("=== Subtype Pages ===")
    subtype_count = process_subtype_pages()
    print(f"Updated {subtype_count} subtype pages\n")

    total = city_count + practice_count + location_count + injury_count + subtype_count
    print(f"\n=== TOTAL: {total} pages updated with BreadcrumbList schema ===")


if __name__ == "__main__":
    main()
