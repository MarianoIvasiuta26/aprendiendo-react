import styled from "styled-components";

export const Titulo = styled.h1`
    font-size: 3.5em;
    color: ${(props) => props.colortitulo};
    text-align:center;
`
export const Contenedor = styled.div`
    border-left: 3px solid grey;
    border-bottom: 3px solid black;
    height: 350px;
    width: 50%;
    padding-top: 30px;
    justify-content: center;
    margin-left: 25%;
    margin-right: 25%;
`

export const Grafico = styled.div`
    border-top: 1px dashed black;
    height: 300px;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`

export const Barra = styled.div`
    background-color: ${(props) => props.fondobarra};
    height: ${(props)=> props.alturabarra}px;
    width: 80px;
    margin-left: 20px;
`