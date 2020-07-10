import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 11

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_11 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-11"/>
            <div className="texto-ods texto-color-11">
              <h1>11 - Cidades e Comunidades Sustentáveis</h1>
              <p>Para que as cidades sejam sustentáveis, a agenda 2030 defende que as pessoas vivam em lugares seguros e com acesso a serviços básicos, no mínimo!
              As cidades precisam ter praças e parques para que todos possam se divertir e ter abastecimento de água e energia em todas as casas. De preferência energias de fontes renováveis. Coleta de lixo e tratamento do esgoto também são fundamentais.
              Precisam ter  transporte seguro e que não polua o meio ambiente. Ter espaços para bicicletas e patinetes é uma excelente ideia!
              É muito importante também preservar a história da cidade, seus monumentos, sua cultura e folclore. Sem esquecer de preservar os recursos naturais. As cidades sustentáveis tem muito verde para todos os lados, que ajuda a despoluir o ar.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-11" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


