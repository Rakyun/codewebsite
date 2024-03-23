import React, { Suspense } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CheckBoxProvider from "./context/CheckBoxContext.jsx";

// Lazy load components
const Homepage = React.lazy(() => import("./components/homepage/Homepage.jsx"));
const OurPlayground = React.lazy(
  () => import("./components/playground/OurPlayground.jsx"),
);
const Contact = React.lazy(() => import("./components/contactUs/Contact.jsx"));
const Course = React.lazy(() => import("./components/courses/Course.jsx"));
const PitchingPage = React.lazy(
  () => import("./components/pitching/PitchingPage.jsx"),
);
const AboutUs = React.lazy(() => import("./components/aboutUs/AboutUs.jsx"));
const BlockCode = React.lazy(
  () => import("./components/courses/pages/BlockCode.jsx"),
);
const Creative = React.lazy(
  () => import("./components/courses/pages/Creative.jsx"),
);
const Fundamental = React.lazy(
  () => import("./components/courses/pages/Fundamental.jsx"),
);
const Mechanical = React.lazy(
  () => import("./components/courses/pages/Mechanical.jsx"),
);
const NonCode = React.lazy(
  () => import("./components/courses/pages/NonCode.jsx"),
);
const University = React.lazy(
  () => import("./components/courses/pages/University.jsx"),
);
const Custom = React.lazy(
  () => import("./components/homepage/components/customCourse/Custom.jsx"),
);

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

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CheckBoxProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </CheckBoxProvider>
  </React.StrictMode>,
);
