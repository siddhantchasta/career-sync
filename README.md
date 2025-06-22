# 🌐 CareerSync – Scalable Professional Networking Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

CareerSync is a modern, full-stack professional networking platform that enables users to create posts, engage with content through likes and comments, and build professional connections. Built with cutting-edge technologies including **Next.js 14**, **Clerk Authentication**, **MongoDB**, **Azure Blob Storage**, and **Shadcn UI**, this project demonstrates scalable social platform architecture.

🔗 **Live Demo**: [https://career-sync-theta.vercel.app](https://career-sync-theta.vercel.app)

---

## ✨ Features

### 🔐 **Authentication & Security**
- Google OAuth integration via Clerk
- JWT-based session management
- Protected server routes and API endpoints

### 📝 **Content Management**
- Create, edit, and delete posts
- Rich text content support
- Image upload and management with Azure Blob Storage
- Real-time content updates

### 💬 **Social Interactions**
- Like/unlike posts with optimistic UI updates
- Comment system with threaded discussions
- User engagement analytics

### 🎨 **User Experience**
- Fully responsive design (mobile-first approach)
- Dark/light theme support
- Optimized loading states and error handling
- Accessible UI components

### ⚡ **Performance**
- Server-side rendering with Next.js 14
- Image optimization and lazy loading
- Efficient caching strategies
- SEO-optimized meta tags

---

## 🧰 Tech Stack

### **Frontend**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks + Server State

### **Backend**
- **Runtime**: Node.js
- **API**: Next.js API Routes + Server Actions
- **Authentication**: Clerk.dev
- **File Upload**: Azure Blob Storage

### **Database**
- **Primary**: MongoDB Atlas
- **ODM**: Mongoose
- **Hosting**: Azure CosmosDB

### **DevOps & Tools**
- **Deployment**: Vercel
- **Version Control**: Git & GitHub
- **AI Assistant**: GitHub Copilot
- **IDE**: Visual Studio Code

---

## 🎯 Demo

🔗 **Live Application**: [https://career-sync-theta.vercel.app](https://career-sync-theta.vercel.app)

### Test the Platform
1. Sign in using your Google account
2. Create your first post with optional image upload
3. Interact with other users' content
4. Explore the responsive design across devices

---
## 🖼️ Screenshots

<h3 align="center">📸 Screenshots – Desktop & Mobile</h3>

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/b78c6c1a-ab6b-4829-a922-e5049a6c9d17" alt="CareerSync Desktop Interface" width="400"/><br/>
        <sub><em>🖥️ Desktop View</em></sub>
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/8ea7442e-fcae-49f4-ad9e-52c355442406" alt="CareerSync Mobile Interface" width="200"/><br/>
        <sub><em>📱 Mobile View</em></sub>
      </td>
    </tr>
  </table>
</div>

### Key Features Demonstrated
- ✅ **Post Creation**: Rich text editor with image upload capability
- ✅ **User Profiles**: Complete profile sidebar with post/comment counts  
- ✅ **Social Interactions**: Like, comment, repost, and send functionality
- ✅ **Responsive Design**: Seamless experience across desktop and mobile
- ✅ **Image Support**: Full image upload and display with Azure Blob Storage

----

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control


### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/career-sync.git
cd career-sync
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Environment Configuration

Create a `.env.local` file in the root directory and add the following:

```env
# Database
MONGO_DB_USERNAME=your_mongo_username
MONGO_DB_PASSWORD=your_mongo_password
MONGODB_URI=your_full_mongodb_connection_uri

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Azure Blob Storage
AZURE_STORAGE_ACCOUNT_KEY=your_azure_storage_account_key
AZURE_STORAGE_NAME=your_azure_storage_name
```

#### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application running locally.

---

## 📄 License & Disclaimer

This project is built for **educational and portfolio purposes** only.
- **Disclaimer**: CareerSync is not affiliated with or endorsed by LinkedIn
- **Trademarks**: All trademarks and logos belong to their respective owners
  
---

## 🙏 Acknowledgments

- **Shadcn UI** for the beautiful component library
- **Clerk** for seamless authentication
- **Vercel** for excellent deployment platform
- **GitHub Copilot** for AI-powered development assistance

---

**⭐ If you found this project helpful, please consider giving it a star!**
