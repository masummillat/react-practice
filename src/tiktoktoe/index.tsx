import React from "react";
import Board from "./Board";

const TikTokToe: React.FC = () => {
  return (
    <div className="prose lg:prose-xl text-center">
      <h1 className="prose-xl ">Tik Tok Toe</h1>
      <Board />
    </div>
  );
};

export default TikTokToe;
