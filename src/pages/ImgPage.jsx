import { useEffect, useState } from "react";
import ImgContainer from "../components/ImgContainer";
export default function ImgPage() {
  const [itemsToSearch, setItemsToSearch] = useState();
  useEffect(() => {
    setItemsToSearch(["thief", "sleepingDragon", "sailor"]);
  }, []);
  return <ImgContainer itemsToSearch={itemsToSearch}></ImgContainer>;
}
