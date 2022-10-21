import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Button, Link as MUILink } from "@mui/material";
import { StartPage } from "./Views/StartPage";
import { MuiPlayground } from "./Views/MuiPlayground";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "mui",
    element: <MuiPlayground />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
