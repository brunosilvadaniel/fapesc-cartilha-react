import React,{Component} from 'react'
import ImageMapper from 'react-image-mapper';

export default class test extends Component{
  URL = "https://i.ibb.co/278ZkQH/bonecos-baloes.png"
  MAP = {
    name: "Baloes",
    areas: [
      { name: "Ods-1", shape: "poly", coords: [249, 239, 210, 244, 194, 227, 186, 157, 193, 139, 282, 126, 287, 131, 301, 185, 272, 195, 253, 198, 255, 238], preFillColor: "green", fillColor: "blue"  },
      { name: "Ods-1", shape: "poly", coords: [303, 308, 300, 248, 279, 236, 261, 239, 262, 201, 307, 194, 377, 196, 386, 242, 387, 295, 370, 304], preFillColor: "pink"  },
      { name: "Ods-1", shape: "poly", coords: [6, 113, 18, 103, 104, 96, 115, 109, 120, 159, 121, 193, 105, 209, 56, 215, 17, 217, 11, 202], fillColor: "yellow"  },
      { name: "Ods-1", shape: "poly", coords: [110, 98, 108, 63, 123, 47, 207, 38, 215, 105, 218, 118, 227, 124, 216, 130, 184, 135, 181, 155, 126, 160, 119, 107],  },
    ]
  }
  render(){
    return(
      <div className="container">
        <ImageMapper src={this.URL} map={this.MAP}
        />
       </div>
    //   <img src="bonecos-baloes.png" id="map-image" style="width: 1083px; max-width: 100%; height: auto;" alt="" usemap="#map" />
    // <map name="map">
    //   <area shape="poly" coords="249, 239, 210, 244, 194, 227, 186, 157, 193, 139, 282, 126, 287, 131, 301, 185, 272, 195, 253, 198, 255, 238" />
    //   <area shape="poly" coords="303, 308, 300, 248, 279, 236, 261, 239, 262, 201, 307, 194, 377, 196, 386, 242, 387, 295, 370, 304" />
    //   <area shape="poly" coords="6, 113, 18, 103, 104, 96, 115, 109, 120, 159, 121, 193, 105, 209, 56, 215, 17, 217, 11, 202" />
    //   <area shape="poly" coords="110, 98, 108, 63, 123, 47, 207, 38, 215, 105, 218, 118, 227, 124, 216, 130, 184, 135, 181, 155, 126, 160, 119, 107" />
    //   <area shape="poly" coords="101, 276, 94, 214, 116, 211, 127, 196, 126, 179, 183, 172, 190, 231, 202, 244, 181, 266, 182, 290, 175, 293, 164, 274, 148, 264" />
    //   <area shape="poly" coords="147, 271, 161, 276, 170, 291, 176, 374, 163, 389, 74, 393, 62, 385, 53, 293, 68, 281" />
    //   <area shape="poly" coords="268, 245, 281, 245, 293, 254, 298, 284, 301, 345, 290, 359, 200, 361, 187, 348, 184, 262, 197, 249" />
    //   <area shape="poly" coords="387, 79, 404, 94, 406, 181, 389, 191, 374, 191, 309, 191, 292, 119, 297, 87" />
    //   <area shape="poly" coords="304, 2, 314, 7, 323, 16, 332, 80, 294, 84, 290, 95, 291, 118, 238, 126, 227, 119, 218, 110, 209, 24, 218, 15, 223, 10" />
    // </map>
    )
  }
}