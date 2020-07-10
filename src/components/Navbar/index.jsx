import React,{Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom'


export default class Navbar extends Component{
  render(){
    return (
     
      <aside className="menu-area">
        <nav className="menu">
          <Link to="/Home" className="button-nav" style={{ textDecoration: 'none' }}>
            Os objetivos
          </Link>
          
          <Link to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Jogos
          </Link>
          <Link to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Sobre nos
          </Link>
        </nav>
      </aside>

    )
  }
};
