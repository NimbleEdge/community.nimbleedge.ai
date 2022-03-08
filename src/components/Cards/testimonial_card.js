import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
  flex-shrink: 0;
  width: min(100%, 40rem);
  box-shadow: 0px -2px 20px 7px #0000000f;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 2rem 1rem 0;

  .testimonials-card-images-container {
    height: 50%;
    width: 100%;
    align-items: center;
    padding-left: 2rem;

    .testimonials-images {
      width: 9rem;
      height: 9rem;
      justify-content: center;
      border-radius: 50%;
      background-image: url(${({ imageSrc }) => imageSrc});
      bbackground-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .testimonials-author-name-container {
      flex: 1;
      padding: 0 2rem;

      .testimonials-author-name {
        font-weight: 600;
        font-size: 1.3rem;
        color: #000;
      }

      .testiominals-author-designation {
        font-size: 1rem;
      }
    }
  }

  .testimonials-text {
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.16px;
    color: #000;
  }

  @media screen and (max-width: 949px) {
    width: min(90%, 22rem);
    margin: 1rem 1rem;
    .testimonials-card-images-container {
      padding: 0;
      height: 40%;
    }
    .testimonials-author-name-container {
      padding: 0 !important;
      margin: 0;
      margin-top: 0rem;

      div {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const Card = ({
  index,
  active,
  testimonial,
  author,
  image,
  designation,
  setActive,
}) => {
  return (
    <CardContainer imageSrc={image} onClick={() => setActive(index)} className="flex-column">
      <div className="testimonials-card-images-container split-2">
        <div className="testimonials-images flex-row"></div>
        <div className="testimonials-author-name-container">
          <div className="testimonials-author-name">{author}</div>
          <div className="testiominals-author-designation">{designation}</div>
        </div>
      </div>
      <div className="testimonials-text">{testimonial}</div>
    </CardContainer>
  );
};
