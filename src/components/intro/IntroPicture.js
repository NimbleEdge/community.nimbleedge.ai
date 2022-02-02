import styled from "styled-components";
import INTRO from "../../assets/images/landing-page.png";

const Image = styled.div`
    width: 35vw;
    img {
        width: 35vw;
        height: 80vh;
    }
`;

export default function IntroPicture(props) {
    return <Image>
        <img src={INTRO} alt="landing page image"/>
    </Image>
}