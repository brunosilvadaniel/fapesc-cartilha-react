import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 6

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_6 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-6"/>
            <div className="texto-ods texto-color-6">
              <h1>6 - Água Potavel e Saniamento</h1>
              <p>Você sabia que a água é muito importante para a sobrevivência de todos os seres vivos. E sabia que o nosso planeta é quase todinho coberto de água?
              Isso mesmo, 70% do planeta é água. Mas nem toda essa água é própria para o consumo. Somente 2,5% de toda a água é doce e a maioria dela se encontra em regiões de difícil acesso, como geleiras.
              Este objetivo também tem metas sobre o saneamento básico e proteção dos rios e nascentes. Isto é, diz que é importante ter esgoto tratado, acabar com a poluição dos rios, dos lagos e de lagoas, que são justamente de onde se tira a água que vai para as torneiras das nossas casas.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-6" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


