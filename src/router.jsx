import { createBrowserRouter } from "react-router-dom";
import Authentification from "./pages/Authentification";
import Home from "./pages/Home";
import Ecole from "./pages/Ecole";
import ClassA from "./components/ClassA";
import ClassB from "./components/ClassB";
import ClassC from "./components/ClassC";
import About from "./pages/About";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Authentification />,
  },

  {
    path: "/scool",
    element: <Ecole />,
    children: [
      {
        path: "classb",
        element: <ClassB />,
      },
      {
        path: "classc",
        element: <ClassC />,
      },
    ],
  },
  {
    path: "/classa",
    element: <ClassA />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
export default router;
