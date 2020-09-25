import Logo from "./logo";
import { TimelineLite, gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

export const LogoAnimated = ({ duration = 2, className, onStart, onClick }) => {
  const createFlicker = (tl, item) => {
    tl.to(item, { attr: { opacity: 1 }, duration: 0.4 });
    tl.to(item, { attr: { opacity: 0.2 }, duration: 0.2 });
    tl.to(item, { attr: { opacity: 0.8 }, duration: 0.7 });
    tl.to(item, { attr: { opacity: 0.5 }, duration: 0.3 });
    tl.to(item, { attr: { opacity: 1 }, duration: 0.3 });
  };

  const createFinalFlicker = (tl, item, label) => {
    tl.fromTo(
      item,
      {
        webkitFilter: "brightness(1)",
        filter: "brightness(1)",
      },
      {
        webkitFilter: "brightness(0.4) url(#sofGlow)",
        filter: "brightness(0.4) url(#sofGlow)",
        duration: 0.8,
      },
      label
    );
    tl.to(
      item,
      {
        webkitFilter: "brightness(1.4)",
        filter: "brightness(1.4)",
        duration: 0.8,
      },
      label + "+=0.8"
    );
    tl.to(
      item,
      {
        webkitFilter: "brightness(1)",
        filter: "brightness(1)",
        duration: 0.8,
      },
      label + "+=1.6"
    );
  };

  const animation = (refs) => {
    gsap.registerPlugin(CSSPlugin);
    const tl = new TimelineLite();
    [
      "f-b",
      "d-cbl",
      "d-t",
      "f-tl",
      "d-ctr",
      "f-tlb",
      "d-b",
      "d-ctl",
      "f-tr",
      "f-trb",
      "d-cbr",
    ].forEach((item) => {
      createFlicker(tl, refs.current[item]);
    });

    tl.fromTo(
      refs.current["text-group"],
      { attr: { opacity: 0 } },
      { attr: { opacity: 1 }, duration: 0.8 }
    );
    tl.addLabel("full", "+=0");

    ["f-group", "d-group", "text-group"].forEach((item) =>
      createFinalFlicker(tl, refs.current[item], "full")
    );
    tl.duration(duration).play();

    if (onStart) {
      onStart();
    }
  };
  return (
    <Logo
      className={className}
      opacity={0}
      animation={animation}
      onClick={onClick}
    />
  );
};

export default LogoAnimated;
