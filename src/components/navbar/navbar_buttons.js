import { NavbarButton } from "../Elements/NavbarButton";
import Github from "../Elements/GithubLogo";
import { useLocation } from "react-router-dom";

export const NavbarButtons = ({ activeButton, setActiveButton, pathname }) => {
  const routePath = useLocation();
  return (
    <div className="flex-row navbar-buttons-container">
      <div className="flex-row navbar-buttons">
        <NavbarButton
          id={1}
          active={pathname === "/about-us"}
          buttonText={"About Us"}
          setActive={setActiveButton}
          href="about-us"
        />
        <NavbarButton
          id={2}
          active={routePath.hash === "#project"}
          buttonText={"Projects"}
          setActive={setActiveButton}
          href="/#project"
        />
        {/* <NavbarButton id={3} active={activeButton === 3} buttonText={"Blogs"} setActive={setActiveButton} href="#blogs" /> */}
        <NavbarButton
          id={4}
          active={routePath.hash === "#volunteer"}
          buttonText={"Volunteer"}
          setActive={setActiveButton}
          href="/#volunteer"
        />
        <NavbarButton
          id={5}
          active={pathname === "/contact-us"}
          buttonText={"Contact Us"}
          setActive={setActiveButton}
          href="/contact-us"
        />
      </div>
      <Github />
    </div>
  );
};
