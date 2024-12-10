import localFont from "next/font/local";

export const clashGrotesk = localFont({
    src: [
        { path: "../fonts/ClashGrotesk-Extralight.woff", weight: "100", style: "normal" },
        { path: "../fonts/ClashGrotesk-Light.woff", weight: "300", style: "normal" },
        { path: "../fonts/ClashGrotesk-Regular.woff", weight: "400", style: "normal" },
        { path: "../fonts/ClashGrotesk-Medium.woff", weight: "500", style: "normal" },
        { path: "../fonts/ClashGrotesk-Semibold.woff", weight: "600", style: "normal" },
        { path: "../fonts/ClashGrotesk-Bold.woff", weight: "700", style: "normal" },
    ],
    variable: "--font-clash-grotesk",
});
