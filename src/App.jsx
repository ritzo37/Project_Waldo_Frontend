import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <>
      <div className="header">
        <h1>Project Waldo</h1>
        <Link to="/img-page">Game</Link>
        <Link to="/sign-up">SignUp</Link>
        <Link to="/log-in">LogIn</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Outlet></Outlet>
    </>
  );
}
