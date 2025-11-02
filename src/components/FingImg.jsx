import styles from "./FingImg.module.css";
export default function FingImg({
  item1Status,
  item2Status,
  item3Status,
  itemsToSearch,
}) {
  return (
    <div className={styles.container} id="thingsToFindDiv">
      <div className={styles.findImagesContainer}>
        <h1 className={styles.heading}>Things to Find : </h1>
        {item1Status === false && (
          <img src={`/img/${itemsToSearch[0]}.png`}></img>
        )}
        {item2Status === false && (
          <img src={`/img/${itemsToSearch[1]}.png`}></img>
        )}
        {item3Status === false && (
          <img src={`/img/${itemsToSearch[2]}.png`}></img>
        )}
      </div>
    </div>
  );
}
