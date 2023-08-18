import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "lib/router";
import { CssBaseline, ThemeProvider } from "lib/component-library";
import { theme } from "utils/theme";
import { routes } from "routes";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
