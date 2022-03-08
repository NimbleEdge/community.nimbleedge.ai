import styled from "styled-components";

const Container = styled.div`
  padding: 3rem 0;
  background-color: var(--navbar-bg);
  > div:nth-child(1) {
    align-items: center;
    h2 {
      text-align: center;
    }
    p {
      width: 40%;
      text-align: center;
      margin-bottom: 2rem;
    }
    a {
      width: 10rem;
      height: 3rem;
      border-radius: 40px;
      background-color: var(--link);
      color: var(--white);
      font-weight: 600;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 949px) {
    > div:nth-child(1) {
      h2 {
        margin-bottom: 1rem;
      }
      p {
        width: 100%;
      }
    }
  }
`;

export default function Volunteer() {
  return (
    <Container id="join-us" className="main-container">
      <div className="container flex-column">
        <h2>Want to become a volunteer?</h2>
        <p>Fill out this introduction form and join our Discord community. We're a friendly bunch, so announce yourself in the #introduction channel and get started!</p>
        <a
          href="https://forms.gle/jNNTYrMfmqpXpLan7"
          target="_blank"
          className="flex-row"
        >
          Join Now
        </a>
      </div>
    </Container>
  );
}
