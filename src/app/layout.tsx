import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/LandingPage/Footer/Footer";
import NavBar from "@/components/LandingPage/NavBar/NavBar";
import { Provider } from "@/components/ui/provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { clashGrotesk } from "@/app/fonts/font";

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
    type: "website",
    locale: "en_US",
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
        className={`font-clash ${clashGrotesk.variable} min-w-[393px] w-screen mx-auto bg-white text-black overflow-x-hidden min-h-screen flex flex-col justify-center`}
      >
        <NuqsAdapter>
          <Provider>
            <NavBar />
            <main className="flex-grow w-full overflow-hidden max-w-[1440px] mx-auto">
              {children}
            </main>
            <Footer />
          </Provider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
