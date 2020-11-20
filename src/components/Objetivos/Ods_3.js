import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods3.png'

const number = 3

const firstTopic = ['•	TOME TODAS AS VACINAS CORRETAMENTE.','•	COMA ALIMENTOS SAUDÁVEIS E SEMPRE BEBA ÁGUA FILTRADA.','•	LAVE SEMPRE AS MÃOS E LAVE BEM AS FRUTAS ANTES DE COMER.','•	BRINQUE, DANCE E SE EXERCITE.']
const secondTopic = ['•	INCENTIVAR A AMAMENTAÇÃO.','•	VACINAR AS CRIANÇAS E ACOMPANHAR A SAÚDE DOS FILHOS.','•	INCLUIR OS ATOS DE HIGIENE NA EDUCAÇÃO DAS CRIANÇAS.','•	REALIZAR PALESTRAS SOBRE OS CUIDADOS COM A SAÚDE.','•	CRIAR ESPAÇOS PARA AS MULHERES AMAMENTAREM SEUS FILHOS.','•	APOIAR O TRABALHO DA PASTORAL DA CRIANÇA E OUTRAS INSTITUIÇÕES QUE TRABALHAM EM PROL DO DESENVOLVIMENTO INFANTIL.','•	PROMOVER A PREVENÇÃO SOBRE AS DIFERENTES FORMAS DE VIOLÊNCIA CONTRA A CRIANÇA.','•	REALIZAR PROGRAMAS DE ACESSO A ÁGUA POTÁVEL PARA A POPULAÇÃO.','•	CONSCIENTIZAR SOBRE A IMPORTÂNCIA DO PRÉ-NATAL E SAÚDE DA GESTANTE E RECÉM-NASCIDO.','•	INCENTIVAR PROGRAMAS EDUCACIONAIS, EM COMUNIDADES CARENTES, DE ESCLARECIMENTO SOBRE HIGIENE PESSOAL E SANITÁRIA, ALIENAMENTO MATERNO E NUTRIÇÃO INFANTIL.']
const thirdTopic = []
const fourthTopic = []

export default class Ods_3 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-3"/>
            <div className="texto-ods texto-color-3">
              <h1>3 - Saúde e Bem-estar</h1>
              <p>COM CERTEZA ALGUMA VEZ NA SUA VIDA VOCÊ JÁ FICOU DOENTE, NÃO É MESMO? SABE COMO É CHATO NÃO PODER BRINCAR OU ESTUDAR PORQUE A SAÚDE NÃO ESTÁ LEGAL. É POR ISSO QUE EXISTE UM ODS PARA QUE TODOS FIQUEM BEM. <br/><br/>

MUITAS DOENÇAS ESTÃO VOLTANDO PORQUE AS PESSOAS NÃO ESTÃO SE CUIDANDO DIREITO. OUTRAS SÃO CAUSADAS PORQUE ELAS NÃO SE ALIMENTAM BEM, NÃO PRATICAM ESPORTES OU NÃO FAZEM QUALQUER TIPO DE ATIVIDADE FÍSICA.


              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-3" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


