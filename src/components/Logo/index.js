import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
display: flex;
font-size: 30px;
text-decoration: none;
`

const LogoImg = styled.img`
margin-right: 10px
`

function Logo() {
    return (
        <LogoContainer>
          <LogoImg src={logo} alt='Logo da Alura Books'/>
          <p><strong>Alura</strong>Book</p>
        </LogoContainer>
    )
}

export default Logo;