import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  width: 80vw;
  height:5em;
  img {
    align-self: center;
  }
`

export const LinksContainer = styled.div``

export const Links = styled.a`
  text-decoration: none;
  font-family: var(--main-font);
  color: black;
  padding: 0 0.5em 0 0.5em;
`