import Head from "next/head";
import TicTacToe from "./../components/tictactoe/index";
function Game() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe | Nextjs Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maneeswar Mutyala" />
        <meta name="keywords" content="Tic Tac Toe ,nextjs"/>
        <meta name="description" content="Tic Tac Toe Game With Next Js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/44763136?s=400&u=27ce34de0b72f59ac2894407853898a86e475b86&v=4"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/maneeswarmutyala" />
        <meta property="og:title" content="Free!! Tic Tac Toe Game" />
        <meta property="og:site_name" content="tic tac toe" />
        <meta property="og:description" content="Free!! Free!! Play Tic Tac Toe game" />

      </Head>
      <TicTacToe />
    </>
  );
}
export default Game;
