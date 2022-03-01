import styled from "styled-components";
import { Card } from "../Cards/project_card";
import DOWNLOAD from "../../assets/images/download.png";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 5rem;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;

  .project-image {
    width: 20rem;
    height: 18rem;
    background: transparent url(${({ illustrationImage }) => illustrationImage})
      0% 0% no-repeat padding-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media screen and (max-width: 949px) {
    padding: 1rem 0;
  }
`;

export const Slide = ({
  projectName,
  projectDescription,
  contributorLists,
  illustrationImage,
}) => {
  const { screen } = useSelector((state) => state.screen);
  return (
    <Container className="flex-row" illustrationImage={illustrationImage}>
      <Card {...{ projectName, projectDescription, contributorLists }} />
      {screen === "BIG_SCREEN" && <div className="project-image"></div>}
    </Container>
  );
};
