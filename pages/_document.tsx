import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
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
