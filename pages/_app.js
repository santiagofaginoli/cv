import "../styles/globals.scss";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "/theme/darkTheme";
import { whiteTheme } from "/theme/whitetheme"
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;