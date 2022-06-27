import Head from "next/head";
function Albums(props) {
  const { photos } = props;
  return (
    <>
      <Head>
        <title>Photos | Next Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta
          name="keywords"
          content="photos listing,flexbox,grid,netxjs,json placeholder"
        />
        <meta
          name="description"
          content="Photos Listing Using Flexbox and Grid, With Json Placeholder API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta
          property="og:title"
          content="Photos Listing Using Flexbox and Grid, Nextjs Project"
        />
        <meta property="og:site_name" content="Next Js Projects" />
        <meta
          property="og:description"
          content="Photos Listing Using Flexbox and Grid, Nextjs Project"
        />
          <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DGCGRP4NKE"
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DGCGRP4NKE');`,
          }}
        ></script>
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
export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await resp.json();
  return {
    props: {
      photos: data.slice(0, 15),
    },
  };
}
