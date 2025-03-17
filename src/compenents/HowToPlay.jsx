import "../style/HowToPlay.css"

export default function HowToPlay() {
  return (
    <>
      <div className="how-to-play-header">
        <img src="/img/back-icon.svg" alt="" />
        <h2>How To Play0</h2>
      </div>

      <div className="card">
        <span>01</span>
        <div>
          <h2>Choose a category</h2>
          <p>First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
        </div>
      </div>
      <div className="card">
        <span>02</span>
        <div>
          <h2>Guess letters</h2>
          <p>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</p>
        </div>
      </div>
      <div className="card">
        <span>03</span>
        <div>
          <h2>Win or lose</h2>
          <p>You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
        </div>
      </div>
    </>
  )

}