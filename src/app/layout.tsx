import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/LandingPage/Footer/Footer";
import NavBar from "@/components/LandingPage/NavBar/NavBar";
import { Provider } from "@/components/ui/provider";

const geistSans = localFont({
  src: "./fonts/ClashGrotesk-Regular.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bindle Bundle",
  description: "A moving Company",
  icons: {
    icon: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  openGraph: {
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Bindle Bundle Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-w-[393px] max-w-[1440px] mx-auto bg-white text-black overflow-x-hidden min-h-screen flex flex-col`}
      >
        <Provider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
