import React from 'react'
import './contato.css'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/contact.svg'

function Contato() {
  return (
    <>
      <Header
        image={image}
        description="Ilustração da página contato"
      >
        Fale com a gente
      </Header>
      <main className="container-contacts">
        <section className="contacts">
          <div>
            <h2>Contatos</h2>
          </div>
          <ul>
            <li><a href="mailto:contato@contato.com.br?subject=Contato" target="_blank" rel="external">E-mail</a></li>
            <li><a href="https://github.com/marianapequeno" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/marianapequeno" target="_blank">Linkedin</a></li>
          </ul>
        </section>
        <section className="formulario">
          <h2>Envie sua mensagem</h2>
          <form method="POST" action="/." name="contato"> 
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome aqui" required/>

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone"/>

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required/>

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

            <button type="enviar" className="btn">Enviar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Contato