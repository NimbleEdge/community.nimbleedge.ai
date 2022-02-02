import styled from "styled-components"
import IntroPicture from "./IntroPicture";
import IntroText from "./IntroText";

const Intro = styled.div`
    height: 90vh;
    padding: 10vh 7vw 0;
    display: flex;
    flex-direction: row;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default function IntroComponent(props) {
    return <Intro>
        <IntroText />
        <IntroPicture />
    </Intro>
}