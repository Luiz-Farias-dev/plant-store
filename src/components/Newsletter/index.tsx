import React from 'react';
import './style.css';

export default function Newsletter() {
  return (
    <div className='newsletter-container'>
      <div className='newsletter'>
        <p className='newsletter-title-1'>
          Sua casa com as 
        </p>
        <h1 className='newsletter-title-2'>
          melhores plantas
        </h1>
        <p className='newsletter-content'>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
          Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
        <div className='newsletter-input-container'>
          <input type='text' placeholder='Insira seu e-mail' className='newsletter-input'/> 
          <button className='newsletter-button'> Enviar</button>
        </div>
      </div>
     
    </div>
  )
}
