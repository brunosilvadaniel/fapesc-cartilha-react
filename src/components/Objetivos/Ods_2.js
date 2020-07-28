import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods2.png'

const number = 2

const firstTopic = ['Plantar a sua própria horta e participar da construção de hortas comunitárias','Participar da Pastoral da Criança e outros movimentos em prol da alimentação','Doar alimentos para pessoas carentes','Reduzir o desperdício de alimentos']
const secondTopic = ['Incentivar programas de apoio à merenda escolar e educação alimentar','Ensinar organizações socias e familiares a aproveitarem melhor os alimentos, evitando o desperdício','Criar cursos de exntesão sobre Nutrição']
const thirdTopic = ['Aumentar a produçaõ de alimentos saudáveis','Reduzir os preços dos alimentos nutritivos','Instalar refeitórios nas empresas','Fornecer refeições para os colaboradores']
const fourthTopic = ['Implantar restarurantes populares(de baixo preço)','Estimular a agricultura familiar e comunitaria de subsistência','Comprar produtos da agricultura familiar','Capacitar a mão-de-obra na elaboração de alimentos básicos','Fazer camapanha sobre alimentação saudável','Divulgar ações que promovam a segurança alimentar']


export default class Ods_2 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
           <div className="ods-grande angulo-2"/>
           <div className="texto-ods texto-color-2">
            <h1>2 - Fome Zero e Agricultura Sustentável</h1>
            <p>Sabe aquela sensação de falta de energia, de fraqueza, às vezes até de dor, podem ser causadas por falta de alimentos. 
              Para ficarmos fortes e saudáveis, nosso corpo precisa de vitaminas, minerais e nutrientes que estão nas frutas, verduras, legumes, carnes, ovos, leite, peixes, etc. Imagina uma pessoa ficar vários dias sem comer, ou comendo só um tipo de comida? 
              Cada um deve fazer a sua parte e os governos precisam criar políticas para promover a agricultura sustentável, protegendo as nossas florestas e nascentes.
            </p>
           </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-2" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


