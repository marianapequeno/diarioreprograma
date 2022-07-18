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
        Fale comigo
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
          <form 
            action="https://docs.google.com/forms/d/e/1FAIpQLSeerfOmZ-cpvId0rA-gb6seOd_ddNM53Sxh9kFdQWzD6ioAxQ/formResponse" 
            name="contato" 
            id="contato"
          > 
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="entry.1350659494" placeholder="Digite seu nome aqui" required/>

            <label htmlFor="telefone">Num do WhatsApp</label>
            <input type="tel" id="telefone" name="entry.818521662" placeholder="Digite número do WhatsApp aqui"/>

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="entry.2059690547" placeholder="Digite seu e-mail aqui" required/>

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="entry.1785551697" rows="5" placeholder="Digite sua mensagem aqui" required></textarea>

            <button type="submit" className="btn">Enviar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Contato