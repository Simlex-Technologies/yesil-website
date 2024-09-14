import { FunctionComponent, ReactElement } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = ():ReactElement => {
    return ( 
        <footer className="flex justify-center items-center bg-white">
            <p>Footer</p>
        </footer>
     );
}
 
export default Footer;