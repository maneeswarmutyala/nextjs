import Head from "next/head";
import TicTacToe from "./../components/tictactoe/index";
function Game() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe | Nextjs Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta name="keywords" content="Tic Tac Toe ,nextjs" />
        <meta name="description" content="Tic Tac Toe Game With Next Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta property="og:title" content="Free!! Tic Tac Toe Game" />
        <meta property="og:site_name" content="tic tac toe" />
        <meta
          property="og:description"
          content="Free!! Free!! Play Tic Tac Toe game"
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
      <TicTacToe />
      <a
        href="https://www.hitwebcounter.com"
        target="_blank"
        style={{  visibility: 'hidden'}}
      >
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=8008103&style=0005&nbdigits=9&type=page&initCount=0"
          title="Free Counter"
          alt="web counter"
          border="0"
        />
      </a>
    </>
  );
}
export default Game;
