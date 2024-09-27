
import Pesquisa from '../components/Pesquisa';
import styled from 'styled-components'; //Esse pacote utiliza componentes estilizados para simplificar o uso de CSS nos components.

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

document.title = 'AluraBooks'

export default Favoritos;