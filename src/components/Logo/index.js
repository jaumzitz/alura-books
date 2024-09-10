import logo from '../../images/logo.svg';
import './style.css';

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} 
               alt='Logo da Alura Books'
               className='logo-img'>
            </img>
          <p><strong>Alura</strong>Book</p>
        </div>
    )
}

export default Logo;