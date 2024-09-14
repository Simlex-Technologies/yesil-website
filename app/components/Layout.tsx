import { FunctionComponent, ReactElement } from "react";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

interface LayoutProps {
    
}
 
const Layout: FunctionComponent<LayoutProps> = ():ReactElement => {
    return ( 
        <>
            <Navbar />
            <Footer />
        </>
     );
}
 
export default Layout;