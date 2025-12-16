import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./Pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import PetListing from "./Pages/PetListing/PetListing";
import DonationCamping from "./Pages/DonationCamping/DonationCamping";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petListing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/Donation",
        element: <DonationCamping></DonationCamping>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />,
  </QueryClientProvider>
);
