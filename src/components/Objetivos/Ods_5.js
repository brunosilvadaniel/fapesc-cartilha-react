import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 5

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_5 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-5"/>
            <div className="texto-ods texto-color-5">
              <h1>5 - Igualdade de Gênero</h1>
              <p>É garantir que todas as meninas e mulheres tenham os mesmos direitos e oportunidades que os meninos e homens.
              Se meninos e meninas não tiverem as mesmas oportunidades eles podem não ter a chance de fazer algo em que são bons. Por exemplo, se a marta não tivesse tido a chance de jogar futebol ela nunca seria a melhor jogadora de futebol do mundo! 
              Meninos e meninas precisam ser respeitados pelas suas escolhas, pelas suas capacidades e por suas diferenças. Respeitando as diferenças, apoiando nos estudos e incentivando na profissão, meninos e meninas podem se tornar adultos incríveis!
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-5" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


