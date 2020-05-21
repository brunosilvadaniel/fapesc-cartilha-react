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
            <img src={Logo17} alt="Logo-17-formas"/>
          </div>
          <div className="two-side">
            <div className="realizacao">
              <span className="role-instituicao">Realização:</span>
              <img src={LogoSatc} alt="logo-fapesc"/>
            </div>
           <div className="apoio">
              <span className="role-instituicao">Apoio:</span>
              <img className="logo-bairro"src={LogoBairro} alt="logo-fapesc"/>
              <img src={LogoFapesc} alt="logo-fapesc"/>
            </div>
            <div className="parceiro">
             <span className="role-instituicao">Parceiro:</span>
             <img src={LogoMovimentoScOds} alt="logo-movimento-sc-ods"/>
           </div>
          </div>
        </div>
        <div>
          <span className='contato-span'>(XX)XXXX-XXXX   emaildoprojeto@email.com   Rua do Endereço, nº XX - Criciúma - SC</span>
		    </div>
      </footer>
    )
  }
}
