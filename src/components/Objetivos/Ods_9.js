import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 9

const firstTopic = ['Promover a criatividade dos filhos']
const secondTopic = ['Promover gincanas, feiras de ciência e inovação','Realizar cursos á distância de aprefeiçoamento profissional','Apoiar programas de parceiras para a inclusão digital da população menos favorecida','Oferecer editais de inovação','Apoiar programas de formação e disseminação das novas tecnologias em especial da informação, que promovam também a inclusão de pessoas com deficiência','Estimular o uso de aplicativos como whatsApp para formentar a inovação']
const thirdTopic = ['Inovar os processos de empresa','Adotar Lean Manufacturing na empresa','Reduzir os desperdícios no processo produtivo','Aumentar o tempo de vida dos produtos','Automatizar os processos']
const fourthTopic = ['Investir na infraestrutura do município','Recuperar as estradas do seu município','Buscar o investimento da iniciativa privada em infraestrutura','Realizar campanhas do melhor uso de nossas estradas, parques, academias ao ar livre e demais instalações de equipamentos públicos']

export default class Ods_9 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-9"/>
            <div className="texto-ods texto-color-9">
              <h1>9 - Industria Inovação e Infraestrutura</h1>
              <p>Sabia que esta cartilha que você está lendo precisou de uma indústria, de inovação e de infraestrutura?
              Ela foi feita numa gráfica, que precisou de papel, que por sua vez é produzido numa indústria. Todas as palavras e desenhos precisaram de um computador para serem colocados na cartilha e esse computador foi uma inovação. A inovação acontece quando alguém cria uma coisa nova, que nunca existiu, ou pega uma coisa que já existe e transforma em algo melhor.
              Para ela chegar até a sua mão, foi necessário ter infraestrutura. Que são as estradas ou ferrovias por onde o papel foi transportado para chegar até a gráfíca e a própria cartilha para chegar até você.
              Mas, as indústrias precisam preservar o meio ambiente e gerar empregos; a inovação e a infraetrutura precisam beneficiar todos os cidadãos para que o mundo seja sustentável.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-9" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


