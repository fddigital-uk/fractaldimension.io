import styles from "./intro.module.css";
import { useEffect, useRef, useState } from "react";
import RadialFrame from "../radialFrame";

const INTRO_SEQUENCE_FRAMES = [
  {
    text: "It's time to change the way the web",
    lineAngle: 0,
    delay: 3000,
  },
  {
    text: "looks",
    delay: 1000,
    lineAngle: -45,
  },
  {
    text: "feels",
    delay: 1000,
    lineAngle: -90,
  },
  {
    text: "works",
    delay: 1000,
    lineAngle: -135,
  },
  {
    text: "In a world full of template sites",
    lineAngle: -225,
    delay: 2400,
  },
  {
    text: "How will you differentiate?",
    lineAngle: -135,
    delay: 2400,
  },
  {
    text: (
      <>
        It's time to <span className={styles.standOut}>stand out</span>
        <br />
        from the crowd
      </>
    ),
    lineAngle: 0,
    delay: 3000,
  },
  {
    text: null,
    delay: 2500,
  },
];

const Intro = ({ runAnimation = false, onEnd }) => {
  const [frame, setFrame] = useState(0);
  const timeoutRef = useRef(0);

  const endAnimation = () => {
    setFrame(-1);
    if (onEnd) {
      onEnd();
    }
  };

  const animate = (frameNumber) => {
    if (frameNumber >= INTRO_SEQUENCE_FRAMES.length) {
      endAnimation();
      return;
    }

    console.log(`Delay: ${INTRO_SEQUENCE_FRAMES[frameNumber].delay}`);
    console.log(`FRAME NUMBER: ${frameNumber}`);
    timeoutRef.current = setTimeout(
      () => animate(frameNumber + 1),
      INTRO_SEQUENCE_FRAMES[frameNumber].delay
    );
    setFrame(frameNumber);
    console.log(`Set frame to ${frameNumber}`);
  };

  useEffect(() => {
    if (runAnimation) {
      animate(0);
      console.log("ANIMATE");
    } else {
      console.log("STOP ANIMATE");
      clearTimeout(timeoutRef.current);
    }
  }, [runAnimation]);

  return (
    <div className={styles.container}>
      {frame >= 0 && (
        <RadialFrame
          text={INTRO_SEQUENCE_FRAMES[frame].text}
          lineAngle={INTRO_SEQUENCE_FRAMES[frame].lineAngle}
        />
      )}
      }
    </div>
  );
};

export default Intro;
