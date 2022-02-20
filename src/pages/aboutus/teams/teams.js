import styled from "styled-components";
import { Card } from "../../../components/Cards/team_card";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { data } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5vh 10%;
  align-items: center;
  .aboutus-team-header {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.18px;
    color: #c93418;
    margin-bottom: 1rem;
  }
  .aboutus-team-subheader {
    font-size: 1.2rem;
    letter-spacing: 0.24px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .aboutus-team-members-container {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
  }
`;

export default function Teams() {
  return (
    <Container className="flex-column">
      <div className="aboutus-team-header">OUR TEAM</div>
      <div className="aboutus-team-subheader">
        Meet our core-team {"&"} featured contributors
      </div>
      <HorizontalLine width="4rem" color="#323568" marginBottom="3rem" />
      <div className="aboutus-team-members-container flex-row">
        {data?.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </Container>
  );
}
