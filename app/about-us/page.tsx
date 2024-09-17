import { FunctionComponent, ReactElement } from "react";
import AboutUsPage from "./AboutUsPage";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = (): ReactElement => {
    return (
        <AboutUsPage />
    );
}

export default About;