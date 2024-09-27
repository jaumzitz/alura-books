import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const Opcoes = styled.ul`
    display: flex;
`



  const textoOpcoes = [
    {
      label: 'CATEGORIAS',
      route: "/categorias"
    },
    {
      label: 'FAVORITOS',
      route: "/favoritos"
    },
    {
      label: 'MINHA ESTANTE',
      route: "/minhaestante"
    }
  ]  


function OpcoesHeader() {
    return (
        <Opcao>
          { 
            textoOpcoes.map((texto) => (
              <Link to={`${texto.route}`}><Opcoes><p>{texto.label}</p></Opcoes></Link>
            )) 
          }
        </Opcao>
    )
}

export default OpcoesHeader
