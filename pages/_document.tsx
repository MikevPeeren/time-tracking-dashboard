import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin=""
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
