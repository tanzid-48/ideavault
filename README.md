# 💡 IdeaVault – Startup Idea Sharing Platform

<div align="center">

![IdeaVault Banner](https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&w=1200&h=400)

**The ultimate vault for groundbreaking startup ideas.**  
Secure, collaborate, and grow your innovation with the community.

[![Live Site](https://img.shields.io/badge/Live%20Site-ideavault.vercel.app-6366f1?style=for-the-badge&logo=vercel)](https://ideavault-gules.vercel.app)
[![Server](https://img.shields.io/badge/API%20Server-Render-10b981?style=for-the-badge&logo=render)](https://ideavault-server-ah86.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-gray?style=for-the-badge&logo=github)](https://github.com/tanzid-48/ideavault)

</div>

---

## 🌐 Live Links

| Resource | URL |
|----------|-----|
| 🚀 Live Website | [https://ideavault-gules.vercel.app](https://ideavault-gules.vercel.app) |
| 🖥️ API Server | [https://ideavault-server-ah86.onrender.com](https://ideavault-server-ah86.onrender.com) |
| 📁 Client Repo | [https://github.com/tanzid-48/ideavault](https://github.com/tanzid-48/ideavault) |

---

## ✨ Key Features

- 🔐 **Secure Authentication** — Email/password and Google OAuth login powered by BetterAuth with JWT token verification on protected routes
- 💡 **Idea Management** — Submit, edit, and delete your startup ideas with rich details including problem statement, proposed solution, target audience, and estimated budget
- 💬 **Community Interaction** — Comment on any idea, edit or delete your own comments, and track all your interactions from the My Interactions dashboard
- 🔍 **Search & Filter** — Search ideas by title using case-insensitive regex, filter by category (Tech, AI, Health, Education, etc.), and sort by newest or oldest
- 🔖 **Bookmark System** — Save favorite ideas to your personal bookmark collection and access them anytime from your profile
- 🌙 **Dark / Light Theme** — Seamless global theme toggle from the navbar with persistent preference
- 📊 **Trending Ideas** — Homepage showcases the 6 most recent ideas using MongoDB `$limit` for dynamic trending display
- 🛡️ **Private Routes** — Add Idea, My Ideas, My Interactions, Idea Details, and Profile pages are all protected — unauthenticated users are redirected to login

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| Next.js 16 | React framework (App Router) |
| Tailwind CSS | Styling |
| HeroUI | UI component library |
| BetterAuth | Authentication (client) |
| Sonner | Toast notifications |
| Lucide React | Icons |
| next-themes | Dark/light mode |
| Swiper.js | Banner slider |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express | REST API server |
| MongoDB Atlas | Database |
| jose-cjs | JWT verification |
| dotenv | Environment config |
| CORS | Cross-origin requests |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/          # Login page
│   │   └── signup/          # Registration page
│   ├── addIdea/             # Add idea (private)
│   ├── editIdea/[id]/       # Edit idea (private)
│   ├── ideas/
│   │   ├── page.jsx         # All ideas with search & filter
│   │   └── [id]/            # Idea details + comments (private)
│   ├── myIdeas/             # User's ideas (private)
│   ├── myInteractions/      # User's comments (private)
│   ├── savedIdeas/          # Bookmarked ideas (private)
│   ├── profile/             # User profile (private)
│   └── layout.js            # Root layout
├── components/
│   ├── Banner.jsx
│   ├── TrendingIdeasSection.jsx
│   ├── HowItWorksSection.jsx
│   ├── CoFounderSection.jsx
│   ├── CTASection.jsx
│   ├── IdeaCard.jsx
│   ├── MyIdeaCard.jsx
│   ├── CommentSection.jsx
│   ├── CommentCard.jsx
│   ├── SaveButton.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
└── lib/
    ├── auth.js              # BetterAuth server config
    ├── auth-client.js       # BetterAuth client config
    ├── action.js            # Server actions
    ├── data.js              # Data fetching functions
    └── utils.js             # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- BetterAuth secret key

### Installation

```bash
# Clone the repository
git clone https://github.com/tanzid-48/ideavault.git
cd ideavault

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📸 Pages Overview

| Page | Access | Description |
|------|--------|-------------|
| `/` | Public | Home with banner, trending ideas, how it works |
| `/ideas` | Public | All ideas with search & category filter |
| `/ideas/[id]` | Private | Full idea details + comment system |
| `/addIdea` | Private | Submit a new startup idea |
| `/myIdeas` | Private | Manage your submitted ideas |
| `/myInteractions` | Private | View & manage your comments |
| `/savedIdeas` | Private | Your bookmarked ideas |
| `/profile` | Private | User profile & stats |
| `/signin` | Public | Login with email or Google |
| `/signup` | Public | Register a new account |

---

## 🔒 Authentication Flow

```
User signs up/in
      ↓
BetterAuth issues JWT token
      ↓
Token stored in session (HTTP-only cookie)
      ↓
Backend verifies token via JWKS endpoint
      ↓
Protected routes accessible ✅
```

---

## 👨‍💻 Author

**Tanzid Mondol**  
📧 mdtanzid.525@gmail.com  
📍 Bogura, Bangladesh

---

<div align="center">

© 2026 IdeaVault. Built with ❤️ by Tanzid Mondol.

</div>