import "../styles/globals.scss";

import { ReactElement } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
export default MyApp;
