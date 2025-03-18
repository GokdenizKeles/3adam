import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import "../style/category.css"
import { Link, usePage } from "./Router";
import Game from "./Game";
import { use } from "react";

export default function Category() {
  const page = usePage()
  const categories = useContext(DataContext);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedWord, setSelectedWord] = useState("");
  
  useEffect(() => {

  },[selectedCategories])
  
  function handleClick(category) {
    setSelectedCategories(category);
    const length = Math.floor(Math.random() * categories.find(x => x.categoryName === category).items.length)
    setSelectedWord(categories.find(x => x.categoryName === category).items[length])
  }
  
  console.log(selectedWord);

  return (
    <>
      {selectedCategories === null ? (
        <div className="category-area">
          <div className="category-header">
            <Link to="/">
              <img className="back-icon" src="./img/back-icon.svg" alt="Back" />
            </Link>
            <h4>Pick a Category</h4>
          </div>
          <div className="categories">
            {categories.map(x => (
              <h6 key={x.categoryName} onClick={()=> handleClick(x.categoryName)}>
                {x.categoryName}
              </h6>
            ))}
          </div>
        </div>
      ) : (
        <Game selectedWord={selectedWord} selectedCategories={selectedCategories}/>
      )}
      
    </>
  )

}