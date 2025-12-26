import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./Pages/Home/Home";
import MainLayout from "./Layout/MainLayout";
import PetListing from "./Pages/PetListing/PetListing";
import DonationCamping from "./Pages/DonationCamping/DonationCamping";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import SinglePet from "./Pages/PetListing/SinglePet";

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
        path: "/petListing/:id",
        element: <SinglePet></SinglePet>,
        loader : ({params}) => fetch(`http://localhost:5000/petListing/${params.id}`)
      },
      {
        path: "/Donation",
        element: <DonationCamping></DonationCamping>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />,
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
