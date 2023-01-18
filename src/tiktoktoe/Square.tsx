import React from "react";

interface ISquare {
  index: number;
  value: any;
  handleClick: (index: number) => void;
}
const Square: React.FC<ISquare> = ({ index, value, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(index)}
      className="h-12 border border-gray-600 flex items-center justify-center font-bold "
    >
      {value}
    </div>
  );
};
export default Square;
