import React, { useState } from "react";
import "./App.css";
import Board from "./components/board/Board";

const SIZE = 10;

function App() {
  const booleanArray: boolean[] = [];
  const booleanTwoDimArray: boolean[][] = [];

  for (let index = 0; index < SIZE; index++) {
    booleanArray.push(false);
  }

  for (let index = 0; index < SIZE; index++) {
    booleanTwoDimArray.push(booleanArray);
  }

  const initialState = booleanTwoDimArray;

  const [state, setState] = useState(initialState);

  const toggleCellState = (i: number, j: number) => {
    const newState = state.map((arr) => arr.slice());
    newState[i][j] = !newState[i][j];
    setState(newState);
  };

  const isHit = (i: number, j: number) => {
    for (let index = 0; index < SIZE; index++) {
      if (state[i][index]) {
        return true;
      }
    }
    for (let index = 0; index < SIZE; index++) {
      if (state[index][j]) {
        return true;
      }
    }
    for (let indexX = 0; indexX < SIZE; indexX++) {
      for (let indexY = 0; indexY < SIZE; indexY++) {
        if (
          (indexX - i) * (indexX - i) === (indexY - j) * (indexY - j) &&
          state[indexX][indexY]
        ) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <div className="App container">
      <h2>App</h2>
      <Board
        size={SIZE}
        onClick={toggleCellState}
        state={state}
        isHit={isHit}
      />
    </div>
  );
}

export default App;
