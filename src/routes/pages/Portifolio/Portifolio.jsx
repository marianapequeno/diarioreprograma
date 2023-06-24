import React from 'react'
import './portifolio.css'
import axios from 'axios'
import Header from "../../componentes/Header/Header"
import image from "../../../assets/project.svg"
import list from '../../../dataList.js'

function Portifolio() {
  const [repos, setRepos] = React.useState([])
  const baseURL = "https://api.github.com/users/marianapequeno/repos"

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  return (
    <>
      <Header
        image={image}
        description="Ilustração Projeto"
      >
        Meus Projetos
      </Header>

      <main>
      <h2>4 projetos desenvolvidos no curso da <a href="https://reprograma.com.br/">reprograma</a> </h2>
        <section className="cartao-container">
          {list.map(projeto =>{
            return(
              <div className="cartao" key={projeto.id}>
                <h1>{projeto.name.replace(/-/g,' ')}</h1>
                <img src={projeto.image} alt={projeto.image}/>
                <p>{projeto.description}</p>
                <a href={projeto.html_url} className="enter-repo" target="_blank">Veja este repositório</a>
              </div>
            )
            })
          }
        </section>
        <h2>Todos os repositórios com atividades da Reprograma</h2>
        <section className="cartao-container">
          {
            repos.map(repo => {
              // console.log()
            if(repo.topics.includes("reprograma")) {
              return(
                <div className="cartao-other" key={repo.id}>
                  <h3>{repo.name.replace(/-/g,' ').replace(/_/g, ' ')}</h3>
                  <p>{repo.description}</p>
                  <a href={repo.html_url} target="_blank">Veja esse repositório</a>
                </div>
              )}
            })
          }
        </section>
      </main>
    </>
  )
}

export default Portifolio