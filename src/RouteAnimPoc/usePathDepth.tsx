/**
 * This hook helps determine the direction of a navigation action - up or down the page hierarchy.
 * It returns an int where a negative value signifies a navigation action moving upwards in the site structure
 * a positive value indicates a navigation action travelling deeper down structure. If 0 is returned, the navigation
 * took place at the current level.
 *
 * The hook is useful for implementations using animated page transitions when backward and forward motions need to be determined.
**/

import { useState, useEffect, useCallback } from "react";
import { Location } from "history";

// Even though there is no delay in this timeout it will help throttling depth indications when they are passed in rapid sequence.
// This occurs when location.pathname updates at the end of a nivigation cycle. When moving up in the hierarchy -1 will be returned immediately followed by
// 0 as the comparison will be made between current url and current url. The timeout will capture the navigation intent and return only the first figure.

let timer: ReturnType<typeof setTimeout> | null;
const returnOne = (num: number) => {
    if (!timer) {
        timer = setTimeout(() => {if (timer) clearTimeout(timer); timer = null}, 0);
        return num;
    }
}

const usePathDepth = (location: Location) => {

  const getPathDepth = useCallback(() => {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  }, [location.pathname]);

  const [prevDepth, setPrevDepth] = useState(getPathDepth());
  const [depthDiff, setDepthDiff] = useState(getPathDepth() - prevDepth);

  useEffect(() => {
    setPrevDepth(getPathDepth());
  }, [getPathDepth]);

  const getDepthDiff = returnOne(getPathDepth() - prevDepth);
  if (typeof getDepthDiff === "number") {
      setDepthDiff(getDepthDiff);
  }

  return depthDiff;
};

export default usePathDepth;
