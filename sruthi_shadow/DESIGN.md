---
name: Sruthi & Shadow
colors:
  surface: '#fff8f5'
  surface-dim: '#e7d7cd'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#fcebe1'
  surface-container-high: '#f6e5db'
  surface-container-highest: '#f0dfd6'
  on-surface: '#221a14'
  on-surface-variant: '#4e4639'
  inverse-surface: '#382e28'
  inverse-on-surface: '#ffede4'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#9a442d'
  on-tertiary: '#ffffff'
  tertiary-container: '#f2886c'
  on-tertiary-container: '#6c220e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbd2'
  tertiary-fixed-dim: '#ffb4a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7c2e19'
  background: '#fff8f5'
  on-background: '#221a14'
  surface-variant: '#f0dfd6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  title-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system embodies the intersection of ancient tradition and modern precision. It caters to a discerning audience of practitioners and aficionados of Carnatic Classical Music. The aesthetic is defined by **Tactile Neumorphism**, creating a digital interface that feels physically sculpted from ivory and sandalwood. 

The mood is meditative and sophisticated. By utilizing soft extrusions and indentations, the UI mimics the physical surfaces of classical instruments like the Veena or Tambura. Every interaction should feel intentional and weighted, echoing the disciplined nature of *Raga* and *Tala*.

## Colors
The palette is rooted in organic, earthy tones that suggest heritage and warmth. 
- **Base Surface:** Use the soft beige (#F0EDE5) for all neumorphic elements to ensure the light and dark shadows have enough contrast to create the "extruded" effect.
- **Accents:** Muted Sandalwood is used for iconography and primary states. Antique Gold is reserved for "Premium" features or highlighting specific *Melakarta* classifications.
- **Secondary:** Soft Terracotta is used sparingly for destructive actions or specific rhythmic markers that require high visibility without breaking the warm harmony.

## Typography
The typographic hierarchy contrasts the editorial elegance of **Playfair Display** with the functional clarity of **Inter**. 
- **Serif Headlines:** Use for Raga names, Artist titles, and section headers. These should always be in the Deep Espresso (#2D241E) to maintain readability against the light background.
- **Sans-Serif Body:** Use for descriptions, technical notations (Swaras), and UI labels. 
- **Styling:** For a sophisticated look, use "Small Caps" for `label-sm` when denoting rhythmic cycles (*Tala*) or technical parameters.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with generous white space to allow the neumorphic shadows room to "breathe." 
- **Breathing Room:** Neumorphic elements require more padding than flat designs to prevent shadow overlapping. A minimum of `md` (24px) spacing is recommended between distinct "raised" cards.
- **Desktop:** 12-column grid with 24px gutters and 64px side margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins. 
- **Rhythm:** All vertical spacing should be multiples of the 8px base unit to maintain a consistent visual tempo.

## Elevation & Depth
All depth is generated from a single light source located at the **Top-Left (135 degrees)**. 
- **Raised State (Default):**
  - Light Shadow: -8px -8px 16px #FFFFFF
  - Dark Shadow: 8px 8px 16px #D1CDC1
- **Pressed/Inset State (Active):**
  - Light Shadow (Inner): 4px 4px 8px #D1CDC1
  - Dark Shadow (Inner): -4px -4px 8px #FFFFFF
- **Softness:** The blur radius should generally be double the offset value to ensure a smooth, "clay-like" transition between the surface and the element. Avoid harsh shadows; the goal is a soft, molded appearance.

## Shapes
Shapes are intentionally soft to mimic the ergonomic curves of traditional wooden instruments.
- **Large Cards:** Use `rounded-xl` (24px - 32px) for main content containers and music player backgrounds.
- **Buttons/Controls:** Use `rounded-lg` (12px - 16px) for standard buttons. 
- **Interactive Nodes:** Use perfect circles for playback controls (Play/Pause) and slider handles to suggest the touch-points of a stringed instrument.

## Components
- **Neumorphic Cards:** Raised surfaces that house song lists or artist bios. Use no borders; the separation is purely through shadow depth.
- **Tactile Buttons:** 
  - *Default:* Raised effect.
  - *Active/Pressed:* Inset effect. 
  - *Primary:* Text in Sandalwood (#C5A059), Bold weight.
- **Music Playback Controls:**
  - *Play Button:* A large circular raised disc. On tap, it transforms into an inset disc.
  - *Sliders:* The track is an "inset" groove (concave), while the handle is a "raised" small circle (convex).
- **Swara Buttons (Notation):** Square buttons with `rounded-lg` corners. Arranged in a grid. When a Swara is active in the sequence, the button stays in the "inset" state.
- **Navigation Bar:** Blends seamlessly into the background. Use simple icon buttons (Sandalwood color) that appear as subtle extrusions when selected.
- **Progress Indicators:** Soft horizontal "valleys" (inset tracks) where the progress is filled with a soft Sandalwood tint, and the current position is marked by a raised handle.