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
        <p>
          Lorem Ipsum is simply a dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>
        <a
          href="https://nimbleedge.ai/discord"
          target="_blank"
          className="flex-row"
        >
          Join Now
        </a>
      </div>
    </Container>
  );
}
