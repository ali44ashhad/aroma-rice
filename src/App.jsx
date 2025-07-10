import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="overflow-hidden min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
