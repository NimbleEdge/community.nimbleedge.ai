import { useEffect } from "react";
import styled from "styled-components";
import BACKGROUND_IMAGE from "../../assets/images/start-a-club-background.svg";
import { Form } from "../../components/forms/contact-us_form";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 8vh 0 0;
  background: #fafafa 0% 0% no-repeat padding-box;
  .contact-us-main-container {
    width: 100%;
    height: 92vh;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90% 80%;
    padding: 0 10%;
    justify-content: space-between;

    .contact-us-header-container {
      align-self: center;
      width: 40%;
      div:nth-child(1) {
        font-size: 1.3rem;
        font-weight: 600;
        color: #c93418;
        letter-spacing: 0.48px;
        margin-bottom: 1rem;
      }
      div:nth-child(2) {
        font-size: 3.3rem;
        font-weight: 800;
        letter-spacing: 2px;
        margin-bottom: 2rem;
      }
      div:nth-child(3) {
        flex-shrink: 0;
        font-size: rem;
        width: 70%;
        text-align: justify;
        padding: 1rem 2rem;
        border-left: 4px solid #323568;
        border-radius: 4px;
      }
    }
    .contact-us-form {
      align-self: center;
    }
  }
`;

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container backgroundImage={BACKGROUND_IMAGE}>
      <div className="contact-us-main-container flex-row">
        <div className="contact-us-header-container flex-column">
          <div>CONTACT US</div>
          <div>Want to know more about us?</div>
          <div>
            Foreground for the Pioneers to meet, greet, brainstorm ideas, share
            knowledge, get involved with the projects and do more! Be the
            change, and help bring data to Edge.
          </div>
        </div>
        <div className="contact-us-form">
          <Form />
        </div>
      </div>
    </Container>
  );
}
