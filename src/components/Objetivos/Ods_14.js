import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'


export default class Ods_14 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-14"/>
            <div className="texto-ods texto-color-14">
              <h1>14 - Erradicação da Pobreza</h1>
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
            <Link to="/Home" className="button-ods button-color-14" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


