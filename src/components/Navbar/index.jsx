import React,{Component} from 'react';
import './index.css'
import {NavLink, BrowserRouter} from 'react-router-dom'


export default class Navbar extends Component{
  render(){
    return (
      <BrowserRouter>
      <aside className="menu-area">
        <nav className="menu">
          <NavLink to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Os objetivos
          </NavLink>
          
          <NavLink to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Jogos
          </NavLink>
          <NavLink to="/" className="button-nav" style={{ textDecoration: 'none' }}>
            Contato
          </NavLink>
        </nav>
      </aside>
      </BrowserRouter>
    )
  }
};
