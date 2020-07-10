import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 15

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_15 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-15"/>
            <div className="texto-ods texto-color-15">
              <h1>15 - Vida Terrestre</h1>
              <p>Biodiversidade é o conjunto de todas as formas de vida em todos os cantos da terra. Você sabia que quase todos os insetos, plantas e animais terrestres vivem nas florestas?
              As florestas são muito importantes para o ecossistema terrestre. Mesmo assim, o desmatamento continua acontecendo e isso aumenta o risco de extinção dos animais e plantas.
              Sabia que somos a primeira geração que aprendeu mais sobre o valor da natureza e também podemos ser a última que pode salvar o mundo?
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-15" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


