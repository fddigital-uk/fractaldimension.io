import {useEffect, useLayoutEffect, useRef} from "react";

export const useFirstLoad = (func) => {
  const loaded = useRef(false);

  console.log(`First Load: ${loaded.current}`)
  useEffect(() => {
    console.log("USE EFFECT CALLED")
    if (!loaded.current) {
      console.log("RUNNING")
      func();
      console.log("RUN")
      loaded.current = true;
    }
  })
}
