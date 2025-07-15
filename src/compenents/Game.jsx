import { useEffect, useRef, useState } from "react";
import "../style/game.css";
import { Link } from "./Router";

export default function Game({ selectedCategories, selectedWord }) {
  const dialogref = useRef(null);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [health, setHealth] = useState(100);

  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  function specialChars() {
    const wordChars = selectedWord.name.toUpperCase().split(" ").join("").split("");
    const isSpecial = wordChars.filter(x => letters.includes(x.toUpperCase()));
    return isSpecial;
  }
  const special = specialChars();

  useEffect(() => {
    const isAllFound = special.every(letter => clickedLetters.includes(letter));
    if (isAllFound && special.length > 0) {
      dialogref.current?.showModal();
    }
  }, [clickedLetters, special]);

  useEffect(() => {
    if (health === 0) {
      dialogref.current?.showModal();
    }
  }, [health]);

  function handleLetterClick(x) {
    setClickedLetters(prev => [...prev, x]);
    if (!special.includes(x)) {
      setHealth(prev => Math.max(prev - 20, 0)); 
    }
  }

  function openDialog() {
    dialogref.current.showModal();
  }

  return (
    <>
      <div className="game-area">
        <div className="game-header">
          <div className="flex">
            <img onClick={openDialog} src="/img/hamburger-menu.svg" alt="Menu" />
            <h5>{selectedCategories}</h5>
          </div>
          <div className="flex">
            <div className="health-bar">
              <div
                className="w3-grey"
                style={{ width: `${health}%` }}
              ></div>
            </div>
            <img src="/img/heart-icon.svg" alt="Heart" />
          </div>
        </div>

        <div className="game-container">
          {special.map((x, index) => (
            <div key={index} className={clickedLetters.includes(x) ? "correct-box" : "empty-box"}>
              <h2 className={clickedLetters.includes(x) ? "correct" : "hang-area"}>{x}</h2>
            </div>
          ))}
        </div>

        <div className="game-letters">
          {letters.map(x => (
            <button
              key={x}
              disabled={clickedLetters.includes(x)}
              onClick={() => handleLetterClick(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <dialog className="game-dialog" ref={dialogref}>
        <img src="/img/paused.svg" alt="Paused" />
        <div className="dialog-btns">
          <button onClick={() => dialogref.current.close()} className="btn blue">CONTINUE</button>
          <Link href="/catagory"><button className="btn blue">NEW CATEGORY</button></Link>
          <Link href="/"><button className="btn pink">QUIT GAME</button></Link>
        </div>
      </dialog>
    </>
  );
}
