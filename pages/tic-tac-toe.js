import Head from "next/head";
import TicTacToe from "../components/ticTacToe/index";
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
