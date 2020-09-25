import "../styles/globals.css";
import { useEffect } from "react";
import LayoutFullScreen from "../components/layout/fullScreen";

function MyApp({ Component, pageProps }) {
  const setWindowHeightRatio = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowHeightRatio);
    setWindowHeightRatio();

    return () => {
      window.removeEventListener("resize", setWindowHeightRatio);
    };
  });
  return (
    <LayoutFullScreen>
      <Component {...pageProps} />
    </LayoutFullScreen>
  );
}

export default MyApp;
