# Authentication Client (React, TailwindCSS, ReactQuery, TS) - INITIAL CONFIGURATION

## Generating new project

```
npm init vite@latest client -- --template react-ts
```

## Installing necessary packages for routing, fetching, state management

```
npm i react-router-dom axios react-query
```

**main.tsx**

```
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
```

## Install Tailwind CSS following instructions from: [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite) and change font to "League Spartan"

**index.html**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta
      name="description"
      content="Authentication application for educational purposes only"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <title>Authentication</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Add couple more breakpoint to tailwind.config file.

**tailwind.config.cjs**

```
/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "375px",
      s: "480px",
      sm: "640px",
      md: "768px",
      lg: "896px",
      xl: "1024px",
      "2xl": "1280px",
      "4xl": "1536px",
    },
  },
  plugins: [],
};
```

## Push to Github

```
git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/milica-golocorbin/authentication_with_nest_and_react_frontend.git

git push -u origin main
```

## Folder structure

For starters, inside src folder, create new **app** folder and move App.tsx inside it. Add new **routes** folder and **components** folder, inside app folder. We will start first with the components folder. It will be a place where all shared components, for the entire app will live. Add a new **layout** folder inside it and lets start by creating a basic layout for the app.

## Layout

Add framer-motion package, for nicer page transitions.

```
npm i framer-motion
```

Inside layout folder, create three new folders: **main**, **header**, **footer**.

Inside main folder add main.tsx file.

**main.tsx**

```
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={Math.random()}
        className="flex-1 w-full h-screen text-slate-900 tracking-normal leading-normal flex flex-col justify-center items-center py-10 s:py-11 md:py-12 lg:py-14 xl:py-16 2xl:py-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Main;
```

Inside header folder add header.tsx file.

**header.tsx**

```
import { Link } from "react-router-dom";
// END OF IMPORTS

const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link aria-label="logo" to="/">
            HOME
          </Link>
        </div>
        <nav></nav>
      </section>
    </header>
  );
};

export default Header;
```

Inside footer folder add footer.tsx file.

**footer.tsx**

```
const Footer = () => {
  return (
    <footer className="w-full py-5 bg-gradient-to-br from-slate-900 to-slate-700 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex flex-col gap-2 items-center">
        <h3>application created for educational purposes only</h3>
        <p className="text-amber-500 tracking-widest font-bold">
          by: milica goločorbin
        </p>
        {/* TODO: ADD SOCIAL MEDIA */}
        <p>{new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};

export default Footer;
```

Now lets fit together the pieces of layout inside App.tsx. But before that inside **routes** folder create **app-routes.tsx** file where we will put all the routes of our application, so we don't clutter App.tsx. And we will create one more file inside routes, **home-page.tsx**. So why put it here, and not, let's say pages folder. I like more, mirroring folder structure from the backend. And to create more a functional, or context-y folder structure. Where folders keep grouped components based on there functionality.

**app-routes.tsx**

```
import { Routes, Route } from "react-router-dom";
// PAGES
import HomePage from "./home-page";
// END OF IMPORTS

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
```

**home-page.tsx**

```
import Main from "../components/layout/main/main";

const HomePage = () => {
  return (
    <Main>
      <h1>Home Page</h1>
    </Main>
  );
};

export default HomePage;
```

**app.tsx**

```
import AppRoutes from "./routes/app-routes";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-screen min-h-screen">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
```

## Start the app

```
npm run dev
```

## Push to Github
