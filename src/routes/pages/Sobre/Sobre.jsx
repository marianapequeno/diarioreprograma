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
      <main>
        Sobre
      </main>
    </>
  )
}

export default Sobre