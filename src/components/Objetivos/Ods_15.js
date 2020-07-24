import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 15

const firstTopic = ['Reduzir a pegada ecológica individual','Comprar produtos orgânicos','Reduzir o consumo de carne vermelha','Plantar um, duas, três, quatro árvores','Não compre animais silvestres e denuncie quem o faz']
const secondTopic = ['Plantar árvores nas beiras dos rios','Realizar campanhas sobre a importância da Biodiversidade','Realizar atividades voluntárias','Estimular o uso de aplicativos como whatsApp para proteção dos parques municipais']
const thirdTopic = ['Comprar paple reciclado','Fomentar a compra de matérias primas certificadas','Instalar equipamentos menos poluentes']
const fourthTopic = ['Valoriazar os saberes locais e as comunidades indígenas','Reduzir o uso de agrotóxios nas lavouras','Incentivar a cultura de rotação no plantio agrícoala','Implantar projetos para redução da desertificação e a degradação dos solos','Reduzir as espécies invasoras e exóticas','Reduzir o desmatamento','Reduzir a geração de resíduos']

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


