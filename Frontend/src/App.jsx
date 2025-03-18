import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Homelayout from "./Component/Homelayout";
import About from "./pages/About/About";
import Create from "./pages/Create/Create";
import Footer from "./Component/Footer/Footer";
import Review from "./pages/Review/Review";
import ImageUpload from "./pages/Create/ImageUpload";
import DevPortfolio from "./pages/devPortfolio/devPortfolio";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();
  const isPortfolioRoute = location.pathname.startsWith("/user/portfolio/");

  return (
    <div>
      {!isPortfolioRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Homelayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/review" element={<Review />} />
        <Route path="/image-upload" element={<ImageUpload />} />
        <Route path="/user/portfolio/:slug" element={<DevPortfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isPortfolioRoute && <Footer />}

      <Toaster />
    </div>
  );
};

export default App;
