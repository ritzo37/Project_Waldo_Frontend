import islandImage from "./island.png";
import styles from "./ImgContainer.module.css";
import item1 from "./item1.png";
import item2 from "./item2.png";
import item3 from "./item3.png";
import { useState } from "react";

function ImgContainer() {
  const [toggle, setToggle] = useState(false);
  const [cords, setCords] = useState({ xCord: 0, yCord: 0 });

  function handleClick(e) {
    const element = document.getElementById("absDiv");
    if (element) {
      setToggle(!toggle);
      return;
    }
    const rect = e.target.getBoundingClientRect();
    const currLeft = rect.left;
    const currTop = rect.top;
    const currHeight = rect.height;
    const currWidth = rect.width;
    const currX = e.clientX - currLeft;
    const currY = e.clientY - currTop;
    let xCord = parseInt((currX / currHeight) * 1000);
    let yCord = parseInt((currY / currWidth) * 1000);
    let PageX = e.pageX;
    let PageY = e.pageY;
    console.log(xCord + " " + yCord);
    setCords({ xCord: PageX, yCord: PageY });
    setToggle(!toggle);
  }
  function handleClick1() {
    console.log("You clicked me!");
  }
  function handleClick2() {}
  function handleClick3() {}
  return (
    <div className={styles.imgContainer} onClick={(e) => handleClick(e)}>
      <img src={islandImage} className={styles.img} />{" "}
      {toggle === true && (
        <ul
          id="absDiv"
          style={{
            top: `${cords.yCord}px`,
            left: `${cords.xCord}px`,
          }}
          className={styles.absDiv}
        >
          <div className={styles.choiceContainer}>
            <img
              src={item1}
              className={styles.choiceImg}
              onClick={handleClick1}
            />
            <img
              src={item2}
              className={styles.choiceImg}
              onClick={handleClick2}
            />
            <img
              src={item3}
              className={styles.choiceImg}
              onClick={handleClick3}
            />
          </div>
        </ul>
      )}
    </div>
  );
}
export default ImgContainer;
