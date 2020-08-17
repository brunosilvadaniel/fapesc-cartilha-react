import React from 'react'
import propTypes from 'prop-types'

import img from '../../../../assets/images/Logo17.png'

import ImgCard from './ImgCard'

import './styles.css'

export default function Card({
  handleClick,
  id,
  type, 
  flipped, 
  height, 
  width, 
  disabled,
  solved
}) {
  return(
    <div 
    className={`flip-container ${flipped ? 'flipped' : ''}`}
    style={{
      width, height
    }}
    onClick={() => disabled ? null : handleClick(id)}
    >
      <div className="flipper">
        <img
        style={{
          height,width
        }}
        className={flipped ? 'front' : 'back'}
        src={flipped || solved ? ImgCard[type] : img}
        alt={type}
        />
      </div>
    </div>
  )
}

Card.protoTypes ={
  disabled: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  flipped: propTypes.bool.isRequired,
  solved: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  front: propTypes.string.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired,
}