import React from 'react'
import NavBar from '../Navbar/'
import Footer from '../Footer/'


import './index.css'

export default  function Sobre() {

  window.scrollTo(0, 0)
  return (
    <div>
      <NavBar/>
      <div className="Sobre">
        <h1>Sobre Nos</h1>
        <h2>
          O projeto XXX está vinculado ao Termo de Outorga 2017TR1881 do Projeto de pesquisa associada a cadeira produtiva do Carvão Mineral – Fase 2: extração, beneficiamento, conversão e meio ambiente. 
          O projeto prevê concessão de bolsas de pesquisas para alunos do ensino médio, técnico e graduação da SATC e outras Instituições de ensino da bacia Carbonifera.
          Alinhado a temática ambiental, foi desenvolvido o projeto com o foco nos ODS, tomando como base a cartilha “17 formas de mudas o mundo” produzida pelo projeto “Educação de Crianças e Jovens para a Sustentabilidade”, desenvolvido pelo Bairro da Juventude, em parceria com o Movimento ODS Santa Catarina, que também são parceiros nesse projeto.
          O projeto está sendo desenvolvido pelo aluno Bruno da Silva Daniel, aluno do curso de Engenharia de Computação da SATC e orientado pelo professor Edson Mateus da Cruz, com o objetivo de XXXX
        </h2>
      </div>
      <Footer/>

    </div>
  )
}
