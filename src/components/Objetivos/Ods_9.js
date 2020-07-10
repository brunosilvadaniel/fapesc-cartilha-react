import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 9

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_9 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-9"/>
            <div className="texto-ods texto-color-9">
              <h1>9 - Industria Inovação e Infraestrutura</h1>
              <p>Sabia que esta cartilha que você está lendo precisou de uma indústria, de inovação e de infraestrutura?
              Ela foi feita numa gráfica, que precisou de papel, que por sua vez é produzido numa indústria. Todas as palavras e desenhos precisaram de um computador para serem colocados na cartilha e esse computador foi uma inovação. A inovação acontece quando alguém cria uma coisa nova, que nunca existiu, ou pega uma coisa que já existe e transforma em algo melhor.
              Para ela chegar até a sua mão, foi necessário ter infraestrutura. Que são as estradas ou ferrovias por onde o papel foi transportado para chegar até a gráfíca e a própria cartilha para chegar até você.
              Mas, as indústrias precisam preservar o meio ambiente e gerar empregos; a inovação e a infraetrutura precisam beneficiar todos os cidadãos para que o mundo seja sustentável.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-9" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


