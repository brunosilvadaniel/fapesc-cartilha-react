import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods7.png'

const number = 7

const firstTopic = ['Comprar eletrodomésticos e equipamentos mais eficientes','Reduzir o consumo de energia','Trocar lâmpadas incandescentes por fluorescentes ou LEDs','Desligar o computador e outros equipamentos na modalidade stand by','Melhorar a eficiência energética']
const secondTopic = ['Desenvolver linhas de pesquisas em torno da utilização de energias renováveis','Promover concursos internos ou locais que estimulem o debate','Sensibilização sobre meio ambiante e a importância do papel de cada um','Estimular o uso de aplicativos como whatsApp para redução de consumo de energia']
const thirdTopic = ['Divulgar as orientações sobre o consumo consciente','Dimensionar correntamente os cabos e fios para os equipamentos','Analisar o contrato de fornecimento com a concessionária de distribuição','Verificar a Modalidade Tarifária']
const fourthTopic = ['Usar lâmpadas, luminárias e equipamentos auxiliares de grande eficiência luminosa na iluminção pública','Utilizar equipamentos eficientes(lâmpadas, equipamentos de ar condicionado, motores, etc) nos prédios públicos','Orientar o quadro funcional sobre o consumo consciente']

export default class Ods_7 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-7"/>
            <div className="texto-ods texto-color-7">
              <h1>7 - Energia Limpa e Acessível</h1>
              <p>Sabia que como a água, a energia também é muito importante para a vida? 
              E você sabia que existem vários tipos de fontes de energia? Tem as de fonte não renovável, como o petróleo, o carvão mineral e o gás natural. E as de fontes renováveis, que são aquelas geradas por recursos que nunca acabam, como a água, o vento, o sol e o mar. 
              E existe também a energia gerada por biomassa, que é produzida pela queima de materiais como a cana-de-açúcar. Sabia que o álcool que é usado nos carros é um tipo de energia de biomassa?
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


