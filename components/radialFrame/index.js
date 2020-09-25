import styles from "./radialFrame.module.css";
import { createRef, useEffect, useRef, useState } from "react";
import StaggeredLines from "../svgs/staggeredLines";
import Circle from "../svgs/circle";
import { TweenLite, Linear, TimelineLite } from "gsap";
import { useFirstLoad } from "../../lib/hooks";
import * as classnames from "classnames";

const RadialFrame = ({ text, lineAngle }) => {
  const circleRef = useRef(null);
  const groupRef = useRef(null);
  const linesRef = useRef({
    tlRef: createRef(),
    brRef: createRef(),
    blRef: createRef(),
    trRef: createRef(),
  });
  const [end, setEnd] = useState(false);

  useEffect(() => {
    TweenLite.to(groupRef.current, 0.2, {
      rotation: lineAngle,
      transformOrigin: "50%",
      ease: Linear.easeNone,
    });
  }, [lineAngle]);

  const joinLinesCoverScreen = () => {
    const tlRef = linesRef.current.tlRef.current;
    const blRef = linesRef.current.blRef.current;
    const trRef = linesRef.current.trRef.current;
    const brRef = linesRef.current.brRef.current;
    const tl = new TimelineLite();

    tl.addLabel("start");

    tl.to([tlRef, blRef, trRef, brRef], { attr: { rx: 0 }, duration: 0.5 }, "start");

    tl.to([tlRef, trRef], { attr: { y: 7 } }, "start");
    tl.to([blRef, brRef], { attr: { y: 22 } }, "start");
    tl.to([blRef, tlRef], { attr: { x: 0 } }, "start");
    tl.to([brRef, trRef], { attr: { x: 1450 } }, "start");

    tl.addLabel("outbound");

    tl.to([tlRef, trRef], { attr: { y: -1200, height: 1222 }, duration: 1.0 }, "outbound");
    tl.to([blRef, brRef], { attr: { height: 1222 }, duration: 1.0 }, "outbound");

    tl.to(circleRef.current, {attr: {opacity: 0}, duration: 0.1}, "outbound")
    tl.to(groupRef.current, {attr: {opacity: 0}, duration: 1.0}, "outbound")
  };

  useEffect(() => {
    if (text === null) {
      joinLinesCoverScreen();
      setEnd(true);
    }
  }, [text]);

  useFirstLoad(() => {
    TweenLite.to(circleRef.current, 8, {
      rotation: "360",
      transformOrigin: "50%",
      ease: Linear.easeNone,
      repeat: -1,
    });

    TweenLite.to(circleRef.current, 2, {
      scale: 0.9,
      transformOrigin: "50%",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div
      className={classnames({ [styles.container]: true, [styles.end]: end })}
    >
      <div className={styles.circle}>
        <Circle circleRef={circleRef} />
      </div>
      <div className={styles.lines}>
        <StaggeredLines groupRef={groupRef} {...linesRef.current} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default RadialFrame;
