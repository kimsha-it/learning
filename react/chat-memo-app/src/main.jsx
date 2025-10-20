import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

import { RouterProvider } from "react-router-dom";
import router from "./router/index";

// Persist 스토어
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* Persist Gate 적용 */}
      <PersistGate persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
