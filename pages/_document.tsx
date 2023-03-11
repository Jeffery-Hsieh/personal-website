import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
    return (
        <Html>
            <Head>
                <Script
                    id="full-story-analytics"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                          })(window,document,'script','dataLayer','GTM-MMTBNJV');
                        `,
                    }}
                ></Script>
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9667599254860298"
                    crossOrigin="anonymous"
                    async
                ></Script>
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script
                    id="gtm-tag-body"
                    dangerouslySetInnerHTML={{
                        __html: `
                        <!-- Google Tag Manager (noscript) -->
                        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMTBNJV"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                        <!-- End Google Tag Manager (noscript) -->
                      `,
                    }}
                ></Script>
            </body>
        </Html>
    );
};

export default Document;
