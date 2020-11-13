import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'
import OdsIcon from '../../assets/resize-icons/ods12.png'

const number = 12

const firstTopic = ['•	REDUZA A QUANTIDADE DE LIXO QUE VOCÊ GERA.','•	SEPARE O LIXO PARA RECICLAGEM.','•	NÃO DESPERDICE COMIDA, ÁGUA E ENERGIA.','•	REUTILIZE POTES E GARRAFAS, VOCÊ PODE USAR PARA GUARDAR COISAS OU ATÉ MESMO COMO VASOS.','•	PENSE MUITO ANTES DE COMPRAR OU PEDIR PARA SEUS PAIS COMPRAR ALGO. PENSE SE VOCÊ REALMENTE PRECISA DISSO.','•	COMPARTILHE COM SEUS AMIGOS OS LIVROS QUE VOCÊ JÁ LEU OU OS BRINQUEDOS QUE JÁ NÃO QUER BRINCAR MAIS.','•	APROVEITE CASCAS DE FRUTAS E LEGUMES COMO ADUBO PARA AS PLANTAS']
const secondTopic = ['•	DOAR ALIMENTOS E REDUZIR O DESPERDÍCIO.','•	REDUZIR O USO DE EMBALAGENS.','•	REAPROVEITAR ALIMENTOS O MÁXIMO QUE FOR POSSÍVEL.','•	DESCARTAR OS RESÍDUOS DE FORMA CORRETA.','•	PROMOVER OFICINAS DE APROVEITAMENTO DE MATERIAIS PARA CONFECÇÃO DE ARTESANATO.','•	PARTICIPAR DE PROGRAMAS DE MOBILIZAÇÃO COLETIVA PARA ESTÍMULO À RECICLAGEM E REUTILIZAÇÃO DE MATERIAIS.','•	REALIZAR AÇÕES DE SENSIBILIZAÇÃO PARA A DIMINUIÇÃO DO CONSUMO E SEPARAÇÃO DE RESÍDUOS (3RS – REDUZIR, REUTILIZAR E RECICLAR).','•	IMPLANTAR A LOGÍSTICA REVERSA NAS EMPRESAS.','•	CONHECER E RESPEITAR O CÓDIGO DO CONSUMIDOR.','•	IMPLEMENTAR A COLETA SELETIVA NOS MUNICÍPIOS'] 
const thirdTopic = [] 
const fourthTopic = []

export default class Ods_12 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-12"/>
            <div className="texto-ods texto-color-12">
              <h1>12 - Consumo e Produção Responsaveis</h1>
              <p>  
                VOCÊ SABE O QUE É CONSUMO CONSCIENTE? <br/> <br/>
                É USAR TUDO O QUE PRECISAMOS SEM DESPERDIÇAR OU DE FORMA QUE NÃO PRODUZA MAIS LIXO. É CONSUMIR SOMENTE AQUILO QUE REALMENTE PRECISAMOS.<br/> <br/>
                ISSO É MUITO SÉRIO. SE AS PESSOAS NÃO MUDAREM URGENTEMENTE O SEU JEITO DE CONSUMIR AS COISAS, NO ANO DE 2050 VAMOS PRECISAR ARRANJAR MAIS 2 PLANETAS IGUALZINHOS AO NOSSO PARA CONTINUARMOS A TER ALIMENTOS, ÁGUA, ENERGIA, ROUPAS E TUDO MAIS QUE FOR PRECISO PARA A NOSSA VIDA.<br/> <br/>
                VOCÊ SABE QUE NÃO EXISTE MAIS DOIS PLANETAS, ENTÃO O QUE É PRECISO FAZER PARA ISSO NÃO ACONTECER? PODEMOS COMEÇAR USANDO OS 3 R’S: REDUZIR, REUTILIZAR E RECICLAR.<br/> <br/>
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog odsIcon={OdsIcon} number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-12" style={{ textDecoration: 'none' }}>Voltar para as ODS</Link>
          </div>
        </div>
    )
  }
}


