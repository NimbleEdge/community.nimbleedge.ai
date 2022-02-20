import styled from "styled-components";
import BACKGROUND from "../../../assets/images/join-us-background.png";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  padding: 0 10%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  align-items: center;
  justify-content: center;
  div:nth-child(1) {
    font-weight: 900;
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
  div:nth-child(2) {
    font-size: 1rem;
    width: 30%;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  div:nth-child(3) {
    a {
      width: 10rem;
      height: 3rem;
      cursor: pointer;
      text-decoration: none;
      align-items: center;
      justify-content: center;
    }
    a:nth-child(1) {
      margin-right: 4rem;
      background: #c93418 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border-radius: 60px 60px 0px 60px;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
    }
    a:nth-child(2) {
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000033;
      border: 1px solid #c93418;
      border-radius: 60px 60px 60px 0px;
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
export default function Volunteer() {
  return (
    <Container id="volunteer" className="flex-column" image={BACKGROUND}>
      <div>Start Contributing</div>
      <div>
        Join us in working towards privacy-preserving decentralized Edge
        computation at a fraction of the cost of cloud computing, with no data
        ever leaving your devices.
      </div>
      <div className="flex-row">
        <a
          href="https://nimbleedge.ai/discord"
          target="_blank"
          className="flex-row"
        >
          Join Now
        </a>
        <a className="flex-row">Write for us</a>
      </div>
    </Container>
  );
}
