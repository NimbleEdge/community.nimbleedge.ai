import styled from "styled-components";
// import Card from "../../Elements/VisionCard";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { Card } from "../../../components/Cards/vision_card";
import { data } from "./data";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: #fafafa;
  z-index: 1;
  padding: 5rem 0 3rem;
  div:nth-child(1) {
    align-items: center;
    h3 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }

  .vision-card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 949px) {
    .vision-card-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default function Vision(props) {
  const { screen } = useSelector((state) => state.screen);
  return (
    <Container id="mission-vision" className="main-container">
      <div className="split-column container">
        <h3>MISSION {"&"} VISION</h3>
        {screen === "MOBILE" ? (
          <p>
            Leading the movement towards Edge Computing. Bringing Private and
            Personalized AI directly to the user devices.
          </p>
        ) : (
          <>
            <p>Leading the movement towards Edge Computing.</p>
            <p>
              Bringing Private and Personalized AI directly to the user devices.
            </p>
          </>
        )}
        <HorizontalLine
          color="#323568"
          width="4rem"
          marginBottom="2rem"
          marginTop="1rem"
        />
        <div className="vision-card-container">
          {data.map((item, idx) => (
            <Card key={idx} idx={idx} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
