import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Details from "@/pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/country-details/:name",
    element: <Details />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
