import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import CheckBoxProvider from "./context/CheckBoxContext.jsx";
import OurPlayground from "./components/playground/OurPlayground.jsx";
import Contact from "./components/contactUs/Contact.jsx";
import Course from "./components/courses/Course.jsx";
import PitchingPage from "./components/pitching/PitchingPage.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import BlockCode from "./components/courses/pages/BlockCode.jsx";
import Creative from "./components/courses/pages/Creative.jsx";
import Fundamental from "./components/courses/pages/Fundamental.jsx";
import Mechanical from "./components/courses/pages/Mechanical.jsx";
import NonCode from "./components/courses/pages/NonCode.jsx";
import University from "./components/courses/pages/University.jsx";
import Custom from "./components/homepage/components/customCourse/Custom.jsx";

const router = createHashRouter([
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
  {
    path: "/courses",
    element: <Course />,
  },
  {
    path: "/pitchingStage",
    element: <PitchingPage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/courses/blockcode",
    element: <BlockCode />,
  },
  {
    path: "/courses/creative",
    element: <Creative />,
  },
  {
    path: "/courses/fundamental",
    element: <Fundamental />,
  },
  {
    path: "/courses/mechanical",
    element: <Mechanical />,
  },
  {
    path: "/courses/noncode",
    element: <NonCode />,
  },
  {
    path: "/courses/university",
    element: <University />,
  },
  {
    path: "/customCourse",
    element: <Custom />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CheckBoxProvider>
      <RouterProvider router={router} />
    </CheckBoxProvider>
  </React.StrictMode>,
);
