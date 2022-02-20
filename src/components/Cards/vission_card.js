import { useState } from "react";
import styled from "styled-components";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Container = styled.div`
  background-color: #fff;
  width: 23rem;
  height: 23rem;
  border: 1px solid #00000005;
  border-radius: 16px;
  padding: 2.5rem;

  :hover {
    box-shadow: 0px 10px 10px #0000000f;
  }

  .vission-card-image {
    background-color: #ebecff;
    width: 60px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .vission-card-body {
    .vission-card-body-header {
      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 0.18px;
      margin-bottom: 5px;
    }

    .vission-card-body-description {
      font-size: 1rem;
      letter-spacing: 0.18px;
    }
  }

  .vission-card-footer {
    align-self: flex-end;
    margin-top: auto;
    text-decoration: none;
    align-items: center;

    div:nth-child(1) {
      font-size: 0.8rem;
      margin-right: 5px;
      color: #000;
    }

    .vission-card-read-more-icon {
      width: 1rem;
      fill: #000;
    }
  }
`;

export const Card = ({ index, image, heading, description }) => {
  const [focused, setFocused] = useState(false);
  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseExit = () => {
    setFocused(false);
  };

  return (
    <Container
      className="flex-column"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <img className="vission-card-image" src={image} alt="card image" />
      <div className="vission-card-body">
        <div className="vission-card-body-header">{heading}</div>
        <div className="vission-card-body-description">{description}</div>
      </div>
      {focused && (
        <a href="/" className="vission-card-footer flex-row">
          <div>Read more</div>
          <ArrowForward className="vission-card-read-more-icon" />
        </a>
      )}
    </Container>
  );
};
