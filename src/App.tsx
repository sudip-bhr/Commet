// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FeaturesSection from "./pages/FeaturesSection";
import About from "./pages/About";
import LastPage from "./pages/LastPage";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Full scroll-snap homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Direct routes to sections if needed */}
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/last" element={<LastPage />} />

        {/* Auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

