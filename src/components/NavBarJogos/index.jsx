import React, {Component} from 'react'
import {NavLink, Switch} from 'react-router-dom'
import './index.css';

export default class NavBarJogos extends Component{
  render(){
    let width = window.innerWidth;
    if (width> 1200){
    return(
      <>
      <div className="NavBarJogos">
        <div className="grama-escorida"></div>
        <h1 className="titulo">Jogos</h1>

        <div className="Jogos">
        
            <Switch>
              {/* <BrowserRouter> */}
              <>
                <NavLink to="/jogodamemoria" className="Jogo jogo-fundo-laranja-escuro" style={{textDecoration:"none"}}>
                  <h1 className="jogo-titulo ">Jogo da Memoria</h1>
                </NavLink>
      
                <NavLink to="/quiz" className="Jogo jogo-fundo-vermelho" style={{textDecoration:"none"}}>
                  <h1 className="jogo-titulo ">Quiz</h1>
                </NavLink>
      
                <NavLink to="/puzzle" className="Jogo jogo-fundo-laranja-claro" style={{textDecoration:"none"}}>
                  <h1 className="jogo-titulo">Quebra-Cabeça</h1>
                </NavLink>
                <NavLink to="/Velha" className="Jogo jogo-fundo-verde" style={{textDecoration:"none"}}>
                  <h1 className="jogo-titulo ">Jogo da Velha</h1>
              </NavLink>
              </>
              {/* </BrowserRouter> */}
            </Switch>
              
        </div>
      </div>
      </>

    )
  }
else{
return(
  <>
  <div className="NavBarJogos">
    <div className="grama-escorida"></div>
    <h1 className="titulo">Jogos</h1>

    <div className="Jogos-mobile">
    
        <Switch>
          {/* <BrowserRouter> */}
          <>
            <NavLink to="/jogodamemoria" className="Jogo jogo-fundo-laranja-escuro" style={{textDecoration:"none"}}>
              <h1 className="jogo-titulo-mobile">Jogo da Memoria</h1>
            </NavLink>
  
            <NavLink to="/quiz" className="Jogo jogo-fundo-vermelho" style={{textDecoration:"none"}}>
              <h1 className="jogo-titulo-mobile ">Quiz</h1>
            </NavLink>
  
            <NavLink to="/puzzle" className="Jogo jogo-fundo-laranja-claro" style={{textDecoration:"none"}}>
              <h1 className="jogo-titulo-mobile">Quebra-Cabeça</h1>
            </NavLink>
            <NavLink to="/Velha" className="Jogo jogo-fundo-verde" style={{textDecoration:"none"}}>
              <h1 className="jogo-titulo-mobile ">Jogo da Velha</h1>
          </NavLink>
          </>
          {/* </BrowserRouter> */}
        </Switch>
          
    </div>
  </div>
  </>

)

}}
}