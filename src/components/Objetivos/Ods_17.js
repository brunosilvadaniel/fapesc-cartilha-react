import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods17.png'

const number = 17

const firstTopic = ['Participar de associaçoes, conselhos e organizações socias','Elaborar projetos socias e ir atrás de fontes de financiamento coletivo']
const secondTopic = ['Realizar parceirias com as partes interessadas','Adotar os Princípios da Gestão Empresarial Responsável - PRME','Criar bancos de projetos socias para atuar em áreas mais pobres','Adotar os Princípios do Pacto Global','Participar do Movimento Nós Podemos em prol dos ODS']
const thirdTopic = ['Realizar programas de Responsabilidade Social Corporativa']
const fourthTopic = ['Buscar realizar parceirias com vários atores sociais','Buscar recurosos para capacitação, tecnologia e outros investimentos para o desenvolvimentos local sutentável','Reduzir a dívida dos municípios','Aumentar a colaboração ODS']

export default class Ods_17 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-17"/>
            <div className="texto-ods texto-color-17">
              <h1>17 - Parcerias e Meios de Implementação</h1>
              <p>Você sabe o que é necessário para que todos esses ODS que você aprendeu até aqui aconteçam? É necessário haver parcerias! 
              Porque é muito difícil ser sustentável sozinho, mas com ajuda dos amigos, família, escolas, empresas e governos não é impossível!
              Converse com seus amigos, professores e familiares e formem um time de guardiões do planeta!
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


