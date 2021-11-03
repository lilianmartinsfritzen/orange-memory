import React from 'react'

export default function CardElement(props) {
  return (
    <div onClick={() => {props.handleTurn(props.card)}} id={props.card.id} className={`card ${props.card.turned ? "turn" : ""}`}>
      <div className="front">
        <img
          className="icon"
          src={`assets/images/${props.card.icon}.png`}
          alt={props.card.icon}
        />
      </div>
      <div className="back">
        <img
          className="icon-back"
          src="assets/images/back.png"
          alt="back"
        />
      </div>
    </div>
  )
}
