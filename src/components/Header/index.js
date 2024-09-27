import { Link } from "react-router-dom";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from 'styled-components';

const HeaderContainer = styled.header`
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #b3b3b3 

`


function Header() {
    return (
        <HeaderContainer>
            <Link to="/"><Logo/></Link>
            
            <OpcoesHeader></OpcoesHeader>        
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )
}

export default Header