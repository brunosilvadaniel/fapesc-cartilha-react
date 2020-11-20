import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods4.png'

const number = 4

const firstTopic = ['•	NADA DE FALTAR AULA POR PREGUIÇA.','•	ESTUDE SEMPRE E FAÇA SEUS DEVERES DE CASA.','•	DOE OS LIVROS QUE NÃO PRECISAR MAIS OU OS QUE JÁ LEU.','•	AJUDAR SEU COLEGA A ESTUDAR.',]
const secondTopic = ['•	REALIZAR PALESTRAS SOBRE OS ODS NAS ESCOLAS E COMUNIDADES.','•	ORGANIZAR GINCANAS DE VOLUNTARIADO E CIDADANIA.','•	AMPLIAR INICIATIVAS DE INCLUSÃO E ACESSIBILIDADE NAS ESCOLAS E UNIVERSIDADES.','•	PROPORCIONAR INTERCÂMBIOS COM OUTROS PAÍSES.','•	APOIAR PROGRAMAS DE EDUCAÇÃO, CAPACITAÇÃO E INCLUSÃO DIGITAL DE CRIANÇAS E JOVENS PARA FUTURA INSERÇÃO NO MERCADO DE TRABALHO.','•	REALIZAR O PROGRAMA JOVEM APRENDIZ.','•	MELHORAR OS EQUIPAMENTOS DAS ESCOLAS BÁSICAS','•	FORNECER MATERIAL DIDÁTICO E DE LEITURA','•	REDUZIR A EVASÃO ESCOLAR','•	IMPLEMENTAR PROGRAMAS DE FORMAÇÃO DE PROFESSORES DE ESCOLAS PÚBLICAS','•	CONSTRUIR E MANTER BIBLIOTECAS, VIDEOTECAS OU BRINQUEDOTECAS NA COMUNIDADE, ESCOLAS OU ORGANIZAÇÕES SOCIAS','•	VALORIZAR A EDUCAÇÃO E ACOMPANHAR O DESENVOLVIMENTO DE SEUS FILHOS']
const thirdTopic = []
const fourthTopic = []

export default class Ods_4 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-4"/>
            <div className="texto-ods texto-color-4">
              <h1>4 - Educação de Qualidade</h1>
              <p>COMO ESTÃO SEUS ESTUDOS? COMO É A SUA ESCOLA? TEM MATERIAIS, ESPAÇOS E PROFESSORES PARA TODOS OS ALUNOS? A ESCOLA FICA PERTO OU LONGE DA SUA CASA?<br/><br/>
                PARECEM PERGUNTAS BOBAS, MAS NÃO SÃO. SABIA QUE MUITAS CRIANÇAS NÃO PODEM IR PARA A AULA POIS SEU PAÍS ESTÁ EM GUERRA? OU PORQUE A ESCOLA FICA MUITO LONGE DE SUA CASA E NÃO TEM TRANSPORTE? ACREDITA
                QUE EXISTEM ESCOLAS QUE NÃO TEM NEM ONDE AS CRIANÇAS SENTAREM E NEM MERENDA?
                A EDUCAÇÃO É UM DIREITO DE TODOS E OS GOVERNOS DEVEM CRIAR POSSIBILIDADES PARA QUE TODAS AS CRIANÇAS, JOVENS E ADULTOS TENHAM OPORTUNIDADES DE APRENDER SEMPRE.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-4" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


