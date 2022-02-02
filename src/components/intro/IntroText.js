import styled from "styled-components";

const Intro = styled.div`
    width: 40vw;
    height: 50vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    div:nth-child(1) {
        letter-spacing: 0.48px;
        font-family: Open Sans;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        color: #C93418;
    }

    div:nth-child(2) {
        letter-spacing: 2.55px;
        font-family: Open Sans;
        font-size: 4vw;
        font-style: normal;
        font-weight: 800;
        color: #000000;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export default function IntroText(props) {
    return <Intro>
        <div>JOIN WITH THOUSAND PEOPLES</div>
        <div>Lorem lpsum is a Dummy Text</div>
        {/* <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</div> */}
    </Intro>
}