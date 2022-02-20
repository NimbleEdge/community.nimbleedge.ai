import styled from "styled-components";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { Card } from "../../../components/Cards/testimonial_card";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { next, prev } from "../../../utils/carousel";

const Container = styled.div`
  width: 100%;
  height: 65vh;
  background: #fafafa 0% 0% no-repeat padding-box;
  padding: 0 10%;
  align-items: center;
  .testimonial-header-container {
    flex-shrink: 0;
    width: 20%;
    margin-right: 2rem;

    .testimonials-header-text {
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.9px;
      color: #c93418;
      margin-bottom: 1rem;
    }

    .testimonials-headers-description {
      font-size: 1rem;
      text-align: justify;
      border-left: 4px solid #323568;
      border-radius: 4px;
      padding: 0 1.5rem;
    }
  }
  .testimonials-sliders-container {
    flex: 1;
    align-items: flex-end;
    padding: 2rem 0;
    overflow-x: hidden;
  }
  .testimonials-slide-active-container {
    align-items: flex-end;
    .testimonials-card-arrow-container {
      margin-top: 3rem;
      margin-right: 1rem;

      div {
        background: #c93418 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 5px #0000001a;
        transition: all 200ms ease;
        border: none;
        cursor: pointer;
      }

      div:nth-child(1) {
        border-radius: 60px 0px 60px 60px;
        padding: 10px 15px;
        opacity: 1;
        margin-right: 10px;
      }

      div:nth-child(1):hover {
        opacity: 0.8;
      }

      div:nth-child(2) {
        border-radius: 0px 60px 60px 60px;
        padding: 10px 15px;
      }

      div:nth-child(2):hover {
        opacity: 0.8;
      }

      .testimonial-card-arrows {
        fill: #fff;
      }
    }
  }
`;

export default function Testimonials() {
  return (
    <Container className="flex-row">
      <div className="testimonial-header-container flex-column">
        <div className="testimonials-header-text">TESTIMONIALS</div>
        <div className="testimonials-headers-description">
          Lorem Ipsum is simply dummy text of the printing industry.
        </div>
      </div>
      <div className="testimonials-sliders-container flex-row">
        <div className="testimonials-slide-active-container flex-column">
          <Card {...example[0]} />
          <div className="testimonials-card-arrow-container flex-row">
            <div onClick={() => prev(active, example.length, setActive)}>
              <ArrowBack className="testimonial-card-arrows" />
            </div>
            <div onClick={() => next(active, example.length, setActive)}>
              <ArrowForward className="testimonial-card-arrows" />
            </div>
          </div>
        </div>
        {example.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </Container>
  );
}

const example = [
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Sameer Choudhary",
    designation: "Software Engineer",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Bhavy Gandhi",
    designation: "Software Engineer",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Ayush Bansal",
    designation: "Software Engineer",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Sakib Malik",
    designation: "Software Engineer",
  },
  {
    testimonial:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Netram",
    designation: "Software Engineer",
  },
];

// const Container = styled.div`
//   height: 60vh;
//   width: 100vw;
//   background: #FAFAFA 0% 0% no-repeat padding-box;
//   display: flex;
//   flex-direction: row;
//   padding: 0 10vw;
//   z-index: -1;
// `;

// const Greeting = styled.div`
//   width: 20%;
//   display: flex;
//   flex-shrink: 0;
//   flex-direction: column;
//   justify-content: center;
//   margin-right: 2rem;

//   .header {
//     font-weight: 600;
//     font-size: 1.2rem;
//     letter-spacing: 0.18px;
//     color: #C93418;
//     margin-bottom: 1rem;
//   }

//   .description {
//     display: flex;
//     font-size: 1.1rem;
//     text-align: justify;
//     flex-direction: row;
//     border-left: 4px solid #323568;
//     border-radius: 4px;
//     padding: 0 2rem;
//   }
// `;

// const CarouselContainer = styled.div`
//   margin-top: auto;
//   margin-bottom: auto;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   overflow-x: hidden;
//   padding: 10px 0 1rem 10px;

//   .testimonials-active-card {
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;
//     align-items: flex-end;

//     .testimonials-card-arrow-wrapper {
//   margin-top: 1rem;
//   display: flex;
//   margin-right: 1rem;

//   div {
//     background: #C93418 0% 0% no-repeat padding-box;
//     box-shadow: 0px 3px 5px #0000001A;
//     transition: all 200ms ease;
//     border: none;
//     cursor: pointer;
//   }

//   div:nth-child(1) {
//     border-radius: 60px 0px 60px 60px;
//     padding: 10px 15px;
//     opacity: 1;
//     margin-right: 5px;
//   }

//   div:nth-child(1):hover {
//     opacity: 0.8;
//   }

//   div:nth-child(2) {
//     border-radius: 0px 60px 60px 60px;
//     padding: 10px 15px;
//   }

//   div:nth-child(2):hover {
//     opacity: 0.8;
//   }

//   .testimonial-card-arrows {
//     fill: #FFF;
//   }
//     }
//   }
// `;

// export default function Testimonials() {
//   const [active, setActive] = useState(0);
//   const [activeState, setActiveState] = useState({
//     title: "",
//     description: "",
//     image: "",
//     author: "",
//   });

//   useLayoutEffect(() => {
//     example?.forEach((item, index) => {
//       if(index === active) {
//         setActiveState(item);
//         return;
//       }
//     });
//   }, [active]);

//   const getSlides = () => {
//     let slides = [];
//     for(let i = active + 1; i < example.length; i++ ) {
//       let items = example[i];
//       slides.push(
//         <Card
//           key={i}
//           index={i}
//           {...items}
//           setActive={setActive}
//         />
//       );
//     }

//     for(let i = 0; i < active; i++ ) {
//       let items = example[i];
//       slides.push(
//         <Card
//           key={i}
//           index={i}
//           {...items}
//           setActive={setActive}
//         />
//       );
//     }
//     return slides;
//   }

//   return (
//     <Container>
//       <Greeting>
//         <div className="header">TESTIMONIALS</div>
//         <div className="description">Find the most recent information on our products, technology, and events.</div>
//       </Greeting>
//       <CarouselContainer>
//         <div className="testimonials-active-card">
//           <Card
//             index={active}
//             active={true}
//             {...activeState}
//             setActive={setActive}
//           />
//   <div className="testimonials-card-arrow-wrapper">
//     <div onClick={() => prev(active, example.length, setActive)}><ArrowBack className="testimonial-card-arrows"/></div>
//     <div onClick={() => next(active, example.length, setActive)}><ArrowForward className="testimonial-card-arrows"/></div>
//   </div>
//         </div>
//         {getSlides()}
//       </CarouselContainer>
//     </Container>
//   );
// }
