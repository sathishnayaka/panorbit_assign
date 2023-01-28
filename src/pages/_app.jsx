import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
const clientSideEmotionCache = createEmotionCache();


function MyApp({ Component, pageProps }) {
  const [loading, SetLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log("");
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      SetLoading(false);
    });
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
