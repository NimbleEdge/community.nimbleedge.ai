import styled from "styled-components";
import { HorizontalLine } from "../../../components/horizontalline/horizontalline";
import { useEffect, useState } from "react";
import { Slide } from "../../../components/Slides/project_slide";
import LAPTOP1 from "../../../assets/images/laptop2.svg";
import MOBILE from "../../../assets/images/mobile.svg";
import LAPTOP from "../../../assets/images/project-laptop.svg";

const Container = styled.div`
  position: relative;
  z-index: 100;
  background: transparent
    linear-gradient(308deg, #45108a 2%, #3d065f 29%, #12054e 100%, #10054d 100%)
    0% 0% no-repeat padding-box;
  align-items: center;
  height: 100%;

  .project-randow-placeholer {
    width: 100%;
    height: 20vh;
  }

  .project-heading-wrapper {
    padding-top: 10vh;
    align-items: center;
    width: 100%;
  }

  .fixed-project-navbar-wrapper {
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .relative-project-navbar-wrapper {
    position: relative;
  }

  .project-heading {
    color: #c93418;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.9px;
    margin-bottom: 1rem;
  }

  .project-subheading {
    color: #fff;
    font-size: 1rem;
    letter-spacing: 0.16px;
    margin-bottom: 1.5rem;
  }

  .projects-wrapper {
    width: 100%;
  }
`;

const SlideData = [
  {
    projectName: "Federated Archives",
    projectDescription:
      "A personalized federated archive to search for research papers based on your profile, prior usage history, paper similarities and much more.",
    contributorLists: [],
    illustrationImage: LAPTOP1,
  },
  {
    projectName: "RecoEdge",
    projectDescription:
      "Deploy Recommendation Engines with Edge Computing. A one-stop solution for building and training.",
    contributorLists: [
      "https://avatars.githubusercontent.com/u/18126069?v=4",
      "https://avatars.githubusercontent.com/u/22546448?v=4",
      "https://avatars.githubusercontent.com/u/36106177?v=4",
      "https://avatars.githubusercontent.com/u/53843818?v=4",
      "https://avatars.githubusercontent.com/u/16060070?s=60&v=4",
      "https://avatars.githubusercontent.com/u/56366274?s=60&v=4",
      "https://avatars.githubusercontent.com/u/25344287?s=60&v=4",
      "https://avatars.githubusercontent.com/u/78371148?s=60&v=4",
      "https://avatars.githubusercontent.com/u/72168180?s=60&v=4",
      "https://avatars.githubusercontent.com/u/88205739?s=60&v=4",
      "https://avatars.githubusercontent.com/u/57002384?s=60&v=4",
    ],
    illustrationImage: MOBILE,
  },
  {
    projectName: "NimbleNet",
    projectDescription:
      "Lorem Ipsum is simply dummy text of the printing industry.",
    contributorLists: [],
    illustrationImage: LAPTOP,
  },
];

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
    <Container id="project" className="flex-column">
      <div className={`flex-column project-heading-wrapper`}>
        <div className="project-heading">FEATURED PROJECTS</div>
        <div className="project-subheading">
          Check out our featured projects to find a good fit and start
          contributing!.
        </div>
        <HorizontalLine color="#D9F1FF" width="4rem" marginBottom="2rem" />
      </div>
      <div className="flex-column projects-wrapper">
        {SlideData?.map((item, idx) => (
          <Slide key={idx} {...item} />
        ))}
      </div>
    </Container>
  );
}
