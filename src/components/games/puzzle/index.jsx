import React, { Component } from 'react';
import './index.css';

import PuzzleTouch from 'react-image-puzzle-touch';

import Quebra from '../../../assets/images/quebra-cabeça-full.jpg'
import './index.css';
import Footer from '../../Footer/index';
import NavBar from '../../Navbar/index'

class PuzzleGame extends React.Component {

  render() {
    return(
      <>
        <div className="fundo">
        <NavBar/>
        <div classname="puzzle-full">
         <PuzzleTouch image={Quebra} size="800" level="4"/>
        </div>
        <Footer/>
        </div>
      </>
    )

     
  };
}

export default PuzzleGame;

