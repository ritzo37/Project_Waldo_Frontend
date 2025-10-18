import { createBrowserRouter } from "react-router-dom";
import ImgPage from "./pages/ImgPage";
import App from "./App";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AlreadyLoggedIn from "./pages/AlreadyLoggedIn";
import LeaderBoard from "./pages/LeaderBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/img-page", element: <ImgPage></ImgPage> },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      { path: "/log-in", element: <LogIn></LogIn> },
      { path: "/leaderboard", element: <LeaderBoard></LeaderBoard> },
    ],
  },
  { path: "/already-logged-in", element: <AlreadyLoggedIn></AlreadyLoggedIn> },
]);

export default router;
