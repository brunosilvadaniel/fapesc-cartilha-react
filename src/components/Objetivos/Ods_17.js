import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 17

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_17 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-17"/>
            <div className="texto-ods texto-color-17">
              <h1>17 - Parcerias e Meios de Implementação</h1>
              <p>Você sabe o que é necessário para que todos esses ods que você aprendeu até aqui aconteçam? É necessário haver parcerias! 
              Porque é muito difícil ser sustentável sozinho, mas com ajuda dos amigos, família, escolas, empresas e governos não é impossível!
              Converse com seus amigos, professores e familiares e formem um time de guardiões do planeta!
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-17" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


