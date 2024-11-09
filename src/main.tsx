import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/MainPage.tsx";
import { Features } from "./pages/Features/MainPage.tsx";
import { Releases } from "./pages/Releases/MainPage.tsx";

const basePath = import.meta.env.VITE_BASE_PATH || "";

const router = createBrowserRouter([
  {
    path: basePath + "/",
    element: <Dashboard />,
  },
  {
    path: basePath + "/features",
    element: <Features />,
  },
  {
    path: basePath + "/features/:featureId",
    element: <Features />,
  },
  {
    path: basePath + "/releases",
    element: <Releases />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
