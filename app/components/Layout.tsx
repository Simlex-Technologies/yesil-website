import { FunctionComponent, ReactElement } from "react";
import Navbar from "./shared/navbar_c";
import Footer from "./shared/footer_c";

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