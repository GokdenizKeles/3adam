import { useContext, useEffect } from "react"
import { DataContext } from "../App"
import "../style/category.css"
export default function Category() {
 const categories = useContext(DataContext);
 

 console.log(categories);
  

  return (
    <div className="category-area">
      <div className="category-header">
        <img className="back-icon" src="./img/back-icon.svg"/>
        <h4>Pick a Category</h4>
      </div>
        <div className="categories">
          {categories.map(x => 
            <h6>{x.categoryName}</h6>
           )}
        </div>
    </div>
  )
}