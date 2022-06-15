import Head from "next/head";
import { useEffect, useState } from "react";
function Albums() {
  const [photos, setPhotos] = useState([]);
  useEffect(async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await resp.json();
    setPhotos(data.slice(0, 15));
  });
  return (
    <>
      <Head>
        <title>Photos | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            border: "5px dashed green",
            padding: "10px",
          }}
        >
          <h1>Flex Box</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {photos?.map((album) => {
              return (
                <img
                  key={album.title}
                  style={{ width: "150px", height: "150px" }}
                  src={album.thumbnailUrl}
                  alt={album.title}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            width: "50%",
            border: "5px dashed red",
            padding: "10px",
          }}
        >
          <h1>Grid</h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              justifyContent: "space-evenly",
            }}
          >
            {photos?.map((album) => {
              return (
                <img
                  key={album.title}
                  style={{ width: "150px", height: "150px" }}
                  src={album.thumbnailUrl}
                  alt={album.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Albums;
