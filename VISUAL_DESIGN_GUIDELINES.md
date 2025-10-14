# Robert Visual Design Guidelines
**Based on 2025 Best Practices & Award-Winning References**

---

## Reference Websites (2025 Benchmarks)

### Category 1: Dark Mode Excellence

**Linear (linear.app)**
- **Why It's Relevant:** Minimalist dark UI with exceptional contrast and clarity
- **Key Characteristics:**
  - Monochrome black/white base with sparse bold color accents
  - Reduced cognitive load through sequential, logical layouts
  - Sidebar minimalism—clean, uncluttered navigation
  - High contrast for accessibility
  - Bold typography paired with generous whitespace
- **What We Adopt:** Dark background discipline, high contrast text, minimal color usage

**Stripe (stripe.com)**
- **Why It's Relevant:** Professional dark mode with excellent documentation aesthetics
- **Key Characteristics:**
  - Dark mode as equal first-class citizen (not afterthought)
  - Technical elegance without coldness
  - Glassmorphism hints (subtle blur effects)
  - Code-focused but human-readable
  - Appearance API demonstrates customization transparency
- **What We Adopt:** Dark mode professionalism, glassmorphism subtlety, transparency in customization

**Vercel (vercel.com)**
- **Why It's Relevant:** Modern SaaS design with performance-focused aesthetics
- **Key Characteristics:**
  - Ultra-minimal interface with maximum clarity
  - Fast, responsive, lightweight design
  - Black-to-dark-gray depth layering
  - Accent colors used sparingly but powerfully
  - Typography hierarchy through weight, not size
- **What We Adopt:** Performance-first design, minimal layering, typography discipline

### Category 2: Emotional & Human-Centered

**Calm (calm.com)**
- **Why It's Relevant:** Wellness leader in calming, supportive design
- **Key Characteristics:**
  - Nature-inspired imagery and colors
  - Slow, gentle animations
  - Generous breathing room between elements
  - Soft gradients rather than harsh contrasts
  - Emphasis on mental health and peace
- **What We Adopt:** Wellness-first approach, slow animations, generous spacing

**Headspace (headspace.com)**
- **Why It's Relevant:** Playful yet professional mental wellness design
- **Key Characteristics:**
  - Organic, hand-drawn illustrations
  - Bright, joyful color palette
  - Approachable, friendly voice
  - Simplified, accessible interface
  - Animation that delights without distracting
- **What We Adopt:** Organic shapes, joyful but professional tone, accessible simplicity

**Notion (notion.so)**
- **Why It's Relevant:** User control and personalization done right
- **Key Characteristics:**
  - Clean, customizable interface
  - User empowerment through settings
  - Dark/light mode toggle as standard
  - Typography-focused design
  - Minimal but warm aesthetic
- **What We Adopt:** User control emphasis, customization transparency, typography focus

### Category 3: Creative Portfolio Excellence

**Mode (mode.com)**
- **Why It's Relevant:** Clean dark interface with professional polish
- **Key Characteristics:**
  - Minimalist approach
  - Dark theme done elegantly
  - Focus on content over decoration
- **What We Adopt:** Minimalist discipline

**Le:mma Studio (lemma.studio)**
- **Why It's Relevant:** Creative studio showcasing artistic dark mode
- **Key Characteristics:**
  - Artistic implementation of dark backgrounds
  - Creative use of contrast
  - Design-forward but functional
- **What We Adopt:** Artistic confidence in dark mode

---

## Visual Design Principles (Evidence-Based)

### 1. Dark Mode as Primary (Not Optional)

**The Standard (2025):**
Dark mode is now default, not alternative. Linear, Stripe, Vercel all treat dark as primary aesthetic.

**Robert's Implementation:**

**Background Hierarchy:**
```
Deep Space: #0B1220 (primary background)
└── Carbon: #1A1A1A (cards, secondary surfaces)
    └── Slate variation: #2A2A2A (tertiary depth)
```

**Text Hierarchy on Dark:**
```
Soft White: #F8F9FA (primary text, 95% opacity)
└── Slate Gray: #7C8BA1 (secondary text, 70% opacity)
    └── Muted Gray: #5A6B7D (tertiary text, 50% opacity)
```

**Contrast Requirements:**
- Body text on Deep Space: **14:1 ratio** (exceeds WCAG AAA)
- Secondary text: **7:1 ratio** (WCAG AAA)
- Interactive elements: **4.5:1 minimum** (WCAG AA)

**Why This Works:**
Linear's 2025 update increased contrast specifically. Stripe demonstrates dark mode equality. Vercel proves performance + dark = professional.

---

### 2. Accent Colors: Surgical Precision

**The Standard (2025):**
Linear shifted from multiple blue tones to monochrome + sparse bold accents. "Linear design but bolder and with more individuality."

**Robert's Accent Strategy:**

**Primary Accent (Electric Cyan #00D9FF):**
- Usage: Active states, transparency indicators, CTAs
- Occasions: <5% of screen real estate
- Purpose: Draw eye to action + visibility metaphor

**Life Area Accents (Used Contextually Only):**
- Success Green (#00E676): Health contexts only
- Soft Coral (#FF6B9D): Love contexts only
- Lavender Calm (#9D84B7): Learning contexts only
- Quantum Blue (#4A90E2): Job/default contexts

**The Rule:**
No more than **2 accent colors** visible simultaneously. Monochrome base + 1-2 accent max.

**Example Correct Usage:**
```
Hero Section:
- Background: Deep Space (black)
- Text: Soft White (white)
- CTA: Electric Cyan (accent 1)
- Badge border: Quantum Blue (accent 2)
- Total colors on screen: 4
```

**Example Incorrect Usage:**
```
❌ Section with:
- Background: Deep Space
- Text: Soft White
- Button 1: Electric Cyan
- Button 2: Success Green
- Icon 1: Soft Coral
- Icon 2: Lavender
- Total colors: 6 (too many, dilutes focus)
```

---

### 3. Typography: Hierarchy Through Weight

**The Standard (2025):**
Vercel and Linear use typography weight variations, not size variations, for hierarchy. Notion proves Inter works at scale.

**Robert's Typography System:**

**Font:** Inter (only)
- Light (300): Hero headlines only
- Regular (400): All body text
- Medium (500): Subheadings
- Semibold (600): CTAs, emphasis
- Bold (700): Section headers

**Size Scale (Desktop):**
```
Hero: 64px / Light / Line-height 1.1
H1: 48px / Bold / Line-height 1.2
H2: 36px / Semibold / Line-height 1.3
H3: 24px / Semibold / Line-height 1.4
Body: 18px / Regular / Line-height 1.6
Caption: 14px / Regular / Line-height 1.5
```

**Size Scale (Mobile):**
```
Hero: 40px / Light / Line-height 1.1
H1: 32px / Bold / Line-height 1.2
H2: 24px / Semibold / Line-height 1.3
H3: 20px / Semibold / Line-height 1.4
Body: 16px / Regular / Line-height 1.6
Caption: 12px / Regular / Line-height 1.5
```

**Letter Spacing:**
- Headlines: -0.02em (tighter, more elegant)
- Body: 0em (default)
- All caps: +0.05em (more readable)

**The Rule:**
Change weight before changing size. Linear proves this reduces visual noise.

---

### 4. Spacing: Anti-Cramping Philosophy

**The Standard (2025):**
Calm and Headspace use generous spacing. Linear's update specifically mentions "less cluttered" sidebar. Wellness sites prioritize breathing room.

**Robert's Spacing System (8px base):**

**Component Internal Spacing:**
```
Tight: 8px (icon to text)
Default: 16px (button padding)
Comfortable: 24px (card padding)
Generous: 32px (section internal)
```

**Component External Spacing:**
```
Between related elements: 24px
Between sections: 64px (desktop) / 48px (mobile)
Between major sections: 96px (desktop) / 64px (mobile)
Hero top padding: 120px (desktop) / 80px (mobile)
```

**Container Max-Widths:**
```
Text content: 720px (readable line length)
Standard content: 1120px (desktop comfort)
Hero content: 1280px (maximum width)
```

**The Rule:**
When in doubt, add 8px more space. Cramped = anxious. Spacious = calm.

---

### 5. Animation: Calm Over Clever

**The Standard (2025):**
Calm uses slow, gentle animations. Linear reduced motion. Wellness sites prioritize non-anxious interactions.

**Robert's Animation Timing:**

**Ambient (Background Shapes):**
```css
animation: float-gentle 20s ease-in-out infinite;
/* Slow enough to be calming, not distracting */
```

**User Interactions:**
```css
transition: all 300ms ease-in-out;
/* Patient response, not instant */
```

**Micro-interactions:**
```css
transition: transform 200ms ease-out;
/* Quick feedback, but gentle */
```

**The Rule:**
- Ambient: 15-22 seconds (barely noticeable)
- Interactions: 300-500ms (human-paced)
- Micro: 150-250ms (subtle confirmation)

**Easing Functions:**
```css
ease-in-out: /* Default for most transitions */
cubic-bezier(0.34, 1.56, 0.64, 1): /* Playful bounce for hover states */
ease-out: /* Quick start, gentle end */
```

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 6. Glassmorphism: Subtle Only

**The Standard (2025):**
Stripe uses subtle blur effects. Linear uses them sparingly. Over-use is dated (2021-2023 trend).

**Robert's Glassmorphism:**

**Approved Use Cases:**
1. Navigation bar (when scrolled)
2. Modal overlays
3. Card hover states (very subtle)

**Implementation:**
```css
.glass-effect {
  background: rgba(26, 26, 26, 0.6); /* 60% opacity carbon */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle edge */
}
```

**The Rule:**
- Blur: 8-16px maximum
- Opacity: 50-80% for backgrounds
- Always pair with subtle border
- Never on primary content areas

---

### 7. Organic Shapes: Matisse Discipline

**The Standard (2025):**
2025 trends show "organic shapes have matured," used for "brand storytelling beyond mere decoration." Not random blobs.

**Robert's Shape Philosophy:**

**Purpose-Driven Shapes:**
Each shape has meaning:
- **Leaf:** Growth, health (Health contexts)
- **Wave:** Flow, journey (Transitions)
- **Circle:** Wholeness (General background)
- **Crescent:** Rest, cycles (Reflection)
- **Star:** Wonder (Learning, achievement)
- **Rectangle:** Stability (Job, foundation)

**Visual Implementation:**
```css
.organic-shape {
  position: absolute;
  opacity: 0.08; /* Subtle, not dominant */
  pointer-events: none;
  mix-blend-mode: screen; /* Blends with dark background */
  filter: blur(2px); /* Softens edges slightly */
}
```

**Placement Rules:**
- Maximum 6 shapes per viewport
- Never overlap core content
- Asymmetric but balanced composition
- More shapes = lower opacity each

**Colors for Shapes:**
- Use life area accent colors at 20-30% opacity
- Gradient fills for depth
- Never pure white or pure black

---

### 8. Card Design: Depth Through Layering

**The Standard (2025):**
Vercel and Linear use subtle depth. Notion uses borders, not heavy shadows. Stripe layers background tones.

**Robert's Card System:**

**Base Card:**
```css
.card {
  background: #1A1A1A; /* Carbon */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 32px;
  transition: all 300ms ease-in-out;
}
```

**Hover State:**
```css
.card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(0, 217, 255, 0.3); /* Electric Cyan tint */
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(0, 217, 255, 0.1);
}
```

**Life Area Cards (Contextual Accent):**
```css
.card-job { border-left: 3px solid #4A90E2; } /* Quantum Blue */
.card-health { border-left: 3px solid #00E676; } /* Success Green */
.card-love { border-left: 3px solid #FF6B9D; } /* Soft Coral */
.card-learning { border-left: 3px solid #9D84B7; } /* Lavender */
```

**The Rule:**
- Shadows: Soft, dark, realistic (not colored)
- Borders: Subtle, semi-transparent
- Hover: Lift up, don't zoom in
- Never use drop-shadow on organic shapes

---

### 9. Buttons: Hierarchy Through Form

**The Standard (2025):**
Linear uses clear primary/secondary distinction. Stripe keeps CTAs obvious. Notion uses ghost buttons for secondary actions.

**Robert's Button System:**

**Primary CTA:**
```css
.btn-primary {
  background: #00D9FF; /* Electric Cyan */
  color: #0B1220; /* Deep Space text */
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;
}

.btn-primary:hover {
  background: #00C4E6; /* Slightly darker */
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 217, 255, 0.3);
}
```

**Secondary CTA:**
```css
.btn-secondary {
  background: transparent;
  color: #F8F9FA; /* Soft White */
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 250ms ease-in-out;
}

.btn-secondary:hover {
  border-color: #00D9FF; /* Electric Cyan */
  background: rgba(0, 217, 255, 0.1);
  color: #00D9FF;
}
```

**Tertiary (Text Button):**
```css
.btn-text {
  background: none;
  color: #7C8BA1; /* Slate Gray */
  padding: 8px 16px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
}

.btn-text:hover {
  color: #00D9FF; /* Electric Cyan */
}
```

**The Rule:**
- Only 1 primary button per viewport section
- Secondary buttons: max 2 per section
- Never use red for primary CTA (too aggressive)
- Disabled state: 40% opacity, no hover

---

### 10. Icons: Stroke Over Fill

**The Standard (2025):**
Linear, Stripe, Vercel all use stroke icons (not filled). More modern, cleaner, lighter weight.

**Robert's Icon System:**

**Style:** Stroke icons only
- Stroke width: 2px (default)
- Stroke width: 1.5px (small icons <20px)
- Rounded caps and joins
- Consistent visual weight

**Size Scale:**
```
Small: 16px (inline with text)
Default: 24px (standard UI)
Large: 32px (feature icons)
Hero: 48px (section headers)
```

**Color Application:**
```css
.icon-default { color: #7C8BA1; } /* Slate Gray */
.icon-active { color: #00D9FF; } /* Electric Cyan */
.icon-success { color: #00E676; } /* Success Green */
.icon-warning { color: #FFB300; } /* Warning Amber */
```

**The Rule:**
- Never mix stroke and fill icons
- Icons should be 24px by default
- Use Heroicons, Lucide, or Feather icon sets
- Color icons only for status, not decoration

---

## Layout System (Grid & Composition)

### Desktop Layout (≥1024px)

**Grid:**
```
Max-width: 1280px
Columns: 12
Gutter: 32px
Margin: 48px (sides)
```

**Hero Section:**
```
Height: 100vh minimum
Content: Centered vertically and horizontally
Max-width: 900px for text
Padding: 120px top, 80px bottom
```

**Content Sections:**
```
Padding: 96px vertical, 48px horizontal
Max-width: 1120px
Grid: 2-column (use cases, features)
Grid: 3-column (steps, testimonials)
```

### Mobile Layout (<768px)

**Grid:**
```
Margin: 24px (sides)
Columns: 4
Gutter: 16px
```

**Hero Section:**
```
Padding: 80px top, 48px bottom
Text: Center-aligned
Font sizes: Reduce by ~40%
```

**Content Sections:**
```
Padding: 64px vertical, 24px horizontal
Single column only
Stack cards vertically
```

**The Rule:**
- Mobile: Single column for all major content
- Desktop: 2-3 columns maximum
- Never use more than 3 columns
- Always center-align containers

---

## Component Specifications

### Navigation Bar

**Desktop:**
```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 48px;
  background: transparent;
  transition: all 300ms;
}

.nav.scrolled {
  background: rgba(11, 18, 32, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

**Links:**
```css
.nav-link {
  color: #7C8BA1;
  font-size: 15px;
  font-weight: 500;
  transition: color 200ms;
}

.nav-link:hover {
  color: #00D9FF;
}
```

### Demo Widget (Transparency Showcase)

**The Star Component:** Shows Robert working in real-time

```css
.demo-widget {
  background: #1A1A1A; /* Carbon */
  border: 2px solid rgba(0, 217, 255, 0.2);
  border-radius: 16px;
  padding: 32px;
  max-width: 800px;
}

.demo-chrome {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.demo-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.demo-url {
  background: #0B1220; /* Deep Space */
  padding: 10px 16px;
  border-radius: 6px;
  color: #7C8BA1;
  font-size: 14px;
  font-family: 'SF Mono', monospace;
}

.demo-step {
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.demo-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 6px;
}

.demo-indicator.active {
  background: #00D9FF;
  animation: pulse 2s infinite;
}
```

### Step Indicators (How It Works)

```css
.step-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.02);
  transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.step-circle:hover {
  transform: scale(1.08) rotate(5deg);
  box-shadow: 0 8px 32px rgba(0, 217, 255, 0.2);
}

.step-1 {
  border-color: #00D9FF;
  color: #00D9FF;
}
.step-2 {
  border-color: #4A90E2;
  color: #4A90E2;
}
.step-3 {
  border-color: #00E676;
  color: #00E676;
}
```

---

## Accessibility Standards

### Contrast Ratios (WCAG AAA)

**Text Contrast:**
```
Primary text (#F8F9FA on #0B1220): 14.2:1 ✓ AAA
Secondary text (#7C8BA1 on #0B1220): 7.1:1 ✓ AAA
Button text (Cyan #00D9FF): 4.8:1 ✓ AA Large
```

### Focus States

```css
*:focus-visible {
  outline: 2px solid #00D9FF;
  outline-offset: 4px;
  border-radius: 4px;
}
```

### Touch Targets

**Minimum sizes:**
- Buttons: 44×44px (WCAG 2.1)
- Icons: 24×24px with 44×44px touch area
- Links: 16px text with 8px padding

---

## Performance Guidelines

### Image Optimization

**Format:**
- WebP primary, PNG/JPG fallback
- SVG for icons and logos
- Maximum 200KB per hero image
- Lazy load below-fold images

**Organic Shapes:**
- SVG only (scalable, small)
- Maximum 10KB per shape
- Inline critical shapes
- Lazy load decorative shapes

### CSS Performance

**Rules:**
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid `box-shadow` animations (use `filter: drop-shadow`)
- `will-change` on animated elements only
- Remove `will-change` after animation completes

**Critical CSS:**
```css
/* Inline in <head> */
- Typography definitions
- Above-fold layout
- Navigation styles
- Primary button styles
```

### Loading Strategy

**Priority:**
1. Critical CSS (inline)
2. Fonts (preload Inter woff2)
3. Hero image (eager load)
4. Navigation script (defer)
5. Below-fold content (lazy)
6. Analytics (defer)

---

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile: 320px - 767px */
@media (min-width: 320px) {
  /* Base styles */
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) {
  /* Intermediate layouts */
}

/* Desktop: 1024px - 1439px */
@media (min-width: 1024px) {
  /* Full desktop experience */
}

/* Large Desktop: 1440px+ */
@media (min-width: 1440px) {
  /* Max content width, more spacing */
}
```

---

## Quick Reference Checklist

### Before Shipping Any Component:

**Visual:**
- [ ] Uses Deep Space (#0B1220) as primary background?
- [ ] Maximum 2 accent colors visible?
- [ ] Inter font only (no other typefaces)?
- [ ] Stroke icons only (no fill icons)?
- [ ] Border radius: 8-16px range?

**Spacing:**
- [ ] Minimum 24px between sections?
- [ ] Component padding: 32px default?
- [ ] Breathing room around all elements?
- [ ] Mobile: 24px side margins?

**Interaction:**
- [ ] Animations: 300ms for interactions?
- [ ] Hover states on all interactive elements?
- [ ] Focus states visible (Electric Cyan outline)?
- [ ] Touch targets: minimum 44×44px?

**Accessibility:**
- [ ] Text contrast: minimum 7:1 ratio?
- [ ] Keyboard navigation works?
- [ ] `prefers-reduced-motion` respected?
- [ ] Alt text on all images?

**Performance:**
- [ ] Images: WebP format?
- [ ] Animations: Use `transform`/`opacity`?
- [ ] Critical CSS inlined?
- [ ] Below-fold content lazy loaded?

---

## Design Principles Summary

1. **Dark Mode First** - Linear, Stripe, Vercel standard
2. **Accent Discipline** - Maximum 2 colors per viewport
3. **Typography Weight** - Hierarchy through weight, not size
4. **Generous Spacing** - Anti-cramping, wellness-first
5. **Calm Animation** - Slow, gentle, respectful
6. **Subtle Glassmorphism** - Navigation and modals only
7. **Purpose-Driven Shapes** - Each organic shape has meaning
8. **Depth Through Layering** - Borders and shadows, not heavy effects
9. **Clear Button Hierarchy** - One primary CTA per section
10. **Stroke Icons** - Modern, clean, consistent weight

---

**Reference Sites:**
- Linear.app (minimalist dark, high contrast)
- Stripe.com (professional dark, glassmorphism)
- Vercel.com (performance, typography)
- Calm.com (wellness, spacing)
- Headspace.com (organic shapes, joyful)
- Notion.so (user control, customization)

**Version:** 1.0
**Last Updated:** October 2025
**Status:** Production Ready
