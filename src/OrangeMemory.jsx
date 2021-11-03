import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import GameOver from './components/GameOver';
import game from './game/index'

export default function OrangeMemory() {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(game.createGameCards())
  }, [])

  function restart() {
    game.clearCards();
    setCards(game.createGameCards());
    setGameOver(false);
  }

  function handleTurn(card) {

    game.turnCard(card.id, () => {
      setGameOver(true);
    }, () => {
      setCards([...game.cards]);
    })
    setCards([...game.cards]);
  }

  return (
    <div>
      <Board handleTurn={handleTurn} cards={cards}></Board>
      <GameOver show={gameOver} handleRestart={restart} ></GameOver>
    </div>
  )
}