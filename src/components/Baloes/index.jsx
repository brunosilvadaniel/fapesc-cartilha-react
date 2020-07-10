import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper'

import './index.css'

export default class Baloes extends Component{

  URL = "https://i.ibb.co/qddnHv7/thumbnail.png"
  MAP = {
    name: "Baloes",
    areas: [
      { name: "Ods1", shape: "poly", coords: [2, 113, 13, 104, 99, 96, 106, 101, 115, 109, 126, 194, 119, 204, 107, 211, 82, 215, 25, 219, 12, 211],strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods2", shape: "poly", coords: [126, 156, 135, 159, 180, 155, 180, 142, 186, 134, 194, 129, 224, 124, 219, 112, 209, 38, 193, 37, 118, 46, 114, 52, 107, 61, 112, 100, 119, 103], strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods3", shape: "poly", coords: [209, 28, 214, 15, 220, 11, 306, 0, 316, 7, 324, 16, 329, 50, 331, 78, 300, 78, 295, 84, 289, 94, 289, 118, 235, 124, 225, 116], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods4", shape: "poly", coords: [342, 77, 387, 76, 396, 82, 403, 96, 406, 174, 399, 187, 385, 192, 366, 186, 342, 185, 310, 187, 292, 121, 294, 93, 303, 84],strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"  },
      { name: "Ods5", shape: "poly", coords: [267, 232, 267, 212, 271, 200, 290, 192, 307, 188, 289, 124, 281, 123, 196, 132, 184, 143, 183, 172, 191, 227, 203, 241, 215, 244, 267, 237],strokeColor: 'rgba(0, 0, 0, 0)'  , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods6", shape: "poly", coords: [127, 176, 179, 172, 187, 229, 198, 243, 185, 256, 183, 272, 183, 285, 170, 288, 160, 272, 141, 270, 100, 275, 95, 213, 121, 211, 129, 196], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)" },
      { name: "Ods7", shape: "poly", coords: [79, 392, 162, 384, 175, 372, 170, 291, 158, 276, 130, 276, 95, 278, 67, 280, 54, 293, 61, 384], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods8", shape: "poly", coords: [191, 352, 203, 361, 291, 358, 300, 343, 296, 252, 276, 240, 226, 245, 203, 247, 188, 259], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods9", shape: "poly", coords: [270, 235, 272, 201, 301, 193, 362, 189, 377, 196, 391, 284, 379, 299, 303, 308, 300, 248], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods10", shape: "poly", coords: [726, 20, 739, 12, 824, 16, 835, 22, 839, 36, 836, 117, 830, 127, 793, 125, 783, 132, 734, 128, 723, 117], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods11", shape: "poly", coords: [843, 21, 855, 7, 940, 9, 948, 16, 955, 26, 957, 61, 953, 111, 952, 116, 916, 114, 903, 117, 898, 126, 855, 123, 839, 110], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods12", shape: "poly", coords: [961, 96, 967, 44, 979, 32, 1067, 37, 1077, 44, 1081, 63, 1075, 140, 1062, 152, 969, 144, 959, 132], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods13", shape: "poly", coords: [770, 172, 702, 168, 686, 176, 680, 264, 691, 279, 737, 283, 745, 270, 755, 259, 797, 262, 799, 244, 780, 243, 769, 228], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods14", shape: "poly", coords: [843, 244, 786, 240, 773, 225, 776, 141, 795, 126, 873, 128, 887, 136, 893, 150, 889, 232, 861, 231], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods15", shape: "poly", coords: [1010, 153, 1003, 223, 987, 237, 904, 231, 891, 214, 895, 132, 907, 120, 926, 116, 956, 120, 959, 139, 967, 148], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods16", shape: "poly", coords: [737, 288, 736, 355, 740, 368, 753, 376, 834, 382, 848, 368, 855, 277, 839, 267, 759, 261], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods17", shape: "poly", coords: [846, 262, 850, 242, 862, 233, 947, 238, 959, 251, 954, 340, 943, 351, 857, 346, 860, 282], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
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
            <ImageMapper  src={this.URL} map={this.MAP} 	
            onMouseEnter={area => this.enterArea(area)}
            onMouseLeave={area => this.leaveArea(area)}
            onClick={area => this.handleClick(area)
             }
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