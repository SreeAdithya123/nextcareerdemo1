

# Add Auto-Scrolling Course Images Marquee to Home Page

## Overview
Add a continuous auto-scrolling image strip (marquee) to the Home page that showcases photos related to computer training and the courses offered. The images will scroll automatically from right to left in an infinite loop.

## What You'll See
- A new section on the Home page (between the Hero and "Why Choose Us?" sections) with a horizontal strip of course-related images
- Images scroll smoothly and continuously from right to left
- The scroll is seamless -- when images reach the end, they loop back infinitely
- Images are displayed inside rounded clay-style cards for visual consistency

## Images Included
Since no custom photos were uploaded, we'll use high-quality placeholder images from Unsplash (free stock photos) representing each course area:
1. Computer Lab / Students at computers (DCA/PGDCA)
2. Python / Programming code on screen
3. Java / Software development
4. Tally / Accounting software
5. Data Analytics / Charts and dashboards
6. Digital Marketing / Social media
7. MS Office / Productivity tools
8. Web Design / Website development
9. AI / Artificial Intelligence
10. School students learning computers

## Technical Details

### 1. Add CSS Marquee Animation (`src/index.css`)
- Add a `@keyframes scroll-left` animation that translates content from 0 to -50% (since we duplicate the images for seamless looping)
- Add a `.marquee-track` class with the animation applied, set to infinite linear scrolling (~30s duration)
- Add a `.marquee-track:hover` rule to pause the animation on hover

### 2. Update Home Page (`src/pages/Home.tsx`)
- Add a new section between Hero and Features with heading "Our Courses in Action"
- Create an array of image objects with Unsplash URLs and labels matching the courses
- Render a full-width overflow-hidden container
- Inside, place a flex row with the images duplicated (rendered twice) to create the infinite loop effect
- Each image is wrapped in a rounded clay-card style container (~200px wide, ~140px tall) with the course label below
- The entire row uses the `marquee-track` animation class

### 3. Structure
```
[Section: "Our Courses in Action"]
  [overflow-hidden container, full width]
    [flex row with marquee-track animation]
      [Image 1] [Image 2] ... [Image 10] [Image 1] [Image 2] ... [Image 10]
      (duplicated for seamless loop)
```
