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
            <li><a href="contato@contato.com.br">E-mail</a></li>
            <li><a href="https://github.com/marianapequeno">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/marianapequeno">Linkedin</a></li>
          </ul>
        </section>
        <section className="formulario">
          <h2>Envie sua mensagem</h2>
          <form name="contato">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome aqui"/>

            <label htmlFor="tel">Telefone</label>
            <input type="tel" id="tel" placeholder="Digite seu telefone"/>

            <label htmlFor="email">E-mail</label>
            <input type="email"id="email" placeholder="Digite seu e-mail"/>

            <label htmlFor="message">Mensagem</label>
            <textarea id="message" cols="30" rows="5"></textarea>
            <button type="enviar" className="btn">Enviar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Contato