import { FunctionComponent, ReactElement } from "react";

interface ContactUsProps {

}

const ContactUs: FunctionComponent<ContactUsProps> = (): ReactElement => {
    return (
        <main className="flex flex-col items-center justify-center bg-[url(/images/sub_page_hero.jpg)]">
            <div className="flex flex-col items-center justify-center h-52 mt-16">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
        </main>
    );
}

export default ContactUs;