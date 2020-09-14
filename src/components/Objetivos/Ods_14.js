import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods14.png'

const number = 14

const firstTopic = ['Instalar a minha residência na rede de saneamento público','Reduzir o consumo de peixes em extinção','Não praticar a pesca predatória']
const secondTopic = ['Escolher um rio do entorno da escola para conhecer e proteger','Estimular o uso de aplicativos como whatsApp para denunciar pesosas/empresas que jogam lixos nos rios']
const thirdTopic = []
const fourthTopic = ['Criar leis que proíbam a utilização de sacolas plásticas nos supermercados','Melhorar o saneamento das cidades','Reaproveitar ou destinar corretamente o óleo de cozinho','Reduzir a pesca predatória','Reduzir a acidez dos oceanos']

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
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-14" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


