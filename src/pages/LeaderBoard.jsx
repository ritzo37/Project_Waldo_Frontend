import { useEffect, useState } from "react";
const leaderboardUrl = import.meta.env.VITE_BASEURL + "/allUserScores";
import styles from "./LeaderBoard.module.css";
const logInCheckUrl = import.meta.env.VITE_BASEURL + "/login-status";
export default function LeaderBoard() {
  const [leaderBoardEntries, setLeaderBoardEntries] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [pageState, changePageState] = useState("loading");
  useEffect(() => {
    const func = async () => {
      const response = await fetch(logInCheckUrl, {
        method: "GET",
        credentials: "include",
      });

      const responseEntries = await fetch(leaderboardUrl, {
        method: "GET",
        credentials: "include",
      });
      const responseVal = await responseEntries.json();
      if (response.status == 200) {
        setUserLoggedIn(true);
      }
      changePageState("loaded");
      setLeaderBoardEntries(responseVal.data);
    };
    func();
  }, []);
  if (pageState === "loading") {
    return <h1 className={styles.loading}>Loading...</h1>;
  }
  return (
    <div className={styles.tableContainer}>
      <h1>LeaderBoard</h1>

      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoardEntries.map((currEntry) => {
            if (currEntry.isLoggedIn === true) {
              return (
                <tr key={currEntry.userId}>
                  <td className={styles.loggedInUserId}>
                    {currEntry.username}(you)
                  </td>
                  <td>{currEntry.score ? currEntry.score : "-"}</td>
                </tr>
              );
            } else {
              return (
                <tr key={currEntry.userId}>
                  <td>{currEntry.username}</td>
                  <td>{currEntry.score ? currEntry.score : "-"}</td>
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
