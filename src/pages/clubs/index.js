import { useEffect } from "react";
import styled from "styled-components";
import BACKGROUND_IMAGE from "../../assets/images/start-a-club-background.svg";
import { Form } from "../../components/forms/start-a-club_form";

const Container = styled.div`
  background: #fafafa 0% 0% no-repeat padding-box;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  > div:nth-child(1) {
    padding: 15rem 0;
    > div:nth-child(1) {
      flex-basis: 60%;
      margin-block: auto;
      h1 {
        margin-bottom: 1rem;
      }
      p {
        width: 70%;
      }
    }
    > div:nth-child(2) {
      flex-basis: 100%;
      align-items: flex-end;
    }
  }
  @media screen and (max-width: 949px) {
    background-position: top;
    background-size: cover;
    > div:nth-child(1) {
      padding: 7rem 0 0;
      > div:nth-child(2) {
        padding: 2rem 0;
        margin: 0;
      }
    }
  }
`;

export default function Club() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="main-container" backgroundImage={BACKGROUND_IMAGE}>
      <div className="split-2 container">
        <div>
          <h3>START A CLUB</h3>
          <h1>Want to start a club in your college?</h1>
          <p className="subtopic-description">
            Foreground for the Pioneers to meet, greet, brainstorm ideas, share
            knowledge, get involved with the projects and do more! Be the
            change, and help bring data to Edge.
          </p>
        </div>
        <div className="flex-column">
          <Form />
        </div>
      </div>
    </Container>
  );
}
