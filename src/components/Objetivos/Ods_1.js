import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods1.png'

import './Styles.css'

const number = 1

const firstTopic = ['Incluir pessoas de baixa renda no mercado de trabalho','Capacitar as pessoas para a sua profissionalização','Ser solidário e voluntário em causas socias','Aliar-se a projetos socias e apoiar as organizações não convernamentais']
const secondTopic = ['Participar de ações de extensão universitaría','Participar do projeto Rondon','Fomentar os universitários nas causas socias nas comunidades carentes']
const thirdTopic = ['Ofertar cursos de empreendedorismo','Fomentar os negócios socias, negócios verdes, solidários e a economia inclusiva','Criar tecnologias mais acessíveis às populações mais pobres']
const fourthTopic = ['Apoiar a geração alternativa de renda','Fomentar o Microempreendedor Individual - MEI','Empoderar as mulheres que vivem com menos de US$ 1,25 por dia','Buscar fontes de recursos para o desenvolvimento do municipio','Desenvolver novas tecnologias apropriadas e serviços financeiros, incluindo microfinanças']

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
                O ODS 1 busca acabar com a pobreza extrema para todas as pessoas e em todos os lugares. existem milhares de crianças sem condições de se alimentar todos os dias, sem ter água, sem ter uma boa casa para morar e sem poder brincar porque tem que trabalhar.
                para que o ods 1 seja alcançado, as pessoas, as empresas e os políticos precisam trabalhar juntos, para melhorar a vida das crianças, dos adolescentes, dos adultos e dos idosos para que todos tenham acesso aos seus direitos e vivam bem.
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


