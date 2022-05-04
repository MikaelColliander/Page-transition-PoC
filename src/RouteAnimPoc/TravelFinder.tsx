import React, { useRef, useState } from "react";
import { Route, useLocation, Link } from "react-router-dom";
import {
  styled,
} from "@sjse/component-library";
import PageTransition from "../PageTransition/PageTransition";
import usePathDepth from "./usePathDepth";
import Outbound from "./Outbound2";
import MyTravel from "./MyTravel";
import Inbound from "./Inbound";
import AppBar from "../AppBar";
import CTA from "../CTA/CTA";
import useSaveRouteScroll from "./useSaveRouteScroll";

const Wrapper = styled("div")({
  position: "absolute",
  width: "100vw",
  overflow: "hidden",
});

const TravelFinder = () => {
  
  const ref = useRef<HTMLDivElement>(null);

  return (

      <Wrapper>
        <AppBar />
        <Link to="/sok-resa/valj-utresa">
          <CTA text="Slide Away" />
        </Link>
      </Wrapper>
  );
};

export default TravelFinder;
