import React from 'react'
import {Route, BrowserRouter,Switch, Redirect} from 'react-router-dom'

import Header from './components/Navbar/index'
import Footer from './components/Footer/index'

import Ods1 from './components/Objetivos/Ods_1'
import Baloes from './components/Baloes'
import NavBarJogos from './components/NavBarJogos'

const Routes = () =>{

    return (
      <div>
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
            <Redirect from="*" to="/Home" />
          </Switch>
        </BrowserRouter>
        
      </div>
    )
}

export default Routes;