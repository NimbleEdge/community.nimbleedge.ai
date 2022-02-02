import { Fragment } from "react";
import IntroComponent from "./intro/Intro";
import MissionComponent from "./mission/MissionComponent";

export default function LandingPage() {
    return <Fragment>
        <IntroComponent />
        <MissionComponent />
    </Fragment>
}