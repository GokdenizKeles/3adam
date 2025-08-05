import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Router from './compenents/Router.jsx'
import HowToPlay from './compenents/HowToPlay.jsx';
import Category from './compenents/Catagory.jsx';
import StartPage from './compenents/StartPage.jsx';
import Game from './compenents/Game.jsx';

const routes = [
    {
        url: '/',
        component: <StartPage />
    },
    {
        url: '/how-to-play',
        component: <HowToPlay />
    },
    {
        url: '/category',
        component: <Category />
    },
    {
        url: '/game',
        component: <Game />
    },
    {
        url: '/game/:category/',
        component: <Game />
    }



];

createRoot(document.getElementById('root')).render(
    <Router routes={routes}>
        <App />
    </Router>
)
