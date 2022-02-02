import { Fragment } from "react";
import FeatureProjects from "./featureProjects/FeatureProjectComponet";
import IntroComponent from "./intro/Intro";
import MissionComponent from "./mission/MissionComponent";

export default function LandingPage() {
    return <Fragment>
        <IntroComponent />
        <MissionComponent />
        <FeatureProjects />
    </Fragment>
}