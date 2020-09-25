import Head from "next/head";
import HomeSequence from "../components/homeSequence/homeSequence";
import { useRouter } from "next/router";
import {useContext, useEffect} from "react";
import {PageTransitionContext} from "../components/pageTransition/pageTransition.context";

export default function Home() {
  const router = useRouter();
  const context = useContext(PageTransitionContext);

  const runIntro = () => {
    router.push("/intro");
  };

  useEffect(() => {
    router.prefetch("/intro");
  });

  console.dir(context);

  return (
    <>
      <Head>
        <title>Fractal Dimension - The Web Done Differently</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSequence onContinue={runIntro} runAnimation={!context.enterAnimation}/>

      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */

        body,
        #__next {
          height: 100vh;
          height: calc(var(--vh, 1vh) * 100);
        }
        #__next {
          position: absolute;
          top: 0;
          width: 100%;
          display: flex;
        }
      `}</style>
    </>
  );
}
