//Imports
import { RouterProvider } from "react-router-dom"
import './styles/App.css'
import router from "./Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return <RouterProvider router={router} />;
}

export default App
