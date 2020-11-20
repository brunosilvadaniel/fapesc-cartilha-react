import React from 'react'
import NavBar from '../Navbar/'
import Footer from '../Footer/'

import ods4 from '../../assets/resize-icons/ods4.png'
import ods6 from '../../assets/resize-icons/ods6.png'
import ods8 from '../../assets/resize-icons/ods8.png'
import ods9 from '../../assets/resize-icons/ods9.png'
import ods13 from '../../assets/resize-icons/ods13.png'
import ods17 from '../../assets/resize-icons/ods17.png'


import './index.css'

export default  function Sobre() {

  window.scrollTo(0, 0)
  return (
    <div>
      <NavBar/>
      <div className="Sobre">
        <h1>Você Sabia ?</h1>
        <div className="container-ods-mais">
          <img src={ods4}/>
        <h2>
          AS EMPRESAS MINERADORAS INVESTEM 1% DO SEU FATURAMENTO NA SATC. COM A SATC, O SETOR CARBONÍFERO OPORTUNIZA ENSINO DE QUALIDADE PARA PESSOAS DE BAIXA RENDA, ATRAVÉS DA DISPONIBILIZAÇÃO DE BOLSAS DE ESTUDO.
        </h2>
        </div>
        <div className="container-ods-mais">
          <img src={ods6}/>
        <h2>
          TODAS A ÁGUA UTILIZADA NO PROCESSO DE EXTRAÇÃO DE CARVÃO MINERAL PASSA POR UM A ESTAÇÃO DE TRATAMENTO DE EFLUENTES, QUE APÓS TRATADA PODE SER REUTILIZADA NO PROCESSO PRODUTIVO OU DESCARTADA NO MEIO AMBIENTE.
        </h2>
        </div>
        <div className="container-ods-mais">
          <img src={ods8}/>
        <h2>
        EM 2017 A INDÚSTRIA DO CARVÃO MINERAL NO BRASIL POSSUÍA 14 EMPRESAS EM OPERAÇÃO E EMPREGA, DIRETAMENTE, MAIS DE CINCO MIL PESSOAS. NOS ESTADOS DO RIO GRANDE DO SUL, SANTA CATARINA E PARANÁ, A CADEIA TERMELÉTRICA GERA EM TORNO DE 53 MIL EMPREGOS E MOVIMENTA CERCA DE R$ 12 BILHÕES POR ANO.
        </h2>
        </div>
        <div className="container-ods-mais">
          <img src={ods9}/>
        <h2>
        A FUNDAÇÃO DE AMPARO A PESQUISA DE SANTA CATARINA (FAPESC) TEM COMO MISSÃO PROMOVER O ECOSSISTEMA CATARINENSE DE CIÊNCIA, TECNOLOGIA E INOVAÇÃO POR MEIO DE FOMENTO E DA INTEGRAÇÃO DE SEUS AGENTES, OBJETIVANDO O AVANÇO DE TODAS AS ÁREAS DO CONHECIMENTO, O EQUILÍBRIO REGIONAL, O DESENVOLVIMENTO ECONÔMICO SUSTENTÁVEL E A MELHORIA DA QUALIDADE DE VIDA DO CIDADÃO CATARINENSE
        </h2>
        </div>
        <div className="container-ods-mais">
          <img src={ods13}/>
          <h2>
            O CRESCENTE DEBATE MUNDIAL SOBRE MUDANÇAS CLIMÁTICAS COLOCOU FORTE FOCO SOBRE O CARVÃO MINERAL E O SEU APROVEITAMENTO PARA A GERAÇÃO DE ENERGIA. <br/> <br/>
            CIENTE DA NECESSIDADE DE SE ADAPTAR ÀS NOVAS DEMANDAS AMBIENTAIS, DE DEMONSTRAR A SUA VIABILIDADE COMO FONTE SUSTENTÁVEL DE ENERGIA NOVAS TECNOLOGIAS ESTÃO SENDO ESTUDADAS, DENTRE ELAS A GASEIFICAÇÃO DE CARVÃO, CAPTURA E ARMAZENAMENTO DE CO2, INDÚSTRIA CARBOQUÍMICA, ENTRE OUTRAS.
          </h2>
        </div>
        <div className="container-ods-mais">
          <img src={ods17}/>
        <h2>
          AS PARCERIAS SÃO FUNDAMENTAIS PARA A DISSEMINAÇÃO DOS ODS. O MOVIMENTO NACIONAL ODS SANTA CATARINA TEM COMO MISSÃO FACILITAR A INCORPORAÇÃO DOS OBJETIVOS DO DESENVOLVIMENTO SUSTENTÁVEL NO DIA A DIA DAS PESSOAS E NA PRÁTICA DAS ORGANIZAÇÕES CATARINENSE. <br/>
          ESSE PROJETO É UMA FORMA DE DISSEMINAR OS ODS E SÓ FOI POSSÍVEL A SUA REALIZAÇÃO POR MEIO DE PARCERIA ENTRE A SATC E O MOVIMENTO NACIONAL ODS SC.

        </h2>
        </div>
  
      </div>
      <Footer/>

    </div>
  )
}
