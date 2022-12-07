import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Monsters from "./pages/Monsters";
import Weapons from "./pages/Weapons";
import Topbar from "./components/Topbar";
import MonsterCard from "./components/MonsterCard";

const baseURL = "https://mhw-db.com/monsters"; //https://fakestoreapi.com/products

export default function App() {
  const [data, setData] = React.useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "monsters",
      element: <Monsters />,
    },
    {
      path: "weapons",
      element: <Weapons />,
    },
  ]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;

  return (
    <div className="font-poppins bg-gray-200">
      <Topbar />
      <RouterProvider router={router} />
    </div>
  );
}
