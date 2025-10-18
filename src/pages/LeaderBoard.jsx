import { useEffect, useState } from "react";
const leaderboardUrl = import.meta.env.VITE_BASEURL + "/allUserScores";
import styles from "./LeaderBoard.module.css";
export default function LeaderBoard() {
  const [leaderBoardEntries, setLeaderBoardEntries] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const init = async () => {
        const response = await fetch(leaderboardUrl, {
          method: "get",
          headers: { Authorization: `Bearer ${token}` },
        });
        const responseVal = await response.json();
        setLeaderBoardEntries(responseVal.data);
        setUserLoggedIn(true);
      };
      init();
    } else {
      const init = async () => {
        const response = await fetch(leaderboardUrl, {
          method: "get",
        });
        const responseVal = await response.json();
        setLeaderBoardEntries(responseVal.data);
      };
      init();
    }
  }, []);
  return (
    <div className={styles.tableContainer}>
      <h1>LeaderBoard</h1>

      <table>
        <thead>
          <th>UserName</th>
          <th>Score</th>
        </thead>
        <tbody>
          {leaderBoardEntries.map((currEntry) => {
            if (currEntry.isLoggedIn === true) {
              return (
                <tr key={currEntry.userId}>
                  <td className={styles.loggedInUserId}>
                    {currEntry.username}(you)
                  </td>
                  <td>{currEntry.score}</td>
                </tr>
              );
            } else {
              return (
                <tr key={currEntry.userId}>
                  <td>{currEntry.username}</td>
                  <td>{currEntry.score}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {userLoggedIn === false && <h2>Please login to see your score here!</h2>}
    </div>
  );
}
