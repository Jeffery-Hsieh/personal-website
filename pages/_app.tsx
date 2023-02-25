import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
            <Script
                strategy="lazyOnload"
                src="https://www.googletagmanager.com/gtag/js?id=G-G68ZSSELWT"
            ></Script>
            <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-G68ZSSELWT');
                `,
                }}
            />
        </>
    );
}

export default MyApp;
