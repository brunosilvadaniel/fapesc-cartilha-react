import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods15.png'

const number = 15

const firstTopic = ['•	PESQUISE SOBRE AS ESPÉCIES DE ANIMAIS E PLANTAS AMEAÇADOS DE EXTINÇÃO','•	ESTUDE SOBRE A DIFERENÇA DE ANIMAIS SILVESTRES E ANIMAIS DOMÉSTICOS','•	CONVIDE SEUS AMIGOS E PROFESSORES PARA PLANTAR ÁRVORES NA SUA ESCOLA OU NUM PARQUE','•	NÃO ACEITE E NÃO DEIXE ALGUÉM TER ANIMAIS SILVESTRES COMO SE FOSSEM ANIMAIS DE ESTIMAÇÃO','•	REDUZA O USO DE PAPEL. SABIA QUE O PAPEL É FEITO DAS ÁRVORES?','•	PEÇA PARA SEU PROFESSOR AJUDAR VOCÊ A PESQUISAR SOBRE PEGADA ECOLÓGICA']
const secondTopic = ['•	CONHECER E REDUZIR A PEGADA ECOLÓGICA INDIVIDUAL','•	PLANTAR ÁRVORES','•	NÃO COMPRE ANIMAIS SILVESTRES E DENUNCIE QUEM O FAZ','•	REALIZAR CAMPANHAS SOBRE A IMPORTÂNCIA DA BIODIVERSIDADE E SUA PRESERVAÇÃO','•	REDUZIR O CONSUMO DE PAPEL','•	VALORIAZAR OS SABERES LOCAIS E AS COMUNIDADES INDÍGENAS','•	REDUZIR O USO DE AGROTÓXIOS NAS LAVOURAS','•	INCENTIVAR A CULTURA DE ROTAÇÃO NO PLANTIO AGRÍCOALA','•	IMPLANTAR PROJETOS PARA REDUÇÃO DA DESERTIFICAÇÃO E A DEGRADAÇÃO DOS SOLOS','•	REDUZIR AS ESPÉCIES INVASORAS E EXÓTICAS','•	REDUZIR O DESMATAMENTO','•	REDUZIR A GERAÇÃO DE RESÍDUOS']
const thirdTopic = []
const fourthTopic = []

export default class Ods_15 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-15"/>
            <div className="texto-ods texto-color-15">
              <h1>15 - Vida Terrestre</h1>
              <p>
              BIODIVERSIDADE É O CONJUNTO DE TODAS AS FORMAS DE VIDA EM TODOS OS CANTOS DA TERRA. VOCÊ SABIA QUE QUASE TODOS OS INSETOS, PLANTAS E ANIMAIS TERRESTRES VIVEM NAS FLORESTAS? <br/><br/>
              AS FLORESTAS SÃO MUITO IMPORTANTES PARA O ECOSSISTEMA TERRESTRE. MESMO ASSIM, O DESMATAMENTO CONTINUA ACONTECENDO E ISSO AUMENTA O RISCO DE EXTINÇÃO DOS ANIMAIS E PLANTAS.<br/><br/>
              SABIA QUE SOMOS A PRIMEIRA GERAÇÃO QUE APRENDEU MAIS SOBRE O VALOR DA NATUREZA E TAMBÉM PODEMOS SER A ÚLTIMA QUE PODE SALVAR O MUNDO?
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-15" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


