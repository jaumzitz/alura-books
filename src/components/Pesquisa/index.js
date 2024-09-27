import Input from '../Input';
import styled from 'styled-components';
import { livros } from './dadosPesquisa';

//As chaves {} server para importar somente o useState, caso não utilizasse, seria importado tudo que tem disponível na dependência
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/livros';


const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {

    //[estado, funcaoParaSetarEstado]
    const [livrosPesquisados, setLivrosPesquisados]  = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
        }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>

            <Input
                placeholder="Qual sua próxima leitura?"
                onBlur={(event) => {
                    const textoDigitado = event.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa);
                    

                }}
            />

            { livrosPesquisados.map( livro => (
                 <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa