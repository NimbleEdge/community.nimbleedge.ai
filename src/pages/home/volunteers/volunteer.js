import styled from "styled-components";
import BACKGROUND from "../../../assets/images/join-us-background.png";

const Container = styled.div`
  padding: 7rem 0;
  div:nth-child(1) {
    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }
    p {
      align-self: center;
      text-align: center;
      width: 40%;
    }
    div {
      margin-top: 2rem;
      justify-content: center;
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
  }

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media only screen and (max-width: 949px) {
    div:nth-child(1) {
      div {
        a:nth-child(1) {
          margin-right: 1rem;
        }
      }
      p {
        width: 100%;
      }
    }
    background-size: cover;
    padding: 5rem 0;
  }
`;
export default function Volunteer() {
  return (
    <Container id="volunteer" className="main-container" image={BACKGROUND}>
      <div className="container split-column">
        <h2>Start Contributing</h2>
        <p>
          Join us in building decentralized edge computing system at a fraction
          of the cloud costs, where no data ever leaves your device.
        </p>
        <div className="flex-row">
          <a
            href="/discord"
            target="_blank"
            className="flex-row"
          >
            Join Now
          </a>
          <a href="https://forms.gle/jNNTYrMfmqpXpLan7" target="_blank" className="flex-row">Write for us</a>
        </div>
      </div>
    </Container>
  );
}
