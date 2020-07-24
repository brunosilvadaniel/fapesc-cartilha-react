import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 13

const firstTopic = ['Reduzir o consumo de produtos poluentes','Manter o carro regulado','Morar mais perto do trabalho','Usar combustíveis renováveis','Cumprir com as leis ambientais(Código Florestal, PNRS, PNRH)']
const secondTopic = ['Plantar árvores nas áreas rurais e urbanas','Ensinar as leis ambientais','Realizar campanhas contra as queimadas','Dar suporte a projetos de pesquisa e formação na área ambiental']
const thirdTopic = ['Realizar o controle da emissão de gás carbônico, metano e óxido nitroso, e outros gases poluentes','Manter a frota de veículos com a manutenção em dia']
const fourthTopic = ['Implantar as brigadas de defesa civil e envolver a população','Divulgar informações sobre gestão de risco sobre desastres e adaptações a mudanças climáticas','Implantar aterros sanitários','Ofertar a coleta seletiva dos resíduos','Proteger as áreas verdes']

export default class Ods_13 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-13"/>
            <div className="texto-ods texto-color-13">
              <h1>13 - Ação Contra a Mudança Global do Clima</h1>
              <p>Vamos explicar: em volta do nosso planeta existe uma camada de gazes que protegem o planeta mantendo a temperatuda ideal para a vida. Funcionando como uma estufa!
              Com a poluição, essa camada está ficando cada vez mais grossa e aumentando a temperatua média do planeta. Sabe o que pode acontecer? O aumento da temperatura pode provocar mudanças climáticas. 
              Isto é, teremos verões cada vez mais quentes e invernos cada vez mais frios. Mais ocorrencias de furacões, enchentes e secas. As geleiras podem derreter e aumentar o nível do mar.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-13" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


