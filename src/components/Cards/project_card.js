import { Avatar } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getContributors } from "../../utils/getContributors";

const Container = styled.div`
  position: relative;
  z-index: 100;
  width: min(100%, 22rem);
  height: 16rem;
  border: 1px solid #ffffff1a;
  border-radius: 8px;
  transition: all 500ms ease;
  padding: 2rem;
  cursor: pointer;
  background: ${({ focused }) =>
    focused ? "#ffffff0d 0% 0% no-repeat padding-box" : ""};
  box-shadow: ${({ focused }) => (focused ? "0px 3px 15px #ffffff1a" : "")};
  border: ${({ focused }) => (focused ? "1px solid #ffffff1a" : "")};

  .project-card-heading {
    font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.18px;
    margin-bottom: 1rem;
  }

  .project-card-description {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.16px;
    color: #fff;
  }

  .project-card-contributer {
    margin-top: auto;
    align-items: center;
  }

  .project-card-avatar {
    margin-right: 10px;
  }

  .project-more-avatar {
    font-size: 0.8rem;
    color: #fff;
  }
`;

export const Card = ({ projectName, projectDescription }) => {
  const [focused, setFocused] = useState(false);
  const { contributors } = useSelector((state) => state.contributor);
  const contributorLists = getContributors(contributors, projectName);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseExit = () => {
    setFocused(false);
  };

  return (
    <Container
      className="flex-column"
      focused={focused}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="project-card-heading">{projectName}</div>
      <div className="project-card-description">{projectDescription}</div>
      <div className="project-card-contributer flex-row">
        {contributorLists.length > 0 && (
          <Avatar
            className="project-card-avatar"
            src={contributorLists[0].avatar}
            alt={contributorLists[2].username}
          />
        )}
        {contributorLists.length > 1 && (
          <Avatar
            className="project-card-avatar"
            src={contributorLists[1].avatar}
            alt={contributorLists[2].username}
          />
        )}
        {contributorLists.length > 2 && (
          <Avatar
            className="project-card-avatar"
            src={contributorLists[2].avatar}
            alt={contributorLists[2].username}
          />
        )}
        {contributorLists.length > 3 && (
          <div className="project-more-avatar">{`+ ${
            contributorLists.length - 3
          } more`}</div>
        )}
      </div>
    </Container>
  );
};
