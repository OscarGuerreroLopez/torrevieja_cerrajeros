import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MQ4B9H8');`
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQ4B9H8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>

          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

// https://www.youtube.com/watch?v=FTLHqyQ9NqY
// https://www.youtube.com/watch?v=_wq5nfKQ3DM
