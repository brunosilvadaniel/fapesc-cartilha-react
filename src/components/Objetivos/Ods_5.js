import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 5

const firstTopic = ['Valorizar o trabalho doméstico','Votar no gênero feminio nas eleições em todos níveis','Criar oportunidades de inserção de mão-de-obra femina em atividades alternativas consideradas masculinas','Comuniar uma situação de violência 180']
const secondTopic = ['Incluir  a valorização do trabalho da mulher em programas de diversidade','Implantar programas de capacitação e melhoria na qualificação das mulheres']
const thirdTopic = ['Sensibilizar mulheres a assumirem postos de trabalho geralmente ocupados por homens','Promever palestras sobre autoestima, gestão de carreira']
const fourthTopic = ['Promover a formação política para as adolescentes e mulheres','Promover uma feira das profissões valorizando o papel da mulher na sociedade','Valorizar ações comunitárias que envolvam o trabalho feminino, apoiando iniciativas que promovam o cooperativismo e auto sustentação','Apoiar políticas públicas para atender mulheres negras, de povos indíginas, tradicionais e itinerantes']

export default class Ods_5 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-5"/>
            <div className="texto-ods texto-color-5">
              <h1>5 - Igualdade de Gênero</h1>
              <p>É garantir que todas as meninas e mulheres tenham os mesmos direitos e oportunidades que os meninos e homens.
              Se meninos e meninas não tiverem as mesmas oportunidades eles podem não ter a chance de fazer algo em que são bons. Por exemplo, se a marta não tivesse tido a chance de jogar futebol ela nunca seria a melhor jogadora de futebol do mundo! 
              Meninos e meninas precisam ser respeitados pelas suas escolhas, pelas suas capacidades e por suas diferenças. Respeitando as diferenças, apoiando nos estudos e incentivando na profissão, meninos e meninas podem se tornar adultos incríveis!
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-5" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


