import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Box,
  Typography,
  DepartureCard,
  Container,
  styled,
  AppBar,
  IconButton,
  Help,
  ChevronLeft,
} from "@sjse/component-library";

import useRestoreFocus from "./UseRestoreFocus";

import useOpdenDialog from "./Contexts/DialogContext/useOpenDialog";

const Outbound = () => {
  const history = useHistory();

  const handleClick = useCallback(
    () => history.push("/sok-resa/valj-utresa/min-resa"),
    [history]
  );

  const ref = useRef<HTMLDivElement>(null);

  const restoreFocus = useRestoreFocus();

  useEffect(() => {
    restoreFocus(ref.current);
  });

  const openDialog = useOpdenDialog();

  const Page = styled("div")({
    backgroundColor: "white",
    width: "100%",
    position: "relative",
  });

  return (
    <Page ref={ref}>
      <AppBar
        title="Sök Resa"
        leftButtonProps={{
          linkComponent: (useMemo(() =>
            <Link to="/sok-resa">
              <IconButton ariaLabel="Sök resa">
                <ChevronLeft />
              </IconButton>
            </Link>, []
          )),
          label: "Sök resa",
          icon: <ChevronLeft />,
        }}
        rightButtonProps={{
          icon: <Help />,
          label: "Hjälp",
          action: () => openDialog({direction: 'left', component: 'help'}),
        }}
        sticky={true}
      />
      <Container>
        <Box mb={2} mt={3}>
          <Typography variant="h1" gutterBottom>Scroll abd Focus Restoration</Typography>
          <Typography paragraph>
            The concept of sliding, layered transitions requires scroll restoration to be handled. Scroll down in this list and select an item. Then go back, 
            by means of the browser controls or by means of the UI and observe the scroll position.

            Also notice that focus is restored when you browse back to this page.
          </Typography>
        </Box>
        <Box p={2} />
        <DepartureCard
          departureDate={new Date()}
          arrivalDate={new Date()}
          price={1337}
          onClick={handleClick}
          transportations={[
            { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
          ]}
        />
        <Box p={2} />
        <DepartureCard
          departureDate={new Date()}
          arrivalDate={new Date()}
          price={1337}
          onClick={handleClick}
          transportations={[
            { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
          ]}
        />
        <Box p={2} />
        <DepartureCard
          departureDate={new Date()}
          arrivalDate={new Date()}
          price={1337}
          onClick={handleClick}
          transportations={[
            { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
          ]}
        />
        <Box p={2} />
        <DepartureCard
          departureDate={new Date()}
          arrivalDate={new Date()}
          price={1337}
          onClick={handleClick}
          transportations={[
            { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
          ]}
        />
        <Box p={2} />
        <DepartureCard
          departureDate={new Date()}
          arrivalDate={new Date()}
          price={1337}
          onClick={handleClick}
          transportations={[
            { id: "X2000", name: "X2000", concept: "X2", travelType: "X2" },
          ]}
        />
        <Box p={2} />
      </Container>
    </Page>
  );
};

export default Outbound;
