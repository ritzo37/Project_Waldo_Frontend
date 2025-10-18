import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn.module.css";
const logInUrl = import.meta.env.VITE_BASEURL + "/log-in";
export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/already-logged-in");
      return;
    }
  });
  async function handleFormSubmit(e) {
    e.preventDefault();
    const response = await fetch(logInUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    const data = await response.json();
    if (response.status !== 200) {
      setError(data.message);
    } else {
      const token = data.token;
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Logged in");
      navigate("/");
    }
  }
  return (
    <div className={styles.formContainer}>
      <h1>Log In</h1>
      {error.length > 0 && <p>{error}</p>}
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
