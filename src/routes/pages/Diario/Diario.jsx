import React from 'react'
import './diario.css'
import Header from '../../componentes/Header/Header'
import image from '../../../assets/diary.svg'

function Diario() {
  return (
    <>
      <Header
        image={image}
        description="Ilustração da página diário"
      >
        Diário
      </Header>
    </>
  )
}

export default Diario