import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 14

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_14 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-14"/>
            <div className="texto-ods texto-color-14">
              <h1>14 - Vida na Água</h1>
              <p>Os oceanos são fonte de vida. Neles vivem milhares de animais e plantas que são muito importantes para o nosso ecossistema.
              Sabia que o lixo jogado nos rios vai parar no mar? E esse lixo pode matar os peixes, tartarugas e todos os seres que vivem nele? Isso mesmo! Os animais marinhos não sabem ver a diferença entre uma sacola de plástico de uma água-viva.
              Para garantir a vida na água, devemos lembrar sempre que todo o lixo descartado de forma incorreta acaba na água. Portanto, dizer não a tudo que é descartável é muito importante.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-14" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


