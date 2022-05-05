import React from "react";
import { Typography, Box, Container } from "@sjse/component-library";

export const Help = () => {
  return (
    <Container maxWidth="sm">
      <Box pl={2} pr={2}>
        <Typography variant="h1" gutterBottom>
          Help placeholder
        </Typography>
        <Typography paragraph>
          I am a placeholder for Help. I am dynamically rendered within this
          applications global Dialog component. This dialog can be invoked from
          any route.
        </Typography>
        <Typography paragraph>
          All properties for this dialog are kept within the application state.
          The content, the entering and exit direction, the title are all
          properties derived from state.
        </Typography>
      </Box>
    </Container>
  );
};

export default Help;
