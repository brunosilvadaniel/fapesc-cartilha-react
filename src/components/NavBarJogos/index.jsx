import React, {Component} from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import './index.css';

export default class NavBarJogos extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="NavBarJogos">
        <div className="grama-escorida"></div>
        <h1 className="titulo">Jogos</h1>

        <div className="Jogos">
          <NavLink to="/" className="Jogo jogo-fundo-laranja-escuro" style={{textDecoration:"none"}}>
            <h1 className="jogo-titulo ">Jogo da Memoria</h1>
          </NavLink>
          <NavLink to="/" className="Jogo jogo-fundo-vermelho" style={{textDecoration:"none"}}>
            <h1 className="jogo-titulo ">Quebra Cabeça</h1>
          </NavLink>
          <NavLink to="/" className="Jogo jogo-fundo-laranja-claro" style={{textDecoration:"none"}}>
           <h1 className="jogo-titulo">Caça Palavras</h1>
          </NavLink>
          <NavLink to="/" className="Jogo jogo-fundo-verde" style={{textDecoration:"none"}}>
          <h1 className="jogo-titulo ">Quarto jogo</h1>
          </NavLink>          
        </div>
      </div>
      </BrowserRouter>

    )
  }
}