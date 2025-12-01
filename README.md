# CodeRunner Game - GitHub Pages Demo

🎮 **[Live Demo](https://mercykenya.github.io/Demo/)** 

This is a space station exploration game built with React, TypeScript, and Vite. The demo runs entirely in the browser without requiring a backend server.

## Features

- **Interactive Space Station Interface**: Explore different areas of a futuristic space station
- **Real-time System Monitoring**: Health, oxygen levels, and system status displays
- **Object Interaction**: Click on various terminals, panels, and equipment to inspect them
- **Mission Objectives**: Track progress through different tasks and objectives
- **Responsive UI**: Modern, sci-fi themed interface built with Tailwind CSS and shadcn/ui

## Demo Mode

This GitHub Pages deployment runs in demo mode with:
- ✅ Full UI functionality
- ✅ Interactive game elements
- ✅ Mock data for realistic gameplay
- ✅ All animations and effects
- ⚠️ No backend/database (demo uses local mock data)

## Game Instructions

1. **Start the Game**: Click "NEW MISSION" from the main menu
2. **Move Around**: Click anywhere on the map to move your character
3. **Inspect Objects**: Click on interactive elements (terminals, panels, etc.)
4. **Track Objectives**: Monitor your progress in the left panel
5. **Check Systems**: View system status and health/oxygen levels

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## Local Development

To run the full version locally with backend:

\`\`\`bash
git clone https://github.com/mercykenya/Demo.git
cd Demo
npm install
npm run dev
\`\`\`

## Full-Stack Deployment

For a complete deployment with backend functionality, consider platforms like:
- Vercel
- Netlify
- Railway
- Render

The application includes Express.js backend with PostgreSQL database support for user progress tracking and persistent game state.
