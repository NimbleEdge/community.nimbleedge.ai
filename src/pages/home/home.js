import { useEffect } from "react";
import Blogs from "./blogs/blogs";
import Header from "./headers/header";
import JoinUs from "./joinus/joinus";
import Projects from "./projects/projects";
import Volunteers from "./volunteers/volunteer";
import Vissions from "./vissions/vission";
import Partners from "./partners/partners";
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
      <Vissions />
      <Projects />
      <Volunteers />
      {/* <Blogs />*/}
      <JoinUs />
      {/* <Partners /> */}
      {/* <Testimonials /> */}
    </>
  );
}
