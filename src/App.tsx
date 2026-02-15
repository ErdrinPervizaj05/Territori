import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./components/MainLayout";
import HomeLayout from "./components/HomeLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import NotFound from "./components/NotFound";

import MeQira from "./components/services/MeQira";
import NeShitjet from "./components/services/NeShitjet";
import Agjencite from "./components/services/Agjencite";
import Toka from "./components/services/Toka";

import Listings from "./components/Listings";
import ListingDetail from "./components/ListingDetail";
import PostListing from "./components/PostListing";

import AuthLayout from "./components/AuthLayout";
import Login from "./Forma/Login";
import Register from "./Forma/Register";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeLayout /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      { path: "listings", element: <Listings /> },
      { path: "listings/:id", element: <ListingDetail /> },
      { path: "post", element: <PostListing /> },

      {
        path: "service",
        element: <Service />,
        children: [
          { index: true},
          { path: "meqira", element: <MeQira /> },
          { path: "neshitje", element: <NeShitjet /> },
          { path: "agjencite", element: <Agjencite /> },
          { path: "toka", element: <Toka /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);





export default function App() {
  return <RouterProvider router={router} />;
}
