import { Routes, Route } from "react-router-dom";
// PAGES
import HomePage from "./home-page";
import CreateAccountPage from "../accounts/authentication/create-account-page";
import LoginPage from "../accounts/authentication/login-page";
// END OF IMPORTS

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* auth routes */}
      <Route path="/auth/create-account" element={<CreateAccountPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
