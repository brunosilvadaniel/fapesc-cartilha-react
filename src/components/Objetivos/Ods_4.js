import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods4.png'

const number = 4

const firstTopic = ['Realizar palestras sobre palestras sobre os ODS','Organizar gincanas de voluntariado e cidadania','Apoiar iniciativas de inclusão de PcD nas escolas e universidades','Organizar concursos musicais em escolas com diversos temas', 'Proporcionar intercâmbios com outros países','Apoiar iniciativas de inclusão','Aumentar a acessibilidade nas universidades']
const secondTopic = ['Apoiar programas de educação, capacitação e inclusão digital de crianças e jovens para futura inserção no mercado de trabalho','Jovem aprendiz na sua empresa']
const thirdTopic = ['Identificar alguns dos desafios socioeconômicos que afteam as matrículas no ensino fundamental 1 e apoiar as comunidades a lidarem com estes desafios','Melhorar os equipamentos das escolas básicas e fornecer material didático e de leitura','Reduzir a evasão escolar Implementar programas de formação de professores de escolas públicas','Construir e manter bibliotecas, videotecas ou brinquedotecas na comunidade, escolas ou organizações socias']
const fourthTopic = ['Valorizar a educação de seus filhos','Acompanhar o desenvolvimento dos filhos']

export default class Ods_4 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-4"/>
            <div className="texto-ods texto-color-4">
              <h1>4 - Educação de Qualidade</h1>
              <p>Como estão seus estudos? Como é a sua escola? Tem materiais, espaços e professores para todos os alunos? A escola fica perto ou longe da sua casa?
              Parecem perguntas bobas, mas não são. Sabia que muitas crianças não podem ir pra aula pois seu país está em guerra? Ou porque a escola fica muito longe e não tem transporte? Acredita que existem escolas que não tem nem onde as crianças sentarem e nem merenda?
              A educação é um direito de todos e os governos devem criar possibilidades para que todas as crianças, jovens e adultos tenham oportunidades de aprender sempre.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-4" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


