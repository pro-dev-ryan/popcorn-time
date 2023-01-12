import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Kids from "../pages/Kids";
import Login from "../pages/Login";
import Movies from "../pages/Movies";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Web from "../pages/Web";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/Games",
        element: <Games />,
      },
      {
        path: "/animation",
        element: <Kids />,
      },
      {
        path: "/web",
        element: <Web />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
