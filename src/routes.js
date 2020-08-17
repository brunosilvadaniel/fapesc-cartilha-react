import React from 'react'
import {Route, BrowserRouter,Switch, Redirect} from 'react-router-dom'

import Header from './components/Navbar/index'
import Footer from './components/Footer/index'
import Baloes from './components/Baloes'
import NavBarJogos from './components/NavBarJogos'

import MemoryGame from './components/games/memoryGame/memoryGame'

import Quiz from './components/games/Quiz/index'

import Ods1 from './components/Objetivos/Ods_1'
import Ods2 from './components/Objetivos/Ods_2'
import Ods3 from './components/Objetivos/Ods_3'
import Ods4 from './components/Objetivos/Ods_4'
import Ods5 from './components/Objetivos/Ods_5'
import Ods6 from './components/Objetivos/Ods_6'
import Ods7 from './components/Objetivos/Ods_7'
import Ods8 from './components/Objetivos/Ods_8'
import Ods9 from './components/Objetivos/Ods_9'
import Ods10 from './components/Objetivos/Ods_10'
import Ods11 from './components/Objetivos/Ods_11'
import Ods12 from './components/Objetivos/Ods_12'
import Ods13 from './components/Objetivos/Ods_13'
import Ods14 from './components/Objetivos/Ods_14'
import Ods15 from './components/Objetivos/Ods_15'
import Ods16 from './components/Objetivos/Ods_16'
import Ods17 from './components/Objetivos/Ods_17'


export default function Routes(){
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/Home" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column"
                          }}>
              <Header/>
              <Baloes/>
              <NavBarJogos/>
              <Footer/>
            </div>
            }></Route>
            <Route path="/ods1" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods1/>
            </div>
            }></Route>
            <Route path="/ods2" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods2/>
            </div>
            }></Route>
            <Route path="/ods3" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods3/>
            </div>
            }></Route>
            <Route path="/ods4" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods4/>
            </div>
            }></Route>
            <Route path="/ods5" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods5/>
            </div>
            }></Route>
            <Route path="/ods6" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods6/>
            </div>
            }></Route>
            <Route path="/ods7" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods7/>
            </div>
            }></Route>
            <Route path="/ods8" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods8/>
            </div>
            }></Route>
            <Route path="/ods9" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods9/>
            </div>
            }></Route>
            <Route path="/ods10" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods10/>
            </div>
            }></Route>
            <Route path="/ods11" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods11/>
            </div>
            }></Route>
            <Route path="/ods12" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods12/>
            </div>
            }></Route>
            <Route path="/ods13" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods13/>
            </div>
            }></Route>
            <Route path="/ods14" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods14/>
            </div>
            }></Route>
            <Route path="/ods15" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods15/>
            </div>
            }></Route>
            <Route path="/ods16" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods16/>
            </div>
            }></Route>
            <Route path="/ods17" render={props =>
            <div style={{"display": "flex",
                         "flex-direction":"column",
                         
                          }}>
              <Header/>
              <Ods17/>
            </div>
            }></Route>
            <Route path="/jogodamemoria" component={MemoryGame} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/jogodamemoria2" component={MemoryGame} />
            <Route path="/jogodamemoria3" component={MemoryGame} />
            <Redirect from="*" to="/Home" />
          </Switch>
        </BrowserRouter>
        
      </>
    )
}

