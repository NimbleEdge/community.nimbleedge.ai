import styled from "styled-components";

const Intro = styled.div`
    width: 40vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;

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

    div:nth-child(3) {
        border-left: 5px solid #323568;
        border-radius: 4px;
        font-family: Open Sans;
        font-size: 14px;
        letter-spacing: 0px;
        color: #000000;
        padding-left: 2vw;
        padding-top: 1vh;
        padding-bottom: 1vh;
    }

    a:nth-child(4) {
        background-color: #C93418;
        width: 8vw;
        height: 5vh;
        border: none;
        border-radius: 60px 60px 0px 60px;
        opacity: 1;
        box-shadow: 0px 6px 10px #00000033;
        color: #FFF;
        font-family: Open Sans;
        letter-spacing: 0.16px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export default function IntroText(props) {
    return <Intro>
        <div>JOIN WITH THOUSAND PEOPLES</div>
        <div>Lorem lpsum is a Dummy Text</div>
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</div>
        <a href="#">Join Us</a>
    </Intro>
}