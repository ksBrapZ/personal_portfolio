# Personal Website with Admin Console

A dynamic personal website featuring a comprehensive content management system, rich media blogging capabilities, and a curated favorites system.

## 🌟 Features

- **Rich Content Management**
  - Blog post creation and management
  - Favorites system with categories (Tools, Products, Books, People)
  - Interactive admin dashboard

- **Modern UI Components**
  - Responsive design using Tailwind CSS
  - Smooth animations with Framer Motion
  - Rich text editing with TinyMCE

- **Performance Optimized**
  - Lazy loading images
  - Optimized animations
  - Efficient state management

## 📁 Project Structure

```
client/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── sections/      # Page sections (About, Projects, etc.)
│   │   └── ui/           # Core UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   └── pages/            # Main page components
server/
├── routes.ts             # API route definitions
├── storage.ts           # Database interface
└── index.ts            # Server entry point
```

## 🔧 Key Technologies

- **Frontend**
  - React with TypeScript
  - TailwindCSS for styling
  - Framer Motion for animations
  - TinyMCE for rich text editing
  - React Query for data fetching

- **Backend**
  - Express.js server
  - PostgreSQL database
  - Drizzle ORM
  - Type-safe API with Zod validation

## 🚀 Components Overview

### Pages
- `AdminPage`: Content management dashboard
- `Blog`: Blog post listing and creation
- `Favorites`: Curated list of tools, products, books, and people
- `Story`: Personal journey timeline
- `Home`: Landing page with key sections

### Core Components
- `Admin`: Main admin interface for content management
- `Navigation`: Site-wide navigation menu
- `BackgroundGraphic`: Interactive background animations
- Various UI components (buttons, cards, forms, etc.)

## 💾 Data Models

- **Blog Posts**: Title, content, slug, excerpt, featured image
- **Favorites**: Name, description, category, type, metadata
- **User**: Authentication and admin access

## 🔐 Security

- Secure admin authentication
- Environment variable management
- API request validation

## 🎨 Design System

- Consistent typography and spacing
- Dark/light theme support
- Responsive breakpoints
- Animation guidelines

## 🛠 Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add required API keys (TinyMCE, etc.)

3. Start development server:
   ```bash
   npm run dev
   ```

4. Access the application:
   - Frontend: http://localhost:5000
   - Admin: http://localhost:5000/admin

## 📝 Code Conventions

- TypeScript for type safety
- Component-based architecture
- Consistent file naming
- Comprehensive comments
- Performance optimization patterns

## 🔄 State Management

- React Query for server state
- Local state with React hooks
- Form state with React Hook Form
- Toast notifications system

## ⚡ Performance Considerations

- Lazy loading of images
- Code splitting
- Optimized animations
- Efficient data fetching
- Caching strategies

## 🎯 Future Enhancements

- Performance monitoring tools
- Interactive documentation system
- Automated dependency analysis
- Additional content types
- Enhanced analytics
