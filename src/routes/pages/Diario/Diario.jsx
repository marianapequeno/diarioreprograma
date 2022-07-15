import React from 'react'
import './diario.css'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/diary.svg'
import fotogit from './images/fotogit.png'
import maonamassa from './images/maonamassa.png'
import fotoapi from './images/fotoapi.png'
import logoreactjs from './images/reactjs.png'

function Diario() {
  return (
    <>
      <Header
        image={image}
        description="Ilustração da página diário"
      >
        Meu diário da Reprograma
      </Header>
      <main className="main">
        <section className="container-cards">
          <section className="card">
            <h2>GIT</h2>
            <p>No começo aprender Git foi um desafio porque é um outro jeito de usar as funcionalidades do sistema já que estamos acostumados a interface UI, são muitos comandos possíveis para executar uma tarefa o que causa confusão, e também sentimos receio de apagar algum arquivo importante mas a reprograma ensina de uma forma bem didática o que facilitou muito o processo de aprendizado.</p>
            <img src={fotogit} alt="Logo do Git" />
          </section>
          <section className="card">
            <h2>MÃO NA MASSA</h2>
            <p>Um grande aprendizado na reprograma com certeza foi "coloque a mão na massa", quando decidimos começar a aprender desenvolvimento colocamos muito mais foco na teoria do que na prática, talvez por acreditar que não estamos prontos para criar projetos mesmo os menores. A teoria é importante mas a verdade é que a maioria das pessoas aprendem melhor quando praticam.</p>
            <img src={maonamassa} alt="Mulher programando" />
          </section>
          <section className="card">
            <h2>CONSUMIR APIS</h2>
            <p>Imaginei que chegar nessa fase seria algo muito mais distante e ao perceber que estava conseguindo retornar, manipular dados e consumindos APIs foi quando realmente senti que estava aprendendo JavaScript e pronta para dar um passo maior criando um projeto.</p>
            <img src={fotoapi} alt="Processo API" />
          </section>
          <section className="card">
            <h2>REACT JS</h2>
            <p>Este é um aprendizado recente porém o mais desafiador (ou porque talvez o conteúdo que estamos aprendendo no momento sempre seja o mais difícil rs), é como aprender HTML, CSS e JavaScript novamente devido a sintaxe do React, mas depois de alguns dias (e muito desespero rs) as coisas estão fluindo.</p>
            <img src={logoreactjs} alt="Logo React JS" />
          </section>
        </section>

        <p className="paragraph">E outras dezenas de aprendizados! A reprograma não ensina somente habilidades técnicas, é uma experiência de aprendizado constante em cada aula, cada interação com as outras alunas, mentoras e professoras.</p>
      </main>
    </>
  )
}

export default Diario