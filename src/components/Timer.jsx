import { useState } from "react";

function Timer({ intervalRef }) {
  const [startTime, setStartTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  async function handleStart() {
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
    <>
      <h1>{currTime}</h1>
      <button onClick={handleStart}>Start</button>
    </>
  );
}
export default Timer;
