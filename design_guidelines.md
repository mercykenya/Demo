# Design Guidelines: Debugging in Space - Station Aurora

## Design Approach
**Reference-Based Approach**: Space station simulation games and sci-fi interfaces (Dead Space, Alien Isolation, The Expanse) with emphasis on functional HUD design and atmospheric tension.

## Core Design Principles
- **Retro Sci-Fi Aesthetic**: Terminal-style interfaces with glowing borders and digital readouts
- **Atmospheric Tension**: Dark backgrounds with strategic accent lighting
- **Functional Design**: Every UI element serves gameplay purpose while maintaining immersion

## Typography
- **Primary Font**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell')
- **Heading Sizes**: Title (text-6xl), Section headers (text-lg to text-xl), Labels (text-sm to text-xs)
- **Font Weights**: Bold for all interactive elements and headers, regular for body text
- **Letter Spacing**: Wide tracking (tracking-wider, tracking-widest) for titles and labels to enhance sci-fi feel
- **Text Transform**: UPPERCASE for all UI labels, buttons, and status indicators

## Color System
- **Background**: Deep space blacks and grays (bg-gray-900, bg-gray-800, bg-black)
- **Primary Accent**: Cyan (#06b6d4 range) for borders, active elements, and primary CTAs
- **Secondary Accents**: Blue (#3b82f6), Purple (#a855f7), Indigo (#4c1d95)
- **Status Colors**: 
  - Critical/Danger: Red (#ef4444) with red-900 backgrounds
  - Warning: Yellow (#eab308) with yellow-900 backgrounds  
  - Active/Success: Green (#22c55e) with green-400 accents
  - Inactive: Gray (#6b7280)
- **Gradients**: Use gradient-to-r/gradient-to-b combinations for depth (cyan-to-blue, indigo-to-purple-to-black)

## Layout System
**Spacing Units**: Tailwind units of 2, 3, 4, 8 for consistent rhythm
- Component padding: p-3, p-4
- Section spacing: space-y-2, space-y-4, space-y-8
- Gap between elements: gap-2, gap-4

## Component Library

### Borders & Containers
- All major panels: border-2 with colored borders (border-cyan-600, border-cyan-500)
- Rounded corners: rounded-lg for panels, rounded for smaller elements
- Shadow: shadow-2xl for main containers, shadow-lg for buttons

### Buttons
- Primary CTA: bg-gradient-to-r from-cyan-600 to-blue-600, border-2 border-cyan-400, py-4 px-8, rounded-lg
- Secondary: bg-gray-700, border-2 border-gray-500
- Hover states: Brightness shifts (hover:from-cyan-500) and scale transforms (hover:scale-105)
- Glow effect on hover: shadow-cyan-500/50

### HUD Elements
- Health/Status Bars: Gray background container (bg-gray-700) with colored fill, border matching fill color, h-5 height, rounded edges
- Animated bars: Use animate-pulse for critical/low states
- Labels: Small bold text (text-sm font-bold) in accent color positioned above bars

### Panels & Tabs
- Tab Navigation: bg-gray-700 background, active tabs with cyan accent (bg-gray-600, border-b-2 border-cyan-400)
- Panel backgrounds: bg-gray-800 with border separators
- Scrollable content: overflow-y-auto with custom styling

### Interactive Objects
- Status indicators: Colored emoji icons (⚡🔌💻🌀📦) at 2rem size
- Proximity detection: 80px radius interaction range
- Inspection panels: bg-gray-800/95 with border-2 border-cyan-400, rounded-lg

### Status Cards
- Critical: bg-red-900/30, border-l-4 border-red-400
- Warning: bg-yellow-900/30, border-l-4 border-yellow-400  
- Active: bg-cyan-900/30, border-l-4 border-cyan-400
- Completed: bg-green-900/30, border-l-4 border-green-400

### Starfield Background Effect
- Position: absolute inset-0, opacity-30
- Stars: 1px white dots, random positioning, animate-pulse with staggered delays
- Quantity: 50-100 stars for ambient effect

## Animations
**Minimal & Purposeful**:
- Pulse animation: For critical alerts and low oxygen warnings
- Fade-in: 0.3s ease-in for panel transitions (animate-fade-in)
- Scale transform: hover:scale-105 for buttons only
- No scroll-triggered or excessive motion

## Iconography
Use emoji icons (⚡🔌💻🌀📦🚪) for game objects with 2rem default size, maintaining retro game aesthetic

## Navigation
- Top HUD bar: Fixed header with back button, location title, and status bars
- Side panels: Fixed width (w-56, w-64) with overflow scrolling
- Click-to-move: Direct map interaction for player movement

## Images
No photographic images needed - use gradient backgrounds, emoji icons, and procedural starfield effects to maintain cohesive retro sci-fi aesthetic.