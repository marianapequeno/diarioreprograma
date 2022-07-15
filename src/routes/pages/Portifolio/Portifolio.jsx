import React from 'react'
import './portifolio.css'
import axios from 'axios'
import Header from "../../componentes/Header/Header"
import image from "../../../assets/project.svg"
import mdemaravilhosa from './imgs-main-repos/m-de-maravilhosa.png'
import meudiarioreprograma from './imgs-main-repos/meu-diario-reprograma.png'
import series from './imgs-main-repos/series-protagonizadas-por-mulheres-trans.png'
import todolist from './imgs-main-repos/to-do-list.png'

function Portifolio() {
  const [repos, setRepos] = React.useState([])
  const baseURL = "https://api.github.com/users/marianapequeno/repos"

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  const list = [
    {
      id: 486780962,
      name: "mdemaravilhosa",
      description: "Projeto M de Maravilhosa - Desenvolvido no curso da Reprograma",
      topics: [
        "css3",
        "flexbox-css",
        "html5",
        "responsive-web-design"
      ],
      html_url: "https://github.com/marianapequeno/mdemaravilhosa",
      image: mdemaravilhosa,
    },
  
    {
      id: 495512963,
      name: "projetotodolist",
      description: "Projeto To do list para {reprograma} - Feito com HTML, CSS E JAVASCRIPT",
      topics: [
        "css3",
        "html5",
        "javascript",
      ],
      html_url: "https://github.com/marianapequeno/projetotodolist",
      image: todolist,
    },
  
    {
      id: 509528659,
      name: "series-protagonizadas-por-mulheres-trans",
      description: "Atividade {reprograma} semana 10 JavaScript III",
      topics: [
        "css3",
        "html5",
        "javascript",
        "json",
        "responsive-web-design",
      ],
      html_url: "https://github.com/marianapequeno/series-protagonizadas-por-mulheres-trans",
      image: series,
    },
  
    {
      id: 509158383,
      name: "entrega-reactI",
      description: "Atividade feita no curso da Reprograma para treinar ReactJS - Semana 14",
      topics: [
        "css3",
        "html5",
        "javascript",
        "reactjs"
      ],
      html_url: "https://github.com/marianapequeno/entrega-reactI",
      image: meudiarioreprograma,
    },
  ]

  return (
    <>
      <Header
        image={image}
        description="Ilustração Projeto"
      >
        Meus Projetos
      </Header>

      <main>
        <section className="cartao-container">
          {list.map(projeto =>{
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.name}</h1>
                <img src={projeto.image} alt={projeto.image}/>
                <p>{projeto.description}</p>
                <a href={projeto.html_url} className="enter-repo" target="_blank">Veja este repositório</a>
              </div>
            )
            })
          }
        </section>
        <section className="cartao-container">
          {
            repos.map(repo => {
              return(
                <div className="cartao-other" key={repo.id}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <a href={repo.html_url} target="_blank">Veja esse repositório</a>
                </div>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default Portifolio