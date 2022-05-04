import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DialogProvider } from "./RouteAnimPoc/Contexts/DialogContext/DialogContext";
import "./App.css";
import {
  CssBaseline,
  ThemeProvider,
  greenTheme,
} from "@sjse/component-library";
import DialogRouteFlow from "./DialogRouteFlow2/DialogRouteFlow2";
import Start from "./RouteAnimPoc/Start";
import PageTransition from "./PageTransition/PageTransition.stories";
// import DialogRouteFlow from "./DialogRouteFlow1/DialogRouteFlow1";

function App() {

  return (
    <ThemeProvider theme={greenTheme}>  
      <CssBaseline>
        <Router>
          <DialogProvider>
            <Start />
          </DialogProvider>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
