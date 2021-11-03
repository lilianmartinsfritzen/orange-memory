import React from 'react'
import CardElement from './CardElement'

export default function Board(props) {
  return (
    <div id="board">
      {props.cards.map((card, index) => 
        <CardElement handleTurn={props.handleTurn} key={index} card={card} ></CardElement>
      )}
    </div>
  )
}
