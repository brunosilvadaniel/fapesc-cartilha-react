import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/new-icons/ods2.png'


const number = 2

const firstTopic = ['•	NÃO DESPERDIÇAR COMIDA.','•	PREFIRA FRUTAS, VERDURAS E LEGUMES ORGÂNICOS E PRODUZIDOS PELA AGRICULTURA SUSTENTÁVEL.','•	SE POSSÍVEL, FAÇA UMA HORTA NA SUA CASA, ESCOLA OU COMUNIDADE.']
const secondTopic = ['•	PARTICIPAR DA PASTORAL DA CRIANÇA E OUTROS MOVIMENTOS EM PROL DA ALIMENTAÇÃO.','•	DOAR ALIMENTOS PARA PESSOAS E ORGANIZAÇÕES.','•	REDUZIR O DESPERDÍCIO DE ALIMENTOS.','•	INCENTIVAR PROGRAMAS DE APOIO À MERENDA ESCOLAR E EDUCAÇÃO ALIMENTAR.','•	ENSINAR ORGANIZAÇÕES SOCIAS E FAMILIARES A APROVEITAREM MELHOR OS ALIMENTOS, EVITANDO O DESPERDÍCIO.','•	CRIAR CURSOS DE EXNTESÃO SOBRE NUTRIÇÃO.','•	AUMENTAR A PRODUÇÃO DE ALIMENTOS SAUDÁVEIS.','•	REDUZIR OS PREÇOS DOS ALIMENTOS NUTRITIVOS.','•	INSTALAR REFEITÓRIOS NAS EMPRESAS E FORNECER REFEIÇÕES PARA OS COLABORADORES.','•	IMPLANTAR RESTARURANTES POPULARES (DE BAIXO PREÇO).','•	ESTIMULAR A AGRICULTURA FAMILIAR E COMUNITARIA DE SUBSISTÊNCIA.','•	COMPRAR PRODUTOS DA AGRICULTURA FAMILIAR.']
const thirdTopic = []
const fourthTopic = []


export default class Ods_2 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
           <div className="ods-grande angulo-2"/>
           <div className="texto-ods texto-color-2">
            <h1>2 - Fome Zero e Agricultura Sustentável</h1>
            <p>
SABE AQUELA SENSAÇÃO DE FALTA DE ENERGIA, DE FRAQUEZA, ÀS VEZES ATÉ DE DOR, PODEM SER CAUSADAS POR FALTA DE ALIMENTOS.<br/> 

PARA FICARMOS FORTES E SAUDÁVEIS, NOSSO CORPO PRECISA DE VITAMINAS, MINERAIS E NUTRIENTES QUE ESTÃO NAS FRUTAS, VERDURAS, LEGUMES, CARNES, OVOS, LEITE, PEIXES, ETC. IMAGINA UMA PESSOA FICAR VÁRIOS DIAS SEM COMER, OU COMENDO SÓ UM TIPO DE COMIDA?<br/>  

CADA UM DEVE FAZER A SUA PARTE E OS GOVERNOS PRECISAM CRIAR POLÍTICAS PARA PROMOVER A AGRICULTURA SUSTENTÁVEL, PROTEGENDO AS NOSSAS FLORESTAS E NASCENTES

            </p>
           </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-2" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


