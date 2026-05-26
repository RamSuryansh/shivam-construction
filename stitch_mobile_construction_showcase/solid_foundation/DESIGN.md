---
name: Solid Foundation
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5b403f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8f6f6e'
  outline-variant: '#e3bebb'
  surface-tint: '#b91a2a'
  primary: '#98001b'
  on-primary: '#ffffff'
  primary-container: '#be1e2d'
  on-primary-container: '#ffd3d1'
  inverse-primary: '#ffb3b0'
  secondary: '#4d5d8a'
  on-secondary: '#ffffff'
  secondary-container: '#bbcbfe'
  on-secondary-container: '#455581'
  tertiary: '#484a4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#606264'
  on-tertiary-container: '#dcdee0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#930019'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b5c5f9'
  on-secondary-fixed: '#051943'
  on-secondary-fixed-variant: '#354571'
  tertiary-fixed: '#e1e2e4'
  tertiary-fixed-dim: '#c5c6c8'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 48px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality of the design system is anchored in reliability, precision, and structural integrity. Designed for the construction sector, it balances a "rugged" industrial feel with modern professional aesthetics. The UI should evoke a sense of trust and "built-to-last" quality.

The chosen design style is **Corporate / Modern**. It utilizes high-contrast color blocking, clean lines, and a structured layout to convey expertise. By avoiding unnecessary decorative flourishes, the design system prioritizes clarity and functional efficiency, ensuring that project details and service offerings are the focal point.

## Colors

The palette is derived directly from the core heritage of the brand. 
- **Primary (Red):** A bold, energetic red used for calls to action, urgent highlights, and branding accents. It represents the energy and passion of the workforce.
- **Secondary (Navy Blue):** A deep, professional navy that provides the "anchor" for the design. It is used for headers, navigation, and structural elements to signify stability.
- **Neutral:** A range of cool grays and a stark near-black are used for typography to maintain high legibility against white and light-gray backgrounds.

The default color mode is **Light**, providing a clean, "blueprint" feel that is easy to read in outdoor high-glare environments often encountered on construction sites.

## Typography

The design system uses **Hanken Grotesk** across all levels. This typeface was selected for its contemporary geometric construction and exceptional legibility. 

A strong visual hierarchy is established through significant weight contrast. Headlines utilize "Bold" and "SemiBold" weights to feel impactful and "rugged," while body text uses the "Regular" weight for an airy, modern feel. For mobile views, headline sizes are scaled down to ensure content remains the priority without overwhelming the smaller viewport. Label styles utilize uppercase tracking to create a sense of organized, technical documentation.

## Layout & Spacing

The layout philosophy is based on a **Fluid Grid** that adapts to the mobile-first nature of the industry. 

- **Mobile:** A 4-column grid with 16px margins. Components should primarily stack vertically to ensure ease of use with one hand.
- **Desktop:** A 12-column grid with a maximum content width of 1280px. 
- **Rhythm:** An 8px base unit governs all spatial relationships. Vertical spacing between sections should be generous (32px to 64px) to provide "breathing room" and reflect the scale of construction projects. 

Margins and gutters remain consistent to create a structured "modular" look, reminiscent of architectural drafting.

## Elevation & Depth

To maintain a "grounded" and "trustworthy" aesthetic, the design system avoids heavy shadows or floating elements. Instead, it uses **Tonal Layers** and **Low-contrast Outlines**.

- **Surface Tiers:** Use subtle background color shifts (e.g., White to Light Gray #F4F5F7) to define different content areas.
- **Borders:** Use 1px solid borders in a light neutral shade (#E0E0E0) for cards and input fields. 
- **Active State:** When an element requires focus, use the Primary Red or Secondary Navy as a high-contrast border rather than a shadow. This creates a crisp, mechanical feel.

## Shapes

The design system employs a **Soft** (Level 1) roundedness. 

A 4px border radius (0.25rem) is the standard for buttons, input fields, and cards. This slight rounding softens the "brutalist" industrial edges just enough to feel modern and accessible while maintaining a rigid, architectural profile. Circular shapes should be reserved exclusively for icon backgrounds or status indicators to provide a clear visual departure from structural UI components.

## Components

### Buttons
Primary buttons use a solid Red background with White text for maximum visibility. Secondary buttons use the Navy Blue or a ghost style (Navy border with transparent background). Buttons must have a minimum height of 48px to remain "tap-friendly" for users on-site.

### Cards
Cards are the primary container for project showcases. They should feature a thin border and a flat white background. Use "Secondary Navy" for card headers or titles to create a strong anchor point.

### Input Fields
Fields should have a visible 1px border. Labels should use the "Label-MD" style (Bold/Uppercase) to look like form headings on a technical specification sheet.

### Chips/Tags
Use these for service categories (e.g., "Water Proofing," "Core Cutting"). They should feature a light Navy tint background with dark Navy text to differentiate them from actionable buttons.

### Progress Indicators
For project tracking, use thick, linear progress bars in Primary Red to signify "work in progress" with high visual impact.