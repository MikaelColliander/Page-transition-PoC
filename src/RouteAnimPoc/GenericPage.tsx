import React, { useRef } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { Container, Typography, List, ListItem, ListItemText, styled } from "@sjse/component-library";
import PageTransition from "../PageTransition/PageTransition";
import usePathDepth from "./usePathDepth";

export interface IRoute {
  linkPath: string | string[];
  routePath?: string | string[];
  Component: React.ElementType;
  name: string;
}

export interface GenericPageProps {
  routes?: IRoute[];
  title: String;
  renderRoutes?: boolean;
  children?: React.ReactNode;
}

const GenericPage:React.FC<GenericPageProps> = (props: GenericPageProps) => {
  const location = useLocation();

  const pathDepth = usePathDepth(location);

  const Page = styled(Container)({
    backgroundColor: "white",
    width: "100%",
    position: "relative",
  });

  const ref = useRef(null);

  return (
    <div style={{position: "relative", backgroundColor: "white"}}>

      <>
        <header>
          <Typography variant="h1">{props.title}</Typography>
        </header>

        <nav>
          <List>
            {props.routes && props.routes.length > 0
              ? props.routes.map(({ linkPath, name }, i) => (
                  <ListItem
                    button
                    LinkComponent={<Link to={Array.isArray(linkPath) ? linkPath[0] : linkPath} />}
                    key={name + i}
                  >
                    <ListItemText>
                      {name}
                    </ListItemText>
                  </ListItem>
                ))
              : null}
          </List>
        </nav>
      
      </>
        {/* {props.renderRoutes && props.routes && props.routes.length > 0
          ? props.routes.map((route) => {
              const path = route.routePath || route.linkPath;
              const Component = route.Component;
              return (<Route key={Array.isArray(path) ? path[0] : path} exact path={path}>
                {({ match }) => {
                  return(
                  <PageTransition
                    isMatch={match != null}
                    animationType={
                      "backward"
                      //pathDepth.depth >= 0 ? "forward" : "backward"
                    }
                    scrollTarget={ref.current}
                  >

                      <Component />

                  </PageTransition>)
          }}
              </Route>)
            })
          : null} */}
          <main>
          <Container>
            <Typography variant="body1">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat eget metus sit amet molestie. Donec consequat, libero eu iaculis hendrerit, massa nibh malesuada odio, ullamcorper vehicula tellus elit quis nibh. Proin blandit, mauris vel sodales interdum, nisl mauris maximus diam, sed dapibus nibh sem quis sapien. Proin porttitor sapien at diam tempor egestas. Proin id ligula non nisi pharetra pellentesque. Quisque iaculis sapien non purus volutpat, consectetur lacinia velit sagittis. Morbi nec est vehicula lorem pellentesque lacinia in id urna.

Aliquam sollicitudin turpis ipsum, eget aliquet nisl tincidunt elementum. Nam dignissim tortor at enim consectetur, at ullamcorper sapien porttitor. In hac habitasse platea dictumst. Phasellus condimentum erat id nibh faucibus, ornare mollis orci vulputate. Donec sit amet luctus elit. Praesent pharetra blandit tortor id tempor. Nulla et faucibus arcu. Donec non elit orci. Ut quis venenatis eros, eu pretium massa.

Praesent ultrices nunc ut est molestie, a bibendum metus fermentum. Pellentesque semper massa vel venenatis sodales. Vestibulum pellentesque viverra ipsum vitae porta. Sed quis odio fermentum, ullamcorper arcu vel, sodales diam. Etiam pharetra finibus malesuada. Aenean cursus elit in euismod dapibus. Morbi non convallis mauris, id tristique arcu. Maecenas accumsan maximus orci. Aliquam ut mollis enim, id suscipit nisl. Ut facilisis mauris sit amet lectus fermentum, sit amet ultrices justo tempor. Aliquam quam metus, feugiat id lacus vitae, tincidunt ultricies mauris. Aliquam nec fringilla tortor, sed mattis sapien.

Nulla enim diam, fringilla nec condimentum vitae, aliquet non nulla. Morbi ultricies sem a posuere ultrices. Donec varius gravida mollis. Duis dolor arcu, consectetur quis purus sed, molestie malesuada arcu. Praesent id ipsum condimentum, molestie mauris at, iaculis lorem. Nunc pretium tristique metus nec condimentum. Aliquam a euismod dui, nec eleifend arcu. Aenean et orci eget neque mattis rhoncus iaculis in quam.

Cras vel metus semper nibh hendrerit consequat. Sed consectetur sagittis leo semper sodales. Nam venenatis quam est. Maecenas luctus ligula non eleifend ultricies. Donec iaculis ultrices tellus non lacinia. Proin eu leo nec eros dapibus bibendum. Curabitur turpis velit, mattis ut tempus quis, vehicula sed massa. Quisque sollicitudin vel ipsum a porttitor. Cras at odio a enim congue maximus.
          </Typography>

          {props.children}
          </Container>
        </main>
    </div>
  );
};

export default GenericPage;
