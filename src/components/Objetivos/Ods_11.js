import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods11.png'

const number = 11

const firstTopic = ['•	ANDE DE BICICLETA, OU SKATE OU PATINETE. MAS, NÃO SE ESQUEÇA DE USAR CAPACETE E PROTEGER SEUS JOELHOS E COTOVELOS.','•	SE TIVER UMA PRAÇA PERTO DA SUA CASA, BRINQUE NELA SEMPRE QUE PUDER.','•	SE A PRAÇA NÃO ESTIVER LIMPA OU NÃO TIVER BRINQUEDOS, CONVERSE COM SEUS VIZINHOS PARA JUNTOS LIMPAREM A PRAÇA E SE POSSÍVEL CONSERTAR OS BRINQUEDOS.','•	SE EXISTIR, VISITE OS MUSEUS DA SUA CIDADE OU PRÓXIMAS.','•	PREFIRA PASSEAR DE TRANSPORTE PÚBLICO E COLETIVO']
const secondTopic = ['•	PARTICIPAR DE CONSELHOS DE SEGURANÇA NAS CIDADES','•	PROTEGER O PATRIMÔNIO CULTURAL DO MUNICÍPIO.','•	REDUZIR O USO DE AUTOMÓVEL, PEGAR CARONA SOLIDÁRIA, BICICLETA E OUTROS MEIOS DE TRANSPORTES','•	PROMOVER A CRIAÇÃO OU A MANUTENÇÃO DAS ASSOCIAÇÕES DE BAIRROS','•	REALIZAR CAMPANHAS NAS ESCOLAS E UNIVERSIDADES SOBRE TRÂNSITO SEGURO.','•	APOIAR INICIATIVAS NA IMPLEMENTAÇÃO DE PRÁTICAS AMBIENTAIS USTENTÁVEIS.','•	DISSEMINAR O ESTATUTO DAS CIDADES E O PLANO DIRETOR DO MUNICÍPIO.','•	AUMENTAR A ACESSIBILIDADE DAS PESSOAS AOS EQUIPAMENTOS PÚBLICOS.','•	PROMOVER A CIDADANIA NAS COMUNIDADES.','•	AUMENTAR A DESTINAÇÃO DE IMPOSTOS PARA PROJETOS SOCIAIS.','•	DESENVOLVER PROGRAMAS PARA A MELHORIA DA MOBILIDADE URBANA.','•	DESENVOLVER PROJETOS VISANDO A REGULARIZAÇÃO FUNDIÁRIA','•	MELHORAR A INFRAESTRUTURA DAS REGIÕES METROPOLITANAS','•	ESTRUTARAR PROGRAMAS QUE MANTENHAM O HOMEM NO CAMPO.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_11 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-11"/>
            <div className="texto-ods texto-color-11">
              <h1>11 - Cidades e Comunidades Sustentáveis</h1>
              <p>
                PARA QUE AS CIDADES SEJAM SUSTENTÁVEIS, A AGENDA 2030 DEFENDE
                QUE AS PESSOAS VIVAM EM LUGARES SEGUROS E COM ACESSO A SERVIÇOS BÁSICOS, NO MÍNIMO! <br/><br/>
                AS CIDADES PRECISAM TER PRAÇAS E PARQUES PARA QUE TODOS POSSAM SE DIVERTIR E TER ABASTECIMENTO DE ÁGUA E ENERGIA EM TODAS AS CASAS. DE PREFERÊNCIA ENERGIAS DE FONTES RENOVÁVEIS. COLETA DE LIXO E TRATAMENTO DO ESGOTO TAMBÉM SÃO FUNDAMENTAIS.<br/><br/>
                PRECISAM TER TRANSPORTE SEGURO E QUE NÃO POLUA O MEIO AMBIENTE. TER ESPAÇOS PARA BICICLETAS E PATINETES É UMA EXCELENTE IDEIA! <br/><br/>
                É MUITO IMPORTANTE TAMBÉM PRESERVAR A HISTÓRIA DA CIDADE, SEUS MONUMENTOS, SUA CULTURA E FOLCLORE. SEM ESQUECER DE PRESERVAR OS RECURSOS NATURAIS. AS CIDADES SUSTENTÁVEIS TÊM MUITO VERDE PARA TODOS OS LADOS, QUE AJUDA A DESPOLUIR O AR.<br/><br/>
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-11" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


