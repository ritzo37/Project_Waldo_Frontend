export default function FingImg({
  item1Status,
  item2Status,
  item3Status,
  itemsToSearch,
}) {
  return (
    <div className="findImagesContainer">
      {item1Status === false && (
        <img src={`/src/img/${itemsToSearch[0]}.png`}></img>
      )}
      {item2Status === false && (
        <img src={`/src/img/${itemsToSearch[1]}.png`}></img>
      )}
      {item3Status === false && (
        <img src={`/src/img/${itemsToSearch[2]}.png`}></img>
      )}
    </div>
  );
}
