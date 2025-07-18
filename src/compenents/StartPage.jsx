import { Link } from "./Router";

export default function StartPage() {
  return (

    <div className='starter-page'>
      <img src="/img/game-icon.svg" alt="" />
      <Link href="/catagory'"><img src="/img/play-button.svg" alt="" /></Link>
      <button className='how-to-play-btn'><Link href="/how-to-play">How To Play</Link></button>
      {/* <div className='login-register'>
        <button>Login</button>
        <button>Register</button>
      </div> */}
    </div>

  )
}