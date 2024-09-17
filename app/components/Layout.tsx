import { FunctionComponent, ReactElement } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

interface LayoutProps {
    children: React.ReactNode;
}
 
const Layout: FunctionComponent<LayoutProps> = ({ children }: { children: React.ReactNode }):ReactElement => {
    return ( 
        <>
            <Navbar />
            {children}
            <Footer />
        </>
     );
}
 
export default Layout;