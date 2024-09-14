import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Layout from "./components/Layout";
import { customMetaDataGenerator } from "./lib/customMetaDataGenerator";

const plusJakartaSans = localFont({
    src: "./fonts/PlusJakartaSans.ttf",
    variable: "--font-plus-jakarta-sans",
    weight: "100 900",
});
const plusJakartaSansItalic = localFont({
    src: "./fonts/PlusJakartaSans-Italic.ttf",
    variable: "--font-plus-jakarta-italic-sans",
    weight: "100 900",
});

// Define Metadata for the general site layout
// We're relying on the default parameters defined in the function, 
// That's why we're only passing `title` in the object
export const metadata: Metadata = customMetaDataGenerator({
    title: 'Versil Services',
    description: 'Seamless HR Solutions and Logistics Excellence',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${plusJakartaSans.variable} ${plusJakartaSansItalic.variable} antialiased`}
            >
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
