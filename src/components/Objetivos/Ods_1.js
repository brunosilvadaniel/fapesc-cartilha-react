import React, { Component } from 'react'
import {Link, BrowserRouter} from 'react-router-dom'
import './Styles.css'


export default class Ods_1 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-1-grande"/>
            <div className="texto-ods">
              <h1>1 - Erradicação da Pobreza</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque vulputate leo non sapien porttitor convallis. 
                Aliquam efficitur augue in odio ultricies, vehicula ullamcorper enim suscipit. 
                Maecenas eget est in turpis volutpat volutpat ac in metus. 
                Praesent condimentum efficitur ligula nec hendrerit. 
                Donec blandit at sapien sit amet consequat. 
                Aenean at nisl urna. Integer tempus vulputate est, vitae luctus urna posuere in.</p>
              </div>
          </div>
          <div className="envolve-button-ods">
            <Link to="/Home" className="button-ods" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


