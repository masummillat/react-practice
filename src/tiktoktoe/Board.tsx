import React, { useState } from "react";
import Square from "./Square";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<null[] | string[]>(
    Array(9).fill(null)
  );
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = () => {
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
      console.log(a, b, c);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a], squares[b], squares[c]);
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
  };

  const handleClick = (index: number) => {
    if (!winner)
      setSquares((prev) => {
        if (prev[index] === null) {
          prev[index] = isXNext ? "X" : "O";
          setIsXNext((prev) => !prev);
          setWinner(calculateWinner());
        }
        return prev;
      });
  };
  return (
    <div className="grid m-auto h-full grid-cols-3 w-64 ">
      {squares.map((square, i) => (
        <Square handleClick={handleClick} index={i} value={square} key={i} />
      ))}
      {winner ? (
        <h1>Winner: {winner}</h1>
      ) : (
        <h1>Next Player is: {isXNext ? "X" : "O"}</h1>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Board;
