# Habit Tracker App

A modern and minimal Habit Tracking application built using **React**,
**TypeScript**, **Supabase**, **Tailwind CSS**, and **shadcn-ui**.\
This app allows users to track their good and bad habits, store them
securely in the cloud, and visualize progress using a clean and
interactive **pie chart dashboard**.

------------------------------------------------------------------------

## 🚀 Features

-   ✔ Add and track daily habits\
-   ✔ Mark habits as **Good** or **Bad**\
-   ✔ Visualize overall progress with a **Pie Chart**\
-   ✔ Secure user authentication via Supabase\
-   ✔ Real-time synced data stored in Supabase\
-   ✔ Clean and customizable UI using Tailwind + shadcn-ui\
-   ✔ Built with Vite for fast development and optimized production
    builds\
-   ✔ Fully responsive (mobile + desktop)

------------------------------------------------------------------------

## 🧰 Tech Stack

  -----------------------------------------------------------------------
  Layer                      Technology
  -------------------------- --------------------------------------------
  **Frontend**               React + TypeScript

  **Styling**                Tailwind CSS + shadcn-ui

  **Backend**                Supabase (PostgreSQL + Auth)

  **Build Tool**             Vite

  **Charts**                 Radix UI / ChartJS / Recharts (based on your
                             implementation)
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📦 Installation & Setup

### 🔧 Prerequisites

Make sure you have:

-   **Node.js** (v16 or above)\
-   **npm** or **yarn**\
-   A **Supabase account** and project

------------------------------------------------------------------------

### 📥 Steps to Run Locally

``` sh
# 1. Clone the repository
git clone <YOUR_GIT_REPO_URL>

# 2. Navigate into the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will now be running at:\
👉 **http://localhost:5173**

------------------------------------------------------------------------

## 🔐 Environment Variables

Create a `.env` file in the root folder and add:

``` env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

------------------------------------------------------------------------

## 📁 Project Structure

    .
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── hooks
    │   ├── lib
    │   ├── utils
    │   ├── App.tsx
    │   └── main.tsx
    ├── public
    ├── index.html
    ├── tailwind.config.js
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 📊 Screenshots

Add your screenshots here:

    ![Dashboard](./screenshots/dashboard.png)
    ![Pie Chart](./screenshots/piechart.png)

------------------------------------------------------------------------

## 🚀 Deployment

You can deploy this project on:

-   Vercel\
-   Netlify\
-   Supabase\
-   Cloudflare Pages

Build the project:

``` sh
npm run build
```

Upload the `dist/` folder or link your GitHub repo to the deployment
platform.

------------------------------------------------------------------------

## 🌱 Future Enhancements

-   Habit streak tracking\
-   Notifications/reminders\
-   Category + tagging system\
-   Calendar view\
-   Multi-user dashboards\
-   Export data as CSV/PDF

------------------------------------------------------------------------

## 📄 License

This project is owned and maintained by **Sahil Sangle**.\
All rights reserved.
