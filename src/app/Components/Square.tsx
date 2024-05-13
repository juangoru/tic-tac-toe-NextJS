import { FC } from "react";

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
