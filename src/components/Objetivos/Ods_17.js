import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods17.png'

const number = 17

const firstTopic = ['•	AGORA QUE JÁ APRENDEU, ENSINE PARA AS PESSOAS O QUE VOCÊ CONHECE SOBRE OS OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL','•	COMPARTILHE AS COISAS BOAS QUE VOCÊ DESCOBRIR QUE AJUDAM A TORNAR O MUNDO UM LUGAR MELHOR PARA TODOS.','•	SEJA VOLUNTÁRIO']
const secondTopic = ['•	PARTICIPAR DE ASSOCIAÇOES, CONSELHOS E ORGANIZAÇÕES SOCIAS','•	DISSEMINAR TECNOLOGIAS AMBIENTALMENTE CORRETAS','•	ELABORAR PROJETOS SOCIAS E BUSCAR FONTES DE FINANCIAMENTO COLETIVO','•	INCENTIVAR E PROMOVER PARCERIAS PÚBLICAS, PÚBLICO-PRIVADA, PRIVADAS PARA MOBILIZAÇÃO DE RECURSOS','•	ADOTAR OS PRINCÍPIOS DA GESTÃO EMPRESARIAL RESPONSÁVEL ','•	CRIAR BANCOS DE PROJETOS SOCIAS E LINHAS DE FOMENTOS PARA ATUAR EM ÁREAS MAIS POBRES','•	CRIAR BANCOS DE PROJETOS SOCIAS E LINHAS DE FOMENTOS PARA ATUAR EM ÁREAS MAIS POBRES','•	PARTICIPAR DO MOVIMENTO NACIONAL ODS DO SEU ESTADO','•	REALIZAR PROGRAMAS DE RESPONSABILIDADE SOCIAL CORPORATIVA','•	BUSCAR REALIZAR PARCEIRIAS COM VÁRIOS ATORES SOCIAIS','•	BUSCAR RECUROSOS PARA CAPACITAÇÃO, TECNOLOGIA E OUTROS INVESTIMENTOS PARA O DESENVOLVIMENTOS LOCAL SUTENTÁVEL','•	REDUZIR A DÍVIDA DOS MUNICÍPIOS','•	DISSEMINAR OS ODS NAS EMPRESAS, COMUNIDADE E PODER PÚBLICO']
const thirdTopic = []
const fourthTopic = []

export default class Ods_17 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-17"/>
            <div className="texto-ods texto-color-17">
              <h1>17 - Parcerias e Meios de Implementação</h1>
              <p>
                VOCÊ SABE O QUE É NECESSÁRIO PARA QUE TODOS ESSES ODS QUE VOCÊ APRENDEU ATÉ AQUI ACONTEÇAM? É NECESSÁRIO HAVER PARCERIAS! <br/> <br/>
                PORQUE É MUITO DIFÍCIL SER SUSTENTÁVEL SOZINHO, MAS COM AJUDA DOS AMIGOS, FAMÍLIA, ESCOLAS, EMPRESAS E GOVERNOS NÃO É IMPOSSÍVEL!<br/> <br/>
                CONVERSE COM SEUS AMIGOS, PROFESSORES E FAMILIARES E FORMEM
                UM TIME DE GUARDIÕES DO PLANETA!
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-17" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


