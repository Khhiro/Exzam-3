import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import MarketPage from "./pages/Market/Market";
import TradePage from "./pages/Trade/Trade";
import EarnPage from "./pages/Earn/Earn";
import AboutPage from "./pages/About/About";
import CareerPage from "./pages/Career/Career";
import LoginPage from "./pages/Login/Login";
import SignUpPage from "./pages/Registration/Registration";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MarketPage />,
        },
        {
          path: '/trade',
          element: <TradePage />,
        },
        {
          path: '/earn',
          element: <EarnPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/career',
          element: <CareerPage />,
        },
      ]
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignUpPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
