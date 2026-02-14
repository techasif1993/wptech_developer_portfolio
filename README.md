# Asif Pathan - Headless WordPress Developer Portfolio 🚀

A high-performance, modern developer portfolio built with **Next.js 15 (App Router)** on the frontend and **Headless WordPress** on the backend. This project showcases advanced web development skills, featuring dynamic content management, SEO optimization, and a premium UI/UX design.

## 🌟 Key Features

-   **Headless Architecture**: Decoupled frontend (Next.js) and backend (WordPress) for security, speed, and flexibility.
-   **Dynamic Content**: All Projects, Services, and Blog posts are managed via the WordPress Admin Dashboard.
-   **Static Site Generation (SSG)**: Pre-rendered pages for lightning-fast performance and SEO.
-   **Modern UI**: Built with Tailwind CSS, featuring a custom Design System, Dark/Light Mode, and smooth Framer Motion animations.
-   **SEO Optimized**: Automatic metadata generation, sitemap, and semantic HTML structure.
-   **Contact Integration**: Functional contact form and social media links.
-   **Automated Deployment**: GitHub Actions CI/CD pipeline deploys automatically to Hostinger via FTP on every push to `main`.

---

## 🛠️ Tech Stack

### Frontend (User Interface)
-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React Server Components)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Data Fetching**: [Apollo Client](https://www.apollographql.com/) (GraphQL)

### Backend (Content Management)
-   **CMS**: [WordPress](https://wordpress.org/) (Headless Mode)
-   **API**: [WPGraphQL](https://www.wpgraphql.com/) (Exposes WordPress data as a GraphQL API)
-   **Custom Fields**: [ACF](https://www.advancedcustomfields.com/) (For structured data like Project URLs, Tech Stack, etc.)

### Deployment
-   **Host**: [Hostinger](https://www.hostinger.com/) (Main Domain & Subdomain)
-   **CI/CD**: [GitHub Actions](https://github.com/features/actions)
-   **Method**: Static Export (`next export`) + FTP Upload

---

## 📂 Project Structure

```bash
├── frontend/                # Next.js Application
│   ├── src/
│   │   ├── app/             # App Router Pages & Layouts
│   │   ├── components/      # Reusable UI Components
│   │   ├── lib/             # Utility Functions & API Calls (WordPress)
│   │   └── styles/          # Global Styles & Tailwind Config
│   ├── public/              # Static Assets (Images, Fonts)
│   └── ...
├── .github/workflows/       # GitHub Actions Configuration
│   └── deploy.yml           # Deployment Workflow (Build -> FTP)
└── README.md                # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
-   **Node.js**: v18 or higher
-   **npm** or **yarn**
-   **WordPress**: A live WordPress instance with WPGraphQL plugin installed.

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/techasif1993/wptech_developer_portfolio.git
cd wptech_developer_portfolio/frontend
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the `frontend` directory:

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://api.asifpathantech.in/graphql
```

### 3. Running Locally
Start the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment

This project handles deployment automatically via **GitHub Actions**.

1.  **Push Changes**:
    Any commit pushed to the `main` branch triggers the deployment workflow.

    ```bash
    git push origin main
    ```

2.  **Workflow Process**:
    -   GitHub Actions spins up a runner.
    -   Builds the Next.js app (Static Export).
    -   Connects to Hostinger via FTP.
    -   Uploads the `out/` folder to the public root.

### Manual Deployment (Fallback)
If automation fails, you can deploy manually using the script (if configured) or by dragging the `out/` folder into FileZilla.

---

## 📞 Contact

**Asif Pathan** - Senior WordPress Developer
-   **Website**: [asifpathantech.in](https://asifpathantech.in)
-   **Email**: asifpathan.tech@gmail.com
-   **GitHub**: [@techasif1993](https://github.com/techasif1993)
