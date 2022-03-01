import { useState } from "react";
import styled from "styled-components";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Container = styled.div`
  background-color: #fff;
  width: min(100%, 23rem);
  border: 1px solid #00000005;
  padding: 2.5rem;
  border-radius: 16px;

  div:nth-child(1) {
    width: 100%;
    img {
      background-color: #ebecff;
      width: 60px;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
  }

  div:nth-child(2) {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  div:nth-child(3) {
    width: 100%;
    text-align: left;
  }

  @media only screen and (max-width: 949px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
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
      <div>
        <img src={image} alt="image" />
      </div>
      <div>{heading}</div>
      <div>{description}</div>
    </Container>
  );
};
