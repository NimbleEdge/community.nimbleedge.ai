import styled from "styled-components";
// import Card from "./BlogCard";
import { useState } from "react";
import { useLayoutEffect } from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { next, prev, updateCarouselSlides } from "../../../utils/carousel";
import { Card } from "../../../components/Cards/blog_card";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: #fafafa 0% 0% no-repeat padding-box;
  padding: 0 10%;

  .blogs-header-container {
    flex-shrink: 0;
    margin-right: 2rem;
    align-self: center;
    width: 20%;

    .blogs-header-title {
      font-weight: 600;
      font-size: 1.2rem;
      letter-spacing: 0.9px;
      color: #c93418;
      margin-bottom: 1rem;
    }

    .blogs-header-description {
      font-size: 1rem;
      text-align: justify;
      border-left: 4px solid #323568;
      border-radius: 4px;
      padding: 0rem 1.5rem;
    }
  }

  .blogs-slide-container {
    flex: 1;
    align-self: center;
    padding: 10% 0;
    overflow-x: hidden;
    align-items: flex-end;
    transition: all 2s ease;

    .blogs-slide-active-card {
      .blogs-arrow-wrapper {
        align-self: flex-end;
        margin-top: 3rem;
        margin-right: 1rem;

        div {
          background: #c93418 0% 0% no-repeat padding-box;
          box-shadow: 0px 3px 5px #0000001a;
          transition: all 200ms ease;
          border: none;
          cursor: pointer;
        }

        .blogs-card-arrow {
          fill: #fff;
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
      }
    }
  }
`;

export default function Blogs() {
  const [activeIndex, setActive] = useState(0);
  const [isMove, setIsMove] = useState(true);
  const [slides, setSlide] = useState([]);

  const handlePrev = () => {
    prev(activeIndex, example.length, setActive);
  };

  const handleNext = () => {
    next(activeIndex, example.length, setActive);
  };

  useEffect(() => {
    updateCarouselSlides({
      activeIndex,
      Card,
      length: example.length,
      data: example,
      setActive,
      isMove,
      setSlide,
    });
  }, [activeIndex]);

  return (
    <Container className="flex-row">
      <div className="blogs-header-container">
        <div className="blogs-header-title">BLOGS</div>
        <div className="blogs-header-description">
          Find the most recent information on our products, technology, and
          events.
        </div>
      </div>
      <div className="blogs-slide-container flex-row">
        <div className="blogs-slide-active-card flex-column">
          <Card
            key={activeIndex}
            activeSlide={true}
            {...example[activeIndex]}
            isMove={isMove}
          />
          <div className="blogs-arrow-wrapper flex-row">
            <div onClick={handlePrev}>
              <ArrowBack className="blogs-card-arrow" />
            </div>
            <div onClick={handleNext}>
              <ArrowForward className="blogs-card-arrow" />
            </div>
          </div>
        </div>
        {slides}
      </div>
    </Container>
  );
}

const example = [
  {
    title: "Lorem Ipsum is dummy text title",
    description:
      "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry.",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Lorem Ipsum is dummy text title",
    description:
      "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry.",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80",
  },
  {
    title: "Lorem Ipsum is dummy text title",
    description:
      "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry.",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1533167649158-6d508895b680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    title: "Lorem Ipsum is dummy text title",
    description:
      "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry.",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1525431836161-e40d6846e656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Lorem Ipsum is dummy text title",
    description:
      "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum is simply dummy text of the printing industry.",
    author: "Lorem Ipsum",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
//   flex-shrink: 0;
//   display: flex;
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
//   padding: 0 0 0 1rem;

//   .blogs-active-card {
//     width: 22rem;
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;
//     align-items: flex-end;
//     margin-left: 1.5rem;

// .blogs-arrow-wrapper {
//   display: flex;
//   margin-right: 1.3rem;

//   div {
//     background: #C93418 0% 0% no-repeat padding-box;
//     box-shadow: 0px 3px 5px #0000001A;
//     transition: all 200ms ease;
//     border: none;
//     cursor: pointer;
//   }

//   .blogs-card-arrow {
//     fill: #FFF;
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
// }
//   }
// `;

// export default function BlogComponent() {
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
//     for(let i = active + 1; i < example.length; i++) {
//       let items = example[i];
//       slides.push(
//         <Card
//           key={i}
//           {...items}
//           index={i}
//           setActive={setActive}
//         />);
//     }

//     for(let i = 0; i < active; i++) {
//       let items = example[i];
//       slides.push(
//         <Card
//           key={i}
//           {...items}
//           index={i}
//           setActive={setActive}
//         />);
//     }
//     return slides;
//   }

//   return (
//     <Container>
//       <Greeting>
//         <div className="header">BLOGS</div>
//         <div className="description">Find the most recent information on our products, technology, and events.</div>
//       </Greeting>
//       <CarouselContainer>
//         <div className="blogs-active-card">
//           <Card
//             {...activeState}
//             active={true}
//             index={active}
//             setActive={setActive}
//             />
//           <div className="blogs-arrow-wrapper">
//             <div onClick={() => prev(active, example.length, setActive)}><ArrowBack className="blogs-card-arrow"/></div>
//             <div onClick={() => next(active, example.length, setActive)}><ArrowForward className="blogs-card-arrow" /></div>
//           </div>
//         </div>
//         {getSlides()}
//       </CarouselContainer>
//     </Container>
//   );
// }
