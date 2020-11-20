import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods7.png'

const number = 7

const firstTopic = ['•	SEMPRE APAGUE A LUZ QUANDO VOCÊ SAIR DE UM AMBIENTE.','•	DESLIGUE OS APARELHOS QUE NÃO ESTIVER USANDO.','•	PEÇA PARA SUA FAMÍLIA TROCAR AS LÂMPADAS DA SUA CASA POR LÂMPADAS QUE CONSOMEM MENOS ENERGIA, COMO AS DE LED.','•	NÃO TOME BANHO DEMORADO.','•	SÓ SOLTE PIPA EM LUGARES BEM LONGE DE POSTES E FIOS.']
const secondTopic = ['•	COMPRAR ELETRODOMÉSTICOS E EQUIPAMENTOS MAIS EFICIENTES.','•	DESLIGAR O COMPUTADOR E OUTROS EQUIPAMENTOS QUE NÃO ESTIVER SENDO USADO.','•	MELHORAR A EFICIÊNCIA ENERGÉTICA DE EMPRESAS, RESIDÊNCIAS E ILUMINAÇÃO PÚBLICA.','•	DESENVOLVER LINHAS DE PESQUISAS EM TORNO DA UTILIZAÇÃO DE ENERGIAS RENOVÁVEIS E EFICIÊNCIA ENERGÉTICA.','•	ESTIMULAR O USO DE APLICATIVOS PARA MONITORAR E REDUZIR O CONSUMO DE ENERGIA.','•	FAZER CAMPANHAS DE ORIENTAÇÃO SOBRE O CONSUMO CONSCIENTE.','•	DIMENSIONAR CORRETAMENTE OS CABOS E FIOS PARA OS EQUIPAMENTOS.','•	ANALISAR O CONTRATO DE FORNECIMENTO COM A CONCESSIONÁRIA DE DISTRIBUIÇÃO.','•	USAR LÂMPADAS, LUMINÁRIAS E EQUIPAMENTOS AUXILIARES DE GRANDE EFICIÊNCIA LUMINOSA NA ILUMINÇÃO PÚBLICA.','•	UTILIZAR EQUIPAMENTOS EFICIENTES (LÂMPADAS, EQUIPAMENTOS DE AR CONDICIONADO, MOTORES, ETC) NOS PRÉDIOS PÚBLICOS.','•	PROMOVER DEBATE NAS ESCOLAS E COMUNIDADES SOBRE O CONSUMO CONSCIENTE.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_7 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-7"/>
            <div className="texto-ods texto-color-7">
              <h1>7 - Energia Limpa e Acessível</h1>
              <p>
                SABIA QUE COMO A ÁGUA, A ENERGIA TAMBÉM É MUITO
                IMPORTANTE PARA A VIDA? <br/><br/>
                E VOCÊ SABIA QUE EXISTEM VÁRIOS TIPOS DE FONTES DE ENERGIA? TEM AS DE FONTE NÃO RENOVÁVEL, COMO O PETRÓLEO, O CARVÃO MINERAL
                E O GÁS NATURAL. E AS DE FONTES RENOVÁVEIS, QUE SÃO AQUELAS
                GERADAS POR RECURSOS QUE NUNCA ACABAM, COMO A ÁGUA, O VENTO, O SOL E O MAR. <br/>
                E EXISTE TAMBÉM A ENERGIA GERADA POR BIOMASSA, QUE É PRODUZIDA PELA QUEIMA DE MATERIAIS COMO A CANA-DE-AÇÚCAR. SABIA QUE O
                ÁLCOOL QUE É USADO NOS CARROS É UM TIPO DE ENERGIA DE BIOMASSA?
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-7" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


