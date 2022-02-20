import styled from "styled-components";

const Container = styled.div`
  width: 20rem;
  height: 24rem;
  flex-shrink: 0;
  margin: 2.7rem;
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
`;

export const Card = ({}) => {
  return (
    <Container
      className="flex-column"
      image={
        "https://static01.manyavar.com/uploads/dealimages/11389/listimages/WST0011-339_KSS_7434.webp"
      }
    >
      <div className="aboutus-team-placeholder-for-glass"></div>
      <div className="aboutus-team-member-details">
        <div>Ayush Banshal</div>
        <div>CTO {"&"} Founder</div>
      </div>
    </Container>
  );
};
