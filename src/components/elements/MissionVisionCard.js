import styled from "styled-components";
import ARROW from "../../assets/images/right-arrow.svg";

const CardWrapper = styled.div`
    width: 15vw;
    background-color: #FFFFFF;
    height: 25vh;
    border: 1px solid #00000005;
    border-radius: 16px;
    padding: 4.5vh 2.5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    :hover {
        box-shadow: 0px 3px 10px #0000000F;
    }

    :hover > a > img {
        filter: invert(1);
    }

    :hover > a > span {
        color: #000000;
    }
`;

const Image = styled.img`
    background-color: #EBECFF;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 2vh;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 60%;
`;

const Heading = styled.div`
    font-family: Open Sans;
    font-weight: Bold;
    font-size: 18px;
    letter-spacing: 0.18px;
    color: #000000;
    font-style: normal;
    margin-bottom: 1vh;
`;

const Description = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.14px;
    color: #000000;
    text-align: justify;
    font-size: 14px;
    margin-bottom: 1vh;
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
        font-family: Open Sans;
        font-weight: Bold;
        font-style: normal;
        letter-spacing: 0px;
        color: #000000;
        margin-right: 10px;
        font-size: 12px;
    }
`;

const ReadMore = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    -webkit-transition: background-color 500ms ease-out;
    -ms-transition: background-color 500ms ease-out;
    
    span {
        text-decoration: none;
        font-family: Open Sans;
        font-weight: 600;
        font-style: normal;
        color: #fff;
        letter-spacing: 0px;
        font-size: 12px;
    }

    img {
        width: 1vw;
        height: 1.2vh;
    }
`;

export default function Card({ image, heading, description, tags }) {
    return <CardWrapper>
        <Image src={image} />
        <Body>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Tags>{tags?.map(tag => <span>{`#${tag}`}</span>)}</Tags>
        </Body>
        <ReadMore href="#">
            <span>Read More</span>
            <img src={ARROW} alt="right arrow" />
        </ReadMore>
    </CardWrapper>
}