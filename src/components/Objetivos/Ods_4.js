import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 4

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_4 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-4"/>
            <div className="texto-ods texto-color-4">
              <h1>4 - Educação de Qualidade</h1>
              <p>Como estão seus estudos? Como é a sua escola? Tem materiais, espaços e professores para todos os alunos? A escola fica perto ou longe da sua casa?
              Parecem perguntas bobas, mas não são. Sabia que muitas crianças não podem ir pra aula pois seu país está em guerra? Ou porque a escola fica muito longe e não tem transporte? Acredita que existem escolas que não tem nem onde as crianças sentarem e nem merenda?
              A educação é um direito de todos e os governos devem criar possibilidades para que todas as crianças, jovens e adultos tenham oportunidades de aprender sempre.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-4" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


