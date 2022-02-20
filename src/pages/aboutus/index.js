import { useEffect } from "react";
import Header from "./header/header";
import Teams from "./teams/teams";
import Volunteer from "./volunteer/volunteer";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Teams />
      <Volunteer />
    </>
  );
}
