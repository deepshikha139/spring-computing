import React from "react";
import Router from "../../router";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import "./App.css";

function App() {
  return (
    <ScopedCssBaseline className="App">
      <Router />
    </ScopedCssBaseline>
  );
}

export default App;
