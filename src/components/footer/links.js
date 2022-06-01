import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { isValidEmailId } from "../../utils/formValidator";
import { encode } from "../../utils/encode";

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
    > form:nth-child(2) {
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
      button {
        width: 40%;
        height: 3.5rem;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        outline: none;
        border: none;
        color: var(--white);
        font-weight: 600;
        background: var(--section-subheading) 0% 0% no-repeat padding-box;
        border-radius: 60px 60px 0px 60px;
        outline: none;
        border: none;
        cursor: pointer;
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

  .newsletter-form-error {
    height: 2rem;
    width: 100%;
    font-size: 0.8rem;
    color: red;
    margin-top: 10px;
    padding-left: 2rem;
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
  const [formData, setFormData] = useState({
    emailId: ""
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setError("");
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailId = event.target[1].value;

    if(!isValidEmailId(emailId)) {
      setError("*Please enter correct email Id.");
      return;
    }

    const newsLetterForm = document.getElementById("newsletter-form");

    fetch(newsLetterForm.action, {
      method: newsLetterForm.method,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({"form-name": "newsletter", ...formData})
    })
    .then(res => {
      location.reload();
    })
    .catch(err => {
      location.reload();
    });
  }

  return (
    <Container>
      <div className="flex-column">
        <div className="footer-subrscribe-newsletter-container">
          <div>Subscribe to our newsletter.</div>
          <form name="newsletter" data-netify="true" className="flex-row" noValidate onChange={handleChange} onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="email" name="emailId" placeholder="Enter your email Id" />
            <button type="submit" className="flex-row">Submit</button>
          </form>
          <div className="newsletter-form-error">{error}</div>
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
            <HashLink to="/#mission-vision">Mission {"&"} Vision</HashLink>
            <HashLink to="/#project">Our Projects</HashLink>
          </div>
          <div className="footer-company-link flex-row">
            <a href="https://forms.gle/QgnmAWvQKeq5gbau9" target="_blank">
              Partner with us
            </a>
            <a href="https://blog.nimbleedge.ai" target="_blank">
              Blogs
            </a>
          </div>
          <div className="footer-company-link flex-row">
            <a href="/business">
              Explore Business
            </a>
            <a href="/discord" target="_blank">
              Join us
            </a>
          </div>
          <div className="footer-company-link flex-row">
            <Link to={{ pathname: "/contact-us" }}>Contact us</Link>
            <Link to={{ pathname: "/start-a-club" }}>Start a Club</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
