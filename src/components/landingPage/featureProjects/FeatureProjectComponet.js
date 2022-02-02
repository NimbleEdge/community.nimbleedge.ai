import styled from "styled-components";

const Wrapper = styled.div`
    height: 92vh;
    background: transparent linear-gradient(308deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%) 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 7vw 0;
`;

const Heading = styled.div`
    font-family: Open Sans;
    font-weight: 600;
    font-style: normal;
    font-size: 2vh;
    letter-spacing: 0.18px;
    color: #C93418;
    opacity: 1;
    margin-bottom: 3vh;
`;

const SubHeading = styled.div`
    font-weight: medium;
    font-size: 1.8vh;
    letter-spacing: 0.16px;
    width: 40vw;
    text-align: center;
    opacity: 1;
    color: #FFFFFF;
    margin-bottom: 2vh;
`;

const HorizontalBar = styled.div`
    background: #D9F1FF 0% 0% no-repeat padding-box;
    border-radius: 2px;
    opacity: 1;
    width: 4vw;
    height: 4px;
    margin-bottom: 3vh;
`;

const Content = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    overflow: scroll;
`;

const Left = styled.div`
    width: 50%;
    border: 1px solid green;
    height: 10px;
`;

const Right = styled.div`
    width: 50%;
    border: 1px solid yellow;
    height: 10px;
`;

export default function FeatureProjects(props) {
    return <Wrapper>
        <Heading>FEATURED PROJECTS</Heading>
        <SubHeading>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s</SubHeading>
        <HorizontalBar />
        <Content> 
            <Left />
            <Right />
        </Content>
    </Wrapper>
}