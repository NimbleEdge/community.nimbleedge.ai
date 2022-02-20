import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import AboutUs from "../pages/aboutus";
import Footer from "../components/footer/footer";
import Club from "../pages/clubs";
import ContactUs from "../pages/contactus";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/start-a-club" element={<Club />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
