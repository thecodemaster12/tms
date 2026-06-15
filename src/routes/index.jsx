import { createBrowserRouter } from "react-router-dom";

import { authRoutes } from "./authRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

import NorFound from "../pages/NorFound";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: authRoutes,
    },
    {
        element: <MainLayout />,
        children: dashboardRoutes,
    },
  {
    path: "*",
    element: <NorFound />,
  },
]);

export default router;