import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 2

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']


export default class Ods_2 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
           <div className="ods-grande angulo-2"/>
           <div className="texto-ods texto-color-2">
            <h1>2 - Fome Zero e Agricultura Sustentável</h1>
            <p>Sabe aquela sensação de falta de energia, de fraqueza, às vezes até de dor, podem ser causadas por falta de alimentos. 
              Para ficarmos fortes e saudáveis, nosso corpo precisa de vitaminas, minerais e nutrientes que estão nas frutas, verduras, legumes, carnes, ovos, leite, peixes, etc. Imagina uma pessoa ficar vários dias sem comer, ou comendo só um tipo de comida? 
              Cada um deve fazer a sua parte e os governos precisam criar políticas para promover a agricultura sustentável, protegendo as nossas florestas e nascentes.
            </p>
           </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-2" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


