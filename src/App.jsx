import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styles from "./App.module.css";
export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Project Waldo</h1>
        <Link to="/">Home</Link>
        <Link to="/img-page">Game</Link>
        <Link to="/sign-up">SignUp</Link>
        <Link to="/log-in">LogIn</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
      </header>
      <Outlet></Outlet>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
