
# Integration Plan: Team Member Photos on About Page

## Overview
You've uploaded two professional photos:
- **Sai Kumar** (first image): Professional headshot with blazer
- **Satya Sri** (second image): Portrait in traditional pink attire

These will replace the emoji avatars in the team member cards with rectangular profile photos that fit the claymorphic design.

## Implementation Steps

### 1. Copy Images to Project Assets
- Copy both uploaded images to `src/assets/team/`
  - `user-uploads://fc254cea-3e5e-48ea-a810-da18c6c7b80f.jpg` → `src/assets/team/saikumar.jpg`
  - `user-uploads://c3701bbe-0b43-46cb-9670-9f08e12a1220.jpg` → `src/assets/team/satyasri.jpg`

### 2. Update Team Members Data Structure
Modify the `teamMembers` array in `src/pages/About.tsx`:
- Add new `image` property pointing to imported assets
- Keep the `color` property for subtle gradient backgrounds (used as fallback/accent)
- Remove the `avatar` emoji property (no longer needed)

### 3. Create Enhanced Team Card Layout
Restructure the team member card display:
- **Top section**: Rectangular image container with clay styling
  - Border radius: `rounded-2xl` (softer than full circle)
  - Image dimensions: Full width of card (~250px), ~320px height
  - Shadow: Apply clay shadow for depth
  - Hover effect: Subtle lift animation
  
- **Bottom section**: Text information (name, role, qualifications)
  - Add padding/spacing for better visual hierarchy
  - Keep existing badge and experience styling

### 4. Styling Details
- **Image container**: Apply `overflow-hidden rounded-2xl` with `shadow-clay` for claymorphic effect
- **Image itself**: Use `object-cover` to maintain aspect ratio within container
- **Card background**: Retain current gradient background (teal for Sai Kumar, orange for Satya Sri)
- **Animations**: Keep `float-animation` on the entire card for consistency

### 5. Responsive Behavior
- Desktop (md+): Two-column grid, rectangular images side by side
- Mobile: Single-column stack, images full responsive width
- Maintain touch-friendly spacing and tap targets

## Result
Professional team member cards with real photos integrated seamlessly into the claymorphic design, maintaining the soft, rounded aesthetic while elevating the visual credibility of the institute.

