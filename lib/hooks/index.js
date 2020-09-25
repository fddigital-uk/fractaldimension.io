import {useEffect, useRef} from "react";

export const useFirstLoad = (func) => {
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      func();
      loaded.current = true;
    }
  })
}
