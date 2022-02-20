import styled from "styled-components";

const Container = styled.div`
  flex-shrink: 0;
  width: 45%;
  height: 70%;
  align-self: center;

  div:nth-child(1) {
    letter-spacing: 0.48px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #c93418;
    margin-bottom: 1rem;
  }

  div:nth-child(2) {
    letter-spacing: 2.55px;
    font-size: 3.3rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 2rem;
  }

  div:nth-child(3) {
    width: 65%;
    border-left: 5px solid #323568;
    border-radius: 4px;
    font-size: 1rem;
    letter-spacing: 0.16px;
    color: #000000;
    padding-left: 2rem;
    margin-bottom: 3rem;
  }

  a:nth-child(4) {
    background-color: #c93418;
    width: 9rem;
    height: 3rem;
    border: none;
    border-radius: 60px 60px 0px 60px;
    box-shadow: 0px 8px 10px #00000033;
    color: #fff;
    letter-spacing: 0.16px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export default function HeaderText(props) {
  return (
    <Container className="flex-column">
      <div>CONNECT, NETWORK AND GROW</div>
      <div>Join the Revolution Towards The Edge</div>
      <div>
        Foreground for the Pioneers to meet, greet, brainstorm ideas, share
        knowledge, get involved with the projects and do more! Be the change,
        and help bring data to Edge.
      </div>
      <a href="#" className="flex-row">
        Join Us
      </a>
    </Container>
  );
}
