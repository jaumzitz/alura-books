
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';
import styled from 'styled-components'; //Esse pacote utiliza componentes estilizados para simplificar o uso de CSS nos components.

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

document.title = 'AluraBooks'

export default Home;