import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods9.png'

const number = 9

const firstTopic = ['•	FAÇA PESQUISAS SOBRE TECNOLOGIA E INOVAÇÃO.','•	PARTICIPE DAS FEIRAS DE CIÊNCIAS E INOVAÇÃO NA SUA ESCOLA','•	PESQUISE SE AS INDÚSTRIAS PERTO DA SUA CASA ESTÃO CUIDANDO DO MEIO AMBIENTE.','•	OBSERVE COMO ESTÃO AS ESTRADAS, PONTES E VIADUTOS DA SUA CIDADE E REGIÃO.','•	DESENVOLVA A SUA CRIATIVIDADE.']
const secondTopic = ['•	PROMOVER GINCANAS, FEIRAS DE CIÊNCIA E INOVAÇÃO','•	APOIAR PROGRAMAS DE PARCEIRAS PARA A INCLUSÃO DIGITAL DA POPULAÇÃO MENOS FAVORECIDA','•	OFERECER EDITAIS DE INOVAÇÃO','•	OFERECER PROGRAMAS DE FORMAÇÃO E DISSEMINAÇÃO DAS NOVAS TECNOLOGIAS EM ESPECIAL DA INFORMAÇÃO, QUE PROMOVAM TAMBÉM A INCLUSÃO DE PESSOAS COM DEFICIÊNCIA.','•	INOVAR OS PROCESSOS DAS EMPRESAS.','•	ADOTAR LEAN MANUFACTURING NA EMPRESA','•	REDUZIR OS DESPERDÍCIOS NO PROCESSO PRODUTIVO','•	AUMENTAR O TEMPO DE VIDA DOS PRODUTOS','•	INVESTIR NA INFRAESTRUTURA DO MUNICÍPIO','•	BUSCAR O INVESTIMENTO DA INICIATIVA PRIVADA EM INFRAESTRUTURA','•	REALIZAR CAMPANHAS DO MELHOR USO DE NOSSAS ESTRADAS, PARQUES, ACADEMIAS AO AR LIVRE E DEMAIS INSTALAÇÕES DE EQUIPAMENTOS PÚBLICOS']
const thirdTopic = []
const fourthTopic = []

export default class Ods_9 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-9"/>
            <div className="texto-ods texto-color-9">
              <h1>9 - Industria Inovação e Infraestrutura</h1>
              <p>
                SABIA QUE ESTA CARTILHA QUE VOCÊ ESTÁ LENDO PRECISOU DE UMA
                INDÚSTRIA, DE INOVAÇÃO E DE INFRAESTRUTURA?<br/><br/>
                A VERSÃO IMPRESSA FOI FEITA NUMA GRÁFICA, QUE PRECISOU DE PAPEL, QUE POR SUA VEZ É PRODUZIDO NUMA INDÚSTRIA. TODAS AS PALAVRAS E DESENHOS PRECISARAM DE UM COMPUTADOR PARA SEREM COLOCADOS NA CARTILHA E ESSE COMPUTADOR FOI UMA INOVAÇÃO.<br/><br/>
                A INOVAÇÃO ACONTECE QUANDO ALGUÉM CRIA UMA COISA NOVA, QUE NUNCA EXISTIU, OU PEGA UMA COISA QUE JÁ EXISTE E TRANSFORMA EM ALGO MELHOR.<br/><br/>
                PARA ELA CHEGAR ATÉ A SUA MÃO, FOI NECESSÁRIO TER INFRAESTRUTURA, SEJA ATRAVÉS DA INTERNET NESSA VERSÃO DIGITAL OU PELAS TRANSPORTADORAS, NA VERSÃO IMPRESSA.<br/><br/>
                MAS, AS INDÚSTRIAS PRECISAM PRESERVAR O MEIO AMBIENTE E GERAR EMPREGOS. A INOVAÇÃO E A INFRAETRUTURA PRECISAM BENEFICIAR TODOS OS CIDADÃOS PARA QUE O MUNDO SEJA SUSTENTÁVEL.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-9" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


