import { FunctionComponent, ReactElement } from "react";
import Navbar from "./shared/navbar_c";
import Footer from "./shared/footer_c";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }: { children: React.ReactNode }): ReactElement => {
    return (
        <>
            <NextTopLoader
                color="#C59945"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #f1fa9e,0 0 5px #ceb0fa"
            />
            <Toaster
                position="top-center"
                richColors
                closeButton
                toastOptions={{
                    duration: 3000,
                    unstyled: false,
                }}
            />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;