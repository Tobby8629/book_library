import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import ImageKitProviderWrapper from "./ImageKitProvider";
import { config } from "@/lib/config";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});


export const metadata: Metadata = {
  title: "Books Library",
  description: "The best books library",
};

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <html lang="en">
    
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`} 
        >
          <ImageKitProviderWrapper children={children} />
        </body>
      
    </html>
    
  );
}

export default RootLayout;
