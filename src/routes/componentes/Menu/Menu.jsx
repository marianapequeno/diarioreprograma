import { Link } from 'react-router-dom'
import './menu.css'

function Menu(){
  return (
    <nav>
      <ul className="menu">
        <li className="item"><Link className="link" to="/">Sobre</Link></li>
        <li className="item"><Link className="link" to="/portifolio">Portifólio</Link></li>
        <li className="item"><Link className="link" to="/diario">Diario</Link></li>
        <li className="item"><Link className="link" to="/comentarios">Comentários</Link></li>
        <li className="item"><Link className="link" to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Menu