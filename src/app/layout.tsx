import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// layouts import 
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

const plusJakartaSans  = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estatery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
