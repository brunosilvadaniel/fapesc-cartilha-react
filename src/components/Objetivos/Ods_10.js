import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods10.png'

const number = 10

const firstTopic = ['Ensinar em casa cidadania e solidariedade para os filhos','Doar alimentos, roupas e outros bens para a população pobre','Destinar Imposto devido para Projetos Sociais - Pessoas Física']
const secondTopic = ['Garantir a igualdade de oportunidade para as pessoas','Adotar as plataformas da ONU: Pacto Global e PRME','Promover o voluntariado corporativo','Implantar programas de carreiras e salário justos','Patrocinar a educação de jovens que vivem na periferia','Aumentar o Investimento Social Privado','Destinar impostos para Projetos Sociais - Pessoas Jurídica']
const thirdTopic = ['Participar como voluntariado em Projetos Sociais','Desenvolver pesquisas e estudos sobre a realidade social']
const fourthTopic = ['Investir na infraestrutura das periferias','Recuperar as estradas do seu municipio','Realizar campanhas de melhor uso de nossas estradas, parques academias ao ar livre e demais instalações de equipamentos públicos','Promover a Gestão Participativa','Incluir mulheres e idosos na era digital','Promover os direitos dos imigrantes e de outras minorias']

export default class Ods_10 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-10"/>
            <div className="texto-ods texto-color-10">
              <h1>10 - Redução das Desigualdades</h1>
              <p>Vamos fazer de conta que toda a população da sua cidade são 10 pessoas. 1 pessoa representa a população mais rica e uma outra pessoa representa a população mais pobre. A desigualdade existe porque a pessoa mais rica tem sozinha praticamente toda a riqueza somada das outras. 
              E sabia que a desigualdade não é só entre as pessoas? É entre os países também. Existem poucos países muito ricos e muitos países muito pobres.
              Reduzir as desigualdades irá tirar muitas pessoas da pobreza e melhorar as condições de vida de todos.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-10" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


