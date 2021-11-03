import React from 'react'

export default function GameOver(props) {
  return (
    props.show ?
      <div id="gameOver">
        <div>
          Você completou o jogo, parabéns!
        </div>
        <button id="restart" onClick={props.handleRestart} >Restart</button>
      </div> : <div></div>
  )
}
