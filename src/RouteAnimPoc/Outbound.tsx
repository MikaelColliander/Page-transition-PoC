import React, { useRef } from "react";
import { Route, Link, useParams, useLocation } from "react-router-dom";
import GenericPage, { GenericPageProps } from "./GenericPage";
import MyTravel from "./MyTravel";
import { CSSTransition } from "react-transition-group";
import usePathDepth from "./usePathDepth";
import PageTransition from "../PageTransition/PageTransition";

const Child = () => {
  let { id } = useParams<{ id: string }>();
  return <div style={{position: "absolute"}}>{id}</div>;
};

const Outbound = () => {
  const props: GenericPageProps = {
    title: "Välj utresa",
    routes: [
      {
        linkPath: "/sok-resa/valj-utresa/min-resa",
        Component: MyTravel,
        name: "Min resa",
      },
    ],
  };

  const ref = useRef<HTMLDivElement>(null)

  const location = useLocation();

  const pathDepth = usePathDepth(location);

  return (
    <GenericPage {...props}>
      <>
        <button>
          <Link to="/sok-resa/valj-utresa/valj-mat">Mat</Link>
        </button>
        <Route
          path="/sok-resa/valj-utresa/:id"
          exact
          key="/sok-resa/valj-uresa/:id"
        >
          {({ location }) => {
            const { pathname } = location;
            return (
              <PageTransition
                isMatch={pathname.includes("valj-mat")}
                animationType={pathname.includes("valj-mat") ? "forward" : "backward"}
                slideAxis="y"
                scrollTarget={null}
              >
                <div>
                  <Child />
                </div>
              </PageTransition>
            );
          }}
        </Route>
      </>
    </GenericPage>
  );
};

export default Outbound;
