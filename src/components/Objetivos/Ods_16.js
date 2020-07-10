import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 16

const firstTopic = ['1111111','12222222','13333333','14444444']
const secondTopic = ['2111111','22222222','23333333','24444444']
const thirdTopic = ['3111111','32222222','33333333','34444444']
const fourthTopic = ['4111111','42222222','43333333','44444444']

export default class Ods_16 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-16"/>
            <div className="texto-ods texto-color-16">
              <h1>16 - Paz, Justiça e Instituições eficazes</h1>
              <p>Você sabia que as brigas começam porque as pessoas não se entendem ou não gostam de quem tem ideias diferentes?
              Algumas pessoas ficam fazendo algumas brincadeiras chatas com as outras só porque são diferentes, mas nós sabemos que ser diferente é muito legal. 
              E quando essas pessoas são líderes de países e não respeitam como outros países cuidam do seu povo, elas brigam e surgem as guerras. 
              Já imaginou que chato seria se todo mundo fosse igual? Por exemplo, se todo mundo torcesse para o mesmo time, não existiriam os campeonatos como a copa do mundo e as olimpíadas.
              Por isso precisamos sempre aceitar e respeitar as diferenças para vivermos num mundo em paz!
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-16" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


