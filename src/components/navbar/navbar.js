import styled from "styled-components";
import { NavbarButton } from "../Elements/NavbarButton";
import NIMBLEEDGE from "../../assets/images/nimble-edge.png";
import { useState } from "react";
import Github from "../Elements/GithubLogo";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 8vh;

  .navbar-blur-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vh;
    background-color: #fff;
    opacity: 0.6;
  }

  .navbar-actual-content {
    position: relative;
    width: 100%;
    align-items: center;
    backdrop-filter: blur(37px);
    -webkit-backdrop-filter: blur(37px);
    padding: 5px 10%;

    .navbar-logo {
      width: 40%;
      img {
        width: 15rem;
      }
    }

    .navbar-buttons-container {
      flex: 1;
      align-items: center;
      .navbar-buttons {
        flex: 1;
        justify-content: space-evenly;
      }
    }
  }
`;

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { pathname } = useLocation();

  return (
    <Container className="flex-row">
      <div className="navbar-blur-placeholder"></div>
      <div className="navbar-actual-content flex-row">
        <div className="flex-row navbar-logo">
          <Link to={{ pathname: "/" }}>
            <img src={NIMBLEEDGE} alt="nimble edge" />
          </Link>
        </div>
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
              active={activeButton === 2}
              buttonText={"Projects"}
              setActive={setActiveButton}
              href="/#project"
            />
            {/* <NavbarButton id={3} active={activeButton === 3} buttonText={"Blogs"} setActive={setActiveButton} href="#blogs" /> */}
            <NavbarButton
              id={4}
              active={activeButton === 4}
              buttonText={"Volunteer"}
              setActive={setActiveButton}
              href="/#volunteer"
            />
            <NavbarButton
              id={5}
              active={pathname === "/start-a-club"}
              buttonText={"Start a Club"}
              setActive={setActiveButton}
              href="start-a-club"
            />
          </div>
          <Github />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
