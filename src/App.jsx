import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styles from "./App.module.css";
export default function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Project Waldo</h1>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/img-page">
            Game
          </Link>
          <Link className={styles.link} to="/sign-up">
            SignUp
          </Link>
          <Link className={styles.link} to="/log-in">
            LogIn
          </Link>
          <Link className={styles.link} to="/leaderboard">
            LeaderBoard
          </Link>
        </div>
      </header>
      <Outlet></Outlet>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
