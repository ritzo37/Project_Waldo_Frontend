import { useState } from "react";
import styles from "./Timer.module.css";
function Timer({ intervalRef }) {
  const [startTime, setStartTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  const [buttonState, setButtonState] = useState(false);
  async function handleStart() {
    setButtonState(true);
    const imgContainer = document.getElementById("imgContainer");
    imgContainer.style.display = "block";
    const url = import.meta.env.VITE_BASEURL + "/start";
    const currTime = Date.now();
    await fetch(url, { credentials: "include", method: "get" });
    setStartTime(currTime);
    setNowTime(currTime);
    intervalRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 10);
  }

  let currTime = (nowTime - startTime) / 1000;
  return (
    <div className={styles.container}>
      <h2>Time Elasped : {currTime}s</h2>
      <button onClick={handleStart} id="start-btn" disabled={buttonState}>
        Start
      </button>
    </div>
  );
}
export default Timer;
