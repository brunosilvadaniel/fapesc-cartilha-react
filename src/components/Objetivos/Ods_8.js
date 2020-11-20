import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods8.png'

const number = 8

const firstTopic = ['•	ECONOMIZAR SEU DINHEIRO','•	CONVERSE COM SEUS PAIS SOBRE AS COMPRAS DA CASA, PEÇA PARA TE ENSINAREM SOBRE OS VALORES DAS COISAS.','•	QUANDO VOCÊ OU SEUS PAIS FOREM COMPRAR ALGUM PRESENTE, COMPRE DE PRODUTORES OU EM LOJAS PERTO DA SUA CASA.','•	E MUITO IMPORTANTE: CRIANÇA NÃO DEVE TRABALHAR, ELA DEVE BRINCAR E ESTUDAR. MAS, ELA PODE AJUDAR COM AS TAREFAS DE CASA. COMO ARRUMAR O SEU QUARTO, POR EXEMPLO!']
const secondTopic = ['•	REALIZAR CURSOS À DISTÂNCIA DE APERFEIÇOAMENTO PROFISSIONAL','•	GERAR EMPREGOS DECENTES','•	AUMENTAR A PRODUTIVIDADE INDIVIDUAL','•	AUMENTAR A CONFIANÇA ENTRE OS MORADORES DO MUNICÍPIO','•	PROMOVER A EDUCAÇÃO PARA O EMPREENDEDORISMO','•	CRIAR EMPRESAS JUNIORES','•	CRIAR BOLSAS DE ESTÁGIOS PARA OS ACADÊMICOS','•	ESTIMULAR O USO DE APLICATIVOS COMO WHATSAPP PARA DIVULGAÇÃO DE VAGAS','•	AUMENTAR A PRODUTIVIDADE DAS EMPRESAS','•	INCENTIVAR A CRIAÇÃO DE STARTUPS EM ÁREAS COMPETITIVAS','•	DESENVOLVER A CULTURA DE EMPREENDORISMO NAS UNIVERSIDADES E ESCOLAS','•	INCLUIR A PESSOA COM DEFICIÊNCIA NO MERCADO DE TRABALHO.','•	APOIAR PROGRAMAS DE GERAÇÃO DE NOVAS OPORTUNIDADES DE ABSORÇÃO E RECRUTAMENTOS DE JOVENS NAS PEQUENAS E MÉDIAS EMPRESAS.','•	PROMOVER A EDUCAÇÃO FINANCEIRA PARA REDUZIR O ENDIVIDAMENTO DA POPULAÇÃO.','•	PROTEGER OS DIREITOS TRABALHISTAS E PROMOVER AMBIENTES DE TRABALHO SEGUROS E PROTEGIDOS PARA TODOS OS TRABALHADORES.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_8 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-8"/>
            <div className="texto-ods texto-color-8">
              <h1>8 - Trabalho Decente e Crescimento Econômico</h1>
              <p>
                O CRESCIMENTO ECONÔMICO É IMPORTANTE PARA GERAR
                RIQUEZAS PARA OS PAÍSES E PARA AS PESSOAS. <br/><br/>
                MAS ELE PRECISA SER SUSTENTÁVEL! ISTO É, PRECISA PRESERVAR A NATUREZA E CUIDAR DAS PESSOAS PARA QUE TODOS TENHAM AS MESMAS OPORTUNIDADES. <br/><br/>
                DURANTE MUITOS ANOS, AS PESSOAS ACREDITAVAM QUE O QUE TEM NA NATUREZA NUNCA IRIA ACABAR. MAS, JÁ APRENDEMOS QUE NÃO É VERDADE. <br/><br/>
                SE CADA UM FIZER A SUA PARTE, VAMOS TER A POSSIBILIDADE DE AUMENTAR A RENDA DAS FAMÍLIAS, DIMINUIR O DESEMPREGO, PRESERVAR A NATUREZA E GARANTIR UM FUTURO MELHOR PARA TODOS
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-8" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


