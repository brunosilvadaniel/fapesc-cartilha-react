import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods14.png'

const number = 14

const firstTopic = ['•	NÃO USE COPOS, PRATOS E TALHERES DE PLÁSTICO DESCARTÁVEL','•	NÃO USE COPOS, PRATOS E TALHERES DE PLÁSTICO DESCARTÁVEL','•	NÃO DEIXE LIXO NA PRAIA','•	SE TIVER UM RIO PERTO DA SUA ESCOLA, CONVERSE COM SEUS PROFESSORES PARA CONHECER E PROTEGER O RIO','•	CONVIDE SEUS AMIGOS E COLEGAS PARA FAZER UM MUTIRÃO DE LIMPEZA NA SUA RUA OU ESCOLA, NÃO ESQUEÇA DE PEDIR AJUDA PARA UM ADULTO.']
const secondTopic = ['•	IMPLANTAR REDE DE COLETA E ESTAÇÃO DE TRATAMENTO DE ESGOTO PARA O MUNICÍPIO.','•	RESPEITAR O PERÍODO DE DEFESO E NÃO PRATICAR A PESCA PREDATÓRIA.','•	FAZER CAMPANHAS DE PROTEÇÃO DOS RIOS E REFLORESTAMENTO DAS MATAS CILIARES ','•	DENUNCIAR PESOSAS/EMPRESAS QUE JOGAM LIXOS NOS RIOS E LOCAIS IRREGULARES','•	MELHORAR O SANEAMENTO DAS CIDADES','•	INCENTIVAR O REAPROVEITAMENTO DE ÓLEO DE COZINHA ']
const thirdTopic = []
const fourthTopic = []

export default class Ods_14 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-14"/>
            <div className="texto-ods texto-color-14">
              <h1>14 - Vida na Água</h1>
              <p>
              OS OCEANOS SÃO FONTE DE VIDA. NELES VIVEM MILHARES DE ANIMAIS E PLANTAS QUE SÃO MUITO IMPORTANTES PARA O NOSSO ECOSSISTEMA. <br/> <br/>
              SABIA QUE O LIXO JOGADO NOS RIOS VAI PARAR NO MAR? E ESSE LIXO PODE MATAR OS PEIXES, TARTARUGAS E TODOS OS SERES QUE VIVEM NELE? ISSO MESMO! OS ANIMAIS MARINHOS NÃO SABEM VER A DIFERENÇA ENTRE UMA SACOLA DE PLÁSTICO DE UMA ÁGUA-VIVA.<br/> <br/>
              PARA GARANTIR A VIDA NA ÁGUA, DEVEMOS LEMBRAR SEMPRE QUE TODO O LIXODESCARTADO DE FORMA INCORRETA ACABA NA ÁGUA. PORTANTO, DIZER NÃO A TUDO QUE É DESCARTÁVEL É MUITO IMPORTANTE.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-14" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


