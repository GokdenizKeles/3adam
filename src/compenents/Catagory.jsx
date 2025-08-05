import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import "../style/category.css"
import { Link, usePage } from "./Router";
import Game from "./Game";


export default function Category() {
  const page = usePage()
  const categories = useContext(DataContext);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {

  }, [selectedCategories])

  function handleClick(category) {
    setSelectedCategories(category);
    const length = Math.floor(Math.random() * categories.find(x => x.categoryName === category).items.length)
    setSelectedWord(categories.find(x => x.categoryName === category).items[length])
    window.location.hash = `/${category}`;
  }


  // console.log(selectedWord);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const category = hash.replace(/^#\//, "");

      if (category) {
        setSelectedCategories(category);
        const categoryData = categories.find(x => x.categoryName === category);
        if (categoryData && categoryData.items.length) {
          const randomIndex = Math.floor(Math.random() * categoryData.items.length);
          setSelectedWord(categoryData.items[randomIndex]);
        }
      }
    };


    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [categories]);

  return (
    <>
      {selectedCategories === null ? (
        <div className="category-area">
          <div className="category-header">
            <Link href="/">
              <img className="back-icon" src="./img/back-icon.svg" alt="Back" />
            </Link>
            <h4>Pick a Category</h4>
          </div>
          <div className="categories">
            {categories.map(x => (
              <h6 key={x.categoryName} onClick={() => handleClick(x.categoryName)}>
                {x.categoryName}
              </h6>
            ))}
          </div>
        </div>
      ) : (
        <Game selectedWord={selectedWord} selectedCategories={selectedCategories} />

      )}

    </>
  )

}