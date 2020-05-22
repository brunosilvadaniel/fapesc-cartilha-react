import React from 'react';
import NavBar from './components/Navbar/index'
import Baloes from './components/Baloes/index'
import NavBarJogos from './components/NavBarJogos/index'
import Footer from './components/Footer/index'


function App() {
  return (
    <div >
      <NavBar/>
      <Baloes/>
      <NavBarJogos/>
      <Footer/>
    </div>
  );
}

export default App;
