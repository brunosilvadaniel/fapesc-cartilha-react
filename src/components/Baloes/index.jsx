import React, { Component } from 'react'
import ImageMapper from 'react-image-mapper'

import Boy from '../../assets/images/boy-mobile.png'
import Girl from '../../assets/images/girl-mobile.png'

import './index.css'

export default class Baloes extends Component{

  URL = "https://i.ibb.co/qddnHv7/thumbnail.png"
  URL_BOY = "https://ibb.co/C999nVM"
  URL_GIRL = "https://ibb.co/sbhwwp3https://ibb.co/HFX1Qtz"
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
  MAPBOY ={
    name: "Baloes-boy",
    areas: [
      { name: "Ods1", shape: "poly", coords: [54, 267, 125, 259, 224, 248, 245, 256, 262, 271, 270, 312, 285, 443, 270, 472, 248, 482, 97, 498, 69, 492, 51, 475, 33, 307, 39, 286],strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods2", shape: "poly", coords: [256, 251, 248, 186, 261, 161, 285, 146, 437, 130, 455, 133, 472, 273, 482, 293, 496, 304, 496, 307, 428, 320, 405, 334, 395, 355, 399, 370, 301, 379, 281, 370], strokeColor: 'rgba(0, 0, 0, 0)', fillColor:"rgba(0,0,0,0)" },
      { name: "Ods3", shape: "poly", coords: [478, 280, 452, 117, 467, 86, 493, 76, 648, 55, 676, 67, 686, 95, 700, 212, 645, 215, 623, 227, 612, 249, 613, 294, 595, 298, 570, 296, 504, 305], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods4", shape: "poly", coords: [857, 404, 847, 244, 821, 213, 711, 214, 642, 219, 621, 232, 614, 255, 615, 304, 621, 360, 630, 426, 637, 440, 740, 431, 765, 431, 788, 439, 816, 444, 838, 433],strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"  },
      { name: "Ods5", shape: "poly", coords: [631, 440, 611, 309, 585, 298, 428, 320, 403, 343, 398, 369, 418, 513, 430, 538, 452, 549, 571, 536, 566, 476, 584, 447],strokeColor: 'rgba(0, 0, 0, 0)'  , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods6", shape: "poly", coords: [398, 400, 282, 414, 290, 443, 271, 478, 242, 490, 220, 490, 237, 608, 319, 599, 341, 602, 357, 611, 371, 629, 374, 639, 407, 639, 403, 590, 408, 572, 434, 550, 453, 555, 430, 543, 418, 518], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)" },
      { name: "Ods7", shape: "poly", coords: [161, 620, 146, 639, 141, 662, 157, 825, 178, 843, 210, 849, 369, 832, 389, 805, 372, 631, 342, 605, 318, 602], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods8", shape: "poly", coords: [412, 751, 419, 768, 432, 781, 458, 784, 612, 777, 633, 760, 644, 741, 632, 568, 610, 550, 585, 545, 454, 550, 425, 557, 406, 579], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods9", shape: "poly", coords: [573, 541, 570, 482, 584, 453, 661, 439, 738, 434, 779, 435, 795, 452, 817, 631, 807, 650, 780, 663, 645, 677, 637, 571, 607, 544], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"}
    ],
  }
  MAPGIRL ={
    name: "Baloes-girl",
    areas: [
      { name: "Ods10", shape: "poly", coords: [451, 233, 457, 107, 473, 92, 492, 81, 662, 87, 676, 96, 691, 121, 683, 296, 666, 313, 594, 307, 578, 319, 471, 313, 454, 291], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods11", shape: "poly", coords: [691, 276, 707, 297, 808, 309, 830, 290, 913, 293, 923, 284, 929, 112, 915, 85, 887, 74, 721, 73, 707, 85, 695, 103], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods12", shape: "poly", coords: [933, 269, 945, 157, 965, 126, 991, 119, 1131, 130, 1157, 136, 1174, 155, 1178, 178, 1162, 336, 1146, 358, 1112, 365, 999, 353, 956, 347, 935, 328], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods13", shape: "poly", coords: [606, 545, 600, 590, 514, 585, 496, 601, 486, 631, 394, 623, 375, 606, 366, 575, 380, 423, 399, 399, 420, 393, 558, 402, 565, 405, 560, 520, 569, 528], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods14", shape: "poly", coords: [563, 384, 570, 332, 593, 313, 763, 312, 785, 326, 799, 349, 792, 479, 792, 519, 766, 528, 731, 527, 707, 543, 613, 544, 568, 522, 569, 412], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods15", shape: "poly", coords: [802, 323, 795, 489, 801, 503, 816, 516, 993, 531, 1020, 511, 1034, 357, 950, 352, 929, 330, 931, 293, 834, 294], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods16", shape: "poly", coords: [478, 760, 486, 797, 514, 819, 684, 827, 710, 801, 723, 616, 685, 593, 520, 588, 501, 602, 489, 640], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
      { name: "Ods17", shape: "poly", coords: [699, 598, 727, 616, 718, 756, 892, 766, 920, 751, 929, 718, 936, 563, 920, 542, 905, 536, 736, 528, 711, 547], strokeColor: 'rgba(0, 0, 0, 0)' , fillColor:"rgba(0,0,0,0)"},
    ],
  }
  handleClick = (area) => {
    window.location.href=`${area.name}`
    console.log(area.name)
  }
    enterArea(area) {
      this.setState({ hoveredArea: area });
      console.log(`Entrou na ${area.name}`)
  }

  leaveArea(area) {
      this.setState({ hoveredArea: null });
      console.log(`Saiu da ${area.name}`)
  }
  handleClickMobile = (area) => {
    window.location.href=`${area.name}`
    console.log(area.name)
  }

  zoomOut(){
    var viewport = document.querySelector('meta[name="viewport"]');
    if ( viewport ) {
      viewport.content = "initial-scale=0";
    }
  }
  componentDidMount(){
    this.zoomOut();
  }
  render(){
    let width = window.innerWidth;
    if (width> 1200){
    return(
      <div className="baloes">
        <div className="ceu">           
          <div className="container">
            <h1 className="ods-text-open">Você conhece <br/>os ODS ?</h1>
            <ImageMapper  src={this.URL} map={this.MAP} 	
            onMouseEnter={area => this.enterArea(area)}
            onMouseLeave={area => this.leaveArea(area)}
            onClick={area => this.handleClick(area)}
            />
          </div>
          <div className="grama-cima"></div>
        </div>    
          <div className="grama-baixo"></div>  
      </div>
    );
  }else{
    return(
      <div className="baloes">
        {/* <div className="ceu">            */}
          <div className="container-mobile">
            <div className="boy-mobile-container">
              <h1 className="ods-text-open-mobile">Você conhece <br/>os ODS ?</h1>
              <div className="ceu-mobile-boy">
                
                <div className="grama-fundo"/>
                <div className="boy-mobile"> 
                  <ImageMapper  src={Boy} map={this.MAPBOY} 	
                    onMouseEnter={area => this.handleClick(area)}
                    />
                </div>
              </div>
            </div>
            <div className="girl-mobile-container">        
              <div className="ceu-mobile-girl">
                <div className="grama-escorida-b"/>
                <div className="grama-fundo"/>
                <div className="girl-mobile">
                  <ImageMapper src={Girl} map={this.MAPGIRL} 
                  onMouseEnter={area => this.handleClick(area)}/>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>    
      </div>
     )
    }
  }
}

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
                      {/* <img src={mato} alt="" className="mato"/> */}