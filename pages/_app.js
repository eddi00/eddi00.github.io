import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";

import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../src/localization/config";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithI18Next(MyApp, ni18nConfig);
