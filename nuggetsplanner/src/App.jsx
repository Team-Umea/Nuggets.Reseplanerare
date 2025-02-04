//Imports
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import './styles/App.css'

//Layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
//Pages
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import TripDetails from "./pages/TripDetails";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq"
import AddTravels from "./pages/subpages/AddTravels"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="help" element={<HelpLayout />}>
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="tripdetails" element={<TripDetails />}>
        <Route path="addtravels" element={<AddTravels />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
) 

function App() {
  return <RouterProvider router={router} />;
}

export default App
