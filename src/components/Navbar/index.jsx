import React,{Component} from 'react';
import './index.css'


export default class Navbar extends Component{
  render(){
    return (
      <aside className="menu-area">
        <nav className="menu">
          <button>
            Os objetivos
          </button>
          <button>
            Jogos
          </button>
          <button>
            Contato
          </button>
        </nav>
      </aside>
    )
  }
};
