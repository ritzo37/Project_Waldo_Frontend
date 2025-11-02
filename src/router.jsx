import { createBrowserRouter } from "react-router-dom";
import ImgPage from "./pages/ImgPage";
import App from "./App";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AlreadyLoggedIn from "./pages/AlreadyLoggedIn";
import LeaderBoard from "./pages/LeaderBoard";
import Home from "./pages/Home";
import ErrorPage from "./pages/errorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/img-page", element: <ImgPage></ImgPage> },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/leaderboard", element: <LeaderBoard></LeaderBoard> },
      { index: true, element: <Home></Home> },
      {
        path: "/already-logged-in",
        element: <AlreadyLoggedIn></AlreadyLoggedIn>,
      },
    ],
  },
]);

export default router;
