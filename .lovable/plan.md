

# Add "Our Trusted Partners" Section to About Page

## Overview
Add a new section to the About page showcasing three partner/affiliation logos: Quality Management System (ISO), Euro UK Accreditation Licensing Services, and Ministry of MSME, Govt. of India.

## Implementation Steps

### 1. Copy Images to Project Assets
- `user-uploads://image-2.png` -> `src/assets/partners/qms.png` (Quality Management System)
- `user-uploads://image-3.png` -> `src/assets/partners/euro-uk.png` (Euro UK Accreditation)
- `user-uploads://image-4.png` -> `src/assets/partners/msme.png` (Ministry of MSME)

### 2. Update About Page (`src/pages/About.tsx`)
- Import the three partner images
- Add a new "Our Trusted Partners" section between the Mission Statement and Footer
- Section includes:
  - Heading: "Our Trusted Partners"
  - Subtitle: "Affiliations & Collaborations"
  - A row of three partner logos displayed in ClayCards
  - Each logo centered with consistent sizing and `object-contain` to preserve aspect ratios
  - Responsive grid: 3 columns on desktop, stacked on mobile

### 3. Styling
- Each logo sits inside a ClayCard with white/light background for contrast
- Logos use `object-contain` with max height (~80px) for uniform appearance
- Cards have subtle hover lift animation consistent with existing design
- Section follows the same container/padding pattern as other sections

