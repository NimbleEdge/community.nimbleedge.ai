import styled from "styled-components";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { Card } from "../../../components/Cards/testimonial_card";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { next, prev } from "../../../utils/carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import DIVYANSHU from "../../../assets/images/team/Divyanshu_.jpg";
import ARAVIND from "../../../assets/images/team/Aravind.jpeg";

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
  }
`;

const setting = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  swipe: false,
}

export default function Testimonials() {
  return (
    <Container className="main-container">
      <div className="container split-2">
        <div className="testimonials-header-container">
          <h3>TESTIMONIALS</h3>
          <p className="subtopic-description">Here's what our community have to say about us.</p>
        </div>
        <div className="testimonials-slider-container">
          <Slider {...setting}>
            {example.map((item, index) => (
              <Card key={index} {...item}/>
            ))}
          </Slider>
          <div className="testimonials-slider-arrow-container">
              <button>
                <ArrowBack />
              </button>
              <button>
                <ArrowForward />
              </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const example = [
  {
    testimonial:
      "This is the place to go if you're interested in AI, Privacy, or Edge Computing in particular. The exposure to tech stacks and support at NimbleEdge is unparalleled. Talking about support, I will always be grateful to Varun, Ramesht, and Ayush for their guidance.",
    image: DIVYANSHU,
    author: "Divyanshu",
    designation: "",
  },
  {
    testimonial:
      "A great place to be, if you want to learn a lot and interact with a talented team",
    image: ARAVIND,
    author: "Aravind",
    designation: "Software Engineer, ByteDance",
  }
];