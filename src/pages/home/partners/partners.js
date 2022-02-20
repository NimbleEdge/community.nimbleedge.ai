import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HARVARD from "../../../assets/images/harvard_logo.png";
import IITK_LOGO from "../../../assets/images/iitk_logo.png";
import MIT_LOGO from "../../../assets/images/mit_logo.png";
import LPU_LOGO from "../../../assets/images/lpu_logo.png";

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  padding: 5vh 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa 0% 0% no-repeat padding-box;

  .partner-heading {
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: 0.36px;
    margin-bottom: 2rem;
  }

  .partner-container {
    width: 100%;
    height: 60%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 1rem #0000000a;
    border-radius: 0.6rem;
    padding: 0 3rem;

    .slick-slider {
      margin-top: 2rem;
    }

    .slick-dots {
      margin-top: 2rem;
      bottom: -4rem !important;
    }

    .slick-dots li button:before {
      font-size: 1rem;
      color: #c93418;
    }

    .slick-dots li.slick-active button:before {
      color: #c93418;
    }
  }
`;

const Slide = styled.div`
  img {
    margin-left: auto;
    margin-right: auto;
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Partners() {
  return (
    <Container>
      <div className="partner-heading">Our Partners</div>
      <div className="partner-container">
        <Slider dots={true} {...settings}>
          <Slide>
            <img src={HARVARD} width={"250"} />
          </Slide>
          <Slide>
            <img src={IITK_LOGO} width={"100"} />
          </Slide>
          <Slide>
            <img src={MIT_LOGO} width={"200"} />
          </Slide>
          <Slide>
            <img src={LPU_LOGO} width={"200"} />
          </Slide>
          <Slide>
            <img src={MIT_LOGO} width={"200"} />
          </Slide>
          <Slide>
            <img src={LPU_LOGO} width={"200"} />
          </Slide>
        </Slider>
      </div>
    </Container>
  );
}
