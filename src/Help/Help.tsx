import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Cancel,
  Box,
  Typography,
  Container,
  styled,
} from "@sjse/component-library";
import Dialog from "../Dialog/Dialog";

const Help = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const ChatFormContainer = styled(Box)({
    position: "fixed",
    bottom: 0,
    width: "100%",
  });

  return (
    <Dialog>
      <header>
        <AppBar
          sticky={true}
          title="Hjälp"
          leftButtonProps={{
            icon: <Cancel />,
            label: "Stäng",
            action: () => goBack(),
          }}
        />
      </header>
      <main>
        <Container>
          <Box mt={3} mb={3}>
            <Typography variant="h1">Hjälp</Typography>
          </Box>
          <img style={{ maxWidth: "100%" }} src="/chatbot-ui.png" />
        </Container>
        <ChatFormContainer p={2}>
          <img style={{ maxWidth: "100%" }} src="/chatbot-form.png" />
        </ChatFormContainer>
      </main>
    </Dialog>
  );
};

export default Help;
