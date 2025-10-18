import { useEffect, useState } from "react";
const leaderboardUrl = import.meta.env.VITE_BASEURL + "/allUserScores";
export default function LeaderBoard() {
  const [leaderBoardEntries, setLeaderBoardEntries] = useState([]);
  useEffect(() => {
    const init = async () => {
      const response = await fetch(leaderboardUrl);
      const responseVal = await response.json();
      setLeaderBoardEntries(responseVal.data);
    };
    init();
  }, []);
  return (
    <div className="container">
      {
        <ul>
          {leaderBoardEntries.map((currEntry) => {
            return (
              <li>
                <p>{currEntry.username}</p>
                <p>{currEntry.score}</p>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}
