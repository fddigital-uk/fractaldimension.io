import Head from "next/head";
import styles from "../styles/Intro.module.css";
import Intro from "../components/intro";

const IntroPage = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Fractal Dimensions - The Web Done Differently - Intro</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Intro runAnimation={true}/>
      </div>
  )
};

export default IntroPage;
