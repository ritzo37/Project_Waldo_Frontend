import islandImage from "/img/island.png";
import Timer from "./Timer";
import styles from "./ImgContainer.module.css";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function ImgContainer({
  itemsToSearch,
  item1Status,
  item2Status,
  item3Status,
  changeItem1Status,
  changeItem2Status,
  changeItem3Status,
}) {
  const [toggle, setToggle] = useState(false);
  const [cords, setCords] = useState({ xCord: 0, yCord: 0 });
  const [pointerCords, setPointerCords] = useState({ xCord: 0, yCord: 0 });
  const intervalRef = useRef(null);

  const [finishTime, changeFinishTime] = useState();
  const [imgCords, setImgCords] = useState({ cordX: 0, cordY: 0 });

  useEffect(() => {
    const stop = async () => {
      const url = import.meta.env.VITE_BASEURL + "/stop";
      const data = await fetch(url, {
        credentials: "include",
        method: "GET",
      });
      const time = await data.json();
      console.log(time);
      changeFinishTime(time);
      clearInterval(intervalRef.current);
    };
    if (item1Status && item2Status && item3Status) {
      stop();
    }
  }, [item1Status, item2Status, item3Status]);

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
    setCords({ xCord: currX, yCord: currY });
    setImgCords({ cordX: xCord, cordY: yCord });
    setPointerCords({ xCord: currX - 10, yCord: currY - 10 });
    setToggle(!toggle);
  }

  async function handleClickOnItem(item, itemNumber) {
    const url = import.meta.env.VITE_BASEURL + "/cordsCheck/" + item;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgCords }),
    });
    if (res.status === 200) {
      if (itemNumber == 1) {
        changeItem1Status(true);
        toast.success(`You found out ${itemsToSearch[0]} !`);
      } else if (itemNumber == 2) {
        changeItem2Status(true);
        toast.success(`You found out ${itemsToSearch[1]} !`);
      } else {
        changeItem3Status(true);
        toast.success(`You found out ${itemsToSearch[2]} !`);
      }
    } else {
      toast.error("Oops please try again!");
    }
  }

  if (item1Status && item2Status && item3Status) {
    return (
      <>
        <h1>You found everyone !</h1>
        <h1>Time : {finishTime}</h1>
      </>
    );
  }
  return (
    <>
      <Timer intervalRef={intervalRef}></Timer>
      <div
        id="imgContainer"
        className={styles.imgContainer}
        onClick={(e) => handleClick(e)}
      >
        {toggle === true && (
          <div
            className={styles.testingDiv}
            style={{
              top: `${pointerCords.yCord}px`,
              left: `${pointerCords.xCord}px`,
            }}
          ></div>
        )}
        <img src={islandImage} className={styles.img} />
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
                  src={`/img/${itemsToSearch[0]}.png`}
                  className={styles.choiceImg}
                  onClick={() => handleClickOnItem(itemsToSearch[0], 1)}
                />
              )}
              {!item2Status && (
                <img
                  src={`/img/${itemsToSearch[1]}.png`}
                  className={styles.choiceImg}
                  onClick={() => handleClickOnItem(itemsToSearch[1], 2)}
                />
              )}
              {!item3Status && (
                <img
                  src={`/img/${itemsToSearch[2]}.png`}
                  className={styles.choiceImg}
                  onClick={() => handleClickOnItem(itemsToSearch[2], 3)}
                />
              )}
            </div>
          </ul>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
export default ImgContainer;
