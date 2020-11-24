import React, { Component } from 'react';


import PuzzleTouch from 'react-image-puzzle-touch';

import Quebra from '../../../assets/images/quebra-cabeça-full.jpg'
import './index.css';
import Footer from '../../Footer/index';
import NavBar from '../../Navbar/index'

class PuzzleGame extends React.Component {

  render() {
    let width = window.innerWidth;
    if (width> 1200){
    return(
      <div className="start">
        <NavBar/>
        <div className="fundo">
       
        <div className="puzzle-full">
          <PuzzleTouch className="puzzletest" image={Quebra} size="800" level="4"/>
        </div>
        <Footer/>
        </div>
      </div>
    )

     
  }else{
    return(
      <div className="start-mobile">
        <NavBar/>
        <div className="fundo">
       
        <div className="puzzle-full-mobile">
          <PuzzleTouch className="puzzletest" image={Quebra} size="800" level="4"/>
        </div>
        <Footer/>
        </div>
      </div>
    )
    }
  };
}

export default PuzzleGame;

