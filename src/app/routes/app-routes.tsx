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
