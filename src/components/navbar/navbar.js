import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NimbleEdgeIcon } from "../Elements/nimbleedgeIcon";
import { useSelector } from "react-redux";
import { NavbarButtons } from "./navbar_buttons";
import { Hamburger } from "../hamburger/hamburger";
// import NimbleEdgeIcon from "../../assets/images/nimbleedge.svg";

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
      svg {
        width: 15rem;
        height: 8rem;
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

  @media only screen and (max-width: 949px) {
    .navbar-logo {
      width: 30%;
      svg {
        width: 10rem !important;
        height: 6rem;
      }
    }
  }
`;

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(0);
  const { pathname } = useLocation();
  const { screen } = useSelector((state) => state.screen);

  return (
    <Container className="flex-row">
      <div className="navbar-blur-placeholder"></div>
      <div className="navbar-actual-content flex-row">
        <div className="flex-row navbar-logo">
          <Link to={{ pathname: "/" }}>
            <NimbleEdgeIcon />
          </Link>
        </div>
        {screen === "BIG_SCREEN" && (
          <NavbarButtons
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            pathname={pathname}
          />
        )}
        {screen === "MOBILE" && <Hamburger />}
      </div>
    </Container>
  );
};

export default Navbar;
