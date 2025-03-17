import { useEffect, useState,createContext  } from 'react'
import './style/App.css'
import "./style/reset.css"
import Category from './compenents/Catagory';
export const DataContext = createContext(null)
function App() {

  const [data,setData] = useState([]);

  useEffect(() => {

   async function getData() {
      const {categories} = await fetch("/public/data/data.json").then(res => res.json());
      setData(categories);
      console.log(categories);
    } 
    getData();
    
  },[])

  return (
    <>
    <div className='container'>
      <div className='starter-page'>
        <img src="./public/img/game-icon.svg" alt="" />
        <button><img src="/img/play-button.svg" alt="" /></button>
        <button className='how-to-play-bt'>How To play</button>
        <div className='login-register'>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      
    </div>
    <DataContext.Provider value={{data}}>
      <Category />
    </DataContext.Provider>
    </>
  )
}

export default App
