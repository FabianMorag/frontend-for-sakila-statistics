import { createBrowserRouter } from "react-router";
import Home from "@/routes/Home";
import Films from "@/routes/Films";
import App from "@/App";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "films", Component: Films },
    ],
  },
]);
