import './header.css'

function Header(props) {
  return (
    <header className="header">
      <h1>{props.children}</h1>
      <img src={props.image} alt={props.description}/>
    </header>
  )
}

export default Header