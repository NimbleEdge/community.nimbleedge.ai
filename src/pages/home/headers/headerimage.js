import styled from "styled-components";
import INTRO from "../../../assets/images/landing-page.png";

const Image = styled.div`
  width: 60%;
  z-index: -1;
  justify-content: flex-end;
  img {
    width: 60rem;
    height: 50rem;
  }
`;

export default function HeaderImage(props) {
  return (
    <Image className="flex-row">
      <img src={INTRO} alt="landing page image" />
    </Image>
  );
}
