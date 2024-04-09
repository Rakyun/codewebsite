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
import ScratchPage from "./components/courses/IndividualCoursePages/Scratch/ScratchPage.jsx";
import OctoPage from "./components/courses/IndividualCoursePages/Octo/OctoPage.jsx";
import DesignPage from "./components/courses/IndividualCoursePages/Design/DesignPage.jsx";
import PythonPage from "./components/courses/IndividualCoursePages/Python/PythonPage.jsx";
import RobloxPage from "./components/courses/IndividualCoursePages/Roblox/RobloxPage.jsx";
import ModelPage from "./components/courses/IndividualCoursePages/Modelling/ModelPage.jsx";
import WebPage from "./components/courses/IndividualCoursePages/Web/WebPage.jsx";
import AboutCoding from "./components/AboutCoding/AboutCoding.jsx";

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
    path: "/aboutCoding",
    element: <AboutCoding />,
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
  {
    path: "/courses/blockcode/scratch",
    element: <ScratchPage />,
  },
  {
    path: "/courses/blockcode/octo",
    element: <OctoPage />,
  },
  {
    path: "/courses/noncode/designthinking",
    element: <DesignPage />,
  },
  {
    path: "/courses/fundamental/python",
    element: <PythonPage />,
  },
  {
    path: "/courses/creative/roblox",
    element: <RobloxPage />,
  },
  {
    path: "/courses/creative/roblox",
    element: <RobloxPage />,
  },
  {
    path: "/courses/mechanical/3dmodelling",
    element: <ModelPage />,
  },
  {
    path: "/courses/creative/fullstackweb",
    element: <WebPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CheckBoxProvider>
      <RouterProvider router={router} />
    </CheckBoxProvider>
  </React.StrictMode>,
);
