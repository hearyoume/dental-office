import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import NavbarComponent from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
