import styled from "styled-components";
import PATH from "../../assets/images/joinus-path.png";

const Container = styled.div`
  width: 22rem;
  height: 20rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000008;
  border: 1px solid #00000005;
  border-radius: 1.5rem;
  padding: 3rem 2rem 1rem;

  .joinus-card-image {
    align-self: flex-start;
    height: ${({ imageHeight }) => imageHeight};
    width: ${({ imageWidth }) => imageWidth};
  }

  .joinus-card-title {
    height: 30%;
    font-weight: Bold;
    font-size: 1.3rem;
    letter-spacing: 0.18px;
    text-align: left;
    align-items: center;
  }

  .joinus-card-description {
    width: 100%;
    font-size: 0.95rem !important;
    letter-spacing: 0.14px;
    text-align: justify;
  }

  .joinus-card-highlight {
    font-weight: bold;
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
      <img src={image} alt="card image" className="joinus-card-image" />
      <div className="joinus-card-title flex-row">{title}</div>
      <div className="joinus-card-description">
        {description} <span className="joinus-card-highlight">{highlight}</span>
      </div>
    </Container>
  );
};
