import styles from "./homeSequence.module.css";
import classnames from "classnames";
import { LogoAnimated } from "../logo";
import { FractalTree } from "../fractalTree";
import { useEffect, useRef, useState } from "react";
import { TimelineLite } from "gsap";

export const HomeSequence = ({ onContinue, runAnimation = true }) => {
  const [draw, setDraw] = useState(false);
  const moreRef = useRef(null);
  const treeDrawRef = useRef(0);
  const textFadeRef = useRef(0);
  const contactRef = useRef(null);

  const logoStart = () => {
    treeDrawRef.current = setTimeout(() => setDraw(true), 1500);
    textFadeRef.current = setTimeout(() => {
      const tl = new TimelineLite();
      tl.fromTo(moreRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      tl.fromTo(
        contactRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.5"
      );
      tl.play();
    }, 1900);
  };

  useEffect(() => {
    if (!runAnimation) {
      clearTimeout(textFadeRef.current);
      clearTimeout(treeDrawRef.current);
    }
  });

  return (
    <>
      {runAnimation && (
        <>
          <FractalTree
            className={classnames(styles.tree, styles.tree1)}
            draw={draw}
            startX={-40}
            startY={-40}
            angle={45}
          />
          <LogoAnimated
            className={styles.logo}
            onStart={logoStart}
            duration={2}
            onClick={onContinue}
          />
          <div className={styles.enter} ref={moreRef} onClick={onContinue}>
            Find out more
          </div>
          <div className={styles.contact} ref={contactRef}>
            <ul>
              <li>
                <a href="mailto:enquiries@fractaldimensions.io">
                  enquiries@fractaldimensions.io
                </a>
              </li>
              <li>
                <a href="tel:+447891101764">+44 (0)7891 101764</a>
              </li>
            </ul>
          </div>
          <FractalTree
            className={classnames(styles.tree, styles.tree2)}
            draw={draw}
            startX={540}
            startY={540}
            angle={225}
          />
        </>
      )}
    </>
  );
};

export default HomeSequence;
