import { useState } from "react";
import styles from "./Timer.module.css";
function Timer({ intervalRef, setImageState }) {
  const [startTime, setStartTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  const [buttonState, setButtonState] = useState(false);
  async function handleStart() {
    setButtonState(true);
    const url = import.meta.env.VITE_BASEURL + "/start";
    const response = await fetch(url, {
      credentials: "include",
      method: "get",
    });
    const data = await response.json();
    setStartTime(data.startTime);
    setNowTime(data.startTime);
    setImageState("block");
    intervalRef.current = setInterval(() => {
      setNowTime((prev) => {
        return prev + 10;
      });
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
