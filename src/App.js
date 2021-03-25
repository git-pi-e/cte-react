import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Square(props) {
  const [val, setVal] = useState(props.board[props.row - 1][props.col - 1]);
  const onPress = () => {
    console.log("Hey");
    const newBoard = props.board;
    newBoard[props.row - 1][props.col - 1] = "X";
    setVal("X");
    console.log(newBoard);
    props.setBoard(newBoard);
    console.log(props.board);
  };
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid black",
        background: "#bbb",
        fontSize: 72,
        textAlign: "center",
      }}
      onClick={onPress}
    >
      {val}
    </div>
  );
}

function Row(props) {
  const { board, setBoard, row, col } = props;
  return (
    <div className="Row">
      <Square board={board} setBoard={setBoard} row={row} col={1} />
      <Square board={board} setBoard={setBoard} row={row} col={2} />
      <Square board={board} setBoard={setBoard} row={row} col={3} />
    </div>
  );
}

function App() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  return (
    <div>
      <Row board={board} setBoard={setBoard} row={1} />
      <Row board={board} setBoard={setBoard} row={2} />
      <Row board={board} setBoard={setBoard} row={3} />
    </div>
  );
}

export default App;
