import React, { useCallback, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Box,
  Typography,
  FlowButton,
  Container,
  styled,
  AppBar,
  IconButton,
  Help,
  ChevronLeft,
} from "@sjse/component-library";

import useOpdenDialog from "./Contexts/DialogContext/useOpenDialog";

const Outbound = () => {
  const history = useHistory();

  const handleClick = useCallback(
    () => history.push("/sok-resa/valj-utresa/min-resa"),
    [history]
  );

  const openDialog = useOpdenDialog();

  const Page = styled("div")({
    backgroundColor: "white",
    width: "100%",
    position: "relative",
    minHeight: "100vh",
  });

  return (
    <Page>
      <AppBar
        title="Min resa"
        leftButtonProps={{
          linkComponent: (
            <Link to="/sok-resa/valj-utresa">
              <IconButton ariaLabel="Välj utresa">
                <ChevronLeft />
              </IconButton>
            </Link>
          ),
          label: "Välj utresa",
          icon: <ChevronLeft />,
        }}
        rightButtonProps={{
          icon: <Help />,
          label: "Help",
          action: () => openDialog({direction: 'up'}),
        }}
        sticky={true}
      />
      <Container maxWidth="sm">
        <Box mb={2} mt={3}>
          <Typography variant="h1" gutterBottom>
            Globally accessible controls
          </Typography>
          <Typography variant="h4" paragraph>
            Globally accessible information and controls are displayed in a Dialog component.
            This dialog relates to a query parameter and is accessible from any route.</Typography>
            <Typography paragraph>
            Click on the Help icon (present in all routes of this demo) above to show a help dialog. Reload the page, browse back and forth.
            Play around with the query to find that it works pretty much the sam as the regular routes.
          </Typography>
          <Typography paragraph>
            Click on the Login button below to invoke the same dialog, this time rendering with a different component.
          </Typography>
          <Box pt={2}>
          <FlowButton onClick={() => openDialog({direction: 'up', component: 'login'})}>Logga in</FlowButton>
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default Outbound;
