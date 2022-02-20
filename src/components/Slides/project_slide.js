import styled from "styled-components";
import { Card } from "../Cards/project_card";
import DOWNLOAD from "../../assets/images/download.png";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  padding: 0 10%;
  align-items: center;
  justify-content: space-evenly;

  .project-image {
    width: 20rem;
    height: 18rem;
    background: transparent url(${({ illustrationImage }) => illustrationImage})
      0% 0% no-repeat padding-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Slide = ({
  projectName,
  projectDescription,
  contributorLists,
  illustrationImage,
}) => {
  return (
    <Container className="flex-row" illustrationImage={illustrationImage}>
      <Card {...{ projectName, projectDescription, contributorLists }} />
      <div className="project-image"></div>
    </Container>
  );
};
