import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 13

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_13 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-13"/>
            <div className="texto-ods texto-color-13">
              <h1>13 - Ação Contra a Mudança Global do Clima</h1>
              <p>Vamos explicar: em volta do nosso planeta existe uma camada de gazes que protegem o planeta mantendo a temperatuda ideal para a vida. Funcionando como uma estufa!
              Com a poluição, essa camada está ficando cada vez mais grossa e aumentando a temperatua média do planeta. Sabe o que pode acontecer? O aumento da temperatura pode provocar mudanças climáticas. 
              Isto é, teremos verões cada vez mais quentes e invernos cada vez mais frios. Mais ocorrencias de furacões, enchentes e secas. As geleiras podem derreter e aumentar o nível do mar.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-13" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


