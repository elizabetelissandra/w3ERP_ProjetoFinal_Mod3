import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/themeStyles.ts";
import { MenuProvider } from "./context/menuContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles theme={theme}/>
    <MenuProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MenuProvider>
  </StrictMode>
);
