import { useNavigate } from "react-router-dom";
function AlreadyLoggedIn() {
  let navigate = useNavigate();
  function handeLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  function handleHomeClick() {
    navigate("/");
  }
  return (
    <div>
      <h1>You are already logged in!</h1>
      <div>
        {" "}
        <button onClick={() => handeLogout()}>Logout</button>
        <button onClick={handleHomeClick}>Home</button>
      </div>
    </div>
  );
}

export default AlreadyLoggedIn;
