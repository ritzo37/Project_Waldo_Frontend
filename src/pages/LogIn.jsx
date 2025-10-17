import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const logInUrl = import.meta.env.VITE_BASEURL + "/log-in";
export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
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
    if (data.errors) {
      setErrors(data.errors);
    } else {
      const token = data.token;
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  }
  return (
    <>
      {errors.length > 0 && (
        <ul>
          {errors.map((currError) => {
            return <li>{currError.msg}</li>;
          })}
        </ul>
      )}
      <form onSubmit={handleFormSubmit}>
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
    </>
  );
}
