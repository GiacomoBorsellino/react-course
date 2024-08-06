import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About/About.jsx";
import Cards from "./pages/Cards/Cards.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Card from "./components/Card/Card.jsx";
import CardChildren from "./components/CardChildren/CardChildren.jsx";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Homepage></Homepage> },
  { path: "/about", element: <About></About> },
  { path: "/cards", element: <Cards></Cards> },
  { path: "/cards/:idCard", element: <Card></Card> },
  {
    path: "/cards-children",
    element: <CardChildren></CardChildren>,
    children: [{ path: ":idCard", element: <Card></Card> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
