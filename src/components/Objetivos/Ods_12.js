import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 12

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_12 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-12"/>
            <div className="texto-ods texto-color-12">
              <h1>12 - Consumo e Produção Responsaveis</h1>
              <p>É usar tudo o que precisamos sem desperdiçar ou de forma que não produza mais lixo. É consumir somente aquilo que realmente precisamos.
              Isso é muito sério. Se as pessoas não mudarem urgentemente o seu jeito de consumir as coisas, no ano de 2050 vamos precisar arranjar mais 2 planetas igualzinhos ao nosso para continuarmos a ter alimentos, água, energia, roupas e tudo mais que for preciso para a nossa vida.
              Você sabe que não existe mais dois planetas, então o que é preciso fazer para isso não acontecer? Podemos começar usando os 3 r’s: reduzir, reutilizar e reciclar.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-12" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


