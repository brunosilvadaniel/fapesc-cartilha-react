import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods6.png'

const number = 6

const firstTopic = ['•	ECONOMIZE ÁGUA','•	NÃO ESCOVE OS DENTES COM A TORNEIRA ABERTA','•	NA HORA DO BANHO, EVITE DEIXAR O CHUVEIRO ABERTO ENQUANTO SE ENSABOA E LIGUE-O APENAS QUANDO FOR SE ENXAGUAR','•	FALE PARA OS SEUS PAIS PARA LAVAR A CALÇADA OU O CARRO COM BALDE','•	NÃO JOGUE LIXO NO CHÃO']
const secondTopic = ['•	REPARAR VAZAMENTOS DE ÁGUA NAS RESIDÊNCIAS','•	COMUNICAR A EMPRESA RESPONSÁVEL PELO ABASTENCIMENTO DE ÁGUA SEMPRE QUE TIVER VAZAMENTO NAS RUAS.','•	IMPLANTAR PROGRAMAS DE RACIONALIZAÇÃO DO USO DA ÁGUA.','•	REPENSAR O USO: RACIONALIZAR SEMPRE QUE POSSÍVEL HÁBITOS DE CONSUMO NO COTIDIANO.','•	REAPROVEITAR A ÁGUA DA CHUVA','•	PROMOVER PERMANENTEMENTE DEBATE SOBRE O CONSUMO CONSCIENTE DA ÁGUA.','•	DISCUTIR COM A SOCIEDADE O USO DA ÁGUA NA AGRICULTURA, INDÚSTRIA E DEMAIS SETORES DA ECONOMIA.','•	PRESERVAR OU REVITALIZAR TODO O SISTEMA HÍDRICO (RIOS E NASCENTES) DA REGIÃO.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_6 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-6"/>
            <div className="texto-ods texto-color-6">
              <h1>6 - Água Potavel e Saniamento</h1>
              <p>
                VOCÊ SABIA QUE A ÁGUA É MUITO IMPORTANTE PARA A SOBREVIVÊNCIA DE TODOS OS SERES VIVOS. E SABIA QUE O NOSSO PLANETA É QUASE
                TODINHO COBERTO DE ÁGUA?<br/><br/>
                ISSO MESMO, 70% DO PLANETA É ÁGUA. MAS NEM TODA ESSA ÁGUA É
                PRÓPRIA PARA O CONSUMO. SOMENTE 2,5% DE TODA A ÁGUA É DOCE E A
                MAIORIA DELA SE ENCONTRA EM REGIÕES DE DIFÍCIL ACESSO, COMO
                GELEIRAS.<br/><br/>
                ESTE OBJETIVO TAMBÉM TEM METAS SOBRE O SANEAMENTO BÁSICO E PROTEÇÃO DOS RIOS E NASCENTES. ISTO É, DIZ QUE É IMPORTANTE
                TER ESGOTO TRATADO, ACABAR COM A POLUIÇÃO DOS RIOS, DOS LAGOS E DE LAGOAS, QUE SÃO JUSTAMENTE DE ONDE SE TIRA A ÁGUA QUE VAI
                PARA AS TORNEIRAS DAS NOSSAS CASAS.<br/><br/>
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-6" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


