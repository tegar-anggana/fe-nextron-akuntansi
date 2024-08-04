import React, { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className="font-nunito-sans">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
