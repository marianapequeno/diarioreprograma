import { useState, useEffect } from 'react'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/list.svg'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import './comentarios.css'

function Comentarios() {
  const getLocalList = () => {
    let items = localStorage.getItem("list")
    if(items){
      return JSON.parse(localStorage.getItem("list"))
    }else{
      return []
    }
  }
  const [list, setList] = useState(getLocalList)
  const [newItem, setNewItem] = useState("")

  function handleCreateNewItem(){
    const item = {
      id: Math.random(),
      title: newItem,
    }

    if(item.title === ""){
      return 
    }
    
    setList([...list, item])
    setNewItem("")
  }

  function handleRemoveItem(id){
    const itemsFiltered = list.filter(item => item.id !== id)
    setList(itemsFiltered)
  }
  
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])


  return (
    <>
      <Header
        image={image}
        description="Ilustração Projeto"
      >
        Dicas, feedbacks e mensagens do coração
      </Header>

      <main className="list">
        <section>
          <div className="input-container">
            <input
              type="text"
              placeholder="Digite aqui"
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
            />

            <div className="add-container">
              <button 
                className="add-task" 
                type="sumit" 
                onClick={handleCreateNewItem}> 
                <FiPlus size={16} color="#ffffff" />
              </button>
            </div>

          </div>
        </section>

        <section>
          <ul className="list-items">
            {
              list.map(item => {
                return(
                  <li key={item.id}>
                    <div>
                      <p>{item.title}</p>
                    </div>
                    <button className="remove-task" type="button" onClick={() => {handleRemoveItem(item.id)}}>
                      <FiTrash2 size={16}/>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default Comentarios