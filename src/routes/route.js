import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import AboutUs from "../pages/aboutus";
import Footer from "../components/footer/footer";
import Club from "../pages/clubs";
import ContactUs from "../pages/contactus";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../redux/slices/screen";
import { getContributors } from "../redux/middlewares/contributors.middleware";
import { PROJECTS } from "../constants/projects";

export default function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      const innerWidth = window.innerWidth;
      dispatch(setScreen({ innerWidth }));
    });
    dispatch(getContributors({ project: PROJECTS.EnvisEdge }));
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

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
