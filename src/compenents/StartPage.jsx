import { Link } from "./Router";

export default function StartPage() {
  return (

    <div className='starter-page'>
      <img src="/img/game-icon.svg" alt="" />
      <Link href="/category'"><img src="/img/play-button.svg" alt="" /></Link>
     <Link href="/how-to-play"> <button className='how-to-play-btn'>How To Play</button></Link>
      {/* <div className='login-register'>
        <button>Login</button>
        <button>Register</button>
      </div> */}
    </div>

  )
}