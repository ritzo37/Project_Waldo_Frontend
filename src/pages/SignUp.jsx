import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./SignUp.module.css";
const signUpUrl = import.meta.env.VITE_BASEURL + "/sign-up";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassWord] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  async function handleFormSubmit(e) {
    e.preventDefault();
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, confirmPassword }),
    });
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors);
      setErrors(data.errors);
    } else {
      toast.success("Signed up");
      setTimeout(() => {
        navigate("/");
      }, 20000);
    }
  }
  return (
    <>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>
        {errors.length > 0 && (
          <ul>
            {errors.map((currError) => {
              return <li>{currError.msg}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label htmlFor="username">Username</label>{" "}
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassWord(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
