import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";

import OurPlayground from "./components/playground/OurPlayground.jsx";
import Contact from "./components/contactUs/Contact.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/playground",
      element: <OurPlayground />,
    },
    {
      path: "/contactUs",
      element: <Contact />,
    },
  ],
  { basename: "/codewebsite/" },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
