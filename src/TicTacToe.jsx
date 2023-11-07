import React, { useRef, useState } from "react";
import './TicTacToe.css';
import CircleIcon from "./assets/circle.png";
import CrossIcon from "./assets/cross.png";

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
        if (data[0]===data[1] && data[1] === data[2] && data[2]!=="")
    {
      winner(data[2]);
    }
    else if (data[3]===data[4] && data[4] === data[5] && data[5]!=="")
    {
      winner(data[5]);
    }
    else if (data[6]===data[7] && data[7] === data[8] && data[8]!=="")
    {
      winner(data[8]);
    }
    else if (data[0]===data[3] && data[3] === data[6] && data[6]!=="")
    {
      winner(data[6]);
    }
    else if (data[1]===data[4] && data[4] === data[7] && data[7]!=="")
    {
      winner(data[7]);
    }
    else if (data[2]===data[5] && data[5] === data[8] && data[8]!=="")
    {
      winner(data[8]);
    }
    else if (data[0]===data[4] && data[4] === data[8] && data[8]!=="")
    {
      winner(data[8]);
    }
    else if (data[0]===data[1] && data[1] === data[2] && data[2]!=="")
    {
      winner(data[2]);
    }
    else if (data[2]===data[4] && data[4] === data[6] && data[6]!=="")
    {
      winner(data[6]);
    }
  };

  const winner = (win) => {
    setLock(true);
    if (win === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src=${CrossIcon}>`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src=${CircleIcon}>`;
    }
  };

  const toggle = (e, num) => {
    if (lock) {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${CrossIcon}'>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${CircleIcon}'>`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin(data);
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = 'Tic-Tac-Toe';
    boxArray.map((e) => {
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
