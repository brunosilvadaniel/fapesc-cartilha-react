import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods8.png'

const number = 8

const firstTopic = ['Realizar cursos à distância de aperfeiçoamento profissional','Gerar empregos decentes','Aumentar a produtividade individual','Aumentar a confiança entre os moradores do município']
const secondTopic = ['Promover a educação para o empreendedorismo','Criar emrpesas juniores','Criar bolsas de estágios para os acadêmicos','Estimular o uso de aplicativos como whatsApp para divulgação de vagas']
const thirdTopic = ['Aumentar a produtividade das empresas','Promover concursos internos em locais que estimulem o debate e a sensibilização individual sobre o desenvolvimento sustentável e a importância da colaboração de cada um','Incentivar a criação de startups em áreas competitivas']
const fourthTopic = ['Desenvolver a cultura de empreendeorismo nas universidades de negócios','Incluir a Pessoa com Deficiência - PcD no mercado de trabalho','Apoiar progrmas de geração de novas oportunidades de absorção e recrutamentos de jovens nas pequenas e médias empresas']

export default class Ods_8 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-8"/>
            <div className="texto-ods texto-color-8">
              <h1>8 - Trabalho Decente e Crescimento Econômico</h1>
              <p>O crescimento econômico é importante para gerar riquezas para os países e para as pessoas. 
              Mas ele precisa ser sustentável! Isto é, precisa preservar a natureza e cuidar das pessoas para que todos tenham as mesmas oportunidades.
              Durante muitos anos, as pessoas acreditavam que o que tem na natureza nunca iria acabar. Mas, já aprendemos que não é verdade.
              Se cada um fizer a sua parte, vamos ter a possibilidade de aumentar a renda das famílias, diminuir o desemprego, preservar a natureza e garantir um futuro melhor para todos. Em 2017 a Indústria do Carvão Mineral no Brasil possuía 14 empresas em operação e emprega, diretamente, mais de cinco mil pessoas. Nos estados do Rio Grande do Sul, Santa Catarina e Paraná, a cadeia Termelétrica gera em torno de 53 mil empregos e movimenta cerca de R$ 12 bilhões por ano.
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


