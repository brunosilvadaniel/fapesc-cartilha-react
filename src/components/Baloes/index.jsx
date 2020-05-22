import React, { Component } from 'react'
import './index.css'

export default class Baloes extends Component{
  render(){
    return(
      <div className="baloes">
        <div className="ceu">
          <div className="bonecos-balao"></div>
          <div className="grama-cima"></div>
        </div>
          <div className="grama-baixo">
        </div>  
      </div>
    )
  }
}