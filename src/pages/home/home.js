import { useEffect } from "react";
import Header from "./headers/header";
import JoinUs from "./joinus/joinus";
import Projects from "./projects/projects";
import Volunteers from "./volunteers/volunteer";
import Visions from "./visions/vision";
import Blogs from "./blogs/blogs";
import Testimonials from "./testimonials/testimonials";
import { useLocation } from "react-router-dom";

export default function Home() {
  const routePath = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);
  return (
    <>
      <Header />
      <Visions />
      <Projects />
      <Volunteers />
      <JoinUs />
      <Testimonials />
    </>
  );
}
