import { useEffect, useState, createContext } from 'react'
import './style/App.css'
import "./style/reset.css"
import Category from './compenents/Catagory';
import HowToPlay from './compenents/HowToPlay';
export const DataContext = createContext(null)
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function getData() {
      const category  = await fetch("/data/data.json").then(res => res.json());
      setData(category);
      console.log(category);
    }
    getData();

  }, [])

  return (
    <>
      <div className='container'>
        <div className='starter-page'>
          <img src="/img/game-icon.svg" alt="" />
          <button><img src="/img/play-button.svg" alt="" /></button>
          <button className='how-to-play-bt'>How To play</button>
          <div className='login-register'>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>

        <DataContext.Provider value={ data}>
          <Category />
          <HowToPlay />

        </DataContext.Provider>
      </div>
    </>
  )
}

export default App
