import "./index.css";

import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
