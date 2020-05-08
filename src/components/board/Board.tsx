import React from "react";
import Cell from "../cell/Cell";
import "./board.scss";

type Props = {
  size: number;
  onClick: (i: number, j: number) => void;
  state: boolean[][];
  isHit: (i: number, j: number) => boolean;
};

const Board: React.FC<Props> = ({ size, onClick, state, isHit }) => {
  const cells: JSX.Element[][] = [];
  for (let i = 0; i < size; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < size; j++) {
      row.push(
        <Cell
          row={i}
          column={j}
          onClick={onClick}
          state={state}
          isHit={isHit}
          key={`${i}-${j}`}
        />
      );
    }
    cells.push(row);
  }
  const row = (rowNumber: number) => {
    return cells[rowNumber];
  };

  const rows = cells.map((item, index) => (
    <div className="row" key={index}>
      {row(index)}
    </div>
  ));

  return <div>{rows}</div>;
};

export default Board;
