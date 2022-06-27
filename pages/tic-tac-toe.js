import Head from "next/head";
import TicTacToe from "./../components/tictactoe/index";
function Game() {
  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      <TicTacToe />
    </>
  );
}
export default Game;
