import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import AlertDialog from './Dialog'

const number = 11

const firstTopic = ['Participar de conselhos de segurança nas Cidades','Proteger o patrimônio cultural do município (igreja, monumentos e outros)','Reduzir o uso de automóvel, pegar carona solidária, bicicleta e outros meios de transportes','Promover a criação ou a manutenção das associações de bairros']
const secondTopic = ['Realizar campanhas sobre trânsito seguro nas escolas e universidades','Apoiar iniciativas na implementação de práticas ambientais ustentáveis','Disseminar o Estatuto das Cidades e o Plano Diretor do município','Adotar os Princípios da Educação Empresarial Responsável - PRME']
const thirdTopic = ['Comprar a matéria prima de locais mais próximos da planta industrial','Instalar novas unidades da empresa em municípios de baixo IDH']
const fourthTopic = ['Aumentar a acessibilidade dos idosos aos equipamentos públicos','Promover a cidadania nas comunidades','Aumentar a destinação de impostos para projetos sociais','Desenvolver projetos visando a regularização fundiária','Melhorar a infraestrutura das regiões metropolitanas','Estrutara programas que mantenham o homem no campo','Estimular o uso de aplicativos como whatsApp para mapear os locais de maior ocorrência de acidentes de trânsito, de assltos e outros']

export default class Ods_11 extends Component {
  render() {
    return (
        <div className="envolve-main">
          <div className="envolve-ods">
            <div className="ods-grande angulo-11"/>
            <div className="texto-ods texto-color-11">
              <h1>11 - Cidades e Comunidades Sustentáveis</h1>
              <p>Para que as cidades sejam sustentáveis, a agenda 2030 defende que as pessoas vivam em lugares seguros e com acesso a serviços básicos, no mínimo!
              As cidades precisam ter praças e parques para que todos possam se divertir e ter abastecimento de água e energia em todas as casas. De preferência energias de fontes renováveis. Coleta de lixo e tratamento do esgoto também são fundamentais.
              Precisam ter  transporte seguro e que não polua o meio ambiente. Ter espaços para bicicletas e patinetes é uma excelente ideia!
              É muito importante também preservar a história da cidade, seus monumentos, sua cultura e folclore. Sem esquecer de preservar os recursos naturais. As cidades sustentáveis tem muito verde para todos os lados, que ajuda a despoluir o ar.
              </p>
              </div>
          </div>
          <div className="envolve-button-ods">
          <AlertDialog  number={number} firstTopic={firstTopic} secondTopic={secondTopic} thirdTopic={thirdTopic} fourthTopic={fourthTopic} />
            <Link to="/Home" className="button-ods button-color-11" style={{ textDecoration: 'none' }}>Voltar para os balões</Link>
          </div>
        </div>
    )
  }
}


