import React, { Component } from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom'
import './index.css'
import boy from '../../assets/pngs/kids/boy.png';
import girl from '../../assets/pngs/kids/girl.png';
import mato from '../../assets/pngs/kids/matos.png'

import ods1 from '../../assets/pngs/kids/ODS1.png'
import ods2 from '../../assets/pngs/kids/ODS2.png'
import ods3 from '../../assets/pngs/kids/ODS3.png'
import ods4 from '../../assets/pngs/kids/ODS4.png'
import ods5 from '../../assets/pngs/kids/ODS5.png'
import ods6 from '../../assets/pngs/kids/ODS6.png'
import ods7 from '../../assets/pngs/kids/ODS7.png'
import ods8 from '../../assets/pngs/kids/ODS8.png'
import ods9 from '../../assets/pngs/kids/ODS9.png'
import ods10 from '../../assets/pngs/kids/ODS10.png'
import ods11 from '../../assets/pngs/kids/ODS11.png'
import ods12 from '../../assets/pngs/kids/ODS12.png'
import ods13 from '../../assets/pngs/kids/ODS13.png'
import ods14 from '../../assets/pngs/kids/ODS14.png'
import ods15 from '../../assets/pngs/kids/ODS15.png'
import ods16 from '../../assets/pngs/kids/ODS16.png'
import ods17 from '../../assets/pngs/kids/ODS17.png'




export default class Baloes extends Component{
  render(){
    return(
      <div className="baloes">
        <div className="ceu">
          <BrowserRouter>
          <div className="bonecos-balao">
            <div className="baloes-esquerda">
              <div className="penca-esquerda">
                <div className="linha-3">
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#FF4A60'}}>
                    <img src={ods1} alt="" />
                  </NavLink>
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#DDA939'}}>
                    <img src={ods2} alt=""/>
                  </NavLink>
                  <NavLink  to="/"className="ods-box" style={{backgroundColor: '#4AA139'}}>
                  <img src={ods3} alt=""/>
                  </NavLink>
                </div>
                <div className="linha-3">
                  <NavLink  to="/"className="ods-box" style={{backgroundColor: '#21BFE2'}}>
                    <img src={ods6} alt=""/>
                  </NavLink>
                  <NavLink  to="/"className="ods-box" style={{backgroundColor: '#FD3921'}}>
                    <img src={ods5} alt=""/>
                  </NavLink>
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#C21B2D'}}>
                    <img src={ods4} alt=""/>
                  </NavLink>
                </div>
                <div className="linha-3">
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#F5C000'}}>
                    <img src={ods7} alt=""/>
                  </NavLink>
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#A21943'}}>
                    <img src={ods8} alt=""/>
                  </NavLink>
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#FC6924'}}>
                    <img src={ods9} alt=""/>
                  </NavLink>
                </div>
              </div>
              <div className="kid-boy">
                <img src={boy} alt=""/>
              </div>
            </div>
            <div className="baloes-direita">
            <div className="penca-direita">
                <div className="linha-3">
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#DB1465'}}>
                    <img src={ods10} alt=""/>
                  </NavLink >
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#FD9D24'}}>
                    <img src={ods11} alt=""/>
                  </NavLink >
                  <NavLink  to="/" className="ods-box" style={{backgroundColor: '#BE8C2D'}}>
                   <img src={ods12} alt=""/>
                  </NavLink >
                  </div>
                <div className="linha-3">
                  <NavLink  to="/"className="ods-box" style={{backgroundColor: '#3D7F42'}}>
                   <img src={ods13} alt=""/>
                  </NavLink >
                  <NavLink to="/" className="ods-box" style={{backgroundColor: '#009ADA'}}>
                   <img src={ods14} alt=""/>
                  </NavLink>
                  <NavLink to="/" className="ods-box" style={{backgroundColor: '#55C12D'}}>
                   <img src={ods15} alt=""/>
                  </NavLink>
                </div>
                <div className="linha-3">
                  <NavLink to="/" className="ods-box" style={{backgroundColor: '#026A9F'}}>
                  <img src={ods16} alt=""/>
                  </NavLink>
                  <NavLink to="/" className="ods-box" style={{backgroundColor: '#1B496B'}} >
                   <img src={ods17} alt=""/>
                  </NavLink>
                </div>
              </div>
              <div className="kid-girl">
              <img src={girl} alt=""/>
              </div>
            </div>
          </div>
          </BrowserRouter>
          <div className="grama-cima"></div>
        </div>
          <div className="grama-baixo">
            <img src={mato} alt="" className="mato"/>
          </div>  
      </div>
    )
  }
}