
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/LoginPAge/LoginPage";
import Regestation from "../Pages/Regestation/Regestation";

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
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/regesttion",
          element: <Regestation></Regestation>
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