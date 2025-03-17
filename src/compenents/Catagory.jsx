import { useContext, useEffect } from "react"
import { DataContext } from "../App"
export default function Category() {
 const { data } = useContext(DataContext);
  

  return(
    <div className="category-area">
      <div className="category-header">
        <button><img src="./img/back-icon.svg"/></button>
        <h6>Pick a Category</h6>
        <div className="categories">
          <h4>{data.Category}</h4>
        </div>
      </div>
    </div>
  )
}