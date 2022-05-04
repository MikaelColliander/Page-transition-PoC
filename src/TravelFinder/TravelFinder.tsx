import React, { useState } from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import {
  AppBar,
  Box,
  Cancel,
  DatePicker,
  Help,
  Container,
  Typography,
} from "@sjse/component-library";
import { IconButton } from "@sjse/component-library/node_modules/@material-ui/core";
import { default as HelpDialog } from "../Help/Help";
import Stations from "../Stations/Stations";
import { AnimatePresence } from "framer-motion";
import { setInterval } from "timers";

const TravelFinder = () => {
    const [outboundValue, setOutboundValue] = useState<string | undefined>();
    const [inboundValue, setinBoundValue] = useState<string | undefined>();

  let { path, url } = useRouteMatch();

  const location = useLocation();

  return (
    <>
      <header>
        <AppBar
          sticky={true}
          title="Sök Resa"
          leftButtonProps={{
            linkComponent: (
              <Link to="/">
                <IconButton>
                  <Cancel />
                </IconButton>
              </Link>
            ),
            label: "Avbryt",
            icon: <Cancel />,
          }}
          rightButtonProps={{
            icon: <Help />,
            label: "Hjälp",
            linkComponent: (
              <Link to={`${url}/hjalp`}>
                <IconButton>
                  <Help />
                </IconButton>
              </Link>
            ),
          }}
        />
      </header>
      <main>
        <Container>
          <Box mb={3} mt={3}>
            <Typography variant="h1">Sök resa</Typography>
          </Box>
          <Box mb={2}>
            <Stations />
          </Box>
          <Box mb={2}>
            <Stations />
          </Box>
          <Box mb={2}>
            <DatePicker
              id="utresedatum"
              label="Datum för utresa"
              translation={{
                selectedDateAriaLabel: "Valt datum",
                leftArrowButtonAriaLabel: "Föregående månad",
                rightArrowButtonAriaLabel: "Nästa månad",
                startAdornmentButtonAriaLabel: "Öppna kalendern",
                calendarAriaLabel:
                  "Välj ett datum i kalendern. Använd tabb-tangenten för att bläddra och retur eller mellanslag för att välja",
                touchCalendarAriaLabel: "Välj ett datum i kalendern",
                calendarDatePrefixAriaLabel: "Valt datum. ",
                todayLabel: "Idag",
                tomorrowLabel: "Imorgon",
              }}
              value={inboundValue}
              onChange={(date: string | undefined) => {
                setinBoundValue(date);
              }}
            />
          </Box>
          <Box mb={2}>
            <DatePicker
              id="återresedatum"
              label="Datum för återresa"
              translation={{
                selectedDateAriaLabel: "Valt datum",
                leftArrowButtonAriaLabel: "Föregående månad",
                rightArrowButtonAriaLabel: "Nästa månad",
                startAdornmentButtonAriaLabel: "Öppna kalendern",
                calendarAriaLabel:
                  "Välj ett datum i kalendern. Använd tabb-tangenten för att bläddra och retur eller mellanslag för att välja",
                touchCalendarAriaLabel: "Välj ett datum i kalendern",
                calendarDatePrefixAriaLabel: "Valt datum. ",
                todayLabel: "Idag",
                tomorrowLabel: "Imorgon",
              }}
              value={outboundValue}
              onChange={(date: string | undefined) => {
                setOutboundValue(date);
              }}
            />
          </Box>
        </Container>
      </main>
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.key}>
          <Route path={`${path}/hjalp`}>
            <HelpDialog />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default TravelFinder;
