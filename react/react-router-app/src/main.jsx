import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router 속성: 어떤 라우터 설정을 사용할 것이냐 */}
    <RouterProvider router={router} />
  </StrictMode>
);
