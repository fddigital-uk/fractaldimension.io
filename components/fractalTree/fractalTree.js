import {useEffect, useLayoutEffect, useRef} from "react";

const FractalTree = ({
  draw = false,
  animate = true,
  height = 500,
  width = 500,
  maxLevels = 9,
  maxDistance = 100,
  maxWidth = 20,
  minDistance = 20,
  startX = 0,
  startY = 0,
  angle = 0,
  className,
}) => {
  const treeCanvas = useRef(null);

  const d2r = (degrees) => degrees * (Math.PI / 180);

  const drawFork = (ctx, level, angle, x, y) => {
    if (level > maxLevels) {
      return;
    }

    let distance =
      (maxDistance / maxLevels) * (maxLevels - level) + minDistance;
    let newX = distance * Math.cos(d2r(angle)) + x;
    let newY = distance * Math.sin(d2r(angle)) + y;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    ctx.lineWidth = (maxWidth / maxLevels) * (maxLevels - level);
    ctx.strokeStyle = "rgba(255, 255, 255, " + (1 - level / maxLevels) + ")";
    ctx.stroke();

    const nextCall = () => {
      drawFork(ctx, level + 1, angle - 25, newX, newY);
      drawFork(ctx, level + 1, angle + 25, newX, newY);
    };

    if (animate) {
      setTimeout(nextCall, (180 / maxLevels) * level);
    } else {
      nextCall();
    }
  };

  useEffect(() => {
    if (draw) {
      let ctx = treeCanvas.current.getContext("2d");
      drawFork(ctx, 1, angle, startX, startY);
    }
  }, [draw]);

  return (
    <canvas className={className} height={height} width={width} ref={treeCanvas} />
  );
};

export default FractalTree;
