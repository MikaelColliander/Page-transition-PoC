import React, { useRef, useState } from "react";
import {Box, Typography, DepartureCard} from "@sjse/component-library";
import PageTransition from "./PageTransition";

/** Animation used to animate full height content and preserve scroll position */

const BasicPageTransition = () => {
  const [activePage, setActivePage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "none" | "forward" | "backward"
  >("none");
  const ref = useRef(null);
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
      <PageTransition
        scrollTarget={ref.current}
        animationType={animationDirection}
        isMatch={activePage === 0}
      >
        <Box p={2}>
          <Typography variant="h1">Välj avgång</Typography>
          <Box p={2} />
          <DepartureCard
            departureDate={new Date()}
            arrivalDate={new Date()}
            price={1337}
            onClick={() => {
              setActivePage(1);
              setAnimationDirection("forward");
            }}
            transportations={[
              { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
            ]}
          />
          <Box p={2} />
          <DepartureCard
            departureDate={new Date()}
            arrivalDate={new Date()}
            price={1337}
            onClick={() => {
              setActivePage(1);
              setAnimationDirection("forward");
            }}
            transportations={[
              { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
            ]}
          />
          <Box p={2} />
          <DepartureCard
            departureDate={new Date()}
            arrivalDate={new Date()}
            price={1337}
            onClick={() => {
              setActivePage(1);
              setAnimationDirection("forward");
            }}
            transportations={[
              { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
            ]}
          />
          <Box p={2} />
          <DepartureCard
            departureDate={new Date()}
            arrivalDate={new Date()}
            price={1337}
            onClick={() => {
              setActivePage(1);
              setAnimationDirection("forward");
            }}
            transportations={[
              { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
            ]}
          />
          <Box p={2} />
          <DepartureCard
            departureDate={new Date()}
            arrivalDate={new Date()}
            price={1337}
            onClick={() => {
              setActivePage(1);
              setAnimationDirection("forward");
            }}
            transportations={[
              { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
            ]}
          />
          <Box p={2} />
        </Box>
      </PageTransition>
      <PageTransition
        scrollTarget={ref.current}
        animationType={animationDirection}
        isMatch={activePage === 1}
      >
        <div style={{ height: "1000px" }}>
          <Typography variant="h1">Rubriken</Typography>
          <div>
            Nu är du framåt i flödet. Test scrolla ner lite och gå tillbaka
          </div>
          <Box p={2} />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <button
            type="button"
            onClick={() => {
              setActivePage(0);
              setAnimationDirection("backward");
            }}
          >
            Gå bakåt i flödet
          </button>
        </div>
      </PageTransition>
    </div>
  );
};

export default BasicPageTransition;
