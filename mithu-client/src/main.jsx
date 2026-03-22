import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import PetListing from "./Pages/PetListing/PetListing";
import DonationCamping from "./Pages/DonationCamping/DonationCamping";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Pages/Login/Login";

import SinglePet from "./Pages/PetListing/SinglePet";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from "./Routes/PrivateRoute";
import DashboardHome from "./Dashboard/DashboardHome";
import DashboardLayout from "./Layout/DashboardLayOut";
import Profile from "./Components/Profile";
import PetForm from "./Dashboard/PetFrom";

const queryClient = new QueryClient();

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
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/petListing/:id",
        element: (
          <PrivateRoute>
            <SinglePet></SinglePet>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_baseUrl}/petListing/${params.id}`),
      },
      {
        path: "/Donation",
        element: (
          <PrivateRoute>
            <DonationCamping></DonationCamping>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <DashboardHome />,
    },
    {
      path:"petFrom",
      element: <PetForm />

    }
    
  ],
}
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <>
          <RouterProvider router={router} />
          <Toaster position="top-right" reverseOrder={false} />
        </>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>,
);
