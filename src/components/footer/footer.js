import { Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import GLOBE from "../../assets/images/globe-nimble-edge.png";
import NIMBLEEDGE from "../../assets/images/nimbleedge-white-logo.png";
import FOOTER_BACKGROUND from "../../assets/images/footer-background.svg";

const Container = styled.div`
  width: 100%;
  height: 92vh;
  position: relative;
  background: #000;
  padding: 0 10%;
  z-index: 10;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  .footer-main-container {
    width: 100%;
    height: 100%;
    .footer-logo-wrapper {
      z-index: 10000;
      width: 40%;
      padding: 10% 0;
      .footer-nimbleedge-globe {
        display: block;
        width: 7rem;
        margin-bottom: 4rem;
      }
      .footer-nimbleedge-logo {
        display: block;
        width: 25rem;
        margin-bottom: 5rem;
      }
      .footer-sponser-button {
        z-index: 100;
        height: 3rem;
        width: 11rem;
        background: #c93418 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 10px #00000033;
        border-radius: 60px 60px 0px 60px;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        letter-spacing: 0.16px;
        cursor: pointer;
        margin-bottom: 2rem;
        text-decoration: none;
      }
      .footer-flow-us-text {
        color: #fff;
        font-size: 1rem;
        margin-bottom: 1rem;
        letter-spacing: 0.16px;
      }
      .footer-flow-us-icons-wrapper {
        align-items: center;
        a:nth-child(1) {
          display: flex;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 7px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          margin-right: 2rem;
        }
        a:nth-child(2) {
          svg {
            transform: scale(1.6);
          }
        }
      }
    }
  }
  .footer-link-container {
    flex: 1;
    height: 100%;
    padding-top: 10%;
    .footer-subscribe-to-newletter-text {
      color: #fff;
      width: 60%;
      align-self: flex-end;
      text-align: left;
      font-size: 1rem;
      letter-spacing: 0.16px;
      margin-bottom: 10px;
    }
    .footer-subscribe-input-container {
      align-self: flex-end;
      height: 3rem;
      width: 60%;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border-radius: 60px 60px 0px 60px;
      margin-bottom: 3rem;
      input {
        flex: 1;
        border-radius: 60px 60px 0px 60px;
        border: none;
        outline: none;
        padding: 0 2rem;
        font-weight: 600;
      }
      div {
        margin-left: -1rem;
        width: 12rem;
        background: #c93418 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 10px #00000033;
        border-radius: 60px 60px 0px 60px;
        color: #fff;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.16px;
        cursor: pointer;
      }
    }
    .footer-link-container-link {
      width: 60%;
      align-self: flex-end;
      font-size: 1rem;
      letter-spacing: 0.16px;
      .footer-company-link {
        width: 100%;
        a {
          text-decoration: none;
          :hover {
            color: #c93418;
          }
        }
        a:nth-child(1) {
          width: 60%;
        }
        a:nth-child(2) {
          width: 40%;
        }
      }
      .footer-company-link a {
        color: #fff;
        margin-bottom: 2rem;
      }
      .footer-company-community a {
        color: #c93418;
        font-weight: bold;
        margin-bottom: 3rem;
      }
    }
  }
  .footer-copyright-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: auto;
    justify-content: space-between;
    font-size: 0.9rem;
    letter-spacing: 0.18px;
    color: #fff;
    .footer-copyright-text {
      width: 25%;
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        font-size: 1.6rem;
        margin-right: 0.5rem;
      }
    }
    .footer-nimbleedge-love {
      flex: 1;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 10px;
        font-size: 1.5rem;
        color: red;
      }
    }
    .footer-policy-container {
      justify-content: flex-end;
      a {
        color: #fff;
        text-decoration: none;
        margin-left: 4rem;
      }
    }
  }
`;

export default function Footer() {
  const handleSponsor = () => {
    console.log("Hello World");
  };

  return (
    <Container className="flex-column" image={FOOTER_BACKGROUND}>
      <div className="footer-main-container flex-row">
        <div className="footer-logo-wrapper">
          <img
            className="footer-nimbleedge-globe"
            src={GLOBE}
            alt="globe nimbleedge"
          />
          <img
            className="footer-nimbleedge-logo"
            src={NIMBLEEDGE}
            alt="logo nimbleedge"
          />
          <a
            href="https://forms.gle/rQEzdY9JRW6vb1nJ9"
            target="_blank"
            className="footer-sponser-button flex-row"
          >
            Sponsor Us
          </a>
          <div className="footer-flow-us-text">Follow Us:</div>
          <div className="footer-flow-us-icons-wrapper flex-row">
            <a href="https://twitter.com/NimbleedgeINC" target="_blank">
              <Twitter sx={{ color: "black" }} fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/company/nimbleedge/"
              target="_blank"
            >
              <LinkedIn sx={{ color: "white" }} fontSize="large" />{" "}
            </a>
          </div>
        </div>
        <div className="footer-link-container flex-column">
          <div className="footer-subscribe-to-newletter-text">
            Subscribe to our newsletter
          </div>
          <div className="footer-subscribe-input-container flex-row">
            <input type="email" placeholder="Enter your email adddress" />
            <div className="footer-subscribe-button flex-row">Submit</div>
          </div>
          <div className="footer-link-container-link">
            <div className="footer-company-link footer-company-community flex-row">
              <Link to={{ pathname: "" }}>Company</Link>
              <Link to={{ pathname: "" }}>Community</Link>
            </div>
            <div className="footer-company-link flex-row">
              <Link to={{ pathname: "/about-us" }}>About us</Link>
              <HashLink to="/#volunteer">Become a Volunteer</HashLink>
            </div>
            <div className="footer-company-link flex-row">
              <HashLink to="/#mission-vission">Mission {"&"} Vission</HashLink>
              <HashLink to="/#project">Our Project</HashLink>
            </div>
            <div className="footer-company-link flex-row">
              <Link to={{ pathname: "/" }}>Partner with us</Link>
              <Link to={{ pathname: "" }}>Blogs</Link>
            </div>
            <div className="footer-company-link flex-row">
              <a href="https://www.nimbleedge.ai/" target="_blank">
                Explore Business
              </a>
              <HashLink to="/#volunteer">Join Us</HashLink>
            </div>
            <div className="footer-company-link flex-row">
              <Link to={{ pathname: "/contact-us" }}>Contact Us</Link>
              <Link to={{ pathname: "/start-a-club" }}>Start a Club</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <div className="footer-copyright-text">
          <span>&copy;</span>2021 Nimbleedge Pvt. Ltd. All rights reserved
        </div>
        <div className="footer-nimbleedge-love flex-row">
          With love by NimbleEdge Community <span>&#10084;</span>
        </div>
        <div className="footer-policy-container flex-row">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms {"&"} Conditions</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </Container>
  );
}
