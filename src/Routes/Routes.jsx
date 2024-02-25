
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about"
        }
      ],
    },
    {
      path: "/dashboard",
      element: <Home></Home>,
      children: [
        {
          path: "home"
          , element: "dash"
        }
      ]
    },
    {
      path: "/Services",
      // element: 
    }
    
  ]);