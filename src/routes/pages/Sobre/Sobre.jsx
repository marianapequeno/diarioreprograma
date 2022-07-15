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
          <p className="paragraph">Eu sou Mariana, estudante e tenho dois gatos, o Milk e a Pandora. Nascida em São Paulo, moro em Taboão da Serra.</p>
          <p className="paragraph">
            Aluna da Reprograma da turma front-end e tentando a transição de carreira.
          </p>
          <p className="paragraph">
            Cursei administração de empresas mas me interessei por programação e estudo desenvolvimento web, lógica de programação, Git, GitHub, HTML5, CSS3, JavaScript e React JS. Sou curiosa, questionadora e gosto de aprender.
          </p>
        </section>
      </main>
    </>
  )
}

export default Sobre