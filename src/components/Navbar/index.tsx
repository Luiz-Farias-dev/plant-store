import Logo from '../../assets/logo.svg';
import './styles.scss';

export default function Navbar() {
  return (
    <header className='plant-header'>
     <img src={Logo} alt='logo' className='plant-logo' />
     <div className='plant-header-links'>
      <a href='#'>Como fazer</a>
      <span> / </span>
      <a href='#'>Ofertas</a>
      <span> / </span>
      <a href='#'>Depoimentos</a>
      <span> / </span>
      <a href='#'>Vídeos</a>
      <span> / </span>
      <a href='#'>Meu carrinho</a>
     </div>
    </header>
  )
}
