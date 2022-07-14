import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../src/localization/config";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      offset: 50,
      delay: 300
    });
  }, []);

  return <Component {...pageProps} />;
};

export default appWithI18Next(MyApp, ni18nConfig);
