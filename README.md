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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7 }}
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

const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-900 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex justify-between items-center">
        <div>
          <Link aria-label="logo" to="/">
            HOME
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link to="/auth/login">login</Link>
            </li>
            <li>
              <Link to="/auth/create-account">create account</Link>
            </li>
          </ul>
        </nav>
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

## Starting Authentication UI

Inside app folder add **axios** folder and new file axios-api.ts. Inside this file we will create methods for sending requests to our backend. But before that, at the root of the project create **.env** file. And don't forget to add it to .gitignore.

**env**

```
VITE_BACKEND_URL=http://localhost:3000
```

**axios-api.ts**

```
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const axiosAPI = {
  getAll: function (route: string) {
    return axiosInstance.request({
      method: "GET",
      url: route,
    });
  },
  getById: function (route: string, id: number) {
    return axiosInstance.request({
      method: "GET",
      url: `${route}/${id}`,
    });
  },
  create: function (route: string, payload: any) {
    return axiosInstance.request({
      method: "POST",
      url: route,
      data: payload,
    });
  },
  update: function (route: string, id: number, payload: any) {
    return axiosInstance.request({
      method: "PUT",
      url: `${route}/${id}`,
      data: payload,
    });
  },
  delete: function (route: string, id: number) {
    return axiosInstance.request({
      method: "DELETE",
      url: `${route}/${id}`,
    });
  },
};
```

## Accounts

Similar to the backend, we will have an accounts folder, as a context for our **authentication**, **email** and **users** folders. Next to these main folders that will hold our logic, we will add a **components** folder, as a shared place, for building blocks of our forms. And we will add **validation** folder, as well.

Before we start with the logic, we will add two new packages, formik and yup. We use them for creating our forms and validation.

```
npm i formik yup
```

**COMPONENTS**

We will start first with components folder inside our accounts.

**form-section.tsx**

```
type Props = {
  children: React.ReactNode;
};

const FormSection = ({ children }: Props) => {
  return (
    <section className="bg-slate-800 text-white rounded-md shadow-xl w-11/12 max-w-xl mx-auto p-8 text-sm">
      {children}
    </section>
  );
};

export default FormSection;
```

**form-control.tsx**

```
import { useField } from "formik";

type Props = {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

const FormControl = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="bg-transparent bg-slate-700 rounded-md p-2 outline-none"
        autoComplete="off"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs font-semibold text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default FormControl;
```

**page-navigation-link.tsx**

```
import { Link } from "react-router-dom";

type Props = {
  title: string;
  linkTitle: string;
  linkTo: string;
};

const PageNavigationLink = ({ title, linkTitle, linkTo }: Props) => {
  return (
    <p className="font-bold">
      {title}{" "}
      <span className="underline underline-offset-4 decoration-amber-500">
        <Link to={linkTo}>{linkTitle}</Link>
      </span>
    </p>
  );
};

export default PageNavigationLink;
```

**button-submit.tsx**

```
const ButtonSubmit = () => {
  return (
    <button
      type="submit"
      className="uppercase font-semibold text-xs bg-slate-900 text-white py-2 rounded-md shadow-md
      shadow-amber-500 mx-auto w-1/2 s:w-1/3 sm:w-1/4"
    >
      submit
    </button>
  );
};

export default ButtonSubmit;
```

**AUTHENTICATION**

For the start we will add two new files **create-account-page.tsx** and **login-page.tsx**. Before we add logic for them, we'll go to the routes folder, into app-routes.tsx file, to add routes for these pages, so we can see them in our UI and be able to navigate to them.

**routes/app-routes.tsx**

```
import CreateAccountPage from "../accounts/authentication/create-account-page";
import LoginPage from "../accounts/authentication/login-page";

const AppRoutes = () => {
  return (
    <Routes>
      ...
      {/* auth routes */}
      <Route path="/auth/create-account" element={<CreateAccountPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
```

**authentication/create-account-page.tsx**

```
import { Formik, Form } from "formik";
import { CreateAccountSchema } from "../validation/yup-schema";
import { axiosAPI } from "../../axios/axios-api";
// COMPONENTS
import Main from "../../components/layout/main/main";
import FormSection from "../components/form-section";
import FormControl from "../components/form-control";
import PageNavigationLink from "../components/page-navigation-link";
import ButtonSubmit from "../components/button-submit";
// END OF IMPORTS

const CreateAccountPage = () => {
  // formik
  const initialValues = { email: "", password: "", firstName: "" };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={CreateAccountSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            // TODO: LOGIC TO CREATE USER ACCOUNT
            const result = await axiosAPI.create("/auth/register", values);
            console.log(result.data);
          } catch (error: any) {
            console.log(error.message);
          }
          resetForm({
            values: { email: "", password: "", firstName: "" },
          });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <h1>Create Account</h1>
          <p className="text-center mb-10">
            Please enter your email address. And we'll send you a verification
            email to finish your account creation process.
          </p>
          <Form className="flex flex-col gap-6">
            {/* Name field start */}
            <FormControl
              label="Your name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter name"
            />
            {/* Name field end */}

            {/* Email field start */}
            <FormControl
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {/* Email field end */}

            {/* Password field start */}
            <FormControl
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {/* Password field end */}
            <PageNavigationLink
              title="Already have an account?"
              linkTo="/auth/login"
              linkTitle="Login now."
            />
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default CreateAccountPage;
```

**authentication/login-page.tsx**

```
import { Formik, Form } from "formik";
import { LoginSchema } from "../validation/yup-schema";
import { axiosAPI } from "../../axios/axios-api";
// COMPONENTS
import Main from "../../components/layout/main/main";
import FormSection from "../components/form-section";
import FormControl from "../components/form-control";
import PageNavigationLink from "../components/page-navigation-link";
import ButtonSubmit from "../components/button-submit";
// END OF IMPORTS

const LoginPage = () => {
  // formik
  const initialValues = { email: "", password: "" };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            // TODO: LOGIC TO CREATE USER ACCOUNT
            const result = await axiosAPI.create("/auth/login", values);
            console.log(result.data);
          } catch (error: any) {
            console.log(error.message);
          }
          resetForm({
            values: { email: "", password: "" },
          });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <h1>Log into Account</h1>
          <p className="text-center mb-10">
            Please enter your email address. And we'll send you a verification
            email to finish your account creation process.
          </p>
          <Form className="flex flex-col gap-6">
            {/* Email field start */}
            <FormControl
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {/* Email field end */}

            {/* Password field start */}
            <FormControl
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {/* Password field end */}
            <PageNavigationLink
              title="Don't have an account yet?"
              linkTo="/auth/create-account"
              linkTitle="Create one now."
            />
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default LoginPage;
```

**validation/yup-schema.ts**

```
import * as Yup from "yup";

// create account validation schema
const CreateAccountSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(18, "Name can not be more that 18 characters")
    .min(4, "Name must be at least 4 characters")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .notOneOf(
      [Yup.ref("email"), Yup.ref("name")],
      "Name or email can't be password"
    ),
});

// login user validation schema
const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Please provide valid email address")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export { CreateAccountSchema, LoginSchema };
```

## Push to Github
