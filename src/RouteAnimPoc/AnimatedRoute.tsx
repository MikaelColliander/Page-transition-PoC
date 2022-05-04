import React from "react";
import { Route } from "react-router-dom";
import PageTransition from "../PageTransition/PageTransition";

interface AnimatedRouteProps {
    path: string;
    children: React.ReactNode;
    scrollTarget: JSX.Element
}

const AnimatedRoute: React.FC<AnimatedRouteProps> = (props: AnimatedRouteProps) => {
    return (
    <Route path={props.path} exact>
        {props.children}
    </Route>
    )
}

export default AnimatedRoute;