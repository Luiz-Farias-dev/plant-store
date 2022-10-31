import styled from 'styled-components';
import NewsletterPlant from '../../assets/images/newsletterPlant.png';
import EmailIcon from '../../assets/svgs/mail.svg';

export const Container = styled.div`
  width: 100%;
`

export const Newsletter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 75vw;
  height: 80vh;
  margin-left: 12em;
  background-image: url(${NewsletterPlant});
  background-repeat: no-repeat;
  background-position: right;
`

export const FirstTitle = styled.p`
  font-size: 22px;
  color: var(--gray);
  opacity: 0.5;
  margin-bottom: 1.5rem;
`

export const SecondTitle = styled.h1`
  font-family: var(--second-font);
  font-size: 82px;
  width: 23.5rem;
  margin-bottom: 1.5rem;
`

export const Content = styled.p`
  color: var(--gray);
  opacity: 0.5;
  width: 30em;
  margin-bottom: 1.5rem;
`

export const InputContainer = styled.div`
  width: 36.5rem;
  height: 4.5rem;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
  height: 4.5rem;
  width: 24.2rem;
  border: none;
  &::placeholder {
    background-image: url(${EmailIcon});
    background-repeat: no-repeat;
    background-position: 5%, 50%;
    font-family: var(--main-font);
    color: var(--gray);
    opacity: 0.3;
    padding-left: 3.5rem;
  }
`

export const Button = styled.button`
  border: none;
  color: var(--white);
  background-color: var(--yellow);
  height: 4.5rem;
  width: 12rem;
  cursor: pointer;
`