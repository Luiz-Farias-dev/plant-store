import React from 'react'
import Logo from '../../assets/svgs/casaVerdeLogo.svg?inline';
import './style.css';

export default function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu'>
        <img src={Logo} alt='Logo do site' className='menu-logo'/>
        <div className='menu-links-container'>
          <a className='menu-links' href='#'>Como Fazer</a>
          /
          <a className='menu-links' href='#'>Ofertas</a>
          /
          <a className='menu-links' href='#'>Depoimentos</a>
          /
          <a className='menu-links' href='#'>Vídeos</a>
          /
          <a className='menu-links' href='#'>Meu carrinho</a>
        </div>
      </div>
    </div>
  )
}
