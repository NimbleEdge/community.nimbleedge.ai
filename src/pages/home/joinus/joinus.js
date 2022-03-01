import styled from "styled-components";
import { Card } from "../../../components/Cards/joinus_card";
import MEETING_ROOM from "../../../assets/images/meeting_room_black.svg";
import COMMUNITY from "../../../assets/images/community.svg";
import SCHOOL_BLACK from "../../../assets/images/school_black.svg";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import PATH from "../../../assets/images/joinus-path.png";

const Container = styled.div`
  div:nth-child(1) {
    align-items: center;
    h3 {
      margin-bottom: 1rem;
    }
    p {
      text-align: center;
    }
  }

  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 2rem 0;

  .joinus-card-container {
    width: 90%;
    justify-content: space-between;
  }

  @media only screen and (max-width: 949px) {
    .joinus-card-container {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    background-image: none;
  }
`;

export default function JoinUs() {
  return (
    <Container className="main-container" imagePath={PATH}>
      <div className="split-column container">
        <h3>WHY JOIN US?</h3>
        <p>
          Whether you’re a seasoned professional or just starting out, there's
          always something to get involved with. Make a suggestion, report a
          bug, write documentation, contribute code to a project or just ask
          questions. At NimbleEdge, we believe that hands-on learning and
          participation are the most effective ways to learn and grow together.
          With that in mind, we’ve come up with the following activities to
          build strong connections and increase community engagement.
        </p>
        <HorizontalLine
          color="#323568"
          width="4rem"
          marginBottom="2rem"
          marginTop="1rem"
        />
        <div className="joinus-card-container flex-row">
          <Card
            title={"Jam Sessions"}
            description={
              "Weekly and Biweekly jam sessions for you to learn directly from the team:"
            }
            highlight={"Live Coding Jams, Q&A Jams, Random Jams"}
            image={MEETING_ROOM}
            imageHeight={"2rem"}
            imageWidth={"2rem"}
          />
          <Card
            title={"Community Talks"}
            description={
              "Anything from general community talks to topic-specific chats. Join us for an in-depth fireside chat."
            }
            image={COMMUNITY}
            imageHeight={"2.2rem"}
            imageWidth={"2.2rem"}
          />
          <Card
            title={"Study Clubs"}
            description={
              "Anything from general community talks to topic-specific chats. Join us for an in-depth fireside chat."
            }
            image={SCHOOL_BLACK}
            imageHeight={"2.5rem"}
            imageWidth={"2.5rem"}
          />
        </div>
      </div>
    </Container>
  );
}
