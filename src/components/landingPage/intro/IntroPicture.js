import styled from "styled-components";
import INTRO from "../../../assets/images/landing-page.png";

const Image = styled.div`
    width: 40vw;
    img {
        width: 40vw;
        height: 85vh;
    }
`;

export default function IntroPicture(props) {
    return <Image>
        <img src={INTRO} alt="landing page image"/>
    </Image>
}