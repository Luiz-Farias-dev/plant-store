import React from 'react'
import Logo from '../../assets/svgs/casaVerdeLogo.svg?inline';
import * as C from './styled.jsx';

export default function Menu() {
  return (
    <C.Container>
      <C.Menu>
        <img src={Logo} alt='Logo da loja' />
        <C.LinksContainer>
          <C.Links>Como Fazer</C.Links>
          /
          <C.Links>Ofertas</C.Links>
          /
          <C.Links>Depoimentos</C.Links>
          /
          <C.Links>Vídeos</C.Links>
          /
          <C.Links>Meu carrinho</C.Links>
        </C.LinksContainer>
      </C.Menu>
    </C.Container>
  )
}
