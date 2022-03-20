import styled from "styled-components";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { Card } from "../../../components/Cards/testimonial_card";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { next, prev } from "../../../utils/carousel";
import { TestimonialData } from "./data";

const Container = styled.div`
  background: #fafafa 0% 0% no-repeat padding-box;
  padding: 4rem 0;
  >div:nth-child(1) {
    align-items: center;
  }

  .testimonials-header-container {
    flex-shrink: 0;
    width: 20%;
    h3 {
      margin-bottom: 1rem;
    }
  }

  .testimonials-slider-container {
    flex: 1;
    padding-left: 2rem;
    overflow: hidden;
  }

  .testimonials-slider-arrow-container {
    margin-top: 20px;
    button {
      width: 50px;
      height: 45px;
      border: none;
      outline: none;
      background-color: var(--link);
      box-shadow: 0px 3px 5px #0000001a;
      transition: all 200ms ease;
      opacity: 0.8;
      cursor: pointer;
      svg {
        fill: var(--white);
      }
    }
    >button:nth-child(1) {
      border-radius: 60px 0px 60px 60px;
      margin-right: 5px;
    }
    >button:nth-child(2) {
      border-radius: 0px 60px 60px 60px;
    }
    button:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 949px) {
    .testimonials-header-container {
      width: 100%;
      h3 {
        text-align: center;
      }
      p {
        text-align: center;
        border: none;
        padding: 0;
      }
    }
    .testimonials-slider-container {
      width: 100%;
      padding-left: 0;
    }
    .testimonials-slider-arrow-container {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <Container className="main-container">
      <div className="container split-2">
        <div className="testimonials-header-container">
          <h3>TESTIMONIALS</h3>
          <p className="subtopic-description">Here's what our community have to say about us.</p>
        </div>
        <div className="testimonials-slider-container">
          <div className="flex-row">
            <Card {...TestimonialData[active]}/>
            <Card {...TestimonialData[(active+1)%TestimonialData.length]}/>
          </div>
          <div className="testimonials-slider-arrow-container">
              <button onClick={() => setActive((active-1 + TestimonialData.length)%TestimonialData.length)}>
                <ArrowBack />
              </button>
              <button onClick={() => setActive((active+1)%TestimonialData.length)}>
                <ArrowForward />
              </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
