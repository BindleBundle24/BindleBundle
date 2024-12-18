import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import { NuqsAdapter } from "nuqs/adapters/next/pages";
import { Layout } from "@/components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <NuqsAdapter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NuqsAdapter>
    </Provider>
  );
}
