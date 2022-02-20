import styled from "styled-components";
// import Card from "../../Elements/VisionCard";
import INTERNET from "../../../assets/images/internet.svg";
import CLOUD from "../../../assets/images/cloud.svg";
import EARTH from "../../../assets/images/lock-earth.svg";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { Card } from "../../../components/Cards/vission_card";

const Container = styled.div`
  background-color: #fafafa;
  padding: 10vh 10%;
  align-items: center;
  positon: relative;
  z-index: 10;

  .vissions-header {
    color: #c93418;
    letter-spacing: 0.9px;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .vissions-subheading {
    text-align: center;
    width: 100%;
    letter-spacing: 0.16px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .vissions-card-container {
    width: 100%;
    justify-content: space-evenly;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Data = [
  {
    image: INTERNET,
    heading: "Federated Learning",
    description:
      "We use federated learning, a privacy enhancing technique that permits model improvisation without the data ever leaving your device or being sent to the server. Your data always reside safely in your device.",
  },
  {
    image: CLOUD,
    heading: "Distributed Edge Computating",
    description:
      "Helps us minimize the need for remote data centers by bringing computation and data storage closer, improving latency and bandwidth. Thus, providing faster computation.",
  },
  {
    image: EARTH,
    heading: "Differential Privacy",
    description:
      "A privacy-enhancing technique that adds a regulated amount of randomness to the data while also allowing the analysts to extract valuable information without disclosing personal information.",
  },
];

export default function Vission(props) {
  return (
    <Container id="mission-vission" className="flex-column">
      <div className="vissions-header">MISSION {"&"} VISION</div>
      <div className="vissions-subheading">
        <div>Leading the movement towards Edge Computing.</div>
        <div>
          Bringing Private and Personalized AI directly to the user devices.
        </div>
      </div>
      <HorizontalLine color="#323568" width="4rem" marginBottom="2rem" />
      <div className="vissions-card-container flex-row">
        {Data?.map((item, idx) => (
          <Card key={idx} index={idx} {...item} />
        ))}
      </div>
      {/* <CardWrapper>
      {Data?.map((item, idx) => <Card
        key={idx}
        idx={idx}
        image={item.image}
        heading={item.heading}
        description={item.description}
        tags={item.tags}
      />)}
    </CardWrapper> */}
    </Container>
  );
}
