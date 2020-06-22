import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper'

// import {NavLink, BrowserRouter} from 'react-router-dom'
import './index.css'
// import boy from '../../assets/pngs/kids/boy.png';
// import girl from '../../assets/pngs/kids/girl.png';
// import mato from '../../assets/pngs/kids/matos.png'

// import ods1 from '../../assets/pngs/kids/ODS1.png'
// import ods2 from '../../assets/pngs/kids/ODS2.png'
// import ods3 from '../../assets/pngs/kids/ODS3.png'
// import ods4 from '../../assets/pngs/kids/ODS4.png'
// import ods5 from '../../assets/pngs/kids/ODS5.png'
// import ods6 from '../../assets/pngs/kids/ODS6.png'
// import ods7 from '../../assets/pngs/kids/ODS7.png'
// import ods8 from '../../assets/pngs/kids/ODS8.png'
// import ods9 from '../../assets/pngs/kids/ODS9.png'
// import ods10 from '../../assets/pngs/kids/ODS10.png'
// import ods11 from '../../assets/pngs/kids/ODS11.png'
// import ods12 from '../../assets/pngs/kids/ODS12.png'
// import ods13 from '../../assets/pngs/kids/ODS13.png'
// import ods14 from '../../assets/pngs/kids/ODS14.png'
// import ods15 from '../../assets/pngs/kids/ODS15.png'
// import ods16 from '../../assets/pngs/kids/ODS16.png'
// import ods17 from '../../assets/pngs/kids/ODS17.png'

// import Test from '../teste/test'




export default class Baloes extends Component{

  URL = "https://i.ibb.co/278ZkQH/bonecos-baloes.png"
  MAP = {
    name: "Baloes",
    areas: [
      { name: "Ods1", shape: "poly", coords: [6, 113, 18, 103, 104, 96, 115, 109, 120, 159, 121, 193, 105, 209, 56, 215, 17, 217, 11, 202],strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods2", shape: "poly", coords: [110, 98, 108, 63, 123, 47, 207, 38, 215, 105, 218, 118, 227, 124, 216, 130, 184, 135, 181, 155, 126, 160, 119, 107], strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods3", shape: "poly", coords: [304, 2, 314, 7, 323, 16, 332, 80, 294, 84, 290, 95, 291, 118, 238, 126, 227, 119, 218, 110, 209, 24, 218, 15, 223, 10], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods4", shape: "poly", coords: [387, 79, 404, 94, 406, 181, 389, 191, 374, 191, 309, 191, 292, 119, 297, 87],strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"  },
      { name: "Ods5", shape: "poly", coords: [249, 239, 210, 244, 194, 227, 186, 157, 193, 139, 282, 126, 287, 131, 301, 185, 272, 195, 253, 198, 255, 238],strokeColor: 'rgba(0, 0, 0, 0)'  , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods6", shape: "poly", coords: [101, 276, 94, 214, 116, 211, 127, 196, 126, 179, 183, 172, 190, 231, 202, 244, 181, 266, 182, 290, 175, 293, 164, 274, 148, 264], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)" },
      { name: "Ods7", shape: "poly", coords: [147, 271, 161, 276, 170, 291, 176, 374, 163, 389, 74, 393, 62, 385, 53, 293, 68, 281], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods8", shape: "poly", coords: [268, 245, 281, 245, 293, 254, 298, 284, 301, 345, 290, 359, 200, 361, 187, 348, 184, 262, 197, 249], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods9", shape: "poly", coords: [303, 308, 300, 248, 279, 236, 261, 239, 262, 201, 307, 194, 377, 196, 386, 242, 387, 295, 370, 304], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods10", shape: "poly", coords: [728, 23, 738, 15, 819, 17, 835, 27, 836, 44, 835, 117, 826, 127, 796, 127, 784, 132, 729, 128, 721, 116], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods11", shape: "poly", coords: [852, 123, 840, 107, 842, 21, 855, 9, 945, 13, 957, 29, 954, 116, 907, 116, 895, 126], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods12", shape: "poly", coords: [972, 147, 1051, 153, 1066, 150, 1074, 135, 1080, 55, 1069, 41, 984, 31, 971, 40, 966, 48, 958, 125], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods13", shape: "poly", coords: [798, 242, 796, 265, 754, 265, 740, 276, 739, 287, 693, 282, 680, 266, 686, 182, 698, 170, 776, 175, 774, 229, 785, 242], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods14", shape: "poly", coords: [877, 130, 795, 129, 777, 140, 778, 170, 778, 226, 787, 237, 810, 241, 849, 243, 860, 233, 887, 234, 893, 224, 890, 208, 893, 142], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods15", shape: "poly", coords: [1009, 154, 1004, 219, 992, 235, 908, 232, 897, 225, 894, 191, 897, 131, 910, 121, 954, 121, 967, 146, 967, 155], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods16", shape: "poly", coords: [735, 362, 747, 377, 839, 380, 851, 361, 853, 276, 840, 268, 750, 268, 743, 283], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods17", shape: "poly", coords: [845, 263, 845, 247, 859, 237, 946, 240, 960, 257, 956, 340, 941, 352, 853, 348, 859, 277], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
    ]
  }
  

  handleClick = (area) => {
    window.location.href=`${area.name}`
    console.log(area)
    
  }
    enterArea(area) {
      this.setState({ hoveredArea: area });
      console.log(`Entrou na ${area.name}`)
  }

  leaveArea(area) {
      this.setState({ hoveredArea: null });
      console.log(`Saiu da ${area.name}`)
  }

  render(){
    return(
      <div className="baloes">
        <div className="ceu">
             
          <div className="container">
            <ImageMapper src={this.URL} map={this.MAP} 	
            onMouseEnter={area => this.enterArea(area)}
            onMouseLeave={area => this.leaveArea(area)}
            onClick={area => this.handleClick(area)}
            />
          </div>
          <div className="grama-cima"></div>
           
          </div>    
          {/* <BrowserRouter> */}
          {/* <div className="bonecos-balao">
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
          </div> */}
          {/* </BrowserRouter> */}
          <div className="grama-baixo">
            {/* <img src={mato} alt="" className="mato"/> */}
          </div>  
      </div>
    )
  }
}