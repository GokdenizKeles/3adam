import { useContext } from "react";
import "../style/game.css"


export default  function Game({selectedCategories, selectedWord}) {
  const letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
  function specialChars() {
    const wordChars = selectedWord.name.toUpperCase().split(" ").join("").split("");
    const isSpecial = wordChars.filter(x => letters.includes(x.toUpperCase()))

    return isSpecial
  }
  const special = specialChars()
  console.log(special);
  
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
        <h5></h5>
      </div>
      <div className="game-letters">
        {letters.map(x => 
          <button key={x}>{x}</button>
        )}
      </div>
    </div>
  )
}