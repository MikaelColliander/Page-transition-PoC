import React, { useState, useEffect, useRef, useCallback } from "react";
import { Route, useLocation } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";
import Home from "../Home/Home";
import Help from "../Help/Help";
import TravelFinder from "../TravelFinder/TravelFinder";

export const DialogRouteFlow = () => {
  const location = useLocation();

  const getPathDepth = useCallback(() => {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n !== "");
    return pathArr.length;
  }, [location.pathname]);

  const [prevDepth, setPrevDepth] = useState(getPathDepth());

  const ref = useRef(null);

  useEffect(() => {
    setPrevDepth(getPathDepth());
  }, [getPathDepth]);

  const routes = [
    {
      path: "/",
      name: "Home",
      Component: Home,
    },
    {
      path: "/sok-resa",
      name: "Travel Finder",
      Component: TravelFinder,
    },
  ];

  return (
    <div
      ref={ref}
      style={{
        overflow: "scroll",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <PageTransition
              isMatch={match != null}
              animationType={
                getPathDepth() - prevDepth >= 0 ? "forward" : "backward"
              }
              scrollTarget={ref.current}
            >
              <div>
                <Component />
              </div>
            </PageTransition>
          )}
        </Route>
      ))}
    </div>
  );
};

export default DialogRouteFlow;
