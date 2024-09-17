import { FunctionComponent, ReactElement } from "react";
import ContactPage from "./ContactPage";

interface ContactUsProps {

}

const ContactUs: FunctionComponent<ContactUsProps> = (): ReactElement => {
    return (
        <ContactPage />
    );
}

export default ContactUs;