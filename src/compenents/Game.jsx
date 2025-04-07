import { useContext, useEffect } from "react";
import "../style/game.css"
import { useState } from "react";


export default  function Game({selectedCategories, selectedWord}) {
  const [clickedLetters, setClickedLetters] = useState([]);
  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  function specialChars() {
    const wordChars = selectedWord.name.toUpperCase().split(" ").join("").split("");
    const isSpecial = wordChars.filter(x => letters.includes(x.toUpperCase()));

    return isSpecial
  }
  const special = specialChars()
  console.log(special);

  useEffect(() => {
    console.log("clickedLetters güncellendi:", clickedLetters);
  }, [clickedLetters]);

  // Harfe tıklama
  function handleLetterClick(x) {
    if (!clickedLetters.includes(x)) {
      setClickedLetters(prev => [...prev, x]);
      console.log(x)
      console.log(clickedLetters);
    }
  }
  
  return(
    <div className="game-area">
      <div className="game-header">
        <div className="flex">
          <img src="/img/hamburger-menu.svg"/>
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
  )
}