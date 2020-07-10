import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 8

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_8 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-8"/>
            <div className="texto-ods texto-color-8">
              <h1>8 - Trabalho Decente e Crescimento Econômico</h1>
              <p>O crescimento econômico é importante para gerar riquezas para os países e para as pessoas. 
              Mas ele precisa ser sustentável! Isto é, precisa preservar a natureza e cuidar das pessoas para que todos tenham as mesmas oportunidades.
              Durante muitos anos, as pessoas acreditavam que o que tem na natureza nunca iria acabar. Mas, já aprendemos que não é verdade.
              Se cada um fizer a sua parte, vamos ter a possibilidade de aumentar a renda das famílias, diminuir o desemprego, preservar a natureza e garantir um futuro melhor para todos.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-8" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


