import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods1.png'

import './Styles.css'

const number = 1

const firstTopic = ['DOAR OS BRINQUEDOS E ROUPAS QUE NÃO USA MAIS. ','ECONOMIZAR O SEU DINHEIRO, A SUA MESADA.']
const secondTopic = ['INCLUIR PESSOAS DE BAIXA RENDA NO MERCADO DE TRABALHO E APOIAR A GERAÇÃO ALTERNATIVA DE RENDA.','•	CAPACITAR AS PESSOAS PARA A SUA PROFISSIONALIZAÇÃO.','•	OFERTAR CURSOS DE EMPREENDEDORISMO.','•	FOMENTAR O MICROEMPREENDEDOR INDIVIDUAL – MEI.','•	FOMENTAR OS NEGÓCIOS SOCIAS, NEGÓCIOS VERDES, SOLIDÁRIOS E A ECONOMIA INCLUSIVA.','•	CRIAR TECNOLOGIAS MAIS ACESSÍVEIS ÀS POPULAÇÕES MAIS POBRES.','•	BUSCAR FONTES DE RECURSOS PARA O DESENVOLVIMENTO DO MUNICIPIO.','•	CONHECER AS CAUSAS DA POBREZA NA SUA COMUNIDADE, NO PAÍS E NO MUNDO.','•	SER SOLIDÁRIO E VOLUNTÁRIO EM CAUSAS SOCIAS.','•	ALIAR-SE A PROJETOS SOCIAS E APOIAR AS ORGANIZAÇÕES NÃO GONVERNAMENTAIS.','•	DOAR ALIMENTOS PARA OS MAIS NECESSITADOS.','•	PARTICIPAR DE AÇÕES E PROJETOS NO MUNICÍPIO.']
const thirdTopic = []
const fourthTopic = []

const texto = 'texto'


export default class Ods_1 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-1"/>
            <div className="texto-ods texto-color-1">
              <h1>1 - Erradicação da Pobreza</h1>
              <p>
              O ODS 1 BUSCA ACABAR COM A POBREZA EXTREMA PARA TODAS AS PESSOAS E EM TODOS OS LUGARES. EXISTEM MILHARES DE CRIANÇAS SEM CONDIÇÕES DE SE ALIMENTAR TODOS OS DIAS, SEM TER ÁGUA, SEM TER UMA BOA CASA PARA MORAR E SEM PODER BRINCAR PORQUE TEM QUE TRABALHAR.<br/> 
              PARA QUE O ODS 1 SEJA ALCANÇADO, AS PESSOAS, AS EMPRESAS E O PODER PÚBLICO PRECISAM TRABALHAR JUNTOS, PARA MELHORAR A VIDA DAS CRIANÇAS, DOS ADOLESCENTES, DOS ADULTOS E DOS IDOSOS PARA QUE TODOS TENHAM ACESSO AOS SEUS DIREITOS E VIVAM BEM.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
            <AlertDialog odsIcon={OdsIcon} texto={texto} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-1" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


