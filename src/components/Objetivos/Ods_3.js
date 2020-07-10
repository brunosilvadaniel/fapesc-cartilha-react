import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 3

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_3 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-3"/>
            <div className="texto-ods texto-color-3">
              <h1>3 - Saúde e Bem-estar</h1>
              <p>Com certeza alguma vez na sua vida você já ficou doente, não é mesmo? Sabe como é chato não poder brincar ou estudar porque a saúde não está legal. É por isso que existe um ods para que todos fiquem bem. 
              Muitas doenças estão voltando porque as pessoas não estão se cuidando direito. Outras são causadas porque elas não se alimentam bem, não praticam esportes ou não fazem qualquer tipo de atividade física.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-3" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


