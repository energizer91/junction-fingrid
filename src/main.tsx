import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/MainPage.tsx";
import { Features } from "./pages/Features/MainPage.tsx";
import { Releases } from "./pages/Releases/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/features/:featureId",
    element: <Features />,
  },
  {
    path: "/releases",
    element: <Releases />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
