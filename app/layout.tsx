import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

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

export const metadata: Metadata = {
  title: "Versil Services",
  description: "Seamless HR Solutions and Logistics Excellence",
};

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
        {children}
      </body>
    </html>
  );
}
