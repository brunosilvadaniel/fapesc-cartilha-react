import React, { Component } from 'react'
import "./index.css"


export default class Footer extends Component{
  render(){
    let width = window.innerWidth;
    if (width> 1200){
    return(
      <>
        <div className="extras-footer">
          <div className="extras-container">
            <div >
              <h1>VOCÊ SABE O QUE É A ONU?</h1>
              <p>EM 1945, LOGO APÓS O FIM DA 2ª GUERRA MUNDIAL, VÁRIOS

PAÍSES SE REUNIRAM VOLUNTARIAMENTE – O BRASIL FOI UM DELES – E DECIDIRAM CRIAR A ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU) COM O OBJETIVO DE LUTAR PELA PAZ E O DESENVOLVIMENTO MUNDIAIS.</p>
            </div>
            <div >
              <h1>VOCÊ SABE O QUE É DESENVOLVIMENTO?</h1>
              <p>ENTENDEMOS DESENVOLVIMENTO COMO A CONDIÇÃO DE

CRESCIMENTO, EVOLUÇÃO OU MUDANÇA DE PESSOAS, OBJETOS OU SITUAÇÕES. PODE SER O DESENVOLVIMENTO HUMANO, ECONÔMICO, RURAL, SUSTENTÁVEL, ETC.</p>
            </div>
            <div >
              <h1>E DESENVOLVIMENTO SUSTENTÁVEL, VOCÊ SABE?</h1>
              <p>É O DESENVOLVIMENTO QUE SE PREOCUPA COM A

SOBREVIVÊNCIA DA NOSSA GERAÇÃO E DAS GERAÇÕES FUTURAS. OU SEJA, É O DESENVOLVIMENTO QUE GARANTE QUE TODAS AS PESSOAS QUE VIVEM AGORA, E AS QUE VIVERÃO DAQUI A VÁRIOS ANOS, POSSAM SUPRIR SUAS NECESSIDADES SEM ESGOTAR OS RECURSOS DO PLANETA.</p>
            </div>
            <div >
              <h1>O QUE SÃO OS ODS</h1>
              <p>NO ANO DE 2015, DEPOIS DE UMA GRANDE PESQUISA OUVINDO PESSOAS DE TODOS OS CANTOS DO PLANETA,

SOBRE O QUE ELAS ACREDITAVAM QUE DEVERIA ACONTECER PARA QUE TODAS AS PESSOAS PUDESSEM VIVER BEM E FELIZES, LÍDERES DE VÁRIOS PAÍSES SE

REUNIRAM NA SEDE DA ORGANIZAÇÃO DAS NAÇÕES UNIDAS E IDENTIFICARAM 17 OBJETIVOS COMO OS MAIS IMPORTANTES PARA AJUDAR A CONSTRUIR UM MUNDO

MELHOR PARA TODOS NÓS E PARA SALVAR O PLANETA.</p>
            </div>
          </div>
        </div> 
      </>
    )
  }else{
    return(
    <>
        <div className="extras-footer">
          <div className="extras-container-mobile">
            <div >
              <h1>VOCÊ SABE O QUE É A ONU?</h1>
              <p>EM 1945, LOGO APÓS O FIM DA 2ª GUERRA MUNDIAL, VÁRIOS

PAÍSES SE REUNIRAM VOLUNTARIAMENTE – O BRASIL FOI UM DELES – E DECIDIRAM CRIAR A ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU) COM O OBJETIVO DE LUTAR PELA PAZ E O DESENVOLVIMENTO MUNDIAIS.</p>
            </div>
            <div >
              <h1>VOCÊ SABE O QUE É DESENVOLVIMENTO?</h1>
              <p>ENTENDEMOS DESENVOLVIMENTO COMO A CONDIÇÃO DE

CRESCIMENTO, EVOLUÇÃO OU MUDANÇA DE PESSOAS, OBJETOS OU SITUAÇÕES. PODE SER O DESENVOLVIMENTO HUMANO, ECONÔMICO, RURAL, SUSTENTÁVEL, ETC.</p>
            </div>
            <div >
              <h1>E DESENVOLVIMENTO SUSTENTÁVEL, VOCÊ SABE?</h1>
              <p>É O DESENVOLVIMENTO QUE SE PREOCUPA COM A

SOBREVIVÊNCIA DA NOSSA GERAÇÃO E DAS GERAÇÕES FUTURAS. OU SEJA, É O DESENVOLVIMENTO QUE GARANTE QUE TODAS AS PESSOAS QUE VIVEM AGORA, E AS QUE VIVERÃO DAQUI A VÁRIOS ANOS, POSSAM SUPRIR SUAS NECESSIDADES SEM ESGOTAR OS RECURSOS DO PLANETA.</p>
            </div>
            <div >
              <h1>O QUE SÃO OS ODS</h1>
              <p>NO ANO DE 2015, DEPOIS DE UMA GRANDE PESQUISA OUVINDO PESSOAS DE TODOS OS CANTOS DO PLANETA,

SOBRE O QUE ELAS ACREDITAVAM QUE DEVERIA ACONTECER PARA QUE TODAS AS PESSOAS PUDESSEM VIVER BEM E FELIZES, LÍDERES DE VÁRIOS PAÍSES SE

REUNIRAM NA SEDE DA ORGANIZAÇÃO DAS NAÇÕES UNIDAS E IDENTIFICARAM 17 OBJETIVOS COMO OS MAIS IMPORTANTES PARA AJUDAR A CONSTRUIR UM MUNDO

MELHOR PARA TODOS NÓS E PARA SALVAR O PLANETA.</p>
            </div>
          </div>
        </div> 
      </>)

  }}
}
