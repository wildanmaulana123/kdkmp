---
name: Agro-Corporate Professional
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#42493e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#fdc65c'
  on-secondary-container: '#745200'
  tertiary: '#4f321d'
  on-tertiary: '#ffffff'
  tertiary-container: '#694932'
  on-tertiary-container: '#e6ba9d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#ffdea7'
  secondary-fixed-dim: '#f4be55'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#eabda0'
  on-tertiary-fixed: '#2d1604'
  on-tertiary-fixed-variant: '#5f402a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style
The design system is engineered to project a professional, credible, and modern image for a rice farmers' cooperative. It balances industrial-scale efficiency with a deep, human-centric connection to the land. The visual narrative focuses on **Modern Corporate Agriculture**, utilizing a clean, high-white aesthetic to evoke transparency and institutional trust. 

The design style is **Minimalist with Tactile Accents**. It features generous whitespace, sharp information hierarchy, and high-quality photography of rice fields and farmers to ground the digital experience in reality. The emotional response should be one of "Reliable Prosperity"—convincing stakeholders of the cooperative's sustainability, technological advancement, and commitment to social impact.

## Colors
The palette is rooted in the natural lifecycle of rice cultivation, translated into a sophisticated corporate context.

*   **Primary (Deep Forest Green):** Represents growth, sustainability, and the vitality of the crops. This is the dominant color for buttons, navigation, and structural elements.
*   **Secondary (Golden Harvest):** Evokes the ripeness of rice and the economic prosperity of the farmers. Used for highlights, calls to action, and indicators of success.
*   **Tertiary (Earth Brown):** Used sparingly for grounding elements, thin borders, or secondary text to represent the foundation of the soil and reliability.
*   **Surface:** A "Clean White" (#FFFFFF) base is mandatory to maintain a clinical, trustworthy corporate feel, preventing the organic colors from feeling too "rustic" or unorganized.

## Typography
The typography strategy utilizes two highly functional sans-serifs to ensure a modern and accessible reading experience.

*   **Manrope (Headlines):** Chosen for its geometric purity and modern proportions. It provides a technical, forward-thinking edge to the brand’s messaging.
*   **Work Sans (Body & Labels):** Highly legible at all sizes with a professional, grounded character. It ensures that complex data regarding crop yields or farmer impact is easily digestible.
*   **Hierarchy:** Large display titles should use tighter letter-spacing to feel impactful. Use `label-caps` for eyebrows and metadata to add a layer of organized, institutional structure.

## Layout & Spacing
The layout follows a **Fixed-Width Grid** on desktop (12 columns) to maintain a controlled, professional presentation. On mobile, it transitions to a single-column fluid flow with 16px safe margins.

*   **Sectional Rhythm:** Use generous `section-padding` (80px+) to allow the brand imagery and "Clean White" background to breathe, reinforcing the feeling of transparency.
*   **Impact Alignment:** Key metrics (e.g., number of farmers, hectares of land) should be centered or placed in high-contrast 3-column spans to emphasize social impact.
*   **Data Density:** While the overall layout is airy, data tables and lists should use a tighter `stack-sm` to maintain a professional, information-rich utility.

## Elevation & Depth
This design system avoids heavy drop shadows in favor of **Tonal Layering and Low-Contrast Outlines** to preserve a modern, flat corporate aesthetic.

*   **Primary Surfaces:** Elements sit directly on the white background with no shadow, separated by ample whitespace.
*   **Cards & Containers:** Use a subtle 1px border (#E9ECEF) or a very soft, ambient shadow (4px blur, 2% opacity) to define boundaries.
*   **Interactive Depth:** On hover, buttons and interactive cards may lift slightly using a tinted shadow (Primary Green at 10% opacity) to signify responsiveness without breaking the minimalist feel.

## Shapes
The shape language is **Soft (0.25rem - 0.75rem)**. This provides a subtle nod to the organic nature of agriculture while maintaining the sharp precision expected of a corporate entity.

*   **Standard Components:** Buttons and inputs use a 4px (0.25rem) radius for a disciplined look.
*   **Feature Cards:** Large cards containing impact stories or "Sustainability Pillars" use an 8px (0.5rem) radius to feel slightly more approachable.
*   **Imagery:** Photos should remain sharp-cornered or use the same 8px radius to keep the design feeling structured rather than overly casual.

## Components
Components are designed to look "Institutional yet Innovative."

*   **Buttons:** Primary buttons are Solid Forest Green with white text. Secondary buttons use the Golden Harvest as a border or subtle text color.
*   **Impact Chips:** Small, rounded-pill labels used to tag "Sustainable," "Fair Trade," or "Organic" initiatives. These use the Secondary Gold with a 10% opacity background.
*   **Data Cards:** Used for presenting farmer statistics. They feature a white background, a thin Tertiary Brown bottom-border, and clear Manrope headlines.
*   **Transparency Progress Bars:** Custom bars showing "Project Completion" or "Impact Goals," utilizing a Forest Green fill over a light gray track.
*   **Input Fields:** Clean, underlined or lightly bordered boxes with Work Sans labels, emphasizing a "no-nonsense" professional data entry or contact experience.