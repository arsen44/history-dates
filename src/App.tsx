import React from "react";
import { ThemeProvider } from "styled-components";
import OrbitalTimeline from "./components/orbita/OrbitalTimeline";
import { timelineData } from "./timelineData";

import GlobalStyles from "./assets/styles/global";
import { baseTheme } from "./assets/styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <OrbitalTimeline data={timelineData} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
