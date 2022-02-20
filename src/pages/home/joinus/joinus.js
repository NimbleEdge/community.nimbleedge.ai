import styled from "styled-components";
import { Card } from "../../../components/Cards/joinus_card";
import MEETING_ROOM from "../../../assets/images/meeting_room_black.svg";
import COMMUNITY from "../../../assets/images/community.svg";
import SCHOOL_BLACK from "../../../assets/images/school_black.svg";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import PATH from "../../../assets/images/joinus-path.png";

const Container = styled.div`
  width: 100%;
  height: 65vh;
  padding: 0 10%;
  align-items: center;
  justify-content: center;
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  .joinus-header {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.9px;
    color: #c93418;
    margin-bottom: 1rem;
  }

  .joinus-description {
    width: 100%;
    font-size: 1rem;
    letter-spacing: 0.16px;
    line-height: 1.4rem;
    color: #000;
    text-align: center;
    margin-bottom: 1rem;
  }

  .joinus-card-container {
    width: 90%;
    justify-content: space-between;
  }
`;

export default function JoinUs() {
  return (
    <Container className="flex-column" imagePath={PATH}>
      <div className="joinus-header">WHY JOIN US?</div>
      <div className="joinus-description">
        Whether you’re a seasoned professional or just starting out, there`s
        always something to get involved with. Make a suggestion, report a bug,
        write documentation, contribute code to a project or just ask questions.
        At NimbleEdge, we believe that hands-on learning and participation are
        the most effective ways to learn and grow together. With that in mind,
        we’ve come up with the following activities to build strong connections
        and increase community engagement.
      </div>
      <HorizontalLine color="#323568" width="4rem" marginBottom="2rem" />
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
    </Container>
  );
}
