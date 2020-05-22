import React, {Component} from 'react'
import './index.css';

export default class NavBarJogos extends Component{
  render(){
    return(
      <div className="NavBarJogos">
        <div className="grama-escorida"></div>
        <h1 className="titulo">Jogos</h1>
        <div className="Jogos">
          <div className="Jogo jogo-fundo-laranja-escuro">
            <h1 className="jogo-titulo ">Jogo da Memoria</h1>
          </div>
          <div className="Jogo jogo-fundo-vermelho">
            <h1 className="jogo-titulo ">Quebra Cabeça</h1>
          </div>
          <div className="Jogo jogo-fundo-laranja-claro">
           <h1 className="jogo-titulo">Caça Palavras</h1>
          </div>
          <div className="Jogo jogo-fundo-verde">
          <h1 className="jogo-titulo ">Quarto jogo</h1>
          </div>          
        </div>

      </div>

    )
  }
}