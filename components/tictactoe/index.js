import { useState } from "react";
import styles from "./game.module.scss";
import { PLAYER_1, PLAYER_2 } from "./constants";
const ticTacToe = () => {
  let initData = ["", "", "", "", "", "", "", "", ""];
  const [clicks, setClicks] = useState(0);
  const [gameData, setgameData] = useState(initData);
  const [winner, setwinner] = useState(null);
  const checkWinner = (currentPlayer) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameData[a] === currentPlayer &&
        gameData[b] === currentPlayer &&
        gameData[c] === currentPlayer
      ) {
        return true;
      }
    }
    return false;
  };
  const handleReset = () => {
    if (clicks > 0) {
      setgameData(initData);
      setwinner(null);
      setClicks(0);
    }
  };
  const handleGame = (index) => {
    if (gameData[index] != PLAYER_1 || gameData[index] != PLAYER_2) {
      if (winner) {
        handleReset();
        return;
      }
      let user;
      if (clicks % 2 === 0) {
        user = PLAYER_1;
      } else {
        user = PLAYER_2;
      }
      gameData[index] = user;
      if (clicks >= 5) {
        if (checkWinner(user)) {
          setwinner(user);
        } else if (clicks == 8) {
          setwinner(undefined);
        }
      }
      setClicks(clicks + 1);
    }
  };
  const isGameOver = () => {
    return winner || typeof winner == "undefined";
  };
  return (
    <div className={styles.container}>
      <h2>Tic Tac Toe</h2>
      <div className={styles.gameWrapper}>
        <div className={styles.board}>
          {gameData?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleGame(index)}
                disabled={!!item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className={styles.gameDetails}>
          <p>Game Details</p>
          {!isGameOver() && (
            <h2>
              {clicks > 0 ? "Next Player" : "Player"} : &nbsp;
              {clicks % 2 === 0 ? PLAYER_1 : PLAYER_2}
            </h2>
          )}
          <h2>
            Winner :{" "}
            {winner
              ? winner
              : typeof winner == "undefined"
              ? "Game Draw"
              : "Game in Progress.."}{" "}
          </h2>
        </div>
      </div>
      <button
        onClick={handleReset}
        disabled={!isGameOver()}
        className={styles.resetBtn}
      >
        Reset Game
      </button>
    </div>
  );
};
export default ticTacToe;
