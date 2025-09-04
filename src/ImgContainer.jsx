import islandImage from "./island.png";
import styles from "./ImgContainer.module.css";
import item1 from "./item1.png";
import item2 from "./item2.png";
import item3 from "./item3.png";

import { useState } from "react";

function ImgContainer() {
  const [toggle, setToggle] = useState(false);
  const [cords, setCords] = useState({ xCord: 0, yCord: 0 });
  const [item1Status, changeItem1Status] = useState(false);
  const [item2Status, changeItem2Status] = useState(false);
  const [item3Status, changeItem3Status] = useState(false);

  const [imgCords, setImgCords] = useState({ cordX: 0, cordY: 0 });
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
    setCords({ xCord: PageX, yCord: PageY });
    setImgCords({ cordX: xCord, cordY: yCord });
    setToggle(!toggle);
  }
  async function handleClick1() {
    const item = "thief";
    const url = import.meta.env.VITE_BASEURL + "/cordsCheck/" + item;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgCords }),
    });
    const data = await res.json();
    console.log(res.status);
    if (res.status === 200) changeItem1Status(true);
  }
  async function handleClick2() {
    const item = "sailor";
    const url = import.meta.env.VITE_BASEURL + "/cordsCheck/" + item;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgCords }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 200) changeItem2Status(true);
  }
  async function handleClick3() {
    const item = "sleepingDragon";
    const url = import.meta.env.VITE_BASEURL + "/cordsCheck/" + item;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgCords }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 200) changeItem3Status(true);
  }
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
            {!item1Status && (
              <img
                src={item1}
                className={styles.choiceImg}
                onClick={handleClick1}
              />
            )}
            {!item2Status && (
              <img
                src={item2}
                className={styles.choiceImg}
                onClick={handleClick2}
              />
            )}
            {!item3Status && (
              <img
                src={item3}
                className={styles.choiceImg}
                onClick={handleClick3}
              />
            )}
          </div>
        </ul>
      )}
    </div>
  );
}
export default ImgContainer;
