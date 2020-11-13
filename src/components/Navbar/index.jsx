import React,{Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'
import LogoIcon from '../../assets/images/Logo17.png'

export default class Navbar extends Component{
  render(){
    return (
     
      <aside className="menu-area">
        
        <nav className="menu">
          <div className="Container-logo">
            <img src={LogoIcon}/>
          </div>
          <Link to="/Home" className="button-nav" style={{ textDecoration: 'none' }}>
            Os objetivos
          </Link>
          <Link to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Jogos
          </Link>
          <Link to="/Sobre" className="button-nav" style={{ textDecoration: 'none' }}>
            Sobre-nos
          </Link>
          <Link to="/VoceSabia" className="button-nav" style={{ textDecoration: 'none' }}>
            Você Sabia?
          </Link> <Link to="/Extras" className="button-nav" style={{ textDecoration: 'none' }}>
            Extras
          </Link>
        </nav>
      </aside>

    )
  }
};
