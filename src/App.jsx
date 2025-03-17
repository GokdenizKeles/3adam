import { useEffect, useState, createContext } from 'react'
import './style/App.css'
import "./style/reset.css"
import Category from './compenents/Catagory';
import HowToPlay from './compenents/HowToPlay';
import { usePage } from './compenents/Router';
export const DataContext = createContext(null)
function App() {
  const page = usePage()
  const [data, setData] = useState([]);

  useEffect(() => {

    async function getData() {
      const category = await fetch("/data/data.json").then(res => res.json());
      setData(category);
      console.log(category);
    }
    getData();

  }, [])

  return (
    <div className='container'>
      <DataContext.Provider value={data}>
        {page.component}

      </DataContext.Provider>
    </div>
  )
}

export default App
