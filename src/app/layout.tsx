import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { MyProvider } from './contexts/LickedItems';

import {
  ClerkProvider,
} from '@clerk/nextjs'

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
    <ClerkProvider>
    <html lang="en">
      <body className={plusJakartaSans.className}>
      <MyProvider>
        <Navbar/>
          {children}
        <Footer/>
      </MyProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
