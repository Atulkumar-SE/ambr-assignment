# GAURASTRA — E-Commerce Web Application

A modern, fully responsive e-commerce web application built using **React**, **Vite**, and **Tailwind CSS**. GAURASTRA offers a seamless shopping experience with dedicated product categories for Men, Women, and Ethnic Wear, complete with client-side routing and optimized page loading.

---

## 🚀 Live Demo

Check out the live site hosted on GitHub Pages:  
**[GAURASTRA Live Application](https://atulkumar-se.github.io/ambr-assignment/)**

---

## ✨ Features

- **Responsive Design**: Tailored layout for mobile, tablet, and desktop viewports.
- **Client-Side Routing**: Smooth navigation using React Router DOM.
- **Product Categories**: Dedicated sections for Men's Wear, Women's Wear, and Ethnic Wear.
- **Modular Component Architecture**: Structured header, navigation bar, footer, and individual page modules.
- **Production Build**: Bundled and optimized with Vite for ultra-fast startup and execution.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) (`gh-pages`)

---

## 📁 Project Structure

```text
ambr-assignment/
├── src/
│   ├── component/
│   │   └── common/
│   │       ├── footer/
│   │       │   └── Footer.jsx
│   │       └── header/
│   │           └── MainHeader.jsx
│   ├── pages/
│   │   ├── Aboutus.jsx
│   │   ├── Contactus.jsx
│   │   ├── EthnicWear.jsx
│   │   ├── Home.jsx
│   │   ├── Men.jsx
│   │   └── Women.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── vite.config.js
└── package.json
```
---
## 💻 Getting Started Locally

Follow these steps to run the project locally on your machine:

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Atulkumar-SE/ambr-assignment.git](https://github.com/Atulkumar-SE/ambr-assignment.git)
   cd ambr-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**

```Bash
npm run dev
```

4. **Open your browser and navigate to** ```http://localhost:5173```
5. ## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite dev server with hot reload |
| `npm run build` | Builds the production bundle in the dist directory |
| `npm run preview` | Previews the local production build |
| `npm run deploy` | Builds and deploys the site to the gh-pages branch |


## 📜 License
This project is created as an assignment and is open source for demonstration purposes.
