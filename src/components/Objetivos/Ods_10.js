import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 10

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_10 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-10"/>
            <div className="texto-ods texto-color-10">
              <h1>10 - Redução das Desigualdades</h1>
              <p>Vamos fazer de conta que toda a população da sua cidade são 10 pessoas. 1 pessoa representa a população mais rica e uma outra pessoa representa a população mais pobre. A desigualdade existe porque a pessoa mais rica tem sozinha praticamente toda a riqueza somada das outras. 
              E sabia que a desigualdade não é só entre as pessoas? É entre os países também. Existem poucos países muito ricos e muitos países muito pobres.
              Reduzir as desigualdades irá tirar muitas pessoas da pobreza e melhorar as condições de vida de todos.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-10" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


