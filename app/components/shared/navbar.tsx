import { FunctionComponent, ReactElement } from "react";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = ():ReactElement => {
    return ( 
        <nav className="flex justify-between items-center bg-white">
            <p>Navbar</p>
        </nav>
     );
}
 
export default Navbar;