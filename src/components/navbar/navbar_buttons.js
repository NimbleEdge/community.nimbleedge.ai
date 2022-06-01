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
          buttonText={"About us"}
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
        <NavbarButton 
          id={3} 
          active={false} 
          buttonText={"Blogs"} 
          setActive={setActiveButton} 
          href="https://blog.nimbleedge.ai"
          external={true} 
        />
        <NavbarButton 
          id={4} 
          active={false} 
          buttonText={"Docs"} 
          setActive={setActiveButton} 
          href="https://docs.nimbleedge.ai"
          external={true} 
        />
        <NavbarButton
          id={5}
          active={routePath.hash === "#volunteer"}
          buttonText={"Careers"}
          setActive={setActiveButton}
          href="/careers"
          external={true}
        />
        <NavbarButton
          id={6}
          active={pathname === "/contact-us"}
          buttonText={"Contact us"}
          setActive={setActiveButton}
          href="/contact-us"
        />
      </div>
      <Github />
    </div>
  );
};
