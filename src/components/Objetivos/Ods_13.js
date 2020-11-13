import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods13.png'

const number = 13

const firstTopic = ['•	CAMINHE E ANDE DE BICICLETA','•	NÃO JOGUE LIXO NAS RUAS','•	COMA MAIS FRUTAS, VERDURAS E LEGUMES E COMO MENOS CARNE','•	ESTUDE SOBRE ENERGIAS RENOVÁVEIS E NÃO POLUENTES','•	CONTE PARA SEUS PAIS, FAMÍLIARES E ATÉ MESMO PARA O MOTORISTA DO ONIBUS DA SUA ESCOLA, QUE É MUITO IMPORTANTE MANTER O MOTOR DO CARRO OU DO ÔNIBUS BEM REGULADO PARA NÃO POLUIR O AR.','•	PLANTE ÁRVORES E NÃO DEIXE DERRUBAREM AS ÁRVORES NA SUA CIDADE E NEM NAS FLORESTAS.']
const secondTopic = ['•	PLANTAR ÁRVORES NAS ÁREAS RURAIS E URBANAS','•	ENSINAR AS LEIS AMBIENTAIS NAS ESCOLAS E UNIVERSIDADES','•	REALIZAR CAMPANHAS CONTRA AS QUEIMADAS E DESMATAMENTO','•	DAR SUPORTE A PROJETOS DE PESQUISA E FORMAÇÃO NA ÁREA AMBIENTAL','•	REALIZAR O CONTROLE DA EMISSÃO DE GÁS CARBÔNICO, METANO E ÓXIDO NITROSO, E OUTROS GASES POLUENTES','•	MANTER A FROTA DE VEÍCULOS COM A MANUTENÇÃO EM DIA','•	DIVULGAR INFORMAÇÕES SOBRE GESTÃO DE RISCO SOBRE DESASTRES E ADAPTAÇÕES A MUDANÇAS CLIMÁTICAS.','•	PROTEGER AS ÁREAS VERDES','•	CRIAR LINHAS DE PESQUISAS PARA O DESENVOLVIMENTO DE PROCESSOS E PRODUTOS QUE MINIMIZEM AS MUDANÇAS CLIMÁTICAS.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_13 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-13"/>
            <div className="texto-ods texto-color-13">
              <h1>13 - Ação Contra a Mudança Global do Clima</h1>
              <p>
                VOCÊ SABE O QUE É AQUECIMENTO GLOBAL? <br/><br/>
                VAMOS EXPLICAR: EM VOLTA DO NOSSO PLANETA EXISTE UMA CAMADA <br/>
                DE GAZES QUE PROTEGEM O PLANETA MANTENDO A TEMPERATUDA IDEAL PARA A VIDA. FUNCIONANDO COMO UMA ESTUFA! <br/><br/>
                COM A POLUIÇÃO, ESSA CAMADA ESTÁ FICANDO CADA VEZ MAIS GROSSA E AUMENTANDO A TEMPERATUA MÉDIA DO PLANETA. SABE O QUE PODE ACONTECER? O AUMENTO DA TEMPERATURA PODE PROVOCAR
                MUDANÇAS CLIMÁTICAS. <br/><br/>
                ISTO É, TEREMOS VERÕES CADA VEZ MAIS QUENTES E INVERNOS CADA VEZ MAIS FRIOS. MAIS OCORRENCIAS DE FURACÕES, ENCHENTES E SECAS. AS GELEIRAS PODEM DERRETER E AUMENTAR O NÍVEL DO MAR.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-13" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


