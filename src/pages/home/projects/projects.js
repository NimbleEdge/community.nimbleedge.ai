import styled from "styled-components";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { useEffect, useState } from "react";
import { Slide } from "../../../components/Slides/project_slide";
import { PROJECTS } from "./data";

const Container = styled.div`
  padding: 6rem 0 2rem;
  background: transparent
    linear-gradient(308deg, #45108a 2%, #3d065f 29%, #12054e 100%, #10054d 100%)
    0% 0% no-repeat padding-box;
  > div:nth-child(1) {
    align-items: center;
    p {
      color: var(--white);
      text-align: center;
    }
    .home-project-container {
      width: 100%;
    }
  }
`;

export default function Project() {
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1680) {
        // setFixedNavbar(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Container id="project" className="main-container">
      <div className="container flex-column">
        <h3>FEATURED PROJECTS</h3>
        <p>
          Check out our featured projects to find a good fit and start
          contributing!.
        </p>
        <HorizontalLine
          color="#D9F1FF"
          width="4rem"
          marginBottom="1rem"
          marginTop="1rem"
        />
        <div className="home-project-container flex-column">
          {PROJECTS.map((item, idx) => (
            <Slide key={idx} {...item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
