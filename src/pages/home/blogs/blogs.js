import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'; 
import { useState } from "react";
import { useLayoutEffect } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { next, prev, updateCarouselSlides } from "../../../utils/carousel";
import { Card } from "../../../components/Cards/blog_card";
import { useEffect } from "react";
import {Data} from "../../blogs/data";
import { useRef } from "react";
const Container = styled.div`
  width: 100%;
  padding: 4rem 0;
  >div:nth-child(1) {
    align-items: center;
  }
  background: #fafafa 0% 0% no-repeat padding-box;
  .blog-header-container {
    flex-shrink: 0;
    width: 20%;
    h3 {
      margin-bottom: 1rem;
    }
  }
  
  .blog-slider-container {
    flex: 1;
    padding-left: 2rem;
    >div:nth-child(1) {
      flex-wrap: wrap;
    }
  }

  .blogs-card-container {
    display: flex;
  }

  .blogs-slider-arrow-container {
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

  .blog-slider-slick-container {
    
  }

  @media screen and (max-width: 949px) {
    .blog-header-container {
      width: 100%;
      h3 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
      p {
        text-align: center;
        border: none;
        padding: 0;
      }
      margin-bottom: 2rem;
    }
    .blog-slider-container {
      width: 100%;
      padding-left: 0;
    }
    .blogs-slider-arrow-container {
      width: 100%;
      padding: 0;
      margin-left: 0;
      display: flex;
      justify-content: center;
    }
  }
`;

export default function Blogs() {
  const [activeIndex, setActive] = useState(0);
  const handlePrev = () => {
    setActive((activeIndex-1)%Data.length);
  };

  const handleNext = () => {
    setActive((activeIndex+1)%Data.length)
  };


  return (
    <Container id="blogs" className="main-container">
      <div className="container split-2">
        <div className="flex-column blog-header-container">
          <h3>BLOGS</h3>
          <p className="subtopic-description">
            Find the most recent information on our products, technology, and events.
          </p>
        </div>
        <div className="blog-slider-container flex-column">
          <div className="flex-row">
            {Data.map((item, idx) => <Card key={idx} {...item}/>)}
          </div>
          {/* <div className="blogs-slider-arrow-container">
              <button ref={prevRef}>
                <ArrowBack />
              </button>
              <button ref={nextRef}>
                <ArrowForward />
              </button>
          </div> */}
        </div>
      </div>
    </Container>
  );
}