import React from "react";
import "./cell.scss";
import queenIcon from "./queen.svg";

type Props = {
  row: number;
  column: number;
  onClick: (i: number, j: number) => void;
  state: boolean[][];
  isHit: (i: number, j: number) => boolean;
};

const Cell: React.FC<Props> = ({ row, column, onClick, state, isHit }) => {
  const classes: string[] = [];
  classes.push("cell");
  if ((row + column) % 2 === 0) {
    classes.push("black");
  }
  if (isHit(row, column)) {
    classes.push("hit");
  }
  return (
    <div
      className={classes.join(" ")}
      onClick={() => onClick(row, column)}
      key={`${row}-${column}`}
    >
      {state[row][column] ? <img src={queenIcon} alt="queen" /> : null}
    </div>
  );
};

export default Cell;
