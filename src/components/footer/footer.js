import styled from "styled-components";
import FOOTER_BACKGROUND from "../../assets/images/footer-background.svg";
import { Links } from "./links";
import { Logos } from "./logo_section";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 1rem 0 0;
  background: #000;
  z-index: 1;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  > div:nth-child(1) {
    > div:nth-child(1) {
      width: 100%;
    }
  }
  .footer-agreement-container-big-screen {
    color: var(--white);
    width: 100%;
    align-item: flex-end;
    div {
      flex-basis: 100%;
      text-align: center;
      font-size: 0.9rem;
    }
    > div:nth-child(1) {
      justify-content: center;
      span {
        font-size: 1.3rem;
        margin-top: -5px;
        algin-self: flex-end;
      }
    }
    > div:nth-child(2) {
      align-items: flex-center;
      justify-content: center;
      span {
        margin-left: 7px;
        margin-top: -5px;
        color: var(--link);
        font-size: 1.4rem;
      }
    }
    > div:nth-child(3) {
      a {
        flex-basis: 100%;
        color: var(--white);
      }
    }
  }
  .footer-agreement-container-mobile {
    margin-top: 2rem;
    color: var(--white);
    font-size: 0.8rem;
    > div:nth-child(1) {
      width: 100%;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 7px;
        color: var(--link);
        font-size: 1.3rem;
      }
      margin-bottom: 10px;
    }
    > div:nth-child(3) {
      justify-content: center;
    }
    > div:nth-child(2) {
      justify-content: space-evenly;
      padding-bottom: 5px;
      a {
        color: var(--white);
      }
    }
  }
  @media screen and (max-width: 949px) {
    background-size: contain;
  }
`;

export default function Footer() {
  const { screen } = useSelector((state) => state.screen);

  return (
    <Container className="main-container" image={FOOTER_BACKGROUND}>
      <div className="container flex-row">
        <div className="split-2">
          <Logos />
          <Links />
        </div>
      </div>
      {screen === "BIG_SCREEN" ? (
        <div className="footer-agreement-container-big-screen flex-row">
          <div className="flex-row">
            <span>&copy;</span>2021 Nimbleedge Inc. All rights reserved
          </div>
          <div className="flex-row">
            With love by Nimbleedge Community <span>&#10084;</span>
          </div>
          <div className="flex-row">
            <a href="/" target="_blank">
              {/* Privacy Policy */}
            </a>
            <a href="#">{/*Terms {"&"} Conditions*/}</a>
            <a href="/" target="_blank">
              {/* Cookie Policy */}
            </a>
          </div>
        </div>
      ) : (
        <div className="footer-agreement-container-mobile">
          <div className="flex-row">
            With love by Nimbleedge Community <span>&#10084;</span>
          </div>
          <div className="flex-row">
            <a href="/" target="_blank">
              {/* Privacy Policy */}
            </a>
            <a href="#">{/*Terms {"&"} Conditions*/}</a>
            <a href="/" target="_blank">
              {/* Cookie Policy */}
            </a>
          </div>
          <div className="flex-row">
            <span>&copy;</span>2021 Nimbleedge Inc. All rights reserved
          </div>
        </div>
      )}
    </Container>
  );
}
