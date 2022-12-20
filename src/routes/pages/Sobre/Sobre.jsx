import './sobre.css'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/blooming.svg'

function Sobre() {
  return (
    <>
      <Header 
        image={image} 
        description="Ilustração sobre mim"
      >
        Sobre
      </Header>
      <main className="introducting">
        {/* <img src={meme} alt="/> */}
        <section className="container-text">
          <h2 className="title-2">Prazer, Mariana</h2>
          <p className="paragraph">Eu sou Mariana, nasci e cresci em São Paulo, onde moro até hoje.</p>
          <p className="paragraph">
            Cursei administração de empresas mas me interessei por programação. Sou curiosa e questionadora.
          </p>
        </section>
      </main>
    </>
  )
}

export default Sobre
