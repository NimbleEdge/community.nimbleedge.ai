import styled from "styled-components"
import Card from "../../elements/MissionVisionCard";
import INTERNET from "../../../assets/images/internet.svg";
import CLOUD from "../../../assets/images/cloud.svg";
import EARTH from "../../../assets/images/lock-earth.svg";


const MissionWrapper = styled.div`
    background-color: #FAFAFA;
    padding: 10vh 7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.div`
    color: #C93418;
    font-family: Open Sans;
    letter-spacing: 0.9px;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    margin-bottom: 2vh;
`;

const SubHeading = styled.div`
    text-align: center;
    width: 40vw;
    font-family: Open Sans;
    font-weight: medium;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.16px;
    opacity: 1;
    margin-bottom: 2vh;
`;

const HorizontalBar = styled.div`
    background: #323568 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
    width: 4vw;
    height: 4px;
    margin-bottom: 3vh;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`;

const example = [
    {
        image: INTERNET,
        heading: "Lorem Ipsum is Dummy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        tags: ["lorem", "ipsum", "nimbleedge","lorem", "ipsum", "nimbleedge"]
    },
    {
        image: CLOUD,
        heading: "Lorem Ipsum is Dummy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        tags: ["lorem", "ipsum", "nimbleedge","lorem", "ipsum", "nimbleedge"]
    },
    {
        image: EARTH,
        heading: "Lorem Ipsum is Dummy",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        tags: ["lorem", "ipsum", "nimbleedge","lorem", "ipsum", "nimbleedge"]
    }
]

export default function MissionComponent(props) {
    return <MissionWrapper>
        <Heading>MISSIONS {"&"} VISIONS</Heading>
        <SubHeading>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</SubHeading>
        <HorizontalBar />
        <CardWrapper>
            {example?.map((item, idx) => <Card
                key={idx}
                idx={idx}
                image={item.image}
                heading={item.heading}
                description={item.description}
                tags={item.tags}
            />)}
        </CardWrapper>
    </MissionWrapper>
}