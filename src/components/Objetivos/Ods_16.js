import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods16.png'

const number = 16

const firstTopic = ['Ser voluntário!','Realizar palestra sobre o relacionamento entre pais e filhos visando aumentar o vinculo familiar','Participar de espaços como Conselho Tutelar e Conselhor de Direitos de sua comunidade','Realizar camapanhas de cultura da paz','Ligar para 180 e denunciar caos de violência contra a mulher']
const secondTopic = ['Criar brigadas para fomentar o voluntariado na Defesa Civil','Promover palestra sobre a questão da violência no trânsito, doméstia e outras']
const thirdTopic = ['Realizar atividades de prevenção à violência contra ciranças e adolescentes','Realizar campanhas de sensibilização e combate á violência doméstica, abuso sexual e tráfico humano','Realizar Juizados Mirins e outras ações de Educação as Leis']
const fourthTopic = ['Realizar camapanhas de desarmamento','Criar aplicativos de áreas inseguras no seu município','Combatenre a corrupção em todos os níveis','Promover o acesso a espaço cultural e artístico para a população jovem','Apoiar o funcionamento ou instalação de um Centro de Ação Voluntária na sua cidade']

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
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-16" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


