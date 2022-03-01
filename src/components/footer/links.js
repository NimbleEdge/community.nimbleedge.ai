import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Container = styled.div`
  flex-basis: 100%;
  margin-block: auto;
  > div:nth-child(1) {
    align-items: flex-end;
  }
  .footer-subrscribe-newsletter-container {
    width: min(100%, 30rem);
    align-items: flex-end;
    > div:nth-child(1) {
      color: var(--white);
      margin-bottom: 1rem;
    }
    > div:nth-child(2) {
      align-items: center;
      width: 100%;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border-radius: 60px 60px 0px 60px;
      input {
        width: 60%;
        height: 3.5rem;
        font-weight: 600;
        border-radius: 60px 60px 0px 60px;
        border: none;
        outline: none;
        padding-inline: 2rem;
      }
      > div:nth-child(2) {
        width: 40%;
        height: 3.5rem;
        align-items: center;
        justify-content: center;
        background-color: var(--section-subheading);
        color: var(--white);
        font-weight: 500;
        border-radius: 60px 60px 0px 60px;
      }
    }
  }
  .footer-links-container-link {
    width: min(100%, 30rem);
    div {
      a {
        flex-basis: 100%;
        text-align: center;
      }
    }
    > div:nth-child(1) {
      a {
        font-weight: 900;
        color: var(--link);
        font-size: 1.2rem;
      }
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
  .footer-company-link {
    a {
      color: var(--white);
      margin-block: 10px;
      font-weight: 500;
      font-size: 1.2rem;
    }
    a:hover {
      color: var(--link);
    }
  }

  @media screen and (max-width: 949px) {
    margin-top: 2rem;
    > div:nth-child(1) {
      align-items: center;
    }
    .footer-subrscribe-newsletter-container {
    }
    .footer-company-link {
      a {
        color: var(--white);
        margin-block: 5px;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;

export const Links = () => {
  return (
    <Container>
      <div className="flex-column">
        <div className="footer-subrscribe-newsletter-container">
          <div>Subscribe to our newsletter.</div>
          <div className="flex-row">
            <input type="email" placeholder="Enter your email Id" />
            <div className="flex-row">Submit</div>
          </div>
        </div>
        <div className="footer-links-container-link flex-column">
          <div className="footer-company-community flex-row">
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
    </Container>
  );
};
