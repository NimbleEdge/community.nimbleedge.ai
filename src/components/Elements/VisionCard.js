import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardWrapper = styled.div`
  width: 22rem;
  background-color: #ffffff;
  height: 20rem;
  border: 1px solid #00000005;
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 500ms ease;

  :hover {
    box-shadow: 0px 10px 10px #0000000f;
  }
`;

const Image = styled.img`
  background-color: #ebecff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 2vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
`;

const Heading = styled.div`
  font-family: Open Sans;
  font-weight: Bold;
  font-size: 1vw;
  letter-spacing: 0.18px;
  color: #000000;
  font-style: normal;
  margin-bottom: 1vh;
`;

const Description = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.14px;
  color: #000000;
  text-align: justify;
  font-size: 1rem;
  margin-bottom: 1vh;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  span {
    font-weight: Bold;
    letter-spacing: 0px;
    color: #000000;
    margin-right: 0.5vw;
    font-size: 0.7vw;
  }
`;

const ReadMore = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  transition: all 500ms ease;
  -webkit-transition: background-color 500ms ease-out;
  -ms-transition: background-color 500ms ease-out;
  span {
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0px;
    font-size: 0.8rem;
    margin-right: 5px;
    color: #000;
  }

  svg {
    width: 1rem;
    fill: #000;
  }
`;

export default function Card({ idx, image, heading, description, tags }) {
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    setFocused(true);
  };

  const handleMouseExit = () => {
    setFocused(false);
  };

  return (
    <CardWrapper
      focused={focused}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <Image src={image} />
      <Body>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        <Tags>
          {tags?.map((tag, index) => (
            <span key={index}>{`#${tag}`}</span>
          ))}
        </Tags>
      </Body>
      {focused && (
        <ReadMore href="#" focused={focused}>
          <span>Read More</span>
          <ArrowForwardIcon color="#fff" fontSize="small" />
        </ReadMore>
      )}
    </CardWrapper>
  );
}
