import React from "react";
import {
  Help,
  Typography,
  Container,
  makeStyles,
  Box,
  createStyles,
  AppBar,
} from "@sjse/component-library";

import useOpdenDialog from "./RouteAnimPoc/Contexts/DialogContext/useOpenDialog";

export const AppBarOnImage = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      exampleImage: {
        objectFit: "cover",
        marginTop: "-72px",
        maxHeight: 250,
        textAlign: "center",
        transform: "translateX(-50%)",
        position: "relative",
        left: "50%",
        zIndex: -1,
        [theme.breakpoints.up("sm")]: {
          width: "100%",
          maxHeight: 400,
        },
      },
    })
  );
  const classes = useStyles();
  const openDialog = useOpdenDialog();
  const handleOnClick = () => {
    openDialog({direction: "left", component: "help"});
  };

  return (
    <Box>
      <header>
        <AppBar
          title="Lorem ipsum"
          rightButtonProps={{
            icon: <Help />,
            label: "Hjälp",
            action: () => handleOnClick(),
          }}
          sticky={false}
          isOnImage={true}
          scrimHeight={125}
        />
      </header>
      <main>
        <img
          alt="Nice food on a plate"
          src="img.jpg"
          className={classes.exampleImage}
        />
        <Container>
          <Box my={2}>
            <Typography variant="h1" gutterBottom>
              Routes with Transitions - A proof of concept
            </Typography>
            <Typography variant="h4" paragraph>
              This demo showcase animations between routes. Animation direction
              logic is derived from the URL. When navigating to a URL with an
              equal number of segments as the current URL or larger, a forward
              motion will occur. Otherwise a backward motion presents itself.
            </Typography>
            <Typography variant="body1" paragraph>
              The transitions also work when using the browser navigation
              options - browse back and browse forward.
            </Typography>
            <Typography variant="body1" paragraph>
              This demo makes use of React Transition Group, specifically{" "}
              <a href="http://reactcommunity.org/react-transition-group/css-transition">
                CSSTransition
              </a>{" "}
              paired with <a href="https://reactrouter.com/">React Router</a> to
              achieve it's goals.
            </Typography>
            <Box mb={12}>
              <Typography variant="body1" paragraph>
                Besides the routes, globally accessible information and
                controls, such as "Help" and "Login" can be accessed through the
                URL with query parameters.
              </Typography>
            </Box>
          </Box>
        </Container>
      </main>
    </Box>
  );
};

export default AppBarOnImage;
