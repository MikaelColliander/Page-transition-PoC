import React, { useRef, useEffect, useState } from "react";
import { Route, useLocation, useHistory, Redirect } from "react-router-dom";
import { Dialog, Cancel, PageTransition } from "@sjse/component-library";
import TravelFinder from "./TravelFinder";
import {
  useDialog,
  Component as ComponentType,
  Direction,
} from "./Contexts/DialogContext/DialogContext";
import useOpdenDialog from "./Contexts/DialogContext/useOpenDialog";
import usePathDepth from "./usePathDepth";
import useSaveRouteScroll from "./useSaveRouteScroll";
import { getStorageItem } from "./helpers/sessionStorageHelpers";
import Login from "./Overlays/Login";
import Help from "./Overlays/Help";
import Outbound from "./Outbound2";
import MyTravel from "./MyTravel";
import Inbound from "./Inbound";

const Start = () => {
  const routesArr = [
    {
      path: "/sok-resa",
      Component: TravelFinder,
      name: "Sök resa",
    },
    {
      path: "/sok-resa/valj-utresa",
      Component: Outbound,
      name: "Välj utresa",
    },
    {
      path: "/sok-resa/valj-utresa/min-resa",
      Component: MyTravel,
      name: "Min resa",
    },
    {
      path: "/sok-resa/valj-utresa/min-resa/valj-aterresa",
      Component: Inbound,
      name: "Välj återresa",
    },
  ];

  const [routes] = useState(routesArr);

  const [title, setTitle] = useState("Sök resa");

  const Components = {
    login: {
      Component: Login,
      direction: "up",
      name: "login",
    },
    help: {
      Component: Help,
      direction: "up",
      name: "help",
    },
  };

  const ref = useRef<HTMLDivElement>(null);

  const history = useHistory();

  const location = useLocation();

  const pathDepth = usePathDepth(location);

  useSaveRouteScroll(ref.current);

  const { state, dispatch } = useDialog();

  const hasOverlayParam = new URLSearchParams(window.location.search).get(
    "overlay"
  )
    ? true
    : false;

  const openDialog = useOpdenDialog();

  const handleClose = () => {
    dispatch({
      type: "hide",
      direction: state.direction,
      component: state.component,
    });
    history.push("?");
  };

  useEffect(() => {
    if (!hasOverlayParam) {
      dispatch({
        type: "hide",
        direction: state.direction,
        component: state.component,
      });
    }
  }, [location]);

  useEffect(() => {
    if (hasOverlayParam) {
      const content = new URLSearchParams(window.location.search)
        .get("overlay")
        ?.toLocaleLowerCase() as ComponentType;
      if (Components[content]) {
        openDialog({
          direction: Components[content].direction as Direction,
          component: Components[content].name as ComponentType,
        });
      }
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const Component = Components[state.component].Component;
  return (
    <>
      <Dialog
        ariaLabel="Help"
        enteringDirection={state.direction}
        onClose={handleClose}
        open={state.displayDialog || hasOverlayParam}
        variant="fullscreen"
        AppBarProps={{
          title: "Hjälp",
          sticky: true,
          leftButtonProps: {
            label: "Avbryt",
            icon: <Cancel />,
            action: handleClose,
          },
        }}
      >
        <Component />
      </Dialog>
      <Route exact path="/">
        <Redirect to="/sok-resa" />
      </Route>
      <div
        ref={ref}
        style={{
          overflow: "scroll",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {routes.map((route) => {
          const path = route.path;
          const Component = route.Component;
          const name = route.name;

          return (
            <Route key={Array.isArray(path) ? path[0] : path} exact path={path}>
              {({ match }) => {
                if (match?.url === location.pathname) {
                  setTitle(
                    routes.find((route) => route.path === match?.url)?.name ||
                      title
                  );
                }
                return (
                  <PageTransition
                    isMatch={match?.url === location.pathname}
                    scrollY={getStorageItem(match?.url || "", "y")}
                    animationType={pathDepth >= 0 ? "forward" : "backward"}
                    scrollTarget={ref.current}
                    activeElementIndex={getStorageItem(
                      match?.url || "",
                      "activeElementIndex"
                    )}
                    restoreScrollOnForward
                  >
                    <Component />
                  </PageTransition>
                );
              }}
            </Route>
          );
        })}
      </div>
    </>
  );
};

export default Start;
