import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods10.png'

const number = 10

const firstTopic = ['•	TRATE AS PESSOAS COM RESPEITO','•	DOE SUAS ROUPAS E BRINQUEDOS QUE NÃO USA MAIS','•	CONVERSE COM SUA FAMÍLIA PARA AJUDAR AS PESSOAS MAISPOBRES']
const secondTopic =['•	ENSINAR SOBRE CIDADANIA E SOLIDARIEDADE PARA TODOS.','•	DOAR ALIMENTOS, ROUPAS E OUTROS BENS PARA A POPULAÇÃO POBRE.','•	DESTINAR IMPOSTO DEVIDO PARA PROJETOS SOCIAIS.','•	GARANTIR A IGUALDADE DE OPORTUNIDADE PARA AS PESSOAS.','•	PROMOVER O VOLUNTARIADO CORPORATIVO.','•	IMPLANTAR PROGRAMAS DE CARREIRAS E SALÁRIO JUSTOS.','•	PATROCINAR A EDUCAÇÃO DE JOVENS MENOS FAVORECIDOS ECONOMICAMENTE.','•	AUMENTAR O INVESTIMENTO SOCIAL PRIVADO.','•	PARTICIPAR COMO VOLUNTARIADO EM PROJETOS SOCIAIS.','•	DESENVOLVER PESQUISAS E ESTUDOS SOBRE A REALIDADE SOCIAL.','•	INVESTIR NA INFRAESTRUTURA DAS COMUNIDADES MENOS FAVORECIDAS.','•	CRIAS POLÍTICAS E PROGRAMAS QUE VISEM A REDUÇÃO DAS DESIGUALDADES. ','•	PROMOVER OS DIREITOS DOS IMIGRANTES E DE OUTRAS MINORIAS']
const thirdTopic = []
const fourthTopic = []

export default class Ods_10 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-10"/>
            <div className="texto-ods texto-color-10">
              <h1>10 - Redução das Desigualdades</h1>
              <p>
                VOCÊ SABE O QUE É DESIGUALDADE? <br/> <br/>
                VAMOS FAZER DE CONTA QUE TODA A POPULAÇÃO DA SUA CIDADE SÃO 10 PESSOAS. 1 PESSOA REPRESENTA A POPULAÇÃO MAIS RICA E UMA OUTRA PESSOA REPRESENTA A POPULAÇÃO MAIS POBRE. A DESIGUALDADE
                EXISTE PORQUE A PESSOA MAIS RICA TEM SOZINHA PRATICAMENTE TODA A RIQUEZA SOMADA DAS OUTRAS.<br/><br/>
                E SABIA QUE A DESIGUALDADE NÃO É SÓ ENTRE AS PESSOAS? É ENTRE OS PAÍSES TAMBÉM. EXISTEM POUCOS PAÍSES MUITO RICOS E MUITOS PAÍSES MUITO POBRES.<br/><br/>
                REDUZIR AS DESIGUALDADES IRÁ TIRAR MUITAS PESSOAS DA POBREZA E MELHORAR AS CONDIÇÕES DE VIDA DE TODOS.
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


