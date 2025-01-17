import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Bindle Bundle is a professional moving company offering residential, commercial, and specialty moving services. Get a seamless moving experience with us!"
        />
        <link rel="icon" href="/assets/logo.svg" />
        <link rel="apple-touch-icon" href="/assets/logo.svg" />

        <meta property="og:title" content="Bindle Bundle" />
        <meta
          property="og:description"
          content="Bindle Bundle is a professional moving company offering residential, commercial, and specialty moving services. Get a seamless moving experience with us!"
        />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bindle Bundle Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
