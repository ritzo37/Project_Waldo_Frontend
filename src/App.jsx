import ImgContainer from "./ImgContainer";
import { useState, useEffect } from "react";
export default function App() {
  const [itemsToSearch, setItemsToSearch] = useState();
  useEffect(() => {
    setItemsToSearch(["thief", "sleepingDragon", "sailor"]);
  }, []);
  return (
    <>
      <ImgContainer itemsToSearch={itemsToSearch}></ImgContainer>
    </>
  );
}
