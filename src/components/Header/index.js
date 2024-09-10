import './style.css'
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

function Header() {
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>        
            <IconesHeader></IconesHeader>
        
        </header>
    )
}

export default Header