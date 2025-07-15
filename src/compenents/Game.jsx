import { useContext, useEffect,useRef } from "react";
import "../style/game.css"
import { useState } from "react";
import { Link } from "./Router";




export default  function Game({selectedCategories, selectedWord}) {


  const dialogref = useRef(null);
  const [clickedLetters, setClickedLetters] = useState([]);
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
  console.log(special);

   useEffect(() => {
    const isAllFound = special.every(letter => clickedLetters.includes(letter));
    if (isAllFound && special.length > 0) {
      dialogref.current?.showModal();
    }
  }, [clickedLetters, special]);


  function handleLetterClick(x) {
      setClickedLetters(prev => [...prev, x]);
      console.log(x)
      console.log(clickedLetters);
  }

  function openDialog() {
      dialogref.current.showModal();
  }
  
  return(
    <>
    <div className="game-area">
      <div className="game-header">
        <div className="flex">
          <img onClick={openDialog} src="/img/hamburger-menu.svg"/>
          <h5>{selectedCategories}</h5>
        </div>
        <div className="flex">
          <div className="health-bar">
            <div className="w3-grey"></div>
          </div>
          <img src="/img/heart-icon.svg"/>
        </div>
      </div>
      <div className="game-container">
        {special.map(x => 
        <div key={x.name} className={clickedLetters.includes(x) ? "correct-box": "empty-box"}>
          <h2 className= {clickedLetters.includes(x) ? "correct": "hang-area"}>{x}</h2>
        </div>
        )}
      </div>
      <div className="game-letters">
        {letters.map(x => 
          <button disabled = {clickedLetters.includes(x)} onClick={() => handleLetterClick(x)} key={x}>{x}</button>
        )}
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
  )
}