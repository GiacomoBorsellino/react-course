import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Cards from "./pages/Cards.jsx";
import Card from "./pages/Card.jsx";
import CardsChildren from "./pages/CardsChildren.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contacts",
    element: <Contacts></Contacts>,
  },
  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    path: "/cards/:cardID",
    element: <Card></Card>,
  },
  {
    path: "/cardsChildren",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card></Card>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
