import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods5.png'

const number = 5

const firstTopic = ['•	TRATE TODOS IGUALMENTE','•	RESPEITE HOMENS E MULHERES QUE CUIDAM DA FAMÍLIA','•	NÃO ACEITE A VIOLÊNCIA CONTRA MULHERES E MENINAS','•	BUSQUE SEMPRE A DIVISÃO POR IGUAL DAS TAREFAS']
const secondTopic = ['•	VALORIZAR O TRABALHO DOMÉSTICO','•	CRIAR OPORTUNIDADES DE INSERÇÃO DE MÃO-DE-OBRA FEMINA NO MERCADO DE TRABALHO','•	INCLUIR A VALORIZAÇÃO DO TRABALHO DA MULHER EM PROGRAMAS DE DIVERSIDADE','•	IMPLANTAR PROGRAMAS DE CAPACITAÇÃO E MELHORIA NA QUALIFICAÇÃO DAS MULHERES','•	SENSIBILIZAR MULHERES A ASSUMIREM POSTOS DE TRABALHO GERALMENTE OCUPADOS POR HOMENS','•	PROMEVER PALESTRAS SOBRE AUTOESTIMA, GESTÃO DE CARREIRA','•	PROMOVER UMA FEIRA DAS PROFISSÕES VALORIZANDO O PAPEL DA MULHER NA SOCIEDADE','•	VALORIZAR AÇÕES COMUNITÁRIAS QUE ENVOLVAM O TRABALHO FEMININO, APOIANDO INICIATIVAS QUE PROMOVAM O COOPERATIVISMO E AUTO SUSTENTAÇÃO','•	APOIAR POLÍTICAS PÚBLICAS PARA ATENDER MULHERES NEGRAS, DE POVOS INDÍGINAS, TRADICIONAIS E ITINERANTES']
const thirdTopic = []
const fourthTopic = []

export default class Ods_5 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-5"/>
            <div className="texto-ods texto-color-5">
              <h1>5 - Igualdade de Gênero</h1>
              <p>
                VOCÊ SABE O QUE É IGUALDADE DE GÊNERO?<br/><br/>
                É GARANTIR QUE TODAS AS MENINAS E MULHERES TENHAM OS MESMOS DIREITOS E OPORTUNIDADES QUE OS MENINOS E HOMENS.<br/><br/>
                SE MENINOS E MENINAS NÃO TIVEREM AS MESMAS OPORTUNIDADES, ELES PODEM NÃO TER A CHANCE DE FAZER ALGO EM QUE SÃO BONS. POR EXEMPLO, SE A MARTA NÃO TIVESSE TIDO A CHANCE DE JOGAR FUTEBOL, ELA NUNCA SERIA A MELHOR JOGADORA DE FUTEBOL DO MUNDO!<br/><br/>
                MENINOS E MENINAS PRECISAM SER RESPEITADOS PELAS SUAS ESCOLHAS, CAPACIDADES E POR SUAS DIFERENÇAS.<br/><br/>
                RESPEITANDO AS DIFERENÇAS, APOIANDO NOS ESTUDOS E INCENTIVANDO NA PROFISSÃO, MENINOS E MENINAS PODEM SE TORNAR ADULTOS INCRÍVEIS!<br/><br/>
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-5" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


