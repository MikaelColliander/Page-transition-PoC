import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Home/Home";
import Dialog from "../Dialog/Dialog";
import Help from "../Help/Help";
import TravelFinder from "../TravelFinder/TravelFinder";

const DialogRouteFlow1 = () => {

  const location = useLocation();

  return (
    <div
      style={{ overflow: "hidden" }}
    >
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname.split("/")[1]}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sok-resa">
            <Dialog>
              <TravelFinder />
            </Dialog>
          </Route>
          <Route path="/help">
              <Help />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default DialogRouteFlow1;
