import styled from "styled-components";
import { Card } from "../../../components/Cards/team_card";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { data } from "../data";

const Container = styled.div`
  padding: 2rem 0;
  > div:nth-child(1) {
    align-items: center;
    h3 {
      text-align: center;
    }
    > div:nth-child(3) {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media screen and (max-width: 949px) {
    > div:nth-child(1) {
      > div:nth-child(3) {
      }
    }
  }
`;

export default function Teams() {
  return (
    <Container className="main-container">
      <div className="container flex-column">
        <h3>Meet our core-team {"&"} featured contributors</h3>
        <HorizontalLine
          width="4rem"
          color="#323568"
          marginBottom="1rem"
          marginTop="1rem"
        />
        <div className="split-2">
          {data.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
