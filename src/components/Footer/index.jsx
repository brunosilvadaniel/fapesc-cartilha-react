import React, { Component } from 'react'
import "./index.css"
import LogoFapesc from '../../assets/images/Logo-FAPESC-fundo-transparente.png'
import LogoMovimentoScOds from '../../assets/images/movimento-sc-ods.png'
import LogoSatc from '../../assets/images/satc-logoo.png'
import LogoBairro from '../../assets/images/Logo-bairro.png'
import Logo17 from '../../assets/images/Logo17.png'

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <div className="divisao">
          <div className="Logo-17">
            <img className="img-17" src={Logo17}  alt="Logo-17-formas"/>
          </div>
          <div className="two-side">
            <div className="realizacao">
              <span className="role-instituicao">Realização:</span>
             
              <img className="img-satc" src={LogoSatc}  alt="logo-satc"/>
            
            </div>
           <div className="apoio">
              <span className="role-instituicao">Apoio:</span>
              <div className="apoiadores">
                <img className="img-bairro"src={LogoBairro} alt="logo-bairro"/>
                
                <img className="img-fapesc"src={LogoFapesc} alt="logo-fapesc"/>
               
              </div>
            </div>
            <div className="parceiros">
             <span className="role-instituicao">Parceiro:</span>
             <img className="img-ODS"src={LogoMovimentoScOds} alt="logo-movimento-sc-ods"/>
           </div>
          </div>
          <span className='contato-span'>(48)3431-7628  ods2030@satc.edu.br  - Criciúma - SC</span>
        </div>
      </footer>
    )
  }
}
