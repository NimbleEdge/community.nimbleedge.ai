import styled from "styled-components";
import PATH from "../../assets/images/joinus-path.png";

const Container = styled.div`
  width: min(100%, 23rem);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000008;
  border: 1px solid #00000005;
  border-radius: 20px;
  padding: 2rem;
  align-items: flex-start;
  div:nth-child(1) {
    width: 100%;
    margin-bottom: 1rem;
    img {
      height: ${({ imageHeight }) => imageHeight};
      width: ${({ imageWidth }) => imageWidth};
    }
  }
  div:nth-child(2) {
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 900;
  }
  div:nth-child(3) {
    width: 100%;
    font-size: 1rem;
    text-align: left;
  }
  .joinus-card-highlight {
    font-weight: bold;
  }

  @media only screen and (max-width: 949px) {
    margin-bottom: 2rem;
  }
`;

export const Card = ({
  description,
  image,
  highlight,
  title,
  imageWidth,
  imageHeight,
}) => {
  return (
    <Container
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      className="flex-column"
    >
      <div>
        <img src={image} alt="card image" />
      </div>
      <div>{title}</div>
      <div>
        {description} <span className="joinus-card-highlight">{highlight}</span>
      </div>
    </Container>
  );
};
