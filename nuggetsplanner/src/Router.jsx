//Imports
import { createBrowserRouter } from "react-router-dom"
//Layouts
import RootLayout from "./layouts/RootLayout"
//Pages
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq"
import TripDetails from "./pages/TripDetails";
import AddTravels from "./pages/subpages/AddTravels"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
          ],
        },
        {
          path: "tripdetails",
          element: <TripDetails />,
          children: [
            {
              path: "addtravels",
              element: <AddTravels />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  
  export default router;