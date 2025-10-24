import { useNavigate } from "react-router-dom";
import styles from "./AlreadyLoggedIn.module.css";
import { toast } from "react-toastify";
function AlreadyLoggedIn() {
  let navigate = useNavigate();
  function handeLogout() {
    localStorage.removeItem("token");
    toast.success("Logged out");
    navigate("/");
  }
  function handleHomeClick() {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <h1>You are already logged in!</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => handeLogout()}>Logout</button>
        <button onClick={handleHomeClick}>Home</button>
      </div>
    </div>
  );
}

export default AlreadyLoggedIn;
