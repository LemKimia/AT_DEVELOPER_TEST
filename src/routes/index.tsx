import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
