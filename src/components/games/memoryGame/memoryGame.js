import React, {useState, useEffect} from 'react'
import Board from './Board/index'

import NavBar from '../../Navbar/index'

import './style.css'

import initializeDeck from './deck'
import { Component } from 'react'

export default function MemoryGame(){
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() =>{
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() =>{
    window.scrollTo(0,0);
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if(flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0],id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else{
        setTimeout(resetCards, 2000)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  } 

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) =>{
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resizeBoard = () =>{
    setDimension(
      Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  }

  return( 
    <div className="memory-game">
      <NavBar/>
      <div className="wrap-game">
        <div className="cards">
        <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}/>
        </div>
      </div>
    </div>
  )
}