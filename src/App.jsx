import { Link, Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="header">
        <h1>Project Waldo</h1>
        <Link to="/img-page">Game</Link>
        <Link to="/sign-up">SignUp</Link>
        <Link to="/log-in">LogIn</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}
