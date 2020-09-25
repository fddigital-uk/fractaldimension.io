import PageTransition from "../pageTransition/pageTransition";
import { useRouter } from "next/router";
import styles from "./fullScreen.module.css";

const LayoutFullScreen = ({ children }) => {
  const router = useRouter();
  return (
    <PageTransition location={router.pathname} className={styles.fullScreen}>
      {children}
    </PageTransition>
  );
};

export default LayoutFullScreen;
