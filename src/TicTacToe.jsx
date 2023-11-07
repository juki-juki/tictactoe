import React, { useRef, useState } from "react";
import './TicTacToe.css';
import CircleIcon from "./assets/button.png";
import CrossIcon from "./assets/cancel.png";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const titleRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const checkWin = (data) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [a, b, c] of winningCombinations) {
      if (data[a] === data[b] && data[b] === data[c] && data[a] !== "") {
        winner(data[a]);
        return;
      }
    }
  };

  const winner = (win) => {
    setLock(true);
    titleRef.current.innerHTML = `Congratulations: <img src=${win === "x" ? CrossIcon : CircleIcon}>`;
  };
  

  const toggle = (e, num) => {
    if (lock) return;
    
    const icon = count % 2 === 0 ? CrossIcon : CircleIcon;
    e.target.innerHTML = `<img src='${icon}'>`;
    data[num] = count % 2 === 0 ? "x" : "o";
    setCount(count + 1);
    checkWin(data);
  };
  
  const reset = () => {
    setLock(false);
    setData(Array(9).fill(""));
    titleRef.current.innerHTML = 'Tic-Tac-Toe';
    boxArray.forEach((e) => {
      e.current.innerHTML = "";
    });
  };
  

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic-Tac-Toe</h1>
      <div className="board">
        <div className="rowA">
          <div className="box" ref={box1} onClick={(e) => { toggle(e, 0); }}></div>
          <div className="box" ref={box2} onClick={(e) => { toggle(e, 1); }}></div>
          <div className="box" ref={box3} onClick={(e) => { toggle(e, 2); }}></div>
        </div>
        <div className="rowB">
          <div className="box" ref={box4} onClick={(e) => { toggle(e, 3); }}></div>
          <div className="box" ref={box5} onClick={(e) => { toggle(e, 4); }}></div>
          <div className="box" ref={box6} onClick={(e) => { toggle(e, 5); }}></div>
        </div>
        <div className="rowC">
          <div className="box" ref={box7} onClick={(e) => { toggle(e, 6); }}></div>
          <div className="box" ref={box8} onClick={(e) => { toggle(e, 7); }}></div>
          <div className="box" ref={box9} onClick={(e) => { toggle(e, 8); }}></div>
        </div>
      </div>
      <button className="reset" onClick={() => { reset(); }}>RESET</button>
    </div>
  );
}

export default TicTacToe;
