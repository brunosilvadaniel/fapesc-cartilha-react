import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AlertDialog from './Dialog'

import './Styles.css'

const number = 1

const firstTopic = ['Incluir pessoas de baixa renda no mercado de trabalho','Capacitar as pessoas para a sua profissionalização','Ser solidário e voluntário em causas socias','Aliar-se a projetos socias e apoiar as organizações não convernamentais']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

const texto = 'texto'


export default class Ods_1 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-1"/>
            <div className="texto-ods texto-color-1">
              <h1>1 - Erradicação da Pobreza</h1>
              <p>
                O ods 1 busca acabar com a pobreza extrema para todas as pessoas e em todos os lugares. existem milhares de crianças sem condições de se alimentar todos os dias, sem ter água, sem ter uma boa casa para morar e sem poder brincar porque tem que trabalhar.
                para que o ods 1 seja alcançado, as pessoas, as empresas e os políticos precisam trabalhar juntos, para melhorar a vida das crianças, dos adolescentes, dos adultos e dos idosos para que todos tenham acesso aos seus direitos e vivam bem.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
            <AlertDialog texto={texto} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-1" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


