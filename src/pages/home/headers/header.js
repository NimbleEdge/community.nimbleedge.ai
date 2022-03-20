import React from "react";
import styled from "styled-components";
import EDGE from "../../../assets/images/landing-page-min.png";
import EDGE_BACKGROUND from "../../../assets/images/edge-background.png";
import LINKEDIN from "../../../assets/images/linkedin.svg";
import TWITTER from "../../../assets/images/twitter.svg";
import { Button1 } from "../../../components/buttons/button_1";
import { useSelector } from "react-redux";

const Container = styled.div`
  z-index: 1;
  height: 100%;
  background-color: var(--navbar-bg);
  .home-header-text {
    flex-basis: 80%;
    justify-content: center;
    h1 {
      margin-bottom: 2rem;
      span {
        background-image: url(${(props) => props.highlight});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
    p {
      margin-bottom: 2rem;
    }
  }
  .home-header-subtopic-description {
    width: 100%;
  }
  .header-icon-wrapper {
    position: absolute;
    bottom: 5rem;
    right: 5rem;
    a:nth-child(1) {
      margin-bottom: 1rem;
    }
    img {
      width: 2.5rem;
    }
  }

  @media only screen and (max-width: 949px) {
    .home-header-subtopic-description {
      width: 100%;
    }
    .home-header-text {
      margin-top: 3rem;
    }
  }
`;

const Header = () => {
  const { screen } = useSelector((state) => state.screen);

  return (
    <Container className="header" highlight={EDGE_BACKGROUND}>
      <div className="split container">
        <div className="home-header-text flex-column">
          <h3>CONNECT, NETWORK AND GROW</h3>
          <h1>
            Join the Revolution Towards The <span>Edge</span>
          </h1>
          <p className="home-header-subtopic-description subtopic-description">
            Foreground for the Pioneers to meet, greet, brainstorm ideas, share
            knowledge, get involved with the projects and do more! Be the
            change, and help bring data to Edge.
          </p>
          <Button1 text={"Join us"} href={"/discord"} />
        </div>
        <div className="home-header-image">
          <img src={EDGE} alt="edge image" />
        </div>
      </div>
      {screen === "BIG_SCREEN" && (
        <div className="flex-column header-icon-wrapper">
          <a href="https://twitter.com/NimbleedgeINC" target="_blank">
            <img src={TWITTER} alt="twitter-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/nimbleedge/"
            target="_blank"
          >
            <img src={LINKEDIN} alt="likedin icon" />
          </a>
        </div>
      )}
    </Container>
  );
};

export default Header;
