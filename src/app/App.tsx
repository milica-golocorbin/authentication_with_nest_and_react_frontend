import AppRoutes from "./routes/app-routes";
// COMPONENTS
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
// END OF IMPORTS

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
