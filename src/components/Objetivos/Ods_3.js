import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods3.png'

const number = 3

const firstTopic = ['Amamentar os filhos','Participar da Pastoral da Criança','Ensinar a fazer papinha','Vacniar as crianças e acompanhar a saúde dos filhos']
const secondTopic = ['Incluir os atos de higiene na educação das crianças','Realizar palestras de prevenção a acidentes domésticos']
const thirdTopic = ['Criar espaços para as mulheres amamentarem seus filhos','Apoiar o trabalho da Pastoral da Criança e outras instituições que trabalham em prol do desenvolvimento infantil','Promover a prevenção sobre as diferentes formas de violência contra a criança']
const fourthTopic = ['Realizar programas de acesso a água potável para populações carentes','Promover palestras sobre os cuidados com o recém-nascido','Conscientizar sobre a importância do exmae pré-natal e das vacinações do bebê','Incentival programas educacionais, em comunidades carentes, de esclarecimento sobre higiene pessoal e sanitaria, alimentamento materno e nutrição infantil']

export default class Ods_3 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-3"/>
            <div className="texto-ods texto-color-3">
              <h1>3 - Saúde e Bem-estar</h1>
              <p>Com certeza alguma vez na sua vida você já ficou doente, não é mesmo? Sabe como é chato não poder brincar ou estudar porque a saúde não está legal. É por isso que existe um ODS para que todos fiquem bem. 
              Muitas doenças estão voltando porque as pessoas não estão se cuidando direito. Outras são causadas porque elas não se alimentam bem, não praticam esportes ou não fazem qualquer tipo de atividade física.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-3" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


