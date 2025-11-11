import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./Context/Auth.tsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StrictMode>
      <SnackbarProvider autoHideDuration={1000}>
        <App />
      </SnackbarProvider>
    </StrictMode>
  </AuthProvider>
);
