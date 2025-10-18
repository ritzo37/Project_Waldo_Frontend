import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.instructionsDiv}>
        <h1>Intructions : </h1>
        <p>Okay so to play the game so you have to click on game.</p>
        <p>
          Then you will get some wild images, which you need to find out in the
          whole image!
        </p>
        <p>
          Looks interesting right? But wait till you realize that you can also
          see where you stand by going to the leaderboard section.
        </p>
        <p>But make sure you login to save your score and enjoy the game!</p>
      </div>
    </>
  );
}
