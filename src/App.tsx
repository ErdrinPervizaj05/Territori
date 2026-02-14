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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeLayout /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // Listings
      { path: "listings", element: <Listings /> },
      { path: "listings/:id", element: <ListingDetail /> },

      // Seller form
      { path: "post", element: <PostListing /> },

      // Services (nested)
      {
        path: "service",
        element: <Service />,
        children: [
          { index: true, element: <div>Zgjedh një shërbim nga menuja.</div> },
          { path: "meqira", element: <MeQira /> },
          { path: "neshitje", element: <NeShitjet /> },
          { path: "agjencite", element: <Agjencite /> },
          { path: "toka", element: <Toka /> },
        ],
      },

      // Optional: 404 inside layout (so navbar stays)
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
