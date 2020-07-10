import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 7

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

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
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-7" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


