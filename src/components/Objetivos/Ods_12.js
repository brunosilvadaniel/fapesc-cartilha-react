import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods12.png'

const number = 12

const firstTopic = ['Doar alimentos e reduzir o desperdício','Reduzir o uso de embalagens','Evirar a troca de celulares frequentemente','Utilizar sacola de pano para as compras','Optar por produtos com refil']
const secondTopic = ['Ensinar ler rótulos dos alimentos, principalmente escolhendo os alimentos com menos sódio, gordura totais e saturadas, carboidratos e outros elementos que em execesoo são nocivos a saúde','Promover a educação financeira para reduzir o endividamento da populção','Promover oficinas de aproveitamento de materias para confecção de artesanato'] 
const thirdTopic = ['Participar de programas de mobilização coletiva para estímulo à reciclagem e reutilização de metariais','Realizar ações de sensibilização para a diminuição do consumo e separação de resíduos(4Rs - Reduzir, reutilizar, reciclar e recuperar)','Adotar os princípios do Pacto Global','Implantar a logística reversa','Conhecer e respeitar o código dos consumidor','Reduzir o uso de agrotóxicos no plantio de alimentos','Reduzir o consumo de copinhos plásticos na empresa'] 
const fourthTopic = []

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
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-12" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


