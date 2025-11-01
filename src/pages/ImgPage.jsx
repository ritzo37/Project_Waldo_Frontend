import { useEffect, useState } from "react";
import ImgContainer from "../components/ImgContainer";
import FingImg from "../components/FingImg";
import styles from "./ImgPage.module.css";
const itemsUrl = import.meta.env.VITE_BASEURL + "/getItems";
export default function ImgPage() {
  const [itemsToSearch, setItemsToSearch] = useState([]);
  const [item1Status, changeItem1Status] = useState(false);
  const [item2Status, changeItem2Status] = useState(false);
  const [item3Status, changeItem3Status] = useState(false);
  const [state, changeState] = useState("loading");
  useEffect(() => {
    const init = async () => {
      const response = await fetch(itemsUrl);
      const data = await response.json();

      let items = [];
      data.dataToSend.map((currItem) => {
        items.push(currItem.name);
      });
      changeState("loaded");
      setItemsToSearch(items);
    };
    init();
  }, []);
  if (state === "loading") {
    return <h1 className={styles.loading}>Loading...</h1>;
  }
  return (
    <div className={styles.container}>
      <FingImg
        itemsToSearch={itemsToSearch}
        item1Status={item1Status}
        item2Status={item2Status}
        item3Status={item3Status}
      ></FingImg>
      <ImgContainer
        itemsToSearch={itemsToSearch}
        item1Status={item1Status}
        item2Status={item2Status}
        item3Status={item3Status}
        changeItem1Status={changeItem1Status}
        changeItem2Status={changeItem2Status}
        changeItem3Status={changeItem3Status}
      ></ImgContainer>
    </div>
  );
}
