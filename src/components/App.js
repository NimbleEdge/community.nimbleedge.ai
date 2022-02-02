import { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components"
import IntroComponent from "./intro/Intro";
import NavbarComponent from "./navbar/Navbar";
import GlobalStyle from "./styles/GlobalStyles";

const Body = styled.div`
    
`;

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ color }) => color};
`;

export default function App(props) {
    return <Fragment>
        <GlobalStyle />
        <Body>
            <NavbarComponent />
            <IntroComponent />
            <Page id="aboutus" color="red" tabIndex={1} onMouseEnter={() => console.log(window.location)}/>
            <Page id="projects" color="green" tabIndex={1} onMouseEnter={() => console.log("hello")}/>
            <Page id="blogs" color="blue" tabIndex={1} onMouseEnter={() => console.log("world")}/>
            <Page id="volunteer" color="black" tabIndex={1} onMouseEnter={() => console.log("sameer")}/>
            <Page id="startaclub" color="pink" tabIndex={1} onMouseEnter={() => console.log("choudhary")}/>
        </Body>
    </Fragment>
}