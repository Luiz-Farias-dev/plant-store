import React from 'react';
import * as C from './styled';
import './style.css';

export default function Newsletter() {
  return (
    <C.Container>
      <C.Newsletter>
        <C.FirstTitle>
          Sua casa com as 
        </C.FirstTitle>
        <C.SecondTitle>
          melhores plantas
        </C.SecondTitle>
        <C.InputContainer>
          <C.Input type='text' placeholder='Insira seu e-mail'/>
          <C.Button>Enviar</C.Button>
        </C.InputContainer>
      </C.Newsletter>
    </C.Container>
  );
}
