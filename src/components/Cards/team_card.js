import styled from "styled-components";

const Container = styled.div`
  width: min(100%, 20rem);
  height: 24rem;
  flex-shrink: 0;
  margin: 2rem 3rem;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  justify-content: flex-end;

  .aboutus-team-placeholder-for-glass {
    height: 5rem;
    width: 20rem;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.4;
  }
  .aboutus-team-member-details {
    z-index: 100;
    width: 100%;
    align-self: flex-start;
    height: 5rem;
    padding: 1rem;
    color: #000;
    backdrop-filter: blur(37px);
    -webkit-backdrop-filter: blur(37px);
    div:nth-child(1) {
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 0.18px;
    }
    div:nth-child(2) {
      font-size: 0.9rem;
      letter-spacing: 0.14px;
    }
  }
  @media screen and (max-width: 949px) {
    margin: 2rem 0;
  }
`;

export const Card = ({ name, designation, image }) => {
  return (
    <Container className="flex-column" image={image}>
      <div className="aboutus-team-placeholder-for-glass"></div>
      <div className="aboutus-team-member-details">
        <div>{name}</div>
        <div>{designation}</div>
      </div>
    </Container>
  );
};
