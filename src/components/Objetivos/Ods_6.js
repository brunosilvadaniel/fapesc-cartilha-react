import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods6.png'

const number = 6

const firstTopic = ['Reusar a água sempre que possível, mas cuidando de sua preservação e aplicação que é restita','Conhecer a origem da água, os processos de tratamento e distribuição, e destinação final depois de usada.','Reparar vazamentos ou comunicar a empresa responsável.','Calcular a Pegada Hídrica de produtos e serviços para uma escolha consciente, pricipalmente pensando na idéia de rejeitar']
const secondTopic = ['Implatar programas de racionalização do uso da água.']
const thirdTopic = ['Repensar o uso: racionalizar sempre que possível hábitos de consumo no cotidiano.','Reaproveitar a água da chuva','Estimular o uso de aplicativos como whatsApp para redução de consumo']
const fourthTopic = ['Promover permanentemente debate sobre o consumo consciente da água.','Tratar sobre sua aplicação na agricultura, indústria e demais setores da economia.','Preservar ou revitalizar todo o sistema hídrico(rios e nascentes)']

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
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-6" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


